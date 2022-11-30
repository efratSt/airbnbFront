<template>
    <section class="stay-preview">
        <section class="stay-card">
            <div class="stay-img-carousel">
                <el-carousel height="150px" :autoplay="false" trigger="click" indicator-position="">
                    <el-carousel-item v-for="imgUrl in stay.imgUrls">
                        <img :src="imgUrl" />
                    </el-carousel-item>
                </el-carousel>
            </div>

            <router-link :to="'/stay/' + stay._id">
                <div class="stay-name-rate">
                    <p>
                        <span>{{ stay.name }},{{ stay.loc.country }} &nbsp; &nbsp;</span>
                        <span>★{{ rateCalc }}</span>
                    </p>
                </div>
                <div class="stay-added-price">
                    <p>
                        <span class="stay-added">Added {{ dateCalc }} ago<br /></span>
                        <span class="stay-price">{{ stay.price }}$ night</span>
                    </p>
                </div>

            </router-link>

        </section>
    </section>
</template>

<script>
import stayDetails from '../views/stay-details.vue';
import  {utilService}  from '../services/util.service';

export default {
    props: {
        stay: Object,
    },
    data() {
        return {
            stayRate: 0
        }
    },
    created() {
        this.stay.reviews.forEach(review => {
            this.stayRate = review.rate
        });
    },
    computed: {
        rateCalc() {
            return this.stayRate = (this.stayRate) / this.stay.reviews.length
        },
        dateCalc() {
            return utilService.timeSince(new Date(this.stay.createdAt))
        }
    },
    methods: {

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


