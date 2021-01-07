module.exports = {
    lintOnSave:false,

    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    javascriptEnabled: true,
                },
            },
        },
    },

    devServer: {

        proxy: {
            ["/api"]: {
                target: 'http://121.196.36.219:80',
                // ws: false,
                changeOrigin: true,
                pathRewrite: { // 路径重写，
                    '^/api': '/api' // 替换target中的请求地址，也就是说以后你在请求http://api.jisuapi.com/XXXXX这个地址的时候直接写成/api即可。
                }
            }
        }
    }
}
