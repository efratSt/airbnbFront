<template>
    <section class="stay-app">
        <!-- <stay-labels-filter/> -->
        <stay-list :stays="getStays" />
    </section>
    <!-- <pre>{{stays}}</pre> -->
</template>

<script>
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service';
import { stayService } from '../services/stay.service.local';
import stayList from '../cmps/stay-list.vue';
// import stayLabelsFilter from '../cmps/stay-labels-filter.vue';

export default {
    data() {
        return {
            stayToAdd: stayService.getEmptyStay(),
            // isExplore: false
        };
    },
    computed: {
        loggedInUser() {
            return this.$store.getters.loggedinUser;
        },
        getStays() {
            console.log('hey');
            return this.$store.getters.stays;
        },
        isExplore() {
            return this.$route.name === 'stay-explore';
        },
    },
    created() {
        this.$store.dispatch({ type: 'loadStays' });
    },

    methods: {},
    components: {
        stayList,
        // stayLabelsFilter,
    },
};
</script>
