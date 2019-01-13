<template>
    <div class="page">
        <!--<input-invitation-code-dialog :visible.sync="showCode" @submit="handleSubmit"/>-->
        <input-invitation-code-dialog-ex  :visible.sync="showCode" @submit="handleSubmit"/>
        <!--<invitation-code-error-dialog :visible.sync="showErrorCode"/>-->
        <tip-dialog-ex :visible.sync="showErrorCode" title="您输入的邀请码有误请重新输入" :is-show-mask="true"/>
        <!--<tip-line-dialog :visible.sync="show" title="您已报名成功" tip="请去个人中心查看您的报名信息"/>-->
    </div>
</template>

<script>

    import InputInvitationCodeDialog from "../components/InputInvitationCodeDialog";
    import {mapActions} from 'vuex'
    import InvitationCodeErrorDialog from "../components/InvitationCodeErrorDialog";
    import HadInvitationDialog from "../components/HadInvitationDialog";
    import InputInvitationCodeDialogEx from "../components/dialog/InputInvitationCodeDialogEx";
    import TipLineDialog from "../components/dialog/TipLineDialog";
    import TipDialogEx from "../components/dialog/TipDialogEx";

    export default {
        name: "InvitationCode",
        components: {
            TipDialogEx,
            TipLineDialog,
            InputInvitationCodeDialogEx,
            HadInvitationDialog, InvitationCodeErrorDialog, InputInvitationCodeDialog},
        data() {
            return {
                showCode: true,
                showErrorCode: false,


            }
        },
        watch: {
            showErrorCode(v) {
                if (!v) {
                    this.showCode = true
                }
            },
            showCode(v) {
                if (!v) {
                    this.$router.back()
                }
            }
        },
        methods: {
            ...mapActions([
                'checkInvitationCode',
            ]),
            async handleSubmit(code) {
                try {
                    const c = await this.checkInvitationCode(code)
                    if (c != 0) {
                        this.$router.push({path: '/register'})
                    } else {
                        this.showErrorCode = true
                    }
                } catch (e) {
                    console.log(e)
                }
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../css/common";

    .page {
        background-color: @dialog-bg;
        height: 100%;
    }
</style>
