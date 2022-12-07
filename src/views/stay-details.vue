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
                            <a  class="reviews-link" href="#">
                                {{ stay.reviews.length }}reviews</a>   
                        </span >&nbsp&#183 <span class="superhost" v-if="stay.host.isSuperhost">
                            <svg class="superhost-badge" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"  ><path d="m16 17c3.8659932 0 7 3.1340068 7 7s-3.1340068 7-7 7-7-3.1340068-7-7 3.1340068-7 7-7zm0 2c-2.7614237 0-5 2.2385763-5 5s2.2385763 5 5 5 5-2.2385763 5-5-2.2385763-5-5-5zm9.6666667-18.66666667c1.0543618 0 1.9181651.81587779 1.9945142 1.85073766l.0054858.14926234v6.38196601c0 .70343383-.3690449 1.35080636-.9642646 1.71094856l-.1413082.0779058-9.6666667 4.8333334c-.5067495.2533747-1.0942474.2787122-1.6171466.0760124l-.1717078-.0760124-9.66666666-4.8333334c-.62917034-.3145851-1.04315599-.93418273-1.09908674-1.62762387l-.00648607-.16123049v-6.38196601c0-1.05436179.81587779-1.91816512 1.85073766-1.99451426l.14926234-.00548574zm0 2h-19.33333337v6.38196601l9.66666667 4.83333336 9.6666667-4.83333336z"></path></svg>Superhost&nbsp&#183&nbsp</span>
                        <a class="location-details" href="#"><h4>{{ stay.loc.city }},{{stay.loc.country}}</h4></a>
                    </div>
                    <!-- add map links later -->
                    <div class="stay-secondary header buttons-container flex">
                        <button class="stay-secondary header button">
                            <i class="fa-solid fa-arrow-up-from-bracket"></i> Share
                        </button>
                        <button class="stay-secondary header button">
                            <i class="fa-regular fa-heart" :class="[{ 'fa-solid saved': isSaved }]"
                                @click="toggleSaved"></i>
                            Save
                        </button>
                    </div>
                </div>
            </div>
            <div class="img-container">
                <img v-for="(image, idx) in stay.imgUrls.slice(0, 5)" :key="idx" :src="image" alt="stay-img"
                    :class="`grid-item img-${idx + 1}`" />
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
                                    <span>{{ stay.bedrooms }}</span>
                                    <span v-if="(stay.bedrooms === 1)"> bedroom</span>
                                    <span v-if="(stay.bedrooms > 1)"> bedrooms</span>
                                </li>
                                <li>
                                    <span>&nbsp&#183&nbsp</span><span>{{ Math.ceil(stay.capacity / 2) }}</span>
                                    <span v-if="(Math.ceil(stay.capacity / 2) === 1)"> bed</span>
                                    <span v-if="(Math.ceil(stay.capacity / 2) > 1)"> beds </span>
                                </li>
                                <li>
                                    <span>&nbsp&#183&nbsp</span>
                                    <span>{{ stay.bathrooms }} bath</span>
                                </li>
                            </ol>
                        </div>
                        <img :src="stay.host.thumbnailUrl"
                            onerror="src='https://ca.slack-edge.com/T03PU4YR4NS-U040G1HDV34-37fee1583827-512'"
                            alt="host image" class="host-img">
                    </div>
                </section>
                <section class="stay-highlights"></section>
                <section class="stay-details-summary">
                    <p class="stay-details-summary content">{{ stay.summary }}</p>
                </section>
                <div class="stay-details-main flex space-between">
                    <section class="stay-amenities-container">
                        <h2>What this place offers</h2>
                        <ul class="stay-amenities-list clean-list">
                            <li class="stay-amenity flex align-center"
                                v-for="(amenity, idx) in stay.amenities.slice(0, 10)" :key="idx" :class="amenity">
                                <object class="amenity-icon" :data="this.getSource(amenity)" width="24"
                                    height="24"></object>
                                {{ amenity }}
                            </li>
                        </ul>
                        <button @click="toggleAmenities" class="amenity-button" v-if="stay.amenities.length > 10">
                            Show all {{ stay.amenities.length }} amenities
                        </button>
                        <amenitiesModal v-click-outside="toggleAmenities" @toggleAmenities="toggleAmenities"
                            class="amenities-modal" v-if="showAmenities" :amenities="stay.amenities" />
                    </section>
                </div>
            </div>
            <div class="reservation-cmp-container">
                <stayReservation @moveCalender="moveCalender" :stay="stay" :range="range" />
            </div>
        </div>
        <div class="details-page-calender-container" :class="{ 'modal': calenderCentered }">
            <Date-picker class="details-page-calender main" v-model="range" is-range :columns="2" color="gray" />
        </div>
        <div class="stay-chosen-dates">
        </div>
        <div class="review-container">
            <h2>Reviews</h2>
            <div v-if="stay.reviews" class="review-list">
                <div class="review-preview" v-for="review in stay.reviews" :key="review._id">
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
    </div>
</template>

<script>
import amenitiesModal from '../cmps/stay-amenities-modal.vue'
import stayReservation from '../cmps/stay-reservation.vue'
export default {
    data() {
        return {
            calenderCentered: false,
            showAmenities: false,
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
        stayRate() {
            let rateSum = 0
            this.stay.reviews.forEach(review => {
                rateSum += review.rate
            })
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
        moveCalender() {
            this.calenderCentered = true
            console.log('hu', this.calenderCentered)
        },
        getSource(amenity) {
            const source = `src/assets/icons/${amenity}`.toLowerCase() + '.svg'
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
            console.log('this stay:', this.stay);
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
        const month = date.toLocaleString('default', { month: 'long' })
        const [day, year] = [
        
        date.getDate(),
         date.getFullYear(),
         ]
        return  month + ' ' + year
        },
        toggleAmenities() {
            this.showAmenities = !this.showAmenities
        }
    },
    components: {
        stayReservation,
        amenitiesModal
    },
}
</script>
