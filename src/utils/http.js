import http from './axios'
const HTTP_OK = '200';

function parseRespond(res) {
    const {status, msg, code} = res;

    if(code && msg){
        throw new Error(msg);
    }else{
        return res
    }
    // if (status == HTTP_OK) {
    //     return data;
    // } else {
    //
    // }
    //
    // return res
}

 async function checkInvitationCode(params) {
    const url = `/interface/checkInvitationCode`
    return http.get(url , params).then(parseRespond)
}


 async function register(params) {
    const url = `/interface/register`
    return http.get(url, {params}).then(parseRespond)
}

export async function getLink(params={}) {
    const url = `/interface/getLink`
    return http.get(url, {params}).then(parseRespond)
}

export async function checkPhone(params) {
    const url = `/interface/checkPhone`
    return http.get(url, {params}).then(parseRespond)
}
export async function checkOpenid(params) {
    const url = `/interface/checkOpenid`
    return http.get(url, {params}).then(parseRespond)
}
export async function getUser(params) {
    const url = `/interface/getUser`
    return http.get(url, {params}).then(parseRespond)
}


export default {
    checkInvitationCode,
    register,
    getLink,
    getUser
}
