<template>
    <section v-if="stay" @click="goToDetails" class="stay-preview">
        <li class="card-container">
            <section class="preview-section">
                <div>
                    <el-carousel :loop="false" :autoplay="false" trigger="click" indicator-position="">
                        <el-carousel-item v-for="imgUrl in stay.imgUrls">
                            <img :src="imgUrl" />
                        </el-carousel-item>
                    </el-carousel>
                </div>

                <button class="wishList" @click.stop="toggleSaved">
                    <svg :class="[{ saved: isSaved }]" viewBox="0 0 32 32" aria-hidden="true">
                        <path
                            d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z">
                        </path>
                    </svg>
                </button>

                <div class="text-container">
                    <div class="title">
                        <span>{{ stay.roomType }} in {{ stay.loc.city }}</span>
                        <div class="rating">
                            <span class="star">★ </span>{{ stayRate }}
                            <span v-if="isExploreShow" class="sum-reviews">({{ sumReviews }})</span>
                        </div>
                    </div>
                    <div>
                        <p class="name">{{ stay.name }}</p>
                        <p v-if="isExploreShow" class="num-of-bads">{{ stay.capacity / 2 }} bed</p>
                    </div>
                    <p class="price-night">
                        <span class="price">{{ currencyCode }}{{ stay.price }}
                        </span>
                        night
                    </p>
                </div>
            </section>
        </li>
    </section>
</template>

<script>
import stayDetails from '../views/stay-details.vue'
import { utilService } from '../services/util.service'

export default {
    props: {
        stay: Object,
    },
    data() {
        return {
            isSaved: false,
        }
    },
    created() {
    },
    computed: {
        sumReviews() {
            console.log(this.stay.reviews.length)
            return this.stay.reviews.length
        },
        dateCalc() {
            return utilService.timeSince(new Date(this.stay.createdAt))
        },
        currencyCode() {
            if (this.stay.currencyCode === 'USD') return '$'
            if (this.stay.currencyCode === 'EUR') return '€'
            if (this.stay.currencyCode === 'ILS') return '₪'
        },
        sumOfBads() {
            var bads = this.stay.beds
            if (bads > 1) return bads + ' bads'
            return bads + ' bad'
        },
        isExploreShow() {
            return this.$store.getters.getShowExplore
        },
        stayRate() {
            let rateSum = 0
            this.stay.reviews.forEach(review => {
                rateSum += review.rate
            })
            return (rateSum / this.stay.reviews.length).toFixed(2)
        }
    },
    methods: {
        toggleSaved() {
            this.isSaved = !this.isSaved
            return !this.isSaved
        },
        goToDetails() {
            this.$router.push(`/stay/${this.stay._id}`)
        },
    },
    components: {
        stayDetails,
    },
}
</script>
