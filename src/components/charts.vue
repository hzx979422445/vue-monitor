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
          this.chartsArr.forEach((item, index) => {
            item.resize();
          });
        });
      }
    },
    chartData: {
      handler(val, oldVal) {
        this.$nextTick(() => {
          this.chartsArr.forEach((item, index) => {
            item.setOption(this.chartsDataArr[index]);
          });
        });
      },
      deep: true
    }
  },
  data() {
    return {
      chartsArr: [],
      chartsDataArr: []
    };
  },
  methods: {
    drawChart() {
      var myChart = echarts.init(this.$refs.echarts);
      this.chartsArr.push(echarts.init(this.$refs.echarts));
      this.chartsDataArr.push(this.chartData);
      // 绘制图表
      myChart.setOption(this.chartData);
      window.addEventListener("resize", myChart.resize);
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