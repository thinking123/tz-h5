const openid = localStorage.getItem('openid');
let user = localStorage.getItem('user')
if(user){
    user = JSON.parse(user)
}
export default {
    isLoaded:false,
    openid:openid ? openid : null,
    invitationCode:"",
    loading:false,
    playMusic:true,
    links:[],
    user:user ? user : null,
    isAndroid:false,
    isIOS:false
}
