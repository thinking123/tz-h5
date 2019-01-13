<template>
    <div v-if="showDialog" class="dialog">
        <div class="mask"  @touchmove="touchMove">

        </div>
        <div class="dialog-content"  @touchmove="touchMove">
            <div class="dialog-title">
                <span class="dialog-btn" @click="handleClose"/>
            </div>
            <div class="dialog-body">
                <div class="body">
                    <slot></slot>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    /* eslint-disable */
    export default {
        name: "BaseDialog",
        props:{
            visible:{
                type:Boolean,
                default:false
            },
            mask:{
                type:String,
                default: '#333333'
            }  ,
            isShowMask:{
                type:Boolean,
                default: true
            }
        },
        computed:{
            bg(){
                return {
                    backgroundColor:`${this.mask ? this.mask : 'transparent'}`
                }
            },
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
            handleClose(){

                console.log('click dialog close')
                this.showDialog = false
            },
            touch(e){
                // e.stopPropagation();
                // e.preventDefault()
            },
            touchMove(e){
                // e.stopPropagation();
                // e.preventDefault()
            }
        },
        // mounted(){
        //     document.addEventListener('touchmove',function(e){
        //         e.preventDefault()
        //     })
        // },
        // beforeDestroy() {
        //     document.removeEventListener('touchmove',function(e){
        //         e.preventDefault()
        //     })
        // }
    }
</script>

<style scoped lang="less">
    @import "../../css/common";

    .mask{
        background-color: @black;
        opacity: 0.9;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        top:0;
        width: 100%;
        height: 100%;
        z-index: 10;
    }
    .title{
        font-family: Hz-Tz;
        font-size: x-large;
        color:@white;

    }
    .dialog{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        top:0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
        .dialog-content{
            flex: 1;
            margin: 0 2.5rem;
            min-width: 100px;
            z-index: 100;
            .dialog-title{
                display: flex;
                justify-content: flex-end;
                position: relative;
                .dialog-btn{
                    background-image: url("../../assets/dialog-x.png");
                    height: 3rem;
                    width: 3rem;
                    background-size: cover;
                    position: relative;
                    right: -2rem;
                    z-index: 130;
                }
            }
            .dialog-body{
                background-image: url("../../assets/dialog-border.png");
                background-size: 100% 100%;
                background-repeat: no-repeat;
                padding: 1rem;
                z-index: 100;
                .body{
                    background-color: @dialog-bg-t;
                    margin: 1rem;

                }
            }
        }



    }
</style>
