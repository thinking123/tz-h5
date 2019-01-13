<template>
    <view-wrap title="注册报名" ref="register">
        <!--<div class="error" style="font-size: large">-->
        <!--{{msg}}-->
        <!--</div>-->
        <!--<div>-->
        <!--{{nav}}-->
        <!--</div>-->
        <!--<input type="text" style="visibility: hidden" autofocus>-->
        <div class="image">
            <h-camera @change="handleCameraChange"/>
            <div class="sample" @click="handleSample">
                示例
            </div>
        </div>
        <div class="tip">
            如您对所拍照片不满意，可以再次点击照片框进行重拍
        </div>
        <div class="form" ref="form">

            <h-input placeholder="姓名:" :value.sync="form.userName" class="input"
                     @hblur="handleBlur"
                     @hsubmit="handleSubmit"
                     @hfocus="handleFocus" />
            <h-input placeholder="手机:" :value.sync="form.userPhone" class="input"
                     @hblur="handleBlur"
                     @hsubmit="handleSubmit"
                     @hfocus="handleFocus"/>
            <!--<h-input placeholder="单位:" :value.sync="form.userCompany" class="input"-->
                     <!--@hblur="handleBlur"-->
                     <!--@hfocus="handleFocus"/>-->
            <h-selecter placeholder="座位区:"
                        :value.sync="form.zone" :items="items" @hfocus="handleFocus"
                        @hblur="handleBlur"/>
            <div class="btn">
                <h-button @click="handleSubmit">
                    确认提交
                </h-button>
            </div>
        </div>

        <div class="error" v-if="err" slot="error">
            {{err}} : {{msg}}
        </div>


        <!--<div class="error">-->
        <!--{{msg}} : {{count}}-->
        <!--</div>-->
        <tip-line-dialog title="恭喜您报名成功" tip="获得神秘的礼物一份请您与2019年1月23日在现场点击个人中心领取" :is-show-button="false"
                         :visible.sync="isOk"/>
        <tip-line-dialog title="您已报名成功" tip="请去个人中心查看您的报名信息" :visible.sync="showHadCode" @return="handleReturn"/>
        <!--<invitation-success-dialog :visible.sync="isOk"/>-->
        <!--<had-invitation-dialog :visible.sync="showHadCode" @return="handleReturn"/>-->
        <sample-photo-dialog :visible.sync="showSample"/>
    </view-wrap>
    <!--<div class="page">-->
    <!--<form class="content">-->
    <!--<div class="title-wrap">-->
    <!--<span class="line"></span>-->
    <!--<span class="title">-->
    <!--注册报名-->
    <!--</span>-->
    <!--<span class="line"></span>-->
    <!--</div>-->
    <!---->

    <!--</form>-->

    <!--<invitation-success-dialog :visible.sync="isOk"/>-->
    <!--<had-invitation-dialog :visible.sync="showHadCode" @return="handleReturn"/>-->
    <!--<sample-photo-dialog :visible.sync="showSample"/>-->
    <!--</div>-->
</template>

<script>
    /* eslint-disable */
    import HInput from "../components/HInput";
    import HButton from "../components/HButton";
    import HSelecter from "../components/HSelecter";
    import {mapActions, mapGetters} from 'vuex'
    import InvitationSuccessDialog from "../components/InvitationSuccessDialog";
    import HadInvitationDialog from "../components/HadInvitationDialog";
    import HCamera from "../components/HCamera";
    import TitleAnimation from "../components/TitleAnimation";
    import SamplePhotoDialog from "../components/dialog/SamplePhotoDialog";
    import ViewWrap from "../components/ViewWrap";
    import TipLineDialog from "../components/dialog/TipLineDialog";
    import $ from "jquery";
    import {getOS ,isIphone , isIphone6} from "../utils/common";

    export default {
        name: "Register",
        components: {
            TipLineDialog,
            ViewWrap,
            SamplePhotoDialog,
            TitleAnimation, HCamera, HadInvitationDialog, InvitationSuccessDialog, HSelecter, HButton, HInput
        },
        data() {
            return {
                err: '',
                form: {
                    userName: '',
                    userPhone: '',
                    userCompany: '',
                    zone: {value: '海陵区', key: '0'},
                    userHead: ''

                },
                items: [
                    {value: '海陵区', key: '0'},
                    {value: '高港区', key: '1'},
                    {value: '医药高新区', key: '2'},
                    {value: '姜堰区', key: '3'},
                    {value: '泰兴市', key: '4'},
                    {value: '靖江市', key: '5'},
                    {value: '兴化市', key: '6'},
                    {value: '市直', key: '7'},
                ],

                isInputing: false,
                isOk: false,
                showHadCode: false,
                showSample: false,

                msg: '',
                count: 0,
                nav: ''


            }
        },
        computed: {
            ...mapGetters(['invitationCode', 'openid', 'isAndroid', 'isIOS'])
        },
        mounted() {
            this.scrollToForIphone6()
            if (!isIphone()) {
                setTimeout(() => {

                    this.bodyHeight = $('body').height();
                    this.msg = `bh:${this.bodyHeight}`
                }, 500)
            }


        },
        methods: {
            ...mapActions([
                'register',
            ]),
            scrollToForIphone6() {
                if (isIphone6()) {
                    // alert('iphone6 scroll')
                    // this.err = 'iphone6 scroll'
                    setTimeout(function () {
                        var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
                        window.scrollTo(0, Math.max(scrollHeight - 1, 0));
                    }, 100);
                }

                // setTimeout(()=>{
                //     $(window).scrollTop(0,0);
                // } , 100)



            },
            handleFocus(e) {
                this.nav = navigator.userAgent
                if (!isIphone()) {
                    const register = this.$refs.register.$el
                    $(register).height(this.bodyHeight);
                }

            },
            handleBlur(e) {
                // this.err = typeof e == 'string' ? e : 'blur'
                // alert('b')
                // alert('blur')
                // setTimeout(function () {
                //     var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
                //     window.scrollTo(0, Math.max(scrollHeight - 1, 0));
                // }, 100);

                this.scrollToForIphone6()
            },
            handleSample() {
                this.showSample = true
            },
            goToPersonCenter() {
                const t = setTimeout(() => {
                    this.isOk = false
                    this.$router.push({path: '/person-center'})
                    clearTimeout(t)
                }, 2000)
            },
            handleCameraChange(url) {
                this.form.userHead = url
            },
            handleReturn() {
                this.$router.push({path: '/person-center'})
            },
            verify() {
                let err = ''
                let pReg = /^1(3|4|5|7|8)\d{9}$/
                if (!this.form.userHead) {
                    err = '请选择头像'
                    return err
                }
                if (!this.form.userName) {
                    err = '请填写姓名'
                    return err
                }

                if (!pReg.test(this.form.userPhone)) {
                    err = '请填写正确手机号'
                    return err
                }
                // if (!this.form.userCompany) {
                //     err = '请填写单位'
                //     return err
                // }


                return err
            },
            async handleSubmit(e) {
                try {
                    e.stopPropagation()
                    e.preventDefault()
                    this.err = this.verify()
                    if (!!this.err) {
                        return
                    }
                    const data = {
                        openid: this.openid,
                        userName: this.form.userName,
                        userPhone: this.form.userPhone,
                        userHead: this.form.userHead,
                        userSeat: this.form.zone.key,
                        // userCompany: this.form.userCompany,
                        invitationCode: this.invitationCode
                    }
                    const res = await this.register(data)
                    if (res == 1) {
                        this.isOk = true
                        this.goToPersonCenter()
                    } else {

                        // this.showHadCode = true
                    }
                } catch (e) {
                    console.log(e)
                }

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

    @include range-media(1, 4) {
        .sample {
            font-size: 1.5rem;
        }
        .tip {
            font-size: 0.8rem;
            margin-bottom: 0.8rem;
        }
        .form {
            & > * {
                margin-bottom: 2rem;

            }
        }
        .btn {
            & > * {
                width: 10rem;
            }
        }
    }

    @include range-media(5, 8) {
        .sample {
            font-size: 1.8rem;
        }
        .tip {
            font-size: 1rem;
            margin-bottom: 1rem;
        }
        .form {
            & > * {
                margin-bottom: 2.2rem;

            }
        }
        .btn {
            & > * {
                width: 15rem;
            }
        }
    }

    @include use-media($iphone4) {
        .sample {
            font-size: 1.5rem;
        }
        .tip {
            font-size: 0.8rem;
            margin-bottom: 0.6rem;
        }

        .btn {
            & > * {
                width: 13rem;
            }
        }
        .form {
            & > * {
                margin-bottom: 1rem;

            }
        }
    }

    @include use-media($iphone5, $iphone6) {
        .sample {
            font-size: 1.5rem;
        }
        .tip {
            font-size: 0.8rem;
            margin-bottom: 0.5rem;
        }

        .btn {
            & > * {
                width: 13rem;
            }
        }
        .form {
            & > * {
                margin-bottom: 2rem;

            }
        }
    }

    @include use-media($iphone-p, $iphonex) {
        .sample {
            font-size: $font-size-base-b;
        }
        .tip {
            font-size: $font-size-base-s;
            margin-bottom: $b;
        }

        .btn {
            & > * {
                width: 15rem;
            }
        }
        .form {
            & > * {
                margin-bottom: 2rem;

            }
        }
    }


    .error {
        color: red;
        align-self: center;
    }


    .image {
        display: flex;
        flex-direction: column;
        color: white;
        align-items: center;
        /*margin-top: 50px !important;*/
        margin-top: 5px;

        .sample {
            font-family: Hz-Tz;
            /*font-size: large;*/
            z-index: 100;
        }


    }

    .tip {
        /*font-size: smaller;*/
        /*margin-bottom: 1rem;*/
        z-index: 100;
    }

    .form {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: 85%;

        & > * {
            flex: 1;
            /*margin-bottom: 1.1rem;*/

        }
    }

    .btn {

        /*width: initial;*/
        display: flex;
        justify-content: center;
    }


</style>
