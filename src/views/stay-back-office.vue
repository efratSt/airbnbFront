<template>
    <section class="stay-back-office">
        <h3>My bnd details</h3>
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
                        <td>${{ order.price.price }}</td>
                        <td>${{ order.price.totalPrice.toLocaleString() }}</td>
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
                                Approve
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
                            <span class="order-green">${{ totalMonth }}</span>
                        </div>
                        <div class="revenue-item">
                            <span>This Year</span>
                            <span class="order-green">${{ totalYear }}</span>
                        </div>
                        <div class="revenue-item">
                            <span>Total Income</span>
                            <span class="order-green">${{ totalIncome }}</span>
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
                            <span>Revenue</span>
                            <span class="order-green">${{ totalYear }}</span>
                        </div>
                        <div class="orders-item">
                            <span>Pending now</span>
                            <span>{{ totalPending }}</span>
                        </div>
                    </div>
                </div>
                <!-- <div class="orders stats-item">
                    <h4>2021</h4>
                    <div class="orders-stats stats-info">
                        <div class="orders-item">
                            <span>Cancellations</span>
                            <span class="order-red">8.33%</span>
                        </div>
                        <div class="orders-item">
                            <span>Revenue</span>
                            <span class="order-green">$52,875</span>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </section>
</template>

<script>
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
                        data: [3580, 4285, 6500, 7420, 5850],
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
                        data: [5209, 6785, 7855, 5725, 0],
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
        this.orderByHost = JSON.parse(JSON.stringify(orders)).reverse()
        console.log('orderByHost: ', this.orderByHost)
        // demo data
        // this.orderByHost[0].status = 'Pending'
        // this.orderByHost[0].guests = 2
    },

    mounted() {},
    methods: {
        openAddModal() {
            this.isAddModalOpen = true
        },

        changeStatus(status, idx, order) {
            this.orderByHost[idx].status = status
            this.$store.dispatch({
                type: 'updateOrder',
                order,
            })
        },
    },

    computed: {
        totalPending() {
            const total = this.orderByHost.reduce((acc, order) => {
                if (order.status === 'Pending') acc++
                return acc
            }, 0)
            return total
        },
        totalMonth() {
            const total = this.orderByHost.reduce((acc, order) => {
                if (order.status === 'Approved') acc += order.price.totalPrice
                return acc
            }, 0)
            this.testData2.datasets[0].data[4] = total
            return total.toLocaleString()
        },

        totalYear() {
            let total = this.orderByHost.reduce((acc, order) => {
                if (order.status === 'Approved') acc += order.price.totalPrice
                return acc
            }, 0)
            this.testData2.datasets[0].data[4] = total
            total += 51000
            return total.toLocaleString()
        },

        totalIncome() {
            let total = this.orderByHost.reduce((acc, order) => {
                if (order.status === 'Approved') acc += order.price.totalPrice
                return acc
            }, 0)
            this.testData2.datasets[0].data[4] = total
            total += 172850
            return total.toLocaleString()
        },
    },

    components: {
        awesomeChart,
    },
}
</script>
