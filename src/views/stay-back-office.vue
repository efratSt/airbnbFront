<template>
    <section class="stay-back-office">
        <h3>My back office</h3>
        <div class="stats">
            <div class="chart stats-item">chart</div>
            <div class="total-rev stats-item">total-rev</div>
            <div class="orders stats-item">orders</div>
            <div class="by-nights stats-item">by-nights</div>
        </div>
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
                    <td><button>Approve</button></td>
                    <td><button>Reject</button></td>
                </tr>
                <tr>
                    <td>12/07/2022</td>
                    <td>muki ben david</td>
                    <td>nuki house</td>
                    <td>12/09/2022 - 12/13/2022</td>
                    <td>4</td>
                    <td>$60</td>
                    <td>$240</td>
                    <td>Pending</td>
                    <td><button>Approve</button></td>
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
                    <td>Pending</td>
                    <td><button>Approve</button></td>
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
                    <td>Pending</td>
                    <td><button>Approve</button></td>
                    <td><button>Reject</button></td>
                </tr>
            </table>
        </div>
    </section>
</template>

<script>
export default {
    created() {
        console.log('from back office', this.$route)
    },
}
</script>
