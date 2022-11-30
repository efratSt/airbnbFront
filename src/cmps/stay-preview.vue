<template>
    <section class="stay-preview">
        <!-- <h4>stay-preview</h4> -->
        <section class="stay-card">
            <router-link :to="'/stay/' + stay._id">
                <img :src="stay.imgUrls[0]" />
                <div class="stay-name-rate">
                    <p>
                        <span>{{ stay.name }},{{ stay.loc.country }} &nbsp; &nbsp;</span>
                        <span>★{{ rateCalc }}</span>
                    </p>
                </div>
                <div class="stay-added-price">
                    <p>
                        <span class="stay-added">Added <br /></span>
                        <span class="stay-price">{{ stay.price }}$ night</span>
                    </p>
                </div>
            </router-link>
        </section>
    </section>
</template>

<script>
import stayDetails from '../views/stay-details.vue';

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
        }
    },
    methods: {

    },
    components: {
        stayDetails,
    },
};
</script>
