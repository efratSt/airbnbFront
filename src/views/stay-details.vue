<template>
  <div class="stay-details-container container">
    <div class="stay-details flex align-center">
      <div class="stay-info">
        <h2>{{ stay.summary }}</h2>
        <h4>{{ stay.loc.city }},{{ stay.loc.country }}</h4>
        <!-- add map links later -->
        <span><button></button> Share</span>
        <span><button></button> Save</span>
        <div class="img-container grid">
          <img :src="stay.imgUrls[0]" alt="stay-img" />
        </div>
        <section class="stay-host-details">
          <h3>
            {{ stay.type }} hosted by {{ stay.host.fullname }} - {{ stay.name }}
          </h3>
          <h5> {{stay.capacity}} guests</h5>
        </section>
        <section class="stay-amenities container">
          <h3>What this place offers</h3>
          <ul class="stay-amenities clean-list grid">
            <li
              class="stay-amenity"
              v-for="(amenity, idx) in stay.amenities"
              :key="idx"
              :class="amenity"
            >
              {{ amenity }}
            </li>
          </ul>
          <button v-if="(stay.amenities.length > 10)">Show all {{stay.amenities.length}} amenities</button>
        </section>
      </div>
    </div>
    <Date-picker v-model="range" is-range/>
  <Date-picker v-model="range" is-range/>
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
      start: new Date(2020, 0, 6),
      end: new Date(),
    }
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
