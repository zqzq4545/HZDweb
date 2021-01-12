<template>
<div style="padding-top: 75px">
  <div style="text-align: center">
    <img src="@/assets/image/feedback/title.png" >
  </div>

  <headline :main-title="title1" :bgc-title="title1B" >
  </headline>

  <div style="text-align: center;margin-bottom: 60px"  >
    <img src="@/assets/image/feedback/AllChatting.jpg" >
  </div>

</div>
</template>
import Headline from "@/components/Headline";

<script>
import Headline from "@/components/Headline";


export default {
  name: "others",
  components: {
    Headline,
  },
  created() {

  },
  data(){
    return {
      //标题
      title1:"多说无益，眼见为实",
      title1B:"Cut the Crap"

    }
  },
  methods:{

  }
}
</script>

<style scoped>


</style>
