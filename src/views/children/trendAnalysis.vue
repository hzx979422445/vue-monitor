<template>
  <div class="wrapContent">
    <el-row>
      <el-col :span="24" class="titleName">趋势分析</el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <span>节点编号:</span>
        <el-input v-model="numberInput" style="width:60px;"></el-input>
        <el-button type="primary" class="handle-del mr10 serach" @click="serach">查询</el-button>
        <span style="margin-left:40px;">时间:</span>
        <el-select v-model="select_cate" placeholder="选择时间" class="handle-select mr10">
          <el-option key="1" label="两天前" value="两天前"></el-option>
          <el-option key="2" label="一周前" value="一周前"></el-option>
        </el-select>
      </el-col>
    </el-row>
    <div class="chartsWrap">
      <div class="chartsItem" ref="chartsItem">
        <e-charts :chartData="optionOne" :height="height" :width="width"></e-charts>
      </div>
      <div class="chartsItem">
        <e-charts :chartData="optionTwo" :height="height" :width="width"></e-charts>
      </div>
      <div class="chartsItem"></div>
      <div class="chartsItem"></div>
    </div>
  </div>
</template>

<script>
import eCharts from "../../components/charts";
export default {
  name: "trendAnalysis",
  data() {
    return {
      optionOne: {
        title: {
          text: "波动图",
          textStyle: {
            fontSize: 14
          },
          left: "center"
        },
        grid: {
          left:'15%',
          bottom:70
        },
        tooltip: {},
        xAxis: {
          splitLine: { show: false },
          name:'时间',
          nameLocation:'center',
          nameGap:50,
          boundaryGap: false,
          axisLabel: {
            rotate:40
          },
          data: []
        },
        yAxis: {
          type: "value",
          name: '幅值(mv)',
          nameLocation:'center',
          nameGap:40
        },
        series: [
          {
            name: "模拟数据",
            type: "line",
            smooth: true,
            symbol: "none",
          /*sampling: "average",*/
            itemStyle: {
              color: "#ff0000"
            },
            data: []
          }
        ]
      },
      optionTwo: {
        title: {
          text: "波动图2",
          textStyle: {
            fontSize: 14
          },
          left: "center"
        },
        grid: {
          left:'15%'
        },
        tooltip: {},
        xAxis: {
          splitLine: { show: false },
          name:'相位(°)',
          nameLocation:'center',
          nameGap:30,
          boundaryGap: false,
          data: []
        },
        yAxis: {         
          type: "value",
          name: '幅值(mv)',
          nameLocation:'center',
          nameGap:40
        },
        series: [
          {
            name: "模拟数据",
            type: "line",
            smooth: true,
            symbol: "none",
           /*sampling: "average",*/
            itemStyle: {
              color: "#ff0000"
            },
            data: []
          }
        ]
      },
      numberInput: "",
      select_cate: "",
      height: "",
      width: ""
    };
  },
  props: {
    collapse: {
      type: Boolean
    }
  },
  watch: {
    collapse: function() {
      setTimeout(() => {
        this.height = this.$refs.chartsItem.offsetHeight + "px";
        this.width = this.$refs.chartsItem.offsetWidth + "px";
      }, 400);
    }
  },
  created: function() {
    let base = +new Date(1968, 9, 3);
    let oneDay = 24 * 3600 * 1000;
    let date = [];
    let data = [Math.random() * 300];
    for (let i = 1; i < 1000; i++) {
      const now = new Date((base += oneDay));
      date.push(
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/")
      );
      data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }
    this.optionOne.xAxis.data = date;
    this.optionOne.series[0].data = data;
    this.optionTwo.xAxis.data = date;
    this.optionTwo.series[0].data = data;
  },
  mounted: function() {
    this.height = this.$refs.chartsItem.offsetHeight + "px";
    this.width = this.$refs.chartsItem.offsetWidth + "px";
    window.onresize = () => {
      return (() => {
        this.height = this.$refs.chartsItem.offsetHeight + "px";
        this.width = this.$refs.chartsItem.offsetWidth + "px";
      })();
    };
  },
  methods: {
    serach() {
      this.optionOne.xAxis.data = [
        "苹果",
        "香蕉",
        "橘子",
        "梨子",
        "樱桃",
        "哈密瓜"
      ];
      this.optionOne.series[0].data = [15, 10, 20, 30, 50, 10];
      this.optionTwo.xAxis.data = [
        "hahah",
        "香蕉",
        "橘子",
        "梨子",
        "樱桃",
        "哈密瓜"
      ];
      this.optionOne.series[0].data = [15, 10, 20, 30, 50, 20];
    }
  },
  components: {
    eCharts
  }
};
</script>

<style scoped>
.titleName {
  font-size: 26px;
}
.wrapContent >>> .el-input__inner {
  height: 30px;
  line-height: 30px;
}
.wrapContent >>> .el-row {
  margin-bottom: 10px;
}
.wrapContent >>> .serach {
  padding: 6px 12px;
  background-color: #0085d0;
}
.wrapContent >>> .el-input__icon {
  line-height: 30px;
}
.wrapContent >>> .elRow {
  width: 48%；;
}
.chartsWrap {
  position: absolute;
  left: 20px;
  top: 115px;
  right: 20px;
  bottom: 20px;
}
.chartsItem {
  width: calc(50% - 10px);
  height: calc(50% - 10px);
  background: #fff;
  float: left;
}
.chartsItem:nth-child(even) {
  float: right;
}
.chartsItem:nth-child(1),
.chartsItem:nth-child(2) {
  margin-bottom: 10px;
}
.chartsItem:nth-child(3),
.chartsItem:nth-child(4) {
  margin-top: 10px;
}
</style>
