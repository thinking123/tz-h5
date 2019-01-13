

<template>
    <base-dialog :visible.sync="showDialog" :isShowMask="isShowMask">
        <div class="content">
            <div class="content-wrap">
                <div  class="title">
                    {{title}}
                </div>
                <div class="line">

                </div>
                <div class="tip">
                    {{tip}}
                </div>
            </div>
            <div class="btn-group" v-show="isShowButton">
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

    export default {
        name: "TipLineDialog",
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
            isShowButton:{
                type:Boolean,
                default: true
            },
            title:String,
            tip:String,
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


    .content{
        display: flex;
        flex-direction: column;
        padding: 2rem 1rem;

        align-items: center;
        .content-wrap{
            display: flex;
            color:white;
            flex-direction: column;
            align-items: center;
            > *{
                margin: 5px 0;
            }
            .line{
                width: 100%;
                border:1px solid white;
                height: 0;
            }

            .tip{
                font-size: larger;

            }
        }
    }
    .btn-group{
        display: flex;
        margin-top: 1rem;
        justify-content: space-around;
    }

    @include range-media(1 , 4){
        .title{
            font-size:2rem;
        }
        .btn-group{
            margin-top: 0.5rem;
            &>*{
                width:9rem;
            }
        }
    }

    @include use-media($iphone4){
        .title{
            font-size:2.2rem;
        }
        .btn-group{
            margin-top: 0.8rem;
            &>*{
                width:10rem;
            }
        }
    }

    @include use-media($iphone4){
        .title{
            font-size:1.8rem;
        }
        .btn-group{
            margin-top: 0.5rem;
            &>*{
                width:8rem;
            }
        }
    }
    @include use-media($iphone5, $iphone6){
        .title{
            font-size:2rem;
        }
        .btn-group{
            margin-top: 0.5rem;
            &>*{
                width:9rem;
            }
        }
    }


    @include use-media($iphone-p, $iphonex){
        .title{
            font-size:3rem;
        }
        .btn-group{
            margin-top: 1rem;
            &>*{
                width:10rem;
            }
        }
    }
</style>


