const openid = localStorage.getItem('openid');
let invitationCode = localStorage.getItem('invitationCode');
let user = localStorage.getItem('user')
if(user){
    user = JSON.parse(user)
}

export default {
    isLoaded:false,
    openid:openid ? openid : null,
    invitationCode:invitationCode,
    loading:false,
    playMusic:false,
    links:[],
    user:user ? user : null,
    isAndroid:false,
    isIOS:false,
    showTouch:false,
    beginMusic:false
}
