<template>

    <section class="stay-preview">
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
        stay: Object
    },
    components: {
        stayDetails
    },
}
</script>