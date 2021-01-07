export const routerMap = [
    {
        path: "/",
        // redirect:"/home",
        name: "Home",
        component: () => import ("@/views/home/home.vue"),
    },
    {
        path: "/course",
        name: "Course",
        component: () => import ("@/views/course/course"),
    },
    {
        path: "/campus",
        name: "Campus",
        component: () => import ("@/views/campus/campus"),
    },
    {
        path: "/show",
        name: "Show",
        component: () => import ("@/views/show/show"),
    },
    {
        path: "/others",
        name: "Others",
        component: () => import ("@/views/others/others"),
    },

]