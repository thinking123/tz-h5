const openid = localStorage.getItem('openid');
const invitationCode = localStorage.getItem('invitationCode');
let user = localStorage.getItem('user')
if(user){
    user = JSON.parse(user)
}
export default {
    isLoaded:false,
    openid:openid ? openid : null,
    invitationCode:invitationCode,
    loading:false,
    playMusic:true,
    links:[],
    user:user ? user : null,
    isAndroid:false,
    isIOS:false
}
