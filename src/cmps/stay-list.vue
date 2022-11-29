<template>
    <section class="stay-list">
        <ul>
            <stay-preview v-for="stay in stays" :stay="stay"/>
        </ul>
    </section>

</template>

<script>

import stayPreview from '../cmps/stay-preview.vue'

export default {
    props: {
        stays: Array
    },


    components: {
        stayPreview
    },
}
</script>