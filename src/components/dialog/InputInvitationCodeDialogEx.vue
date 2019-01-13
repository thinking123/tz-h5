<template>
    <base-dialog :visible.sync="showDialog" :is-show-mask="true">
        <div class="content"   @touchmove="touchMove" >
            <div class="title">
                请输入邀请码
            </div>
            <h-input placeholder="邀请码:"  @hblur="handleBlur" :value.sync="code" class="input" @hsubmit="handleSubmit"/>

            <div class="btn-group">
                <h-button @click="handleSubmit">
                    提交
                </h-button>
                <h-button @click="handleReturn">
                    返回
                </h-button>

            </div>
        </div>

    </base-dialog>
</template>

<script>
    import BaseDialog from "./BaseDialog";
    import HButton from "../HButton";
    import HInput from "../HInput";
    export default {
        name: "InputInvitationCodeDialogEx",
        components: {HInput, HButton, BaseDialog},
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
            handleBlur(e) {
                this.$emit('hblur', e)
            },
            handleReturn(){
                this.showDialog = false
            },
            handleSubmit(){

                this.$emit('submit' , this.code)
            },
            touch(e){
                e.stopPropagation();
                // e.preventDefault()
            },
            touchMove(e){
                // e.stopPropagation();
                // e.preventDefault()
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../css/common";
    .content{
        display: flex;
        flex-direction: column;
        padding: 2rem 1rem;
        z-index: 200;
        align-items: center;
        & > *{
            margin: 0.5rem 0;
            z-index: 200;
        }

        .input{
            width: 95% !important;
        }
        .btn-group{
            display: flex;
            justify-content: space-around;
            align-self: stretch;
            margin-top: 1rem;
            &>*{
                /*width: 5rem;*/
                /*height: 2rem;*/
            }

        }
    }
</style>
