import axios from "axios";



const baseService = {
    baseURL: "http://121.196.36.219:80", // api base_url
    timeout: 600000, // 请求超时时间
}



const instance = axios.create(baseService)




export {
    instance as axios
}
