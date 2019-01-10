<template>
    <h-dialog :visible.sync="showDialog" :mask="''">
        <div class="content">
            <div class="content-com">

                <div class="btn-group">
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
    export default {
        name: "TipDialog",
        components: {HButton, HDialog},
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
    .content{
        background-image: url("../assets/jqqd-w.png");
        background-size: 100% 100%;
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
