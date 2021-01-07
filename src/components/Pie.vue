<template>


  <div class="roadnum-all" ref="roadnumall">
    <div id="roadnum" ref="dom"></div>
  </div>


</template>

<script>
import echarts from "echarts"


export default {
  name: "Pie",
  data() {
    return {
      data: [],
      dom: null
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
        title: {
          text: '总体本科上线率95.4%',

        },
        color: ["#2B32B1","#1488CC"],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          // orient: 'vertical',
          // top: 'middle',
          show:false
        },
        series: [
          {
            type: 'pie',
            radius: '35%',
            center: ['25%', '75%'],
            selectedMode: 'single',
            data: [
              {value: 95.4,name: '本科上线率'},
              {value:4.6, name: 'others'}
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },
          {
            type: 'pie',
            radius: '35%',
            center: ['50%', '25%'],
            selectedMode: 'single',
            data: [
              {value: 1548,name: '幽州'},
              {value: 535, name: '荆州'},
              {value: 510, name: '兖州'},
              {value: 634, name: '益州'},
              {value: 735, name: '西凉'}
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },
          {
            type: 'pie',
            radius: '35%',
            center: ['70%', '75%'],
            selectedMode: 'single',
            data: [
              {value: 1548,name: '幽州'},
              {value: 535, name: '荆州'},
              {value: 510, name: '兖州'},
              {value: 634, name: '益州'},
              {value: 735, name: '西凉'}
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }

        ]

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
