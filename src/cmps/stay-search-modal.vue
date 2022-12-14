<template>
  <section class="search-modal" v-if="isModalOpen">
    <div class="search-container-big">
      <div class="search-line">
        <div
          ref="focusMe"
          @click="searchOpen"
          class="where search-line-btn"
          tabindex="1">
          <p>Where</p>
          <input
            type="text"
            placeholder="Search destination"
            v-model="filterBy.location" />
          <div v-if="isSearchOpen" class="search-text-modal">
            <h3>Recent searches</h3>
            <div class="search-wrapper">
              <div class="recent-container">
                <div class="recent-loc" @click.stop="searchRecent('Hong Kong')">
                  <i class="fa-solid fa-location-dot"></i>
                  <span>Hong Kong</span>
                </div>
                <div class="recent-loc" @click.stop="searchRecent('Canada')">
                  <i class="fa-solid fa-location-dot"></i>
                  <span>Canada</span>
                </div>
                <div class="recent-loc" @click.stop="searchRecent('Portugal')">
                  <i class="fa-solid fa-location-dot"></i>
                  <span>Portugal</span>
                </div>
                <div class="recent-loc" @click.stop="searchRecent('Turkey')">
                  <i class="fa-solid fa-location-dot"></i>
                  <span>Turkey</span>
                </div>
                <div class="recent-loc" @click.stop="searchRecent('Australia')">
                  <i class="fa-solid fa-location-dot"></i>
                  <span>Australia</span>
                </div>
              </div>
              <div class="search-img-container">
                <div @click.stop="flexSearch('Australia')" class="img-wrapper">
                  <img
                    src="https://res.cloudinary.com/ddhr06j1v/image/upload/v1670854691/flex_bsjdqq.jpg"
                    alt="flex" />
                  <span>I'm flexible</span>
                </div>
                <div
                  @click.stop="flexSearch('United States')"
                  class="img-wrapper">
                  <img
                    src="https://res.cloudinary.com/ddhr06j1v/image/upload/v1670854714/us_civdvk.webp"
                    alt="us" />
                  <span>United States</span>
                </div>
                <div
                  @click.stop="flexSearch('South America')"
                  class="img-wrapper">
                  <img
                    src="https://res.cloudinary.com/ddhr06j1v/image/upload/v1670854705/sa_h0wynp.webp"
                    alt="sa" />
                  <span>South America</span>
                </div>
                <div @click.stop="flexSearch('Europe')" class="img-wrapper">
                  <img
                    src="https://res.cloudinary.com/ddhr06j1v/image/upload/v1670854680/eu_ggxpah.webp"
                    alt="eu" />
                  <span>Europe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="break-point"></div>
        <div @click="calOpen" class="check-in search-line-btn" tabindex="2">
          <p>Check in</p>
          <span>{{ date(filterBy.range.start) }}</span>
        </div>
        <div class="break-point"></div>
        <div @click="calOpen" class="check-out search-line-btn" tabindex="3">
          <p>Check out</p>
          <span>{{ date(filterBy.range.end) }}</span>
        </div>
        <div class="break-point"></div>
        <div class="last-search">
          <div @click="guestOpen" class="who search-line-btn" tabindex="4">
            <p>Who</p>
            <span>{{ guests }} guests</span>
          </div>
          <div @click="searchStay" class="search-btn">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style="
                display: block;
                fill: none;
                height: 16px;
                width: 16px;
                stroke: currentcolor;
                stroke-width: 5.33333;
                overflow: visible;
              ">
              <g fill="none">
                <path
                  d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
              </g>
            </svg>
          </div>
        </div>
        <stay-guests-modal
          v-if="isGuestOpen"
          @counterChanged="counterChanged" />
      </div>
      <Date-picker
        class="calender-search"
        v-if="isCalOpen"
        v-model="filterBy.range"
        is-range
        :columns="2"
        color="gray" />
    </div>
  </section>
</template>

<script>
  import stayGuestsModal from './stay-guests-modal.vue'
  export default {
    data() {
      return {
        isGuestOpen: false,
        isCalOpen: false,
        isSearchOpen: true,
        isModalOpen: true,
        totalGuests: 1,
        filterBy: {
          range: {
            start: null,
            end: null,
          },
          location: '',
          guests: 1,
          label: '',
        },
      }
    },

    mounted() {
      this.$refs.focusMe.focus()
    },

    methods: {
      date(date) {
        return date ? new Date(date).toLocaleDateString() : 'Add dates'
      },
      getDate(date) {},
      calOpen() {
        this.isCalOpen = true
        this.isGuestOpen = false
        this.isSearchOpen = false
      },

      guestOpen() {
        this.isGuestOpen = !this.isGuestOpen
        this.isCalOpen = false
        this.isSearchOpen = false
      },

      searchOpen() {
        this.isSearchOpen = true
        this.isGuestOpen = false
        this.isCalOpen = false
      },

      counterChanged(totalGuests) {
        this.totalGuests = totalGuests
        this.filterBy.guests = totalGuests
      },

      searchRecent(location) {
        this.filterBy.location = location
        this.isSearchOpen = false
      },

      flexSearch(location) {
        this.filterBy.location = location
        this.isSearchOpen = false
      },

      searchStay() {
        this.$emit('closeScreen')
        this.$store.commit({
          type: 'setFilterBy',
          filterBy: { ...this.filterBy },
        })

        this.isSearchOpen = false
        this.isGuestOpen = false
        this.isCalOpen = false
        this.isModalOpen = false

        const queryStringParams = `?rangeStart=${new Date(
          this.filterBy.range.start
        ).toLocaleDateString()}&rangeEnd=${new Date(
          this.filterBy.range.end
        ).toLocaleDateString()}&location=${this.filterBy.location}&guests=${
          this.filterBy.guests
        }`
        if (this.filterBy.location) {
          this.$router.params = queryStringParams
          this.$router.push('/explore/' + queryStringParams)
          // }
          // else {
          //     this.$router.push('/')
        }
      },
    },

    unmounted() {
      this.$emit('updateLoc', this.filterBy.location)
    },

    computed: {
      guests() {
        return !this.totalGuests ? 'Add' : this.totalGuests
      },
    },

    components: {
      stayGuestsModal,
    },
  }
</script>
