<template>
    <div class="page">
        <form class="content">
            <h-input placeholder="姓名:" :value.sync="form.userName" class="input"/>
            <h-input placeholder="手机:" :value.sync="form.userPhone" class="input"/>
            <h-input placeholder="公司:" :value.sync="form.userCompany" class="input"/>
            <h-selecter placeholder="座位区:" :value.sync="form.zone" :items="items"/>
            <div class="btn">
                <h-button @click="handleSubmit">
                    确认提交
                </h-button>
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

    export default {
        name: "Register",
        components: {HadInvitationDialog, InvitationSuccessDialog, HSelecter, HButton, HInput},
        data() {
            return {
                form: {
                    userName: '',
                    userPhone: '',
                    userCompany: '',
                    zone: {value: '海陵区', key: '1'},

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
            handleReturn() {
                this.$router.push({path: 'person-center'})
            },
            verify(){

            },
            async handleSubmit() {
                try {
                    const data = {
                        openid: this.openid,
                        userName: this.form.userName,
                        userPhone: this.form.userPhone,
                        userHead: '',
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
        background-image: url("../assets/home-bg.png");
        background-size: contain;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            /*justify-content: center;*/
            margin: 0 50px 100px;

            & > * {
                margin-bottom: 20px;
                width: 80%;
            }

            .btn {

                /*width: initial;*/
                display: flex;
                justify-content: center;
            }


        }
    }
</style>
