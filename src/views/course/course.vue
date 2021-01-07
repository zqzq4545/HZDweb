<template>
  <div>
    <div class="phoneBanner">
      <div class="phone">
      <img src="@/assets/image/course/phone.png">
      </div>
      <div class="banner">
        <a-carousel arrows>
          <div
              slot="prevArrow"
              slot-scope="props"
              class="custom-slick-arrow"
              style="left: 10px;zIndex: 1"
          >
            <a-icon type="left-circle" />
          </div>
          <div slot="nextArrow" slot-scope="props" class="custom-slick-arrow" style="right: 10px">
            <a-icon type="right-circle" />
          </div>
          <div><img src="@/assets/image/course/chatting/test1.png"></div>
          <div><img src="@/assets/image/course/chatting/test2.png"></div>
          <div><img src="@/assets/image/course/chatting/test3.png"></div>

        </a-carousel>
      </div>
      <div class="text">
        <p>
          教务和家长沟通学生学情
        </p>
        <p>
          上课期间，缜密的课堂监管
        </p>
      </div>

    </div>

    <Headline></Headline>

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

    <Headline></Headline>

    <div class="teachingMethod">
        <a-collapse default-active-key="1" :bordered="false">
          <template #expandIcon="props">
            <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
          </template>
          <a-collapse-panel key="1" header="早晚背诵默写测试" :style="customStyle">
            <p>{{ text }}</p>

          </a-collapse-panel>
          <a-collapse-panel key="2" header="缜密的课堂监管" :style="customStyle">
            <p>{{ text }}</p>
          </a-collapse-panel>
          <a-collapse-panel key="3" header="严谨的周测月考" :style="customStyle">
            <p>{{ text }}</p>
          </a-collapse-panel>
        </a-collapse>
    </div>

    <Headline></Headline>

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

    <Headline></Headline>

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



export default {
  name: "course",
  components: {
    Headline,

  },
  data() {
    return {
      current:0,
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      customStyle:
          'background: #ffffff;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden;font-size:20px;',
      stepStyle: {
        marginBottom: '60px',
        boxShadow: '0px -1px 0 0 #e8e8e8 inset',
      },
    };
  },
}
</script>

<style scoped>
@import "~@/assets/css/course.css";
.ant-carousel >>> .slick-slide {
  text-align: center;
  position: relative;
  border-radius: 60px;
  line-height: 100px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;

  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}


</style>
