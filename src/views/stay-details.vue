<template>
  <div class="stay-details-container container" v-if="stay">
    <div class="stay-details flex align-center">
      <div class="stay-info">
        <h2>{{ stay.name }}</h2>
        <h3>Price: ${{ stay.price }}</h3>
        <h3>Type: {{ stay.type }}</h3>
        <h3>{{ stayAvailability }}</h3>
        <h4>Hosting Since: {{ date }}</h4>
      </div>
      <div class="img-container grid">
        <img v-if="stay.imgUrls" :src="stay.imgUrl[0]" alt="stay-img" />
        <img
          v-else
          src="https://www.fancypantshomes.com/wp-content/uploads/2022/01/the-real-hobbit-house-in-new-zealand.jpg"
          alt="image placeholder"
        />
      </div>
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
      }
    },
    computed: {
      stayAvailability() {
        return this.stay.Availability
          ? 'These dates are available'
          : 'Stay is not available in these dates'
      },
      date() {
        return new Date(this.stay.createdAt).toLocaleDateString()
      },
      reviews() {
        return this.$store.getters.getReviews
        // return null
      },
    },
    created() {
      var stayId = this.$route.params.id
      this.getStayById(stayId)
      this.getReviews(stayId)
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
    },
  }
</script>
