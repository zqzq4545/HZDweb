

export const mixin = {
    data() {
        return {
            screenWidth:0,     // 屏幕宽
            screeHeight:0,   // 屏幕高
            }
    },
    methods: {
        // 初始方法获取屏幕大小
        initData() {
        this.screenHeight =  document.documentElement.clientHeight || document.body.clientHeight ;
        this.screenWidth =  document.documentElement.clientWidth || document.body.clientWidth;
        },

    },


}



