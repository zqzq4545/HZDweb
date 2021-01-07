<template>
  <div>
    <div class="exhibition">
        <div class="exhibitionLeft">
        <p>这是图片1</p>
        </div>
        <div class="exhibitionTop">
          <p>这是图片1</p>
        </div>
        <div class="exhibitionBottom">
          <p>这是图片1</p>
        </div>
    </div>

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


</style>
