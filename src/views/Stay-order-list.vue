<template>
    <div class="order-list">
        <div class="">
            <div class="order-list-container">
                <div class="order-list-img header"></div>
                <div class="order-list-name header">Name</div>
                <div class="order-list-place header">City</div>
                <div class="order-list-date-start header">Start Date</div>
                <div class="order-list-date-end header">End Date</div>
                <div class="order-list-date-create header">Created</div>
                <div class="order-list-date-create header">Total</div>
                <div class="order-list-place-status header">Status</div>
            </div>
            <div
                class="order-list-container"
                v-for="order in ordersByUser"
                key="ordersByUser._id"
            >
                <div class="order-list-img">
                    <img :src="order.stay.thumbnail" />
                </div>
                <div class="order-list-name">
                    <p>{{ order.stay.name }}</p>
                </div>
                <div class="order-list-place">
                    <p>{{ order.stay.loc.city }}</p>
                </div>
                <div class="order-list-date-start">
                    <p>{{ order.startDate }}</p>
                </div>
                <div class="order-list-date-end">
                    <p>{{ order.endDate }}</p>
                </div>
                <div class="order-list-date-create">
                    <p>{{ new Date(order.createdAt).toLocaleDateString() }}</p>
                </div>
                <div class="order-list-date-create">
                    <p>${{ order.price.totalPrice.toLocaleString() }}</p>
                </div>
                <div
                    class="order-list-place-status"
                    :class="{
                        green: order.status === 'Approved',
                        red: order.status === 'Rejected',
                    }"
                >
                    <p>{{ order.status }}</p>
                </div>
            </div>
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
        // test color
        this.ordersByUser[0].status = 'Pending'
        // this.ordersByUser[1].status = 'Rejected'
    },
}
</script>
