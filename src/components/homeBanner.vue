<template>
  <div>
    <a-icon v-show="bannerControl != 0 " class="lButton" @click="nextBanner"  type="left-circle" />
    <a-icon v-show="bannerControl != 4 " class="rButton" @click="beforeBanner" type="right-circle" />
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
      initP:4, //banner 第一张图片初始位置
      bannerControl:0 //限制banner 最后最前不能移动
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
        cur_p.style.marginTop = "30px"
        cur_p.style.height = "30px";
        cur_p.style.width = "672px";
        cur_p.style.fontSize = "17px"

        cur_img.src = "http://106.12.218.50/homeBanner/homeBanner" + i +".png";
        cur_img.style.width = "672px";
        cur_img.style.height = "378px";
        cur_img.style.borderRadius = "10px";
        //样式
        cur_li.style.float = "left"
        cur_li.style.position = "relative"
        cur_li.style.left = this.initP + "%"
        cur_li.style.transitionDuration = "0.7s"
        cur_li.style.marginLeft = "3%"


        cur_li.appendChild(cur_img);
        cur_li.appendChild(cur_p);

        cur_ul.appendChild(cur_li);

        e.push(cur_li);
      }

      this.bannerData = e
    },
    nextBanner(){
      this.bannerControl = this.bannerControl - 1
      this.initP = this.initP + 10.5
      let e = this.bannerData
      e.forEach(el => {
         el.style.left = this.initP + "%"

      })
    },
    beforeBanner(){
      this.bannerControl = this.bannerControl + 1
      this.initP = this.initP - 10.5
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
  margin: auto;
  height: 378px;
  width: 500%;
}

.lButton{
  position: absolute;
  font-size: 40px;
  z-index: 6;
  top: 35%;
  left: 1%
}
.rButton{
  position: absolute;
  font-size: 40px;
  z-index: 6;
  top: 35%;
  right: 1%;
}


</style>
