<template>
    <div>
        <stay-list :stays="getStays" />
    </div>
</template>

<script>

import stayList from '../cmps/stay-list.vue';

export default {
    data() {
        return {
            place: '',
            stays: null
        }
    },
    created() {
        this.place = this.$route.params
        console.log(this.$route.query);
        this.$store.dispatch({ type: 'loadStays' });
        
    },
    computed: {
        getStays() {
            // console.log(this.$store.getters.stays);
            return this.$store.getters.stays;
        },
        
    },
    methods: {
    },
    components: {
        stayList,
    },
}
</script>

