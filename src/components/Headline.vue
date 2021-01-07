<template>
  <div class="head">
    <h1 class="headFont">{{ mainTitle }}</h1>
    <h1 class="headBgc">{{ bgcTitle }}</h1>
  </div>
</template>

<script>
export default {
  name: "Headline",
  data(){
    return{


    }
  },
  props:{
    mainTitle:{
      type:String,
      default:"主标题"
    },
    bgcTitle:{
      type:String,
      default:"Bgc Title"
    },
  },
}
</script>

<style scoped>
  .head{
    position: relative;
    text-align: center;
    width: 100%;
    padding: 30px 0;
    margin: 70px 0;
    background-color: #ffffff;

  }
  .headFont{
    position: relative;
    z-index: 2;
    font-size: 50px;
  }
  .headBgc{
    position: absolute;
    left: 0;
    right: 0;
    top: -60px;
    z-index: 1;
    opacity:0.1 ;
    font-size: 100px;
  }
</style>
