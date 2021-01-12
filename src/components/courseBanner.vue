<template>
  <div>
    <a-icon v-show="bannerControl != 0 " class="lButton" @click="nextBanner"  type="left" />
    <a-icon v-show="bannerControl != 4 " class="rButton" @click="beforeBanner" type="right" />
    <div class = "show">
      <ul id="banner">
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "courseBanner",
  mounted() {
    this.createBanner()
  },
  data (){
    return {
      bannerData:[],
      initP:0, //banner 第一张图片初始位置
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


        cur_img.src = "http://106.12.218.50/courseBanner/test" + i +".png";
        cur_img.style.width = "290px";
        cur_img.style.height = "614px";
        cur_img.style.borderRadius = "10px";
        //样式
        cur_li.style.float = "left"
        cur_li.style.position = "relative"
        cur_li.style.transitionDuration = "0.5s"
        cur_li.style.marginLeft = "0"

        cur_li.appendChild(cur_img);
        cur_ul.appendChild(cur_li);

        e.push(cur_li);
      }

      this.bannerData = e
    },
    nextBanner(){
      this.bannerControl = this.bannerControl - 1
      this.initP = this.initP + 290
      let e = this.bannerData
      e.forEach(el => {
        el.style.left = this.initP + "px"
      })
      this.$emit('beforeClick', this.bannerControl)
    },
    beforeBanner(){
      this.bannerControl = this.bannerControl + 1
      this.initP = this.initP - 290
      let e = this.bannerData
      e.forEach(el => {
        el.style.left = this.initP + "px"

      })
      this.$emit('nextClick', this.bannerControl)
    }
  },


}

</script>

<style scoped>
ul{
  list-style: none;
  position: absolute;

  padding-left: 0;
  padding-top: 14px;
  width: 600%;

}

.lButton{
  position: absolute;
  font-size: 40px;
  z-index: 10;
  top: 45%;
  left: -60px;
  opacity: 0.3;
}
.rButton{
  position: absolute;
  font-size: 40px;
  z-index: 10;
  top: 45%;
  right: -50px;
  opacity: 0.3;
}
.show{
  position: absolute;
  width: 290px;
  height: 628px;
  overflow: hidden;
}
</style>
