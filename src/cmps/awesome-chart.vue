<template>
    <BarChart :chartData="data" :options="options" style="height: 215px" />
</template>

<script>
import { BarChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default {
    name: 'awesome-chart',
    props: {
        data: Object,
    },
    components: { BarChart },
    data() {
        return {
            options: {
                plugins: {
                    legend: {
                        display: false,
                    },
                },
            },
        }
    },
}
</script>
