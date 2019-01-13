<template>
    <div class="home-page">
        <!--<splash-page/>-->
        <!--<img class="home-bg" v-if="!isShowSplash" src="../assets/view/home.png">-->

        <!--</img>-->
        <splash-page :visible="isShowSplash" :remain-time="remainTime" v-if="isShowSplash"/>

        <div class="home-content" v-else ref="hcontent">
            <!--<div v-if="msg" style="font-size: 20px" class="msg">-->

                <!--{{msg}} - {{ios}}-->
            <!--</div>-->
            <div class="content-wrap">
                <title-item v-for="(item ,index) in items"
                            :content="item.linkName" :src="item.linkName"
                            :key="item.id" :title="titles[index].title"
                            :tip="titles[index].tip"
                            :index="index"
                            @item-loaded="handleItemLoaded"
                            @click.native="handleItemClick(item)" ref="item"/>
            </div>
        </div>
        <tip-dialog-ex :visible.sync="showTip" title="敬请期待"/>
        <tip-line-dialog :visible.sync="showRegTipReg" title="请先填写报名信息"/>
        <tip-line-dialog :visible.sync="showHadTipReg" title="您已报名成功" tip="请去个人中心查看您的报名信息" :is-show-button="false"/>


        <input-invitation-code-dialog-ex @hblur="handleBlur" :visible.sync="showCode" @submit="handleSubmit"/>
        <tip-dialog-ex :visible.sync="showErrorCode" title="您输入的邀请码有误请重新输入" :is-show-mask="true"/>
    </div>
</template>

<script>
    /* eslint-disable */
    import SplashPage from '../components/SplashPage'
    import TitleItem from "../components/TitleItem";
    import {mapActions, mapGetters, mapMutations} from 'vuex'
    import TipDialog from "../components/TipDialog";
    import {getLink} from "../utils/http";
    import TipRegisterDialog from "../components/TipRegisterDialog";
    import InputInfoTipDialog from "../components/InputInfoTipDialog";
    import HadInvitationDialog from "../components/HadInvitationDialog";
    import TitleAnimation from "../components/TitleAnimation";
    import TipCommonDialog from "../components/TipCommonDialog";
    import InvitationCodeErrorDialog from "../components/InvitationCodeErrorDialog";
    import InputInvitationCodeDialog from "../components/InputInvitationCodeDialog";
    import TipLineDialog from "../components/dialog/TipLineDialog";
    import TipDialogEx from "../components/dialog/TipDialogEx";
    import InputInvitationCodeDialogEx from "../components/dialog/InputInvitationCodeDialogEx";
    import {getOS, isIphone, isIphone6 , elementInViewport , getViewport} from "../utils/common";
    import $ from 'jquery'
    const SPLASHTIME = 3000
    export default {
        name: "Home",
        components: {
            InputInvitationCodeDialogEx,
            TipDialogEx,
            TipLineDialog,
            InputInvitationCodeDialog,
            InvitationCodeErrorDialog,
            TipCommonDialog,
            TitleAnimation,
            HadInvitationDialog, InputInfoTipDialog, TipRegisterDialog, TipDialog, TitleItem, SplashPage
        },
        data() {
            return {
                msg: 'default css',
                ios: '',
                isShowSplash: false,
                showRegTipReg: false,
                showHadTipReg: false,
                showTip: false,
                remainTime: 3,

                showCode: false,
                showErrorCode: false,
                titles: [
                    {title: "大会简介", tip: "General introduction"},
                    {title: "会议议程", tip: "Agenda of the Conference"},
                    {title: "注册报名", tip: "Registration"},
                    {title: "照片直播", tip: "Photo live broadcast"},
                    {title: "视频直播", tip: "Live video"},
                    {title: "论坛地址", tip: "Forum address"},
                    {title: "官网链接", tip: "Official website"},
                    {title: "官微链接", tip: "Official micro"},
                    {title: "个人中心", tip: "Personal Center"},
                ],

            }
        },
        computed: {
            ...mapGetters(['isLoaded', 'user', 'links', 'openid']),
            items() {
                let res = this.links.map(m => {
                    let r = {...m}
                    if (m.linkName == '注册报名') {
                        r = {...r, path: '/invitation-code'}
                    } else if (m.linkName == '个人中心') {
                        r = {...r, path: '/person-center'}
                    }
                    return r
                })
                //     .sort((a, b) => {
                //     return a.sort > b.sort
                // })

                if (res.length == 0) {
                    return []
                }

                const reg = {
                    linkName: '注册报名',
                    path: "/invitation-code",
                    state: 1,
                    sort: 3
                }

                res.splice(2, 0, reg);

                res = [...res, {
                    linkName: '个人中心',
                    state: 1,
                    path: "/person-center",
                    sort: 9
                }]


                return res
            }
        },
        methods: {
            ...mapMutations([
                'setLoaded', 'setPlayMusic'
            ]),
            ...mapActions([
                'getUser', 'getLink', 'checkInvitationCode'
            ]),
            handleItemClick(item) {
                if (item.state == 1) {
                    if (item.path) {
                        if (item.path == '/person-center') {
                            if (this.user) {
                                this.$router.push({path: item.path})
                            } else {
                                this.showRegTipReg = true
                            }
                        } else if (item.path == '/invitation-code') {
                            if (this.user) {
                                this.showHadTipReg = true
                            } else {

                                this.showCode = true
                                //不需要邀请码，直接到注册哪里
                                // this.$router.push({path: 'register'})
                                return
                                // this.$router.push({path: item.path})
                            }
                        } else {
                            this.$router.push({path: item.path})
                        }

                    } else if (item.linkUrl) {
                        window.location.href = item.linkUrl
                    }

                } else {
                    this.showTip = true
                }

            },
            scrollToForIphone6() {
                if (isIphone()) {
                    this.ios = 'ios'
                    setTimeout(function () {
                        var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
                        window.scrollTo(0, Math.max(scrollHeight - 1, 0));
                    }, 100);
                }
                if (isIphone6()) {

                    this.ios = 'is iphone 6'

                    // alert('is iphone 6')
                }


            },
            tick() {
                this.remainTime--
                if (this.remainTime <= 0) {
                    this.isShowSplash = false
                    this.setLoaded(true)
                    this.setPlayMusic(true)
                    clearInterval(this.time)
                }
            },
            showSplash() {
                if (!this.isLoaded) {
                    this.isShowSplash = true
                    this.remainTime = 3
                    this.time = setInterval(this.tick, 1000)

                    // this.time = setTimeout(() => {
                    //     this.isShowSplash = false
                    //     this.setLoaded()
                    //     clearTimeout(this.time)
                    // }, SPLASHTIME)
                }
            },
            handleBlur(e) {
                this.scrollToForIphone6()
            },
            handleItemLoaded({index , ref}){
                //todo is awalys eight?? or index === (this.items.length - 1)
                if(index === 8 && ref){
                    const pw = 0.256
                    const ph = 0.175
                    const pm = 0.284
                    // const [vw ,vh] = getViewport()
                    // alert(vw , vh)
                    // alert(ref.offsetWidth , ref.offsetHeight)
                    const inView = elementInViewport(ref)
                    if(!inView){
                        const [vw ,vh] = getViewport()
                        if(vw && vh){
                            const items = this.$refs.item
                            const width = pw * vw
                            const height = ph * vh
                            // const width = 80
                            // const height = 90
                            // alert(width )
                            // alert(height )
                            // items.length > 0 && alert("adfset")
                            items.forEach(f=>{
                                const  item = $(f.$el.firstChild);
                                item.width(width)
                                item.height(height)
                            })

                            const hcontent = $(this.$refs.hcontent)
                            hcontent.css('margin-top',pm * vh);

                        }else{
                            // alert("no v")
                        }
                    }
                }
            },
            // adjustView() {
            //
            //     setTimeout(() => {
            //         if(this.items.length === 9){
            //             alert(this.$refs.item)
            //         }
            //     }, 500)
            //
            // },
            async init() {
                try {
                    this.scrollToForIphone6()
                    // if (!isIphone()) {
                    //     setTimeout(() => {
                    //
                    //         this.bodyHeight = $('body').height();
                    //         // this.msg = `bh:${this.bodyHeight}`
                    //     }, 500)
                    // }

                    this.showSplash()
                    await this.getLink()

                    // this.$nextTick(() => {
                    //     this.adjustView()
                    // })


                    if (this.openid) {
                        await this.getUser(this.openid)
                    }

                } catch (e) {
                    clearInterval(this.time)
                    console.log(e)
                }
            },
            async handleSubmit(code) {
                try {
                    const c = await this.checkInvitationCode(code)
                    if (c != 0) {
                        // setTimeout(()=>{
                        //
                        // } , 1000)
                        this.$router.push({path: '/register'})

                    } else {
                        this.showErrorCode = true
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
                clearInterval(this.time)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../css/common";
    @import "../css/media";

    $font-size-base-b: 2rem;
    $font-size-base-s: 1.2rem;
    $b: 1rem;
    $font-family: Hz-Tz;


    .home-bg {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
    }

    .home-page {
        background-image: url("../assets/view/home.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        height: 100%;
        width: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        /*z-index: 1;*/
        /* Full height */
        height: 100%;

        /* Center and scale the image nicely */
        background-position: center;
        background-size: cover;

        .home-content {
            display: flex;
            justify-content: center;

            background-image: url("../assets/home-border.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            margin-top: 250px;
            /*@media screen and (max-height: 667px) {*/
            /*margin-top: 200px;*/
            /*}*/

            /*@media screen and (min-height: 667px) and (max-height: 736px){*/
            /*margin-top: 250px;*/
            /*}*/

            /*@media screen and (min-height: 736px){*/
            /*margin-top: 300px;*/
            /*}*/

            .content-wrap {
                display: grid;
                grid-gap: 10px;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 1fr 1fr 1fr;

                -webkit-grid-gap: 10px;
                -webkit-grid-template-columns: 1fr 1fr 1fr;
                -webkit-grid-template-rows: 1fr 1fr 1fr;

                -ms-grid-gap: 10px;
                -ms-grid-template-columns: 1fr 1fr 1fr;
                -ms-grid-template-rows: 1fr 1fr 1fr;

                margin: 20px;
                z-index: 20;
            }
        }

        .home-content {
            margin-top: 180px;
        }

        .msg {
            color: gold;
            position: absolute;
            top: 0;
            left: 50px;
            z-index: 99999;

            &::before {
                content: 'moren';
                color: gold;
                position: absolute;
                display: inline-block;
                width: 50px;
                height: 50px;
                position: fixed;
                left: 200px;
                z-index: 99999;
            }

        }

        @include range-media(1, 2) {
            .home-content {
                margin-top: 150px;
            }
        }

        @include range-media(3, 4) {
            .home-content {
                margin-top: 170px;
            }
        }

        @include range-media(5, 6) {
            .home-content {
                margin-top: 190px;
            }
        }
        @include range-media(7, 8) {
            .home-content {
                margin-top: 210px;
            }
        }
        @include use-media($iphone4) {
            .home-content {
                margin-top: 160px;
            }

            .msg {
                color: salmon;

                &::before {
                    content: 'iphone4';
                }
            }
        }
        @include use-media($iphone5, $iphone6) {
            .home-content {
                margin-top: 165px;
            }
            .msg {
                color: springgreen;

                &::before {
                    content: 'iphone5-6';
                }
            }
        }


        @include use-media($iphone-p, $iphonex) {
            .home-content {
                margin-top: 190px;

            }
            .msg {
                color: blue;

                &::before {
                    content: 'iphonep-x';
                }
            }
        }


    }

</style>
