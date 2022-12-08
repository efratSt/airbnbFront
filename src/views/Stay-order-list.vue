<template>
    <div class="order-list">
        <!-- <table class="order-list-table">
            <tr class="order-list-tr-th">
                        <th>Date</th>
                        <th>Booker</th>
                        <th>Stay</th>
                        <th>Dates</th>
                        <th>Guests</th>
                        <th>Night</th>
                        <th>Total</th>
                        <th>Status</th>
                    </tr>
        </table> -->
        <div class="order-list-container" v-for="order in ordersByUser" key="ordersByUser._id">
            <div class="order-list-img">
                <img :src="order.stay.thumbnail" />
            </div>
            <div class="order-list-name">
                <p>{{ order.stay.name }}</p>
            </div>
            <div class="order-list-place">{{ order.stay }}</div>
            <div class="order-list-date-start">{{ order.startDate }}</div>
            <div class="order-list-date-end">{{ order.endDate }}</div>
            <div class="order-list-date-create">{{ order.createdAt }}</div>
            <div class="order-list-place-status">{{ order.status }}</div>
        </div>
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