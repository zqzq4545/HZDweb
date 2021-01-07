import { axios } from "@/network/api";

export function getVerificationCode(phone) {
    return axios({
        method: 'get',
        url: `/studentInfo/getCode/${phone}`
    })
}
