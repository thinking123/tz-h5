<template>
    <div v-if="showDialog" class="dialog" :style="bg">
        <div class="dialog-content">
            <div class="dialog-title">
                <span class="dialog-btn" @click="handleClose"/>
            </div>
            <slot></slot>
        </div>

    </div>
</template>

<script>
    /* eslint-disable */
    export default {
        name: "HDialog",
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
.dialog{
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3000;
    .dialog-content{
        flex: 1;
        margin: 0 50px;
        .dialog-title{
            display: flex;
            justify-content: flex-end;
            position: relative;
            .dialog-btn{
                background-image: url("../assets/dialog-x.png");
                height: 3rem;
                width: 3rem;
                background-size: cover;
                position: relative;
                right: -2rem;
            }
        }
    }
}
</style>
