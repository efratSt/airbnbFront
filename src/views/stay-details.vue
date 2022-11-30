<template>
  <div v-if="stay" class="stay-details-container">
    <div class="stay-details flex align-center">
      <div class="stay-info">
        <h2>{{ stay.summary }}</h2>
        <div class="stay-secondary header flex align-center space-between">
          <div class="stay-secondary header location">
            <h4>{{ stay.loc.city }},{{ stay.loc.country }}</h4>
          </div>
          <!-- add map links later -->
          <div class="stay-secondary header buttons-container flex">
            <button class="stay-secondary header button">
              <i class="fa-solid fa-arrow-up-from-bracket"></i> Share
            </button>
            <button class="stay-secondary header button">
              <i class="fa-regular fa-heart" :class="[{ 'fa-solid saved' : isSaved  }]" @click="toggleSaved"></i> Save
            </button>
          </div>
        </div>
        <div class="img-container ">
            <img  v-for="(image, idx) in stay.imgUrls.slice(0, 5)" :key="idx"
            :src="image" alt="stay-img" :class="`grid-item img-${idx+1}`" />
          
        </div>
        <section class="stay-host-details">
          <h2>
            {{ stay.type }} hosted by {{ stay.host.fullname }} - {{ stay.name }}
          </h2>

          <ol class="clean-list flex align-center">
            <li>
              <span>{{ stay.capacity }} guests</span>
            </li>
            <li>
              <span> ·</span>
              <span>{{ stay.bedrooms }} bedrooms</span>
            </li>
            <li>
              <span> ·</span><span>{{ stay.beds }} beds </span>
            </li>
            <li>
              <span> ·</span>
              <span>{{ stay.bathrooms }} bathrooms</span>
            </li>
          </ol>
        </section>
        <section class="stay-amenities container">
          <h3>What this place offers</h3>
          <ul class="stay-amenities-list clean-list">
            <li
              class="stay-amenity"
              v-for="(amenity, idx) in stay.amenities"
              :key="idx"
              :class="amenity"
            >
              {{ amenity }}
            </li>
          </ul>
          <button v-if="stay.amenities.length > 10">
            Show all {{ stay.amenities.length }} amenities
          </button>
        </section>
      </div>
    </div>
    <Date-picker v-model="range" is-range :columns="2" color="gray" />
    <div class="stay-chosen-dates">
      <span>{{ date(range.start) }} </span> <span>{{ date(range.end) }}</span>
    </div>
    <div class="review-container">
      <div class="review-add flex">
        <input type="text" v-model="review" placeholder="Write your review" />
        <button @click="addReview" class="btn">Save</button>
      </div>
      <details v-if="reviews" class="review-list">
        <summary>Reviews</summary>
        <div v-for="review in reviews" :key="review._id" class="review-preview">
          <h4>By {{ review.user.username }}</h4>
          <p>{{ review.content }}</p>
        </div>
      </details>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        stay: null,
        review: '',
        range: {
          start: new Date(),
          end: new Date(),
        },
        isSaved: false,
      }
    },
    computed: {
      stayAvailability() {
        return this.stay.Availability
          ? 'These dates are available'
          : 'Stay is not available in these dates'
      },

      reviews() {
        return this.$store.getters.getReviews
        // return null
      },
    },
    created() {
      var stayId = this.$route.params.id
      this.getStayById(stayId)
      //   this.getReviews(stayId)
    },
    methods: {
      toggleSaved(){
        console.log(this.isSaved)
        this.isSaved = !this.isSaved
        return this.isSaved
      },
      async getStayById(stayId) {
        this.stay = await this.$store.dispatch({
          type: 'getStayById',
          stayId,
        })
      },
      async getReviews(stayId) {
        await this.$store.dispatch({
          type: 'getReviews',
          filterBy: { stayId },
        })
      },
      async addReview() {
        await this.$store.dispatch({
          type: 'addReview',
          stayId: this.stay._id,
          content: this.review,
        })
        this.review = ''
        this.getReviews(this.stay._id)
        // this.getStayById(this.stay._id);
      },
      date(date) {
        return new Date(date).toLocaleDateString()
      },
    },
  }
</script>
