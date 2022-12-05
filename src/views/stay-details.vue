<template>
    <div v-if="stay" class="stay-details-container">
        <div class="stay-details">       
            <div class="stay-details-summary">
                <div class="stay-header">
                    <h2>{{ stay.name }}</h2>
                </div>    
                <div class="stay-secondary-header flex align-center space-between">
                    <div class="stay-secondary-header location">
                        <span class="stay-rate"><i class="fa-solid fa-star"></i>{{ stayRate }}</span>
                        <span>&nbsp&#183 </span>
                        <span class="reviews">
                            <a href="#">
                                {{ stay.reviews.length }} reviews</a>   
                        </span>&nbsp&#183
                        <a href="#"><h4>{{ stay.loc.city }},{{ stay.loc.country }}</h4></a>
                    </div>
                    <!-- add map links later -->
                    <div class="stay-secondary header buttons-container flex">
                        <button class="stay-secondary header button">
                        <i class="fa-solid fa-arrow-up-from-bracket"></i> Share
                        </button>
                        <button class="stay-secondary header button">
                            <i
                            class="fa-regular fa-heart"
                            :class="[{ 'fa-solid saved': isSaved }]"
                            @click="toggleSaved"
                            ></i>
                            Save
                        </button>
                    </div>
                </div>
            </div>
            <div class="img-container">
          <img
            v-for="(image, idx) in stay.imgUrls.slice(0, 5)"
            :key="idx"
            :src="image"
            alt="stay-img"
            :class="`grid-item img-${idx + 1}`"
          />
            </div>
        </div>
        <div class="stay-details-extra flex space-between">
            <div>
                <section class="stay-details host">
                    <div class="host-header flex space-between">
                        <div>
                            <h2>
                            {{ stay.roomType }} hosted by {{ stay.host.fullname }} 
                            </h2>
                            <ol class="clean-list flex align-center">
                                <li>
                                    <span>{{ stay.capacity }} guests</span>
                                </li>
                                <li>
                                    <span>&nbsp&#183&nbsp</span>
                                    <span>{{ stay.bedrooms }} bedrooms</span>
                                </li>
                                <li>
                                    <span>&nbsp&#183&nbsp</span><span>{{ stay.capacity/2 }} beds </span>
                                </li>
                                <li>
                                    <span>&nbsp&#183&nbsp</span>
                                    <span>{{ stay.bathrooms }} bath</span>
                                </li>
                            </ol>
                        </div>  
                        <img :src="stay.host.thumbnailUrl" onerror="src='https://ca.slack-edge.com/T03PU4YR4NS-U040G1HDV34-37fee1583827-512'" alt="host image" class="host-img">
                    </div>
                </section>
                <section class="stay-details-summary">
                <p class="stay-details-summary content">{{stay.summary}}</p></section>
                <div class="stay-details-main flex space-between">
                <section class="stay-amenities-container">
                    <h2>What this place offers</h2>
                    <ul class="stay-amenities-list clean-list">
                    <li 
                        class="stay-amenity flex align-center"
                        v-for="(amenity, idx) in stay.amenities.slice(0,10)"
                        :key="idx"
                        :class="amenity"> 
                    <object class="amenity-icon" :data="this.getSource(amenity)" width="24" height="24"></object>
                        {{ amenity }}
                    </li>
                    </ul>
                    <button class="amenity-button" v-if="stay.amenities.length > 10">
                    Show all {{ stay.amenities.length }} amenities
                    </button>
                </section>
            </div>
        </div>
        <stayReservation :stay="stay" :range="range"/>
        </div>
        <div class="details-page-calender-container">
            <Date-picker class="details-page-calender main" v-model="range" is-range :columns="2" color="gray" />
        </div>
            <div class="stay-chosen-dates">
            </div>
            <div class="review-container">
                <h2>Reviews</h2>
                <div v-if="stay.reviews" class="review-list">
                <div
                class="review-preview"
                v-for="review in stay.reviews"
                :key="review._id"
                >
                <div class="review-title flex align-center">
                    <img class="review-user-img" :src="review.by.imgUrl" alt="" />
                    <div class="review-title content flex">
                    <h3> {{ review.by.fullname }}</h3>
                    <h4>{{ reviewDate(review.createdAt) }}</h4>
                    </div>
                </div>  
            <!-- <h4>By {{ review.user.username }}</h4> -->
                <p>{{ review.txt }}</p>
                </div>
                </div>
            </div>
    </div>
</template>

<script>
    import stayReservation from '../cmps/stay-reservation.vue'
    export default {
    data() {
    return {
        stay: null,
        review: '',
        range: {
            start: null,
            end: null,
        },
        isSaved: false,
        }
    },
    computed: {
        stayRate(){
        let rateSum = 0
        this.stay.reviews.forEach(review => {
            rateSum += review.rate})
            return (rateSum / this.stay.reviews.length).toFixed(2)

        },
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
    },
    methods: {
        getSource(amenity) {            
        const source = `src/assets/icons/${amenity}`.toLowerCase()+'.svg'
        return source
        },
        toggleSaved() {
        this.isSaved = !this.isSaved
        return this.isSaved
        // add store save to handle this correctly
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
        reviewDate(date1) {
        const date = new Date(date1)
        const [month, day, year] = [
            date.getMonth(),
            date.getDate(),
            date.getFullYear(),
        ]
        return ' ' + month + '/' + year
        },
    },
    components: {
        stayReservation,
    },
    }
</script>
