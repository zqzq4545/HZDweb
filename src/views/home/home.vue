<template>
  <div>
   <div class="videoContainer">

      <video class="fullScreenVideo" autoplay loop muted>
        <source src="~@/assets/video/discuss.mp4" type="video/mp4"  />
      </video>

     <div class="coverVideo">

         <p style="font-size: 40px;">鸿志达教育，让考生和家长百分之百满意！</p>
         <p style="font-size:  40px;float:left" >高分班,一本率
           <span style="font-size: 55px">{{percent}}</span>
           %，每届最高提分
           <span style="font-size: 55px">{{miniScore}}</span>
           +，平均提分
           <span style="font-size: 55px">{{maxScore}}</span>
           +!</p>
       <p style="font-size:  40px;float:left"> </p>


     </div>
   </div>

    <headline :main-title="title1" :bgc-title="title1B" >
    </headline>

    <Form></Form>
    <div  class="summarize">
      <div id="summarizeLeft" :class="summarizeLeftClass">
        <p>{{summarizeLeft}}</p>
      </div>
      <div id="summarizeRight" :class="summarizeRightClass">
        <p>{{summarizeRight}}</p>
      </div>
    </div>

    <headline :main-title="title2" :bgc-title="title2B">
    </headline>

    <div class="teacher">
      <a-row :span="24" type="flex" justify="space-between">
        <a-col :span="8">
          <div class="teacher-container">
            <img src="~@/assets/image/teacher-bgc.png">
          </div>
        </a-col>
        <a-col :span="8">
          <div class="teacher-container">
            <img src="~@/assets/image/teacher-bgc.png">
          </div>
        </a-col>
        <a-col :span="8">
          <div class="teacher-container">
            <img src="~@/assets/image/teacher-bgc.png">
          </div>
        </a-col>
      </a-row>



    </div>

    <headline :main-title="title4" :bgc-title="title4B" >
    </headline>



    <div class="performance">

      <div class="timeline">

        <a-timeline>
          <a-timeline-item>
            <!--              @mouseleave="leaveTimeLine(0)"-->
            <p @mouseover="overTimeLine(0)"  ref="time0" style="color: #ffffff;background-color:#2B32B1;" >
              2019 年 03 月全托项目启动
            </p>
            <br>
          </a-timeline-item>
          <a-timeline-item>
            <p  @mouseover="overTimeLine(1)"  ref="time1" >
              2019 年 06 月 第一批全托学生参加高考
            </p>
            <br>
          </a-timeline-item>
          <a-timeline-item>
            <p  @mouseover="overTimeLine(2)" ref="time2" >
              2020 年 07 月 第二批全托学生参加高考
            </p>
            <br>
          </a-timeline-item>
          <a-timeline-item>

            <p  @mouseover="overTimeLine(3)" ref="time3">
              2021 再攀高峰
            </p>

          </a-timeline-item>
        </a-timeline>
      </div>

      <div class="charts">
        <histogram v-if="timeLineShow == 0"></histogram>
        <Pie v-if="timeLineShow == 1" ></Pie>
        <histogram :histogram-data="histogramData" :histogram-info="histogramInfo" v-if="timeLineShow == 2"></histogram>
      </div>




    </div>
    <headline :main-title="title3" :bgc-title="title3B" >
    </headline>


    <div class="culture">
      <home-banner></home-banner>
    </div>



    </div>


</template>

<script>
import {mixin} from "@/views/home/home.js"
import Headline from "@/components/Headline";
import Form from "@/components/Form"
import histogram from "@/components/histogram";
import Pie from "@/components/Pie"
import homeBanner from "@/components/homeBanner";

export default {
  mixins: [mixin],
  name: "home",
  components: {
    Headline,
    Form,
    histogram,
    Pie,
    homeBanner
  },
  mounted() {
    this.initData()
    // this.$refs.video.style.height = this.screenHeight + 'px';//背景视频和元素大小相等
    // this.$refs.video.style.width = this.screenWidth + 'px'
    this.addScore()
    window.addEventListener('scroll',this.handleScroll)
  },

  created() {

  },
  data(){
    return{
      //标题内容设置
      title1:"关于鸿志达",
      title1B:"About Us",
      title2:"核心教师",
      title2B:"Teachers",
      title3:"历届成绩",
      title3B:"Performance",
      title4:"校园生活",
      title4B:"Performance",

      summarizeLeft:"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0天津鸿志达培训学校成立于 2018 年，是一家教学、科研实力雄厚的中考、高考教育培训单位，" +
          "是经天津市教育行政部门批准成立的正规民办学校。" +
          "学校坐落在天津市河西区平山道16号增6号(天津市实验中学对面)，" +
          "享有天津市重点区内一切优质教育资源。学校占地面积为3000平方米，" +
          "拥有四层楼。楼内配备宽敞、明亮、洁净的教学区、" +
          "餐饮区、锻炼区、宿舍区、洗衣晾衣区、洗浴卫生区等区域。" +
          "同时，鸿志达配备操场和免费停车场。",
      summarizeRight:"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0鸿志达培训学校教师核心团队由天津市和平区、河西区、南开区实力派教师组成，" +
          "该团队从事初中、高中学科教学、命题研究、提分培训，平均教龄达到十五年以上。" +
          "该团队对天津中考、高考考点、命题陷阱、命题人思维、命题人命题喜好、" +
          "学生内心想法等了如指掌。除自编精品讲义外，该团队核心教师多年来积极研发题库，" +
          "持续参与考试中心、考试院专家组题库建设。",

      rollLeft:true,
      rollRight:false,
      percent:70,
      miniScore:50,
      maxScore:50,

      //操作样式
      summarizeLeftClass:['summarize-left'],
      summarizeRightClass:['summarize-right'],
      //时间线变化
      timeLineShow:0,

      //图表内容设置
      histogramData:["政、生、地多人满分","语文最高分", "数学最高分", "英语最高分" ],
      histogramInfo:[100, 132, 143, 141],
    }
  },

  methods:{
    //鼠标移入
    overTimeLine(index){
      this.leaveTimeLine(this.timeLineShow)
      this.timeLineShow = index
      if(index == 0 ){
        this.$refs.time0.style.backgroundColor = "#2B32B1"
        this.$refs.time0.style.color = "#ffffff"
      }else if(index == 1) {

        this.$refs.time1.style.backgroundColor = "#2B32B1"
        this.$refs.time1.style.color = "#ffffff"
      }else if(index == 2) {
        this.$refs.time2.style.backgroundColor = "#2B32B1"
        this.$refs.time2.style.color = "#ffffff"
      }else if(index == 3) {
        this.$refs.time3.style.backgroundColor = "#2B32B1"
        this.$refs.time3.style.color = "#ffffff"
      }
    },
    //鼠标移除
    leaveTimeLine(index){
      if(index == 0 ){
        this.$refs.time0.style.backgroundColor = "#ffffff"
        this.$refs.time0.style.color = "#000000"
      }else if(index == 1 ){
        this.$refs.time1.style.backgroundColor = "#ffffff"
        this.$refs.time1.style.color = "#000000"
      }else if(index == 2  ){
        this.$refs.time2.style.backgroundColor = "#ffffff"
        this.$refs.time2.style.color = "#000000"
      }else if(index == 3  ){
        this.$refs.time3.style.backgroundColor = "#ffffff"
        this.$refs.time3.style.color = "#000000"
      }
    },

    handleScroll(){
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

      if(this.summarizeLeftClass.length == 1 && scrollTop >= 350 ){
        this.summarizeShow();
      }
      if( scrollTop >= 2000 || scrollTop==0 ){

        this.summarizeLeftClass.splice(1)
        this.summarizeRightClass.splice(1)
      }
    },
    addScore() {
     if(this.percent < 100 ){
       setTimeout(()=> {
         this.percent = this.percent + 1;
         this.maxScore = this.maxScore + 1;
         this.miniScore = this.miniScore + 5;
         this.addScore();
       },70);

     }


    },

    summarizeShow () {
      console.log("1");
      this.summarizeLeftClass.push("animate__animated animate__fadeInDown");
      this.summarizeRightClass.push("animate__animated animate__fadeInUp")

    },

  },
}

</script>

<style scoped>

@import "~@/assets/css/home.css";



</style>
