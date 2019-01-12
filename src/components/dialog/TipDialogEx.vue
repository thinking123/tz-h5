

<template>
    <base-dialog :isShowMask="isShowMask" :visible.sync="showDialog">
        <div class="content">
            <div class="title">
                {{title}}
            </div>
            <div class="btn-group">
                <h-button @click="handleReturn">
                    返回
                </h-button>
            </div>
        </div>
    </base-dialog>
</template>

<script>
    import HButton from "../HButton";
    import BaseDialog from "./BaseDialog";
    export default {
        name: "TipDialogEx",
        components: {HButton, BaseDialog},
        props:{
            visible:{
                type:Boolean,
                default:false
            },
            isShowMask:{
                type:Boolean,
                default: false
            },
            title:String
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

<style scoped lang="scss">
    @import "../../css/common";
    @import "../../css/media";
    @include range-media(1,4) {
        .title {
            font-size: 1.5rem;
        }
    }
    @include range-media(5,8) {
        .title {
            font-size: 2rem;
        }
    }

    @include use-media($iphone5, $iphone6) {
        .title {
            font-size: 1.5rem;
        }
    }
    @include use-media($iphone-p, $iphonex , $iphone5, $iphone6) {
        .title {
            font-size: 1.8rem;
        }
    }

    .content{
        display: flex;
        flex-direction: column;
        padding: 2rem 1rem;

        align-items: center;
        .btn-group{
            display: flex;
            margin-top: 1rem;
            justify-content: space-around;
        }
    }
</style>
