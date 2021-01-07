<template>


      <div class="roadnum-all" ref="roadnumall">
        <div id="roadnum" ref="dom"></div>
      </div>


</template>

<script>
import echarts from "echarts"


export default {
  name: "histogram",
  data() {
    return {
      data: [],
      dom: null
    }
  },
  props:{
    histogramData:{
      type:Array,
      default:["2019平均提分", "2019最高提分", "2020平均提分", "2020最高提分" ]
    },
    histogramInfo:{
      type:Array,
      default:[86.5, 227, 87.8, 202]
    }
  },
  mounted() {
    this.$nextTick(() => {      // 给图标宽高 使图标填满容器
      document.getElementById('roadnum').style.width = this.$refs.roadnumall.offsetWidth + 'px';
      document.getElementById('roadnum').style.height = this.$refs.roadnumall.offsetHeight + 'px';
      this.draw();
    })
  },
  methods: {
    // 画图
    draw() {
      const option = {
        textStyle: {
          color: "#000000",
          fontSize: 14
        },
        legend: {
          show:false
        },
        color: ["#1488CC", "#2B32B1"],
        grid: {
          show: false,
        },
        xAxis: {
          axisLabel: {
            color: "#000000",
            fontSize: 18,
            interval: 0,
            padding:[10,0,0,0]
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          data: this.histogramData,
          type: "category"
        },
        yAxis: {
          show:false
        },
        series: [
            {
          data: this.histogramInfo,
          type: "bar",
          barMaxWidth: "auto",
          barWidth: 30,
          itemStyle: {
            color: {
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              type: "linear",
              global: false,
              colorStops: [{
                offset: 0,
                color: "#2B32B2"
              }, {
                offset: 1,
                color: "#1488CC"
              }]
            }
          },
          label: {
            show: true,
            position: "top",
            distance: 10,
            color: "#000000",
            fontSize:"24",
            formatter: `{c}分`,
          }
        },
          {
          data: [1, 1, 1, 1],
          type: "pictorialBar",
          barMaxWidth: "20",
          symbol: "diamond",
          symbolOffset: [0, "50%"],
          symbolSize: [30, 15]
        }, {
          data: this.histogramInfo,
          type: "pictorialBar",
          barMaxWidth: "20",
          symbolPosition: "end",
          symbol: "diamond",
          symbolOffset: [0, "-50%"],
          symbolSize: [30, 12],
          zlevel: 2
        },  {
          data: [1, 1, 1, 1],
          type: "pictorialBar",
          barMaxWidth: "20",
          symbol: "diamond",
          symbolOffset: [0, "50%"],
          symbolSize: [30, 15],
          zlevel: -2
        }, ],
        tooltip: {
          trigger: "axis",
          show: false
        }

      };
      this.dom = echarts.init(this.$refs.dom);
      this.dom.setOption(option, true)
      window.addEventListener("resize", () => {
        if (document.getElementById('roadnum') && this.$refs.roadnumall) {
          document.getElementById('roadnum').removeAttribute('_echarts_instance_');
          document.getElementById('roadnum').style.width = this.$refs.roadnumall.offsetWidth + 'px';
          document.getElementById('roadnum').style.height = this.$refs.roadnumall.offsetHeight + 'px';
          this.dom.resize();
        }
      });
    }
  }
}
</script>




<style scoped>
.roadnum-all {
  width: 650px;
  height: 400px;
  position: relative;
  z-index: 1;

}




</style>
