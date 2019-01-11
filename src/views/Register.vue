<template>
    <view-wrap title="注册报名">

        <div class="image">
            <h-camera @change="handleCameraChange"/>
            <div class="sample" @click="handleSample">
                示例
            </div>
        </div>
        <div class="tip">
            如您对所拍照片不满意，可以再次点击照片框进行重拍
        </div>
        <div class="form">

            <h-input placeholder="姓名:" :value.sync="form.userName" class="input"/>
            <h-input placeholder="手机:" :value.sync="form.userPhone" class="input"/>
            <h-input placeholder="公司:" :value.sync="form.userCompany" class="input"/>
            <h-selecter placeholder="座位区:" :value.sync="form.zone" :items="items"/>
            <div class="btn">
                <h-button @click="handleSubmit">
                    确认提交
                </h-button>
            </div>
        </div>

        <div class="error" v-if="err" slot="error">
            {{err}}
        </div>

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
                    zone: {value: '海陵区', key: '1'},
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
                isOk: false,
                showHadCode: false,
                showSample: false,

            }
        },
        computed: {
            ...mapGetters(['invitationCode', 'openid' , 'isAndroid'])
        },
        mounted() {
            if(this.isAndroid){
                this.bodyHeight = $('body').height();
                $(window).resize(this.resize);
            }

        },
        beforeDestroy(){
            if(this.isAndroid){
                $(window).off('resize' , this.resize)
            }
        },
        methods: {
            ...mapActions([
                'register',
            ]),
            resize(){
                $('body').height(this.bodyHeight);
            },
            handleSample() {
                this.showSample = true
            },
            goToPersonCenter() {
                const t = setTimeout(() => {
                    this.isOk = false
                    this.$router.push({path: 'person-center'})
                    clearTimeout(t)
                }, 2000)
            },
            handleCameraChange(url) {
                this.form.userHead = url
            },
            handleReturn() {
                this.$router.push({path: 'person-center'})
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
                if (!this.form.userCompany) {
                    err = '请填写公司'
                    return err
                }


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
                        userCompany: this.form.userCompany,
                        invitationCode: this.invitationCode
                    }
                    const res = await this.register(data)
                    if (res == 1) {
                        this.isOk = true
                        this.goToPersonCenter()
                    } else {
                        this.showHadCode = true
                    }
                } catch (e) {
                    console.log(e)
                }

            }
        }
    }
</script>

<style scoped lang="less">
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
            font-size: large;
            z-index: 100;
        }


    }

    .tip {
        font-size: smaller;
        margin-bottom: 1rem;
        z-index: 100;
    }

    .form {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: 85%;

        & > * {
            flex: 1;
            margin-bottom: 1.1rem;
            font-size: x-large;
            font-weight: bolder;
        }
    }

    .btn {

        /*width: initial;*/
        display: flex;
        justify-content: center;

        > * {

            height: 3rem;
            width: 10rem;

            font-size: large;
        }
    }

</style>
