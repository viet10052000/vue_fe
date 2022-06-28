<template>
  <div class="chart-layout">
    <LineChart class="chart" :chartData="data" :options="options" />
  </div>
</template>

<script setup lang="ts">
import { LineChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
const props = defineProps({
  step: {
    type: Number,
  },
  data1: {
    type: Array,
  },
  data2: {
    type: Array,
  },
  label : {
    type: String
  }
})
const dataChart1 = [
  {
    label : props.label,
    data: props.data1,
    borderColor: '#78D64B',
    backgroundColor: 'rgb(120 214 75 / 50%)',
  },
]
const data = {
  labels : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
  datasets : dataChart1,
}
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
  scales: {
    y: {
      min: 0,
      ticks: {
        stepSize: props.step,
      },
    },
    x: {
      grid: {
        drawBorder: false,
        color: '#ffffff',
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.chart-layout {
  background: white;
  border: 1px;
  border-radius: 10px;
  h2 {
    font-size: 16px;
    font-weight: bold;
    padding-left: 22px;
    padding-top: 22px;
    padding-bottom: 4px;
  }
  hr {
    color: #8080808a;
  }
}
</style>

