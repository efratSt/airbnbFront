<template>
    <div>
        <h1>hello i explore</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            place: ''
        }
    },
    created() {
        this.place = this.$route.params.place
        console.log('place' , this.place);
    }
}
</script>