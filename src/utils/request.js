//
// import axios from 'axios'
// import { VueAxios } from './axios'
// import { message } from "ant-design-vue";
// import router from '@/router'
//
// const baseurl = 'http://121.196.36.219:80'
//
// const baseService = {
//     baseURL: baseurl, // api base_url
//     timeout: 600000, // 请求超时时间
//     headers: {
//         'Content-Type': 'application/json;charset=UTF-8',
//         'client-type': 'manager',
//         'channel-type': 'web'
//     }
// }
//
//
//
// const service = axios.create(baseService)
//
// const errorHandler = (error) => {
//     // 对arraybuffer不做拦截处理
//     if (error.response.request.responseType == 'arraybuffer') {
//         return
//     }
//
//     if (error.response && error.response.data && error.response.data.message) {
//         message.error(error.response.data.message);
//     } else {
//         message.error("服务器连接异常，请检查网络连接");
//     }
//
//     return Promise.reject();
// };
//
// service.interceptors.request.use((config) => {
//
//     return config;
//
// }, errorHandler);
//
// service.interceptors.response.use((response) => {
//     const { data } = response
//
//     if (data.code == 'P4007') {
//         localStorage.clear()
//         router.push({ path: '/user' })
//     }
//
//     return data;
// }, errorHandler);
//
// const installer = {
//     vm: {},
//     install(Vue) {
//         Vue.use(VueAxios, service)
//     }
// }
//
//
// export {
//     installer as VueAxios,
//     service as axios,
// }
