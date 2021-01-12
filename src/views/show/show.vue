<template>
  <div style="padding-top: 75px">
    <a-row :span="24" style="height: 100vh">
      <a-col :span="12" >
        <div class="exhibitionL">
          <p style="font-size: 40px">
            教室照片 8:9
          </p>
        </div>
      </a-col>

      <a-col :span="12"  >
        <div class="exhibitionR1">
          <p style="font-size: 40px" >
            宿舍照片 16:9
          </p>
        </div>
      </a-col>

      <a-col :span="12"  >
        <div class="exhibitionR2">
          <p style="font-size: 40px" >
            图书馆照片 16:9
          </p>
        </div>
      </a-col>

    </a-row>

    <headline :main-title="eatTitle" :bgc-title="eatTitle2"></headline>

    <div class="eat">
        <a-row>
          <a-col :span="8">
          <a-steps :current="current" direction="vertical" >
            <a-step v-for="item in steps" :key="item.title" :title="item.title" :description="item.description" />
          </a-steps>
          </a-col>

          <a-col :span="16">
            <div class="steps-content">
              {{ steps[current].content }}
            </div>
            <div class="steps-action">
              <a-button v-if="current < steps.length - 1" type="primary" @click="next">
                Next
              </a-button>
              <a-button
                  v-if="current == steps.length - 1"
                  type="primary"
                  @click="$message.success('Processing complete!')"
              >
                Done
              </a-button>
              <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">
                Previous
              </a-button>
            </div>
          </a-col>
        </a-row>
      </div>

    <headline :main-title="livingTitle" :bgc-title="livingTitle2" > </headline>

    <div class="accommodation">
      <a-row :span="24" type="flex" justify="space-around" align="middle" >
        <a-col :span="12">
          <a-card hoverable style="width: 240px">
            <img
                slot="cover"
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
            <a-card-meta title="Europe Street beat">
              <template slot="description">
                www.instagram.com
              </template>
            </a-card-meta>
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card hoverable style="width: 240px">
            <img
                slot="cover"
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
            <a-card-meta title="Europe Street beat">
              <template slot="description">
                www.instagram.com
              </template>
            </a-card-meta>
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card hoverable style="width: 240px">
            <img
                slot="cover"
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
            <a-card-meta title="Europe Street beat">
              <template slot="description">
                www.instagram.com
              </template>
            </a-card-meta>
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card hoverable style="width: 240px">
            <img
                slot="cover"
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
            <a-card-meta title="Europe Street beat">
              <template slot="description">
                www.instagram.com
              </template>
            </a-card-meta>
          </a-card>
        </a-col>

      </a-row>

    </div>

    <headline :main-title="activityTitle" :bgc-title="activityTitle2" ></headline>

    <div class="activity">

        <a-steps v-model="current1" type="navigation" size="small" :style="stepStyle">
          <a-step
              title="运动"
              sub-title="00:01:02"
              description="每周体育锻炼。"
          >
          <a-icon slot="icon" type="fire" />
          </a-step>
          <a-step
              title="思想"
              sub-title="00:01:02"
              description="每周思政教育。"
          >
            <a-icon slot="icon" type="bulb" />
          </a-step>
          <a-step
              title="文化"
              sub-title="waiting for longlong time"
              description="特色文化活动。"
          >
            <a-icon slot="icon" type="picture" />
          </a-step>
        </a-steps>

    </div>

  </div>
</template>

<script>
import Headline from "@/components/Headline";

export default {
  name: "show",
  components: {
    Headline
  },

  data (){
    return{
      //标题设置
      eatTitle:"食·在鸿志达",
      eatTitle2:"Eat at Hzd",
      livingTitle:"住·在鸿志达",
      livingTitle2:"Living In Hzd",
      activityTitle:"行·在鸿志达",
      activityTitle2:"Activity In Hzd",

      //食物部分内容
      current: 0,
      steps: [
        {
          title: '餐前小菜',
          content: '这里是图片',
          description:'这里是介绍11'
        },
        {
          title: '可口主食',
          content: 'Second-这里是图片',
          description:'这里是介绍1221231323423'
        },
        {
          title: '营养水果',
          content: 'Last-这里是图片',
          description:'这里是介绍11231231322413412341'
        },
        {
          title: '保证营养',
          content: 'Last-这里是图片',
          description:'这里是介绍11231231322413412341'
        },
      ],
     //活动部分
      current1: 0,
      stepStyle: {
        marginBottom: '60px',
        boxShadow: '0px -1px 0 0 #e8e8e8 inset',
      },


    };
 },


  methods: {
    next() {
      this.current++;
    },
    prev() {
      this.current--;
    },
  },
}

</script>

<style scoped>
@import "~@/assets/css/show.css";


.exhibitionL{
  height: 100vh;
  background-color: red;
  position: relative;
}
.exhibitionR1{
  height: 50vh;
  background-color: green;
  position: relative;
}
.exhibitionR2{
  height: 50vh;
  background-color: blue;
  position: relative;
}
</style>
