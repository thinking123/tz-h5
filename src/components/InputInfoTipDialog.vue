
<template>
    <!--<h-dialog :visible.sync="showDialog" >-->
        <!--<div class="content">-->
            <!--<div class="content-com">-->

                <!--<div class="btn-group">-->
                    <!--<h-button @click="handleReturn">-->
                        <!--返回-->
                    <!--</h-button>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
    <!--</h-dialog>-->

    <tip-dialog-wrap :visible.sync="showDialog">
        <div class="content-com">
            <div class="content-wrap">
                <div  class="dialog-text">
                    请先填写报名信息
                </div>
                <div class="line">

                </div>
                <div class="tip-text">
                    请去个人中心查看您的报名信息
                </div>
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
        name: "InputInfoTipDialog",
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
        background-image: url("../assets/qtxx.png");
        background-size: 100% 100%;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        align-items: stretch;
        height: 200px;
        .content-com{
            margin: 20px 35px;
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: space-around;
            .content-wrap{
                display: flex;
                color:white;
                flex-direction: column;
                align-items: center;
                > *{
                    margin: 5px 0;
                }
                .line{
                    width: 150px;
                    border:1px solid white;
                    height: 0;
                }
            }
        }
        .btn-group{
            display: flex;
            justify-content: space-around;
        }
    }
</style>

