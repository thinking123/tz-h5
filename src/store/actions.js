import http from '../utils/http'
import {SET_INVITATIONCODE ,SET_USER ,SET_LINKS} from "./mutations";

const checkInvitationCode = async function checkInvitationCode({ commit },invitationCode) {
    const res = await http.checkInvitationCode({
        invitationCode
    })

    if(res == 1){
        commit(SET_INVITATIONCODE , invitationCode)
    }
    return res
}
const register = async function register({ commit }, data) {
    console.log('register')
    const res = await http.register(data)
    console.log('register end')
    // if(res == 1){
    //     commit(SET_USER , {
    //         userName:data.userName,
    //         userPhone:data.userPhone,
    //         userHead:data.userHead,
    //         userSeat:data.userSeat,
    //         userCompany:data.userCompany,
    //     })
    // }
    return res
}
const getUser = async function getUser({ commit }, data) {
    const res = await http.getUser(data)
    if(res){
        commit(SET_USER , res)
    }
    return res
}
const getLink = async function getLink({ commit }, data) {
    const res = await http.getLink(data)
    if(res){
        commit(SET_LINKS , res)
    }
    return res
}

export default {
    checkInvitationCode,
    register,
    getUser,
    getLink
}
