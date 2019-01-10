<template>
    <h-dialog :visible.sync="showDialog">
        <div class="content">
            <div class="content-com">
                <h-input placeholder="邀请码:" :value.sync="code" class="input"/>

                <div class="btn-group">
                    <h-button @click="handleSubmit">
                        提交
                    </h-button>
                    <h-button @click="handleReturn">
                        返回
                    </h-button>
                </div>
            </div>


        </div>
    </h-dialog>
</template>

<script>
    import HDialog from "./HDialog";
    import HButton from "./HButton";
    import HInput from "./HInput";
    export default {
        name: "InputInvitationCodeDialog",
        components: {HInput, HButton, HDialog},
        data(){
            return {
                code:''
            }
        },
        props:{
            visible:{
                type:Boolean,
                default:false
            }
        },
        computed:{
            showDialog: {
                set(v) {
                    this.$emit('update:visible', v)
                },
                get() {
                    return this.visible
                }
            },
        },
        methods:{
            handleReturn(){
                this.showDialog = false
            },
            handleSubmit(){
                this.$emit('submit' , this.code)
            }
        }
    }
</script>

<style scoped lang="less">
    .content{
        background-image: url("../assets/yqmsr.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        align-items: stretch;
        height: 200px;
        .content-com{
            margin: 20px 35px;
            .input{
                margin-bottom: 20px;
            }
        }
        .btn-group{
            display: flex;
            justify-content: space-around;
        }
    }
</style>
