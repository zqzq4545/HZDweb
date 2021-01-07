<template>
  <div :class="navbarClass">

      <div class="navbar-btn" >
        <button @click="homeClick" >首页</button>
        <button @click="campusClick" >校园</button>
        <button @click="courseClick" >教学</button>
        <button @click="showClick" >生活</button>
        <button @click="otherClick" >收获</button>

      </div>



  </div>

</template>

<script>
export default {
  name: "navbar",
  created() {
    this.opaque = false;
  },
  mounted() {
    window.addEventListener('scroll',this.handleScroll)
  },
  data(){
    return{
      opaque:true,
      navbarClass:'navbar2',

    }
  },

  methods:{
    //------------------------------------------------事件------------------------------------------------------
    //滚轮事件
    handleScroll(){
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      // console.log('滚轮',scrollTop);
      if(this.$route.path == '/'){
        if(scrollTop != 0 ){
          this.navbarClass = 'navbar animate__animated animate__fadeIn ';

        }else{
          this.navbarClass = 'navbar2';
        }
      }

    },
    homeClick(){
      this.$router.push("/");
      this.navbarClass = 'navbar2';
    },
    courseClick(){
      this.$router.push("Course");
      this.navbarClass = 'navbar';
    },
    campusClick(){
      this.$router.push("Campus");
      this.navbarClass = 'navbar';
    },
    showClick(){
      this.$router.push("Show");
      this.navbarClass = 'navbar';
    },
    otherClick(){
      this.$router.push("Others");
      this.navbarClass = 'navbar';
    },


  }
}
</script>

<style scoped>
@import "~@/assets/css/navbar.css";
</style>