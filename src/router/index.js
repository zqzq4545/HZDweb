import Vue from 'vue'
import VueRouter from "vue-router";
import {routerMap} from "@/router/router.config";

Vue.use(VueRouter)



const router = new VueRouter({
    mode:'history',
    linkActiveClass:"active",
    routes:routerMap,
})

export default router