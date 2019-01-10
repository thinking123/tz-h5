<template>
    <div class="page">
        <input-invitation-code-dialog :visible.sync="showCode" @submit="handleSubmit"/>
        <invitation-code-error-dialog :visible.sync="showErrorCode"/>
    </div>
</template>

<script>

    import InputInvitationCodeDialog from "../components/InputInvitationCodeDialog";
    import {mapActions} from 'vuex'
    import InvitationCodeErrorDialog from "../components/InvitationCodeErrorDialog";
    import HadInvitationDialog from "../components/HadInvitationDialog";

    export default {
        name: "InvitationCode",
        components: {HadInvitationDialog, InvitationCodeErrorDialog, InputInvitationCodeDialog},
        data() {
            return {
                showCode: true,
                showErrorCode: false
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
                        this.$router.push({path: 'register'})
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
