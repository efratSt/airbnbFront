<template>
    <div>
    <h2>helooo</h2>
        <h1>{{ loggedInUser.fullname }}</h1>
        <pre>{{ ordersByUser }}</pre>
    </div>
</template>

<script>
export default {

    data() {
        return {
            ordersByUser: [],
            loggedInUser: '',
        }
    },
    async created() {
        const user = this.$store.getters.loggedinUser
        this.loggedInUser = user
        const orders = await this.$store.dispatch({
            type: 'loadOrders',
            filterBy: { buyerId: this.loggedInUser._id },
        })
        this.ordersByUser = JSON.parse(JSON.stringify(orders))
    },
}
</script>