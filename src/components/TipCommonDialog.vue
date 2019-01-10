
<template>
    <!--<h-dialog :visible.sync="showDialog">-->

    <!--<div class="content">-->
    <!--<div class="tip">-->
    <!--请先注册-->
    <!--</div>-->
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
        <div class="tip">
            {{text}}
        </div>
        <div class="content-com">

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
        name: "TipCommonDialog",
        components: {TipDialogWrap, HButton, HDialog},
        props:{
            visible:{
                type:Boolean,
                default:false
            },
            text:String
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
    .content{
        background-image: url("../assets/dialog-bg.png");
        background-size: 100% 100%;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: stretch;
        height: 200px;

        .tip{
            font-size: xx-large;
            font-weight: bolder;
            color: white;
            text-align: center;
            margin-top: 20px;
        }
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
