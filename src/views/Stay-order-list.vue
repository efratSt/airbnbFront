<template>
    <div class="order-list">
        
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