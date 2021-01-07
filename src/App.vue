<template>
  <div id="app">
    <navbar></navbar>

    <router-view></router-view>

    <bottom></bottom>



  </div>
</template>

<script>
import navbar from "@/components/Navbar";
import {mixin} from "@/views/home/home"
import bottom from "@/components/Bottom"


export default {
  mixins: [mixin],
  name: 'App',
  components: {
    navbar,
    bottom,

  },
  data(){
    return{
    }
  },
  mounted() {


  },
  methods:{


  },





}
</script>

<style>
@import "./assets/css/normalize.css";
@import "./assets/css/main.css";
@import "~animate.css";

</style>
