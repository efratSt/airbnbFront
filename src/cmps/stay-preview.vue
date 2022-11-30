<template>
    <section class="stay-preview">
        <!-- <h4>stay-preview</h4> -->
        <section class="stay-card">
            <router-link :to="'/stay/' + stay._id">
                <img :src="stay.imgUrls[0]" />
                <p>name: {{ stay.name }}</p>
                <p>country: {{ stay.loc.country }}</p>
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
            // console.log(review.rate);
            this.stayRate = review.rate
            console.log('this.stayRate', this.stayRate);
        });
    },
    computed: {

    },
    methods: {

    },
    components: {
        stayDetails,
    },
};
</script>
