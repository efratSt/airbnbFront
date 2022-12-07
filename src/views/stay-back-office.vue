<template>
    <section class="stay-back-office">
        <h3>My back office</h3>
        <button @click="openAddModal" class="add-stay-btn">Add a stay</button>
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
                        <th>Actions</th>
                    </tr>
                    <tr>
                        <td>12/07/2022</td>
                        <td>Puki ben david</td>
                        <td>luki house</td>
                        <td>12/09/2022 - 12/13/2022</td>
                        <td>4</td>
                        <td>$60</td>
                        <td>$240</td>
                        <td>Pending</td>
                        <td>
                            <button class="approve">Approved</button>
                        </td>
                        <td>
                            <button>Reject</button>
                        </td>
                    </tr>
                    <tr>
                        <td>12/07/2022</td>
                        <td>muki ben david</td>
                        <td>nuki house</td>
                        <td>12/09/2022 - 12/13/2022</td>
                        <td>4</td>
                        <td>$60</td>
                        <td>$240</td>
                        <td>Approved</td>
                        <td><button class="approve">Approved</button></td>
                        <td><button>Reject</button></td>
                    </tr>
                    <tr>
                        <td>12/07/2022</td>
                        <td>Puki ben david</td>
                        <td>muki house</td>
                        <td>12/09/2022 - 12/13/2022</td>
                        <td>4</td>
                        <td>$60</td>
                        <td>$240</td>
                        <td>Approved</td>
                        <td><button class="approve">Approved</button></td>
                        <td><button>Reject</button></td>
                    </tr>
                    <tr>
                        <td>12/07/2022</td>
                        <td>Puki ben david</td>
                        <td>muki house</td>
                        <td>12/09/2022 - 12/13/2022</td>
                        <td>4</td>
                        <td>$60</td>
                        <td>$240</td>
                        <td>Approved</td>
                        <td><button class="approve">Approved</button></td>
                        <td><button>Reject</button></td>
                    </tr>
                </table>
            </div>
            <div class="stats stats-charts">
                <div class="chart stats-item">chart</div>

                <div class="by-nights stats-item">by-nights</div>
            </div>
            <div class="stats-info stats">
                <div class="total-rev stats-item">
                    <h4>Total revenue</h4>
                    <div class="revenue-stats stats-info">
                        <div class="revenue-item">
                            <span>This Month</span>
                            <span>$357</span>
                        </div>
                        <div class="revenue-item">
                            <span>This Year</span>
                            <span>$1,578</span>
                        </div>
                        <div class="revenue-item">
                            <span>Total Incom</span>
                            <span>$3,345</span>
                        </div>
                    </div>
                </div>
                <div class="orders stats-item">
                    <h4>Orders management</h4>
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
            </div>
        </div>

        <section v-if="isAddModalOpen" class="add-modal">
            <h1>Add a stay</h1>
            <button :title="'Back'" @click="isAddModalOpen = false">
                <i class="fa-solid fa-arrow-left-long"></i>
            </button>
            <stay-add />
        </section>
    </section>
</template>

<script>
import stayAdd from '../cmps/stay-add.vue'
export default {
    data() {
        return {
            isAddModalOpen: false,
        }
    },

    created() {
        console.log('from back office', this.$route)
        var hostId = this.$store.getters.loggedinUser._id
        this.$store.dispatch({type: 'loadOrders', filterBy: {hostId}})
    },

    methods: {
        openAddModal() {
            this.isAddModalOpen = true
        },
    },

    components: {
        stayAdd,
    },
}
</script>
