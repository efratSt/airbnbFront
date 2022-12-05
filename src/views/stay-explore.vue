<template>
    <section class="stay-explore">
        <div class="more-show">Over {{ showHowManyStays }} homes</div>
        <stay-list :stays="getStays" />
    </section>
</template>

<script>

import stayList from '../cmps/stay-list.vue';

export default {
    data() {
        return {
            place: '',
            sumOfStays: 0
        }
    },
    created() {
        this.$store.dispatch({ type: 'loadStays' });
        let filterBy = {
            location: this.$route.query.location,
            range: {
                start: this.$route.query.rangeStart,
                end: this.$route.query.rangeEnd
            },
            guests: this.$route.query.guests,
        }
        // console.log('filterBy', filterBy);
        this.$store.commit({type: 'setFilterBy' , filterBy})
    },
    computed: {
        getStays() {
            var tryStay = this.$store.getters.stays.length
            console.log('tryStay', tryStay);

            this.sumOfStays = tryStay
            console.log('this.sumOfStays', this.sumOfStays);
            return this.$store.getters.stays;
        },
        showHowManyStays() {
            if (this.sumOfStays > 1000) return 1000
            if (this.sumOfStays > 500) return 500
            if (this.sumOfStays > 100) return 100
            if (this.sumOfStays > 50) return 50
            if (this.sumOfStays > 10 ) return 10
            if (this.sumOfStays > 5 ) return 5
            if (this.sumOfStays > 1) return 1
            return this.sumOfStays
        }
    },
    methods: {
    },
    components: {
        stayList,
    },
}
</script>

