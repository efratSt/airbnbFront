<template>
    <section class="stay-preview">
        <li v-if="stay" class="card-container">
            <section class="preview-section">
                <div>

                    <el-carousel :loop="false" :autoplay="false" trigger="click" indicator-position="">
                        <el-carousel-item v-for="imgUrl in stay.imgUrls">
                            <img :src="imgUrl" />
                        </el-carousel-item>
                    </el-carousel>
                </div>

                <button class="wishList" @click.stop="toggleSaved"><svg :class="[{ saved: isSaved }]"
                        viewBox="0 0 32 32" aria-hidden="true">
                        <path
                            d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z">
                        </path>
                    </svg></button>

                <router-link :to="'/stay/' + stay._id">

                    <div class="text-container">

                        <div class="title"><span>{{ stay.name }}</span>
                            <div class="rating"><span class="star">★ </span>{{ rateCalc }}</div>
                        </div>

                        <div>
                            <p class="added">Added {{ dateCalc }} ago</p>
                        </div>

                        <p class="price-night"><span class="price">{{ currencyCode }} {{ stay.price }} </span> night</p>
                    </div>

                </router-link>
            </section>
        </li>
    </section>


</template>

<script>
import stayDetails from '../views/stay-details.vue';
import { utilService } from '../services/util.service';

export default {
    props: {
        stay: Object,
    },
    data() {
        return {
            stayRate: 0,
            isSaved: false,
        }
    },
    created() {
        this.stay.reviews.forEach(review => {
            this.stayRate += review.rate
        });
        // console.log('this.stayRate', this.stayRate);
    },
    computed: {
        rateCalc() {
            let rate = (this.stayRate = (this.stayRate) / this.stay.reviews.length)
            if (rate.toFixed(2) % 1 === 0) return rate.toFixed(1)
            return rate.toFixed(2)
        },
        dateCalc() {
            return utilService.timeSince(new Date(this.stay.createdAt))
        },
        currencyCode() {
            if (this.stay.currencyCode === 'USD') return '$'
            if (this.stay.currencyCode === 'EUR') return '€'
            if (this.stay.currencyCode === 'ILS') return '₪'
        }

    },
    methods: {
        toggleSaved() {
            console.log(this.isSaved)
            this.isSaved = !this.isSaved
            return this.isSaved
        },
    },
    components: {
        stayDetails,
    },
};
</script>

<style scoped>
/* .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
} */
</style>


