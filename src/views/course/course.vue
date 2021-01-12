<template>
  <div>
    <div class="phoneBanner">
      <div class="phone">
        <img src="@/assets/image/course/phone.png">
      </div>
      <div class="banner">
        <course-banner @beforeClick="beforeBannerText" @nextClick="nextBannerText" > </course-banner>
      </div>
      <div class="text">
        <p>
          {{bannerText}}
        </p>

      </div>
      <div class="phoneBottom">
        <img src="@/assets/image/course/PhoneDi.png" >
      </div>
    </div>

    <Headline :main-title="title1" :bgc-title="title1B" ></Headline>

    <div class="teacherIntroduce">

      <div class="teacherChose" >
        <a-button type="primary" >
          物理
        </a-button><br>
        <a-button type="primary" >
          生物
        </a-button><br>
        <a-button type="primary" >
          化学
        </a-button><br>
        <a-button type="primary" >
          政治
        </a-button><br>
        <a-button type="primary" >
          历史
        </a-button><br>
        <a-button type="primary" >
          地理
        </a-button>


      </div>

    </div>

    <Headline  :main-title="title2" :bgc-title="title2B" ></Headline>

    <div class="teachingMethod">
        <a-collapse default-active-key="1" :bordered="false">
          <template #expandIcon="props">
            <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
          </template>
          <a-collapse-panel key="1" header="早晚背诵默写测试" :style="customStyle">
            <p>教务早晚检测学生各科的背诵默写。<br>
              对背诵、默写不合格的考生严加管理。<br>
              默写只要不合格，哪怕错一个字，重默！<br>
              默写到无误为止。2-3 天后，继续挨个查所有考生记忆情况，不合格者继续重默到完美。</p>

          </a-collapse-panel>
          <a-collapse-panel key="2" header="缜密的课堂监管" :style="customStyle">
            <p>教务进班听课<br>
              校长随机抽查，进班听课，督导<br>
              监控室内有老师实时监控课堂情况，随时群内通报给家长<br>
              课后，班主任听取任课教师对每个学生的学习状况评价和细节描述，于当天晚上逐一向家长汇报。<br>
            </p>
          </a-collapse-panel>
          <a-collapse-panel key="3" header="严谨的周测月考" :style="customStyle">
            <p>鸿志达培训学校每周组织各科周测以及每月组织各科月考，<br>
              各科试卷由任课老师根据学生情况精心编写，并且考试后任课老师根据学生表现和成绩进行评价。</p>
          </a-collapse-panel>
        </a-collapse>
    </div>

    <Headline  :main-title="title3" :bgc-title="title3B" ></Headline>

    <div class="teacherDuty" >
       <p>
         <span>在鸿志达</span>，教师把控每一位学生的作答细节，当场纠正、指出学生作答的不足(例如：跳步、推导不缜密、计算手段不优、写作用词不
         恰当等)和错误(例如 理解有偏差、公式和文字记忆不精准、作答过程不严谨存
         在理论或逻辑漏洞)。每个学生的问题当堂得到解决。
       </p>
      <p>
        <span>在鸿志达</span>,学生作业由任课教师亲自批阅及教务辅助批阅。发现问题后，任课教师或教务及时找相关学生纠正。鸿志达提供同一思想试题，让学生多次、反复练习，练会为止。
      </p>
      <p>
        <span>在鸿志达</span>,答疑是各科任课教师的责任和必须。同时，鸿志达进班听课的教务也能为学生答疑。
      </p>
    </div>

    <Headline  :main-title="title4" :bgc-title="title4B" ></Headline>

    <div class="communicate">
      <a-steps v-model="current" type="navigation" size="small" :style="stepStyle">
        <a-step
            title="Step 1"
            sub-title="00:00:05"
            status="wait"
            description="上午"
        />
        <a-step
            title="Step 2"
            sub-title="00:01:02"
            status="wait"
            description="下午"
        />
        <a-step
            title="Step 3"
            sub-title="waiting for longlong time"
            status="wait"
            description="晚上"
        />
      </a-steps>
    </div>


  </div>
</template>

<script>
import Headline from "@/components/Headline";
import courseBanner from "@/components/courseBanner";


export default {
  name: "course",
  components: {
    Headline,
    courseBanner,
  },
  data() {
    return {
      //banner文本
      bannerText:"教务和家长沟通学生学情",

      //标题
      title1:"名师风采",
      title1B:"Teachers",
      title2:"教学方法",
      title2B:"Methods",
      title3:"教师责任",
      title3B:"Responsibility",
      title4:"24小时沟通",
      title4B:"24 Hours",

      current:0,

      customStyle: 'background: #ffffff;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden;font-size:20px;',
      stepStyle: {
        marginBottom: '60px',
        boxShadow: '0px -1px 0 0 #e8e8e8 inset',
      },


    };
  },
  methods:{
    //控制banner文字
    nextBannerText(e){
      this.bannerTextChange(e)
    },
    beforeBannerText(e){
      this.bannerTextChange(e)
    },
    bannerTextChange(e){
      switch (e){
        case 0 :
          this.bannerText = "教务和家长沟通学生学情"
          break;
        case 1 :
          this.bannerText = "这里是文字表述2"
          break;
        case 2 :
          this.bannerText = "这里是文字表述3"
          break;
        case 3 :
          this.bannerText = "这里是文字表述4"
          break;
        case 4 :
          this.bannerText = "这里是文字表述5"
          break;
      }
    }



  },
}
</script>

<style scoped>
@import "~@/assets/css/course.css";



</style>
