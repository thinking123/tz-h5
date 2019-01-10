<template>
    <div v-if="showDialog" class="dialog" >
        <div class="dialog-content">
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
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../css/common";
    .dialog{
        position: fixed;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 30000;
        .dialog-content{
            flex: 1;
            margin: 0 4.5rem;
            min-width: 100px;
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
                }
            }
            .dialog-body{
                background-image: url("../../assets/dialog-border.png");
                background-size: 100% 100%;
                background-repeat: no-repeat;
                padding: 1rem;
                .dialog{
                    background-color: @dialog-bg-t;
                    margin: 1rem;
                }
            }
        }



    }
</style>
