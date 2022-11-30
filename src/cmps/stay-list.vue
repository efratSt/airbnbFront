<template>
    <section class="stay-list">
        <!-- <h4>stay list</h4> -->
        <ul class="card-grid">
            <stay-preview v-for="stay in stays" :stay="stay" />
        </ul>
    </section>
</template>

<script>
import stayPreview from '../cmps/stay-preview.vue';

export default {
    props: {
        stays: Array,
    },

    components: {
        stayPreview,
    },
};
</script>
