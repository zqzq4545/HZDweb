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


    <headline :main-title="classroom" :bgc-title="classroom2" ></headline>
    <headline :main-title="dormitory" :bgc-title="dormitory2" ></headline>
    <headline :main-title="library" :bgc-title="library2" ></headline>
  </div>

</template>

<script>
import Headline from "@/components/Headline";

export default {
  components: {

    Headline
  },
  data() {
    return {
      // 标题配置
      classroom:"教室",
      classroom2:"ClassRoom",
      dormitory:"宿舍",
      dormitory2:"Dormitory",
      library:"图书馆",
      library2:"Library"


    }
  },


};
</script>
<style scoped>
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
