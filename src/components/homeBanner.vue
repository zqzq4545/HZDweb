<template>
  <div>
    <a-icon class="lButton" @click="beforeBanner"  type="left-circle" />
    <a-icon class="rButton" @click="nextBanner" type="right-circle" />
    <ul id="banner">
    </ul>

  </div>
</template>

<script>
export default {
  name: "homeBanner",
  mounted() {
    this.createBanner()

  },
  created() {

  },
  data (){
    return {
      bannerData:[],
      initP:4 //banner 第一张图片初始位置
    }
  },
  methods:{
    createBanner(){
      let e = new Array();
      var cur_ul = document.getElementById("banner");
      for (let i = 1 ; i <= 5; i++){

        var cur_li = document.createElement("li");
        var cur_img = document.createElement("img");
        var cur_p = document.createElement("p");

        // 文字
        // if( i == 1){
        //   cur_p.innerHTML = "这里是文字表述1"
        //
        // }else if ( i == 2 ){
        //   cur_p.innerHTML = "这里是文字表述2"
        // }
        switch (i){
          case 1 :
            cur_p.innerHTML = "这里是文字表述1"
              break;
          case 2 :
            cur_p.innerHTML = "这里是文字表述2"
              break;
          case 3 :
            cur_p.innerHTML = "这里是文字表述3"
            break;
          case 4 :
            cur_p.innerHTML = "这里是文字表述4"
            break;
          case 5 :
            cur_p.innerHTML = "这里是文字表述5"
            break;
        }
        cur_p.style.position = "relative";
        cur_p.style.height = "30px";
        cur_p.style.width = "672px";

        cur_img.src = "http://106.12.218.50/homeBanner/homeBanner" + i +".png";
        cur_img.style.width = "672px";
        cur_img.style.height = "378px";
        //样式
        cur_li.style.float = "left"
        cur_li.style.position = "relative"
        cur_li.style.left = this.initP + "%"
        cur_li.style.transitionDuration = "1s"
        cur_li.style.marginLeft = "3%"


        cur_li.appendChild(cur_img);
        cur_li.appendChild(cur_p);

        cur_ul.appendChild(cur_li);

        e.push(cur_li);
      }

      this.bannerData = e
    },
    nextBanner(){
      this.initP = this.initP + 10
      let e = this.bannerData
      e.forEach(el => {
         el.style.left = this.initP + "%"

      })
    },
    beforeBanner(){
      this.initP = this.initP - 10
      let e = this.bannerData
      e.forEach(el => {
        el.style.left = this.initP + "%"

      })
    }


  },
}
</script>

<style scoped>
ul{
  list-style: none;
  position: absolute;
  padding: 0;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 378px;
  width: 500%;

  /*display: flex;*/
  /*flex-direction: row;*/
  /*justify-content:space-around;*/


}
/*ul:hover{*/
/*  cursor:pointer;*/
/*}*/
@keyframes moveLeft
{
  0%    {right:0px}
  100%  {right:675px}
}
.lButton{
  position: absolute;
  font-size: 40px;
  z-index: 6;
  top: 45%;

}
.rButton{
  position: absolute;
  font-size: 40px;
  z-index: 6;
  top: 45%;
  right: 0;
}


</style>
