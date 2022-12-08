<template>
    <div class="order-list">
        <div class="">
            <div class="order-list-container header">
                <div class="order-list-img">img</div>
                <div class="order-list-name">name</div>
                <div class="order-list-place">city</div>
                <div class="order-list-date-start">start date</div>
                <div class="order-list-date-end">end date</div>
                <div class="order-list-date-create">created</div>
                <div class="order-list-place-status">status</div>
            </div>
            <div class="order-list-container" v-for="order in ordersByUser" key="ordersByUser._id">
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
                <div class="order-list-place-status">
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
    },
}
</script>