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
          text: '                    总体本科上线率95.4%\n',
          subtext:'  高分班一本率100%                    普通班二本及以上率86%',
          textStyle:{
            fontSize:27,
          },
          subtextStyle:{
            color: 'rgba(0,0,0,0.9)',
            fontSize: 24
          },
          top:'5%'
        },
        color: ["#2644b8","#1f60c0","#1488CC"],
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
            radius: '60%',
            center: ['20%', '65%'],
            selectedMode: 'single',
            data: [
              {value: 40,name: '985率：40%'},
              {value: 50, name: '211率：50%'},
              {value: 10, name: '一本'}
            ],
            label:{
              show:true,
              position:'inside',
              fontWeight:'bold',
              fontSize:17
            },
            tooltip:{
              show:false
            },
            startAngle:200,
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
            radius: '60%',
            center: ['75%', '65%'],
            selectedMode: 'single',
            data: [
              {value: 86,name: '二本及以上'},
              {value: 10, name: ''},
            ],
            startAngle:200,
            label:{
              show:true,
              position:'inside',
              fontWeight:'bold',
              fontSize:17,
            },
            tooltip:{
              show:false
            },
            labelLine:{
              show:false,
            },
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
