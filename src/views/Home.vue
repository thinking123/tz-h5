<template>
    <div class="home-page">
        <!--<splash-page/>-->
        <splash-page :visible="isShowSplash"/>
        <title-animation/>
        <div class="home-content">
            <div class="content-wrap">
                <!--<div style="color:red;font-size: large">-->
                    <!--<div >{{showRegTipReg}}</div>-->
                    <!--<div>{{showHadTipReg}}</div>-->
                    <!--<div>{{showTip}}</div>-->
                <!--</div>-->

                <title-item v-for="(item ,index) in items"
                            :content="item.linkName" :src="item.linkName"
                            :key="item.id" @click.native="handleItemClick(item)"/>
            </div>
        </div>
        <tip-dialog :visible.sync="showTip"/>
        <!--<tip-register-dialog :visible.sync="showTipReg"/>-->
        <input-info-tip-dialog :visible.sync="showRegTipReg"/>
        <had-invitation-dialog :visible.sync="showHadTipReg"/>

    </div>
</template>

<script>
    /* eslint-disable */
    import SplashPage from '../components/SplashPage'
    import TitleItem from "../components/TitleItem";
    import {mapGetters, mapMutations, mapActions} from 'vuex'
    import TipDialog from "../components/TipDialog";
    import {getLink} from "../utils/http";
    import {isObjEmpty} from "../utils/common";
    import TipRegisterDialog from "../components/TipRegisterDialog";
    import InputInfoTipDialog from "../components/InputInfoTipDialog";
    import HadInvitationDialog from "../components/HadInvitationDialog";
    import TitleAnimation from "../components/TitleAnimation";
    import TipCommonDialog from "../components/TipCommonDialog";

    const SPLASHTIME = 3000
    export default {
        name: "Home",
        components: {
            TipCommonDialog,
            TitleAnimation,
            HadInvitationDialog, InputInfoTipDialog, TipRegisterDialog, TipDialog, TitleItem, SplashPage},
        data() {
            return {
                isShowSplash: false,
                showTipReg: false,
                showRegTipReg: false,
                showHadTipReg: false,

                msg:"",
                showCommonTip: false,
                // items:[
                //     {content:"大会简介" , src:"" },
                //     {content:"会议议程" , src:""},
                //     {content:"注册报名" , src:"" , path:"invitation-code"},
                //     {content:"照片直播" , src:""},
                //     {content:"视频直播" , src:""},
                //     {content:"论坛地址" , src:""},
                //     {content:"官网链接" , src:""},
                //     {content:"官微链接" , src:""},
                //     {content:"个人中心" , src:"" ,path:"person-center"},
                // ],
                showTip: false
            }
        },
        computed: {
            ...mapGetters(['isLoaded', 'user', 'links' , 'openid']),
            items() {
                let res = this.links.map(m => {
                    let r = {...m}
                    if (m.linkName == '注册报名') {
                        r = {...r, path: 'invitation-code'}
                    } else if (m.linkName == '个人中心') {
                        r = {...r, path: 'person-center'}
                    }
                    return r
                })
                //     .sort((a, b) => {
                //     return a.sort > b.sort
                // })


                const reg = {
                    linkName: '注册报名',
                        path: "invitation-code",
                        state: 1,
                        sort: 3
                }

                res.splice( 2, 0, reg );

                res = [...res,{
                    linkName: '个人中心',
                    state: 1,
                    path: "person-center",
                    sort: 9
                } ]



                return res
            }
        },
        methods: {
            ...mapMutations([
                'setLoaded'
            ]),
            ...mapActions([
                'getUser', 'getLink'
            ]),
            showCommon(msg){
                this.msg = msg
                this.showCommonTip = true
            },
            handleItemClick(item) {
                if (item.state == 1) {
                    if(item.path){
                        if (item.path == 'person-center') {
                            if(this.user){
                                this.$router.push({path: item.path})
                            }else{
                                this.showRegTipReg = true
                            }
                        } else  if (item.path == 'invitation-code'){
                            if(this.user){
                                this.showTip = true
                            }else{
                                this.$router.push({path: item.path})
                            }
                        }else {
                            this.$router.push({path: item.path})
                        }

                    }else if(item.linkUrl){
                        window.location.href = item.linkUrl
                    }

                } else {
                    this.showTip = true
                }

            },
            showSplash() {
                if (!this.isLoaded) {
                    this.isShowSplash = true
                    this.time = setTimeout(() => {
                        this.isShowSplash = false
                        this.setLoaded()
                        clearTimeout(this.time)
                    }, SPLASHTIME)
                }
            },
            async init() {
                try {
                    this.showSplash()
                    await this.getLink()
                    if(this.openid){
                        await this.getUser(this.openid)
                    }

                } catch (e) {
                    console.log(e)
                }
            }
        },
        mounted() {
            this.init()
        },
        beforeDestroy() {
            if (this.time) {
                clearTimeout(this.time)
            }
        }
    }
</script>

<style scoped lang="less">
    .home-page {
        background-image: url("../assets/home-bg.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        .home-content {
            display: flex;
            justify-content: center;
            margin-bottom: 100px;
            background-image: url("../assets/home-border.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            .content-wrap {
                display: grid;
                grid-gap: 10px;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 1fr 1fr 1fr;
                margin: 20px;
            }
        }
    }

</style>
