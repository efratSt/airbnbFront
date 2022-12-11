<template>
  <div>
    <div class="button-container">
      <button @click="$emit('toggleReviews')" class="close-amenities-modal">
        <svg
          class="close-amenities-modal svg"
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
            stroke-width: 3;
            overflow: visible;
          ">
          <path d="m6 6 20 20"></path>
          <path d="m26 6-20 20"></path>
        </svg>
      </button>
    </div>
    <h2>
        <div class="reviews-header container flex">
            <div class="flex">
                <div>
                    <i class="fa-solid fa-star reviews"></i>
                </div>
                <div>
                    <p>{{ stayRate }}</p>
                </div>
                    <p> &nbsp&#183&nbsp </p>
                    <p><span class="details-reviews">
                    <a href="#">{{ reviews.length }} reviews</a>
                    </span></p>
                </div>
            </div>
        </h2>
    <div class="review-list">
      <div
        class="review-preview"
        v-for="review in reviews.slice(0, reviews.length)"
        :key="review._id">
        <div class="review-title flex align-center">
          <img class="review-user-img" :src="review.by.imgUrl" alt="" />
          <div class="review-title content flex">
            <span class="review-user-name"> {{ review.by.fullname }}</span>
            <span class="review-user-date">{{ reviewDate(review.at) }}</span>
          </div>
        </div>
        <p class="review-content">{{ review.txt }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      reviews: Array,
    },
    data() {
      return {}
    },
    methods :{
        reviewDate(date1) {
        const date = new Date(date1)
        const month = date.toLocaleString('default', { month: 'long' })
        const [day, year] = [     
        date.getDate(),
         date.getFullYear(),
         ]
        return  month + ' ' + year
        }
    },
    computed: {
        stayRate() {
            let rateSum = 0
            this.reviews.forEach(review => {
                rateSum += review.rate
            })
            return (rateSum / this.reviews.length).toFixed(2)
        },
  }
}
</script>
