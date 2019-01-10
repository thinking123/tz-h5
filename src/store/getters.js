export default {
    isLoaded(state){
        return state.isLoaded
    },
    user(state){
        return state.user
    },
    loading: state => state.loading,
    invitationCode: state => state.invitationCode,
    openid: state => state.openid,
    playMusic: state => state.playMusic,
    links: state => state.links,
}
