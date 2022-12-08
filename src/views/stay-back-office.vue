<template>
    <section class="stay-back-office">
        <h3>My bnd details</h3>
        <!-- <button @click="openAddModal" class="add-stay-btn">Add a stay</button> -->
        <div class="main-back-office">
            <div class="orders-list">
                <table>
                    <tr class="tr-th">
                        <th>Date</th>
                        <th>Booker</th>
                        <th>Stay</th>
                        <th>Dates</th>
                        <th>Guests</th>
                        <th>Night</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th class="actions">Actions</th>
                    </tr>
                    <tr
                        v-if="orderByHost"
                        v-for="(order, idx) in orderByHost"
                        :key="orderByHost._id"
                    >
                        <td>
                            {{ new Date(order.createdAt).toLocaleDateString() }}
                        </td>
                        <td>{{ order.buyer.fullname }}</td>
                        <td>{{ order.stay.name }}</td>
                        <td>
                            {{ order.startDate }} -
                            {{ order.endDate }}
                        </td>
                        <td>{{ order.guests }}</td>
                        <td>${{ order.price / order.duration }}</td>
                        <td>${{ order.price.toLocaleString() }}</td>
                        <td
                            class="pending"
                            :class="{
                                green: order.status === 'Approved',
                                red: order.status === 'Rejected',
                            }"
                        >
                            {{ order.status }}
                        </td>
                        <td class="orders-btns">
                            <button
                                @click="changeStatus('Approved', idx, order)"
                                class="approve"
                            >
                                Approved
                            </button>
                            <button
                                @click="changeStatus('Rejected', idx, order)"
                            >
                                Reject
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="stats stats-charts">
                <div class="chart stats-item">
                    <h4>2021</h4>
                    <awesome-chart :data="testData1" />
                </div>

                <div class="by-nights stats-item">
                    <h4>2022</h4>
                    <awesome-chart :data="testData2" />
                </div>
            </div>
            <div class="stats-info stats">
                <div class="total-rev stats-item">
                    <h4>Total revenue</h4>
                    <div class="revenue-stats stats-info">
                        <div class="revenue-item">
                            <span>This Month</span>
                            <span>$1,357</span>
                        </div>
                        <div class="revenue-item">
                            <span>This Year</span>
                            <span>$19,578</span>
                        </div>
                        <div class="revenue-item">
                            <span>Total Income</span>
                            <span>$3,345</span>
                        </div>
                    </div>
                </div>
                <div class="orders stats-item">
                    <h4>2022</h4>
                    <div class="orders-stats stats-info">
                        <div class="orders-item">
                            <span>Cancellations</span>
                            <span class="order-red">10.5%</span>
                        </div>
                        <div class="orders-item">
                            <span>Average revenue</span>
                            <span class="order-green">$2,375</span>
                        </div>
                        <div class="orders-item">
                            <span>Pending now</span>
                            <span>1</span>
                        </div>
                    </div>
                </div>
                <div class="orders stats-item">
                    <h4>2021</h4>
                    <div class="orders-stats stats-info">
                        <div class="orders-item">
                            <span>Cancellations</span>
                            <span class="order-red">8.33%</span>
                        </div>
                        <div class="orders-item">
                            <span>Average revenue</span>
                            <span class="order-green">$3,875</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <section v-if="isAddModalOpen" class="add-modal">
            <h1>Add a stay</h1>
            <button :title="'Back'" @click="isAddModalOpen = false">
                <i class="fa-solid fa-arrow-left-long"></i>
            </button>
            <stay-add />
        </section> -->
    </section>
</template>

<script>
// import stayAdd from '../cmps/stay-add.vue'
import awesomeChart from '../cmps/awesome-chart.vue'
export default {
    data() {
        return {
            isAddModalOpen: false,
            orderByHost: [],

            testData1: {
                labels: [
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                ],
                datasets: [
                    {
                        data: [350, 400, 600, 700, 500],
                        backgroundColor: [
                            'red',
                            '#77CEFF',
                            '#0079AF',
                            '#123E6B',
                            '#97B0C4',
                            '#A5C8ED',
                        ],
                    },
                ],
            },
            testData2: {
                labels: [
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                ],
                datasets: [
                    {
                        data: [150, 500, 700, 100, 200],
                        backgroundColor: [
                            'red',
                            '#77CEFF',
                            '#0079AF',
                            '#123E6B',
                            '#97B0C4',
                            '#A5C8ED',
                        ],
                    },
                ],
            },
        }
    },

    async created() {
        var hostId = this.$store.getters.loggedinUser._id
        const orders = await this.$store.dispatch({
            type: 'loadOrders',
            filterBy: { hostId },
        })

        this.orderByHost = JSON.parse(JSON.stringify(orders))
        // console.log('hostId: ', hostId);
        console.log('orderByHost: ', this.orderByHost)
        // console.log('from back office', this.$route)
    },

    methods: {
        openAddModal() {
            this.isAddModalOpen = true
        },

        changeStatus(status, idx, order) {
            console.log('order before change: ', order)
            // console.log('orderId: ', order._id);
            this.orderByHost[idx].status = status
        },
    },
    computed: {
        orders() {
            return this.$store.getters.orders
        },
    },

    components: {
        // stayAdd,
        awesomeChart,
    },
}
</script>
