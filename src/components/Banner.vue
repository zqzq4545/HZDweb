<template>
  <div>
    <ul id="banner"  class="banner"></ul>

  </div>
</template>

<script>








export default {
  name: "Banner",
  mounted() {
    this.createBanner()

  },
  created() {

  },
  data() {
   return {
      sz:[],
    }
  },
  methods:{
    //创建轮播图
    createBanner () {
      let timer = setInterval(nextPicture,4000)
      let imgData = [];
      var cur_ul =  document.getElementById("banner");
      for ( let i = 1 ; i <= 5; i++){
        var cur_li = document.createElement("li");
        var cur_img = document.createElement("img");

        cur_img.src = "http://106.12.218.50/test/" + i + ".png"

        cur_img.style.width = "400px";
        cur_img.style.height = "200px";
        cur_li.appendChild(cur_img);

        cur_ul.appendChild(cur_li);

        imgData.push(cur_li);
        imgData[imgData.length-1].style.left= "0px" ;
        //设置li样式
        cur_li.style.float = "left"
        cur_li.style.position = "absolute"
        cur_li.style.left = "0px"
        cur_li.style.transitionDuration = "0.4s"
      }

      let len = imgData.length - 1;
      imgData[len - 2].style.left = "0px";
      imgData[len - 1].style.zIndex =5;
      imgData[len - 1].style.left = "0px";
      imgData[len - 1].style.left = "200px";
      imgData[len - 1].style.transform = "scale(1.3)";
      imgData[len].style.left = "400px";
      function nextPicture(){
        let give_up = imgData[len];
        imgData.pop()
        imgData.unshift(give_up)
        for (let i = 0; i < imgData.length; i++ ){
            imgData[i].style.zIndex = i;
            imgData[i].style.transform = "scale(1)"
        }
        imgData[len-2].style.left = "0px";
        imgData[len-1].style.zIndex = 5;
        imgData[len-1].style.left = "200px";
        imgData[len-1].style.transform = "scale(1.3)";
        imgData[len-1].style.opacity = 1;
        imgData[len].style.left = "400px";

      }
    },
    //轮播图切换
    nextPicture(){

    },
  }


}

</script>

<style scoped>
ul{
  list-style:none;
  position:absolute ;
  padding: 0;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  width: 800px;
  height: 200px;
}
li {

 }
ul:hover{
  cursor: pointer;
}

.banner{
  position: relative;
  z-index: 3;

}


</style>
