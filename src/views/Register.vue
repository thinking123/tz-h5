<template>
    <div class="page">
        <title-animation top="50px"/>
        <form class="content">
            <!--<div class="title-wrap">-->
                <!--<span class="line"></span>-->
                <!--<span class="title">-->
                    <!--注册报名-->
                <!--</span>-->
                <!--<span class="line"></span>-->
            <!--</div>-->
            <div class="image">
                <h-camera @change="handleCameraChange"/>
                <!--<div class="tip">-->
                    <!--如您对所拍照片不满意，可以再次点击照片框进行重拍-->
                <!--</div>-->
            </div>
            <!--<div class="input-wrap">-->

            <!--</div>-->
            <h-input placeholder="姓名:" :value.sync="form.userName" class="input"/>
            <h-input placeholder="手机:" :value.sync="form.userPhone" class="input"/>
            <h-input placeholder="公司:" :value.sync="form.userCompany" class="input"/>
            <h-selecter placeholder="座位区:" :value.sync="form.zone" :items="items"/>
            <div class="btn">
                <h-button @click="handleSubmit">
                    确认提交
                </h-button>
            </div>
            <div class="error" v-if="err">
                {{err}}
            </div>
        </form>
        <invitation-success-dialog :visible.sync="isOk"/>
        <had-invitation-dialog :visible.sync="showHadCode" @return="handleReturn"/>
    </div>
</template>

<script>
    /* eslint-disable */
    import HInput from "../components/HInput";
    import HButton from "../components/HButton";
    import HSelecter from "../components/HSelecter";
    import {mapGetters, mapActions} from 'vuex'
    import InvitationSuccessDialog from "../components/InvitationSuccessDialog";
    import HadInvitationDialog from "../components/HadInvitationDialog";
    import HCamera from "../components/HCamera";
    import TitleAnimation from "../components/TitleAnimation";

    export default {
        name: "Register",
        components: {TitleAnimation, HCamera, HadInvitationDialog, InvitationSuccessDialog, HSelecter, HButton, HInput},
        data() {
            return {
                err:'',
                form: {
                    userName: '',
                    userPhone: '',
                    userCompany: '',
                    zone: {value: '海陵区', key: '1'},
                    userHead:''

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

            }
        },
        computed: {
            ...mapGetters(['invitationCode', 'openid'])
        },
        methods: {
            ...mapActions([
                'register',
            ]),
            goToPersonCenter() {
                const t = setTimeout(() => {
                    this.isOk = false
                    this.$router.push({path: 'person-center'})
                    clearTimeout(t)
                }, 2000)
            },
            handleCameraChange(url){
                this.form.userHead = url
            },
            handleReturn() {
                this.$router.push({path: 'person-center'})
            },
            verify(){
                let err = ''
                let pReg = /^1(3|4|5|7|8)\d{9}$/
                if(!this.form.userHead){
                    err = '请选择头像'
                    return err
                }
                if(!this.form.userName){
                    err = '请填写姓名'
                    return err
                }

                if(!pReg.test(this.form.userPhone)){
                    err = '请填写正确手机号'
                    return err
                }
                if(!this.form.userCompany){
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
                    if(!!this.err){
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
    .page {
        background-image: url("../assets/register-bg.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        .error{
            color: red;
        }
        .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            /*justify-content: center;*/
            margin: 0 50px 10px;

            & > * {
                margin-bottom: 20px;
                width: 80%;
            }


            .title-wrap{
                display: flex;
                font-size: large;
                font-weight: bolder;
                color: white;
                justify-content: center;
                align-items: center;
                margin: 10px 0;
                .line{
                    height: 0;
                    width: 20px;
                    border: 2px solid white;
                }

                .title{
                    margin: 0 10px;
                }
            }
            .image{
                display: flex;
                flex-direction: column;
                color: white;
                align-items: center;
                /*margin-top: 50px !important;*/
                .tip{

                }
            }

            .btn {

                /*width: initial;*/
                display: flex;
                justify-content: center;
            }


        }
    }
</style>
