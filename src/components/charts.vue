<template>
  <div>
    <div :style="{width:width,height:height}" ref="echarts"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "charts",
  props: {
    chartData: {
      type: Object,
      default: () => {}
    },
    height: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: ""
    }
  },
  watch: {
    width: {
      handler(val, oldVal) {
        this.$nextTick(() => {
          this.myChart.resize();
        });
      }
    },
    chartData: {
      handler(val, oldVal) {
        this.$nextTick(() => {
          this.myChart.setOption(this.chartData);
        });
      },
      deep: true
    }
  },
  data() {
    return {
      myChart: {}
    };
  },
  methods: {
    drawChart() {
      this.myChart = echarts.init(this.$refs.echarts);
      // 绘制图表
      this.myChart.setOption(this.chartData);
      window.addEventListener("resize", this.myChart.resize);
    }
  },
  computed: {},
  mounted: function() {
    this.$nextTick(() => {
      this.drawChart();
    });
  },
  created: () => {}
};
</script>

<style scoped>
</style>