export const CHANGE_LOADING_BAR = "CHANGE_LOADING_BAR"
export const SET_INVITATIONCODE = "SET_INVITATIONCODE"
export const SET_USER = "SET_USER"
export const SET_LINKS = "SET_LINKS"
export const SET_PLAYMUSIC = "SET_PLAYMUSIC"
const loadQueue = []
export default {
    setLoaded(state , loaded = true){
        state.isLoaded = loaded
    },
    [CHANGE_LOADING_BAR](state , loadingBarState){
        if (loadingBarState) {
            loadQueue.push(true)
        } else {
            loadQueue.pop()
        }

        state.loading =  loadQueue.length > 0
    },
    [SET_INVITATIONCODE](state , invitationCode){
        localStorage.setItem('invitationCode', invitationCode);
        state.invitationCode = invitationCode
    },
    [SET_USER](state , user){
        localStorage.setItem('user', JSON.stringify(user));
        state.user = user
    },
    [SET_LINKS](state , links){
        state.links = links
    },
    setPlayMusic(state , playMusic){
        state.playMusic = playMusic
    },
    setOpenId(state , openid){
        localStorage.setItem('openid', openid);
        state.openid = openid
    } ,
    setAndroid(state , isAndroid){
        state.isAndroid = isAndroid
    },
    setIOS(state , isIOS){
        state.isIOS = isIOS
    }
}
