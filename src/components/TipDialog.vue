<template>
    <!--<h-dialog :visible.sync="showDialog" :mask="''">-->
        <!--<div class="content">-->
            <!--<div class="content-com">-->
                <!--<div>-->

                <!--</div>-->
                <!--<div class="btn-group">-->
                    <!--<h-button @click="handleReturn">-->
                        <!--返回-->
                    <!--</h-button>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
    <!--</h-dialog>-->
    <tip-dialog-wrap :visible.sync="showDialog">
        <div class="d-wrap">
            <div class="dialog-text">
                敬请期待
            </div>
            <div class="btn-group">
                <h-button @click="handleReturn">
                    返回
                </h-button>
            </div>
        </div>

    </tip-dialog-wrap>
</template>

<script>
    import HDialog from "./HDialog";
    import HButton from "./HButton";
    import TipDialogWrap from "./TipDialogWrap";
    export default {
        name: "TipDialog",
        components: {TipDialogWrap, HButton, HDialog},
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
                    // return true
                    return this.visible
                }
            },
        },
        methods:{
            handleReturn(){
                this.showDialog = false
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../css/common";
    .content{
        background-image: url("../assets/dialog-border.png");
        background-size: 100% 100%;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        align-items: stretch;
        height: 200px;
        .content-com{
            flex: 1;
            margin: 10px;
            background-color: @dialog-bg-t;
            .input{
                margin-bottom: 20px;
            }
        }
        .btn-group{
            display: flex;
            justify-content: space-around;
        }
    }

    .d-wrap{
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-around;
    }
</style>
