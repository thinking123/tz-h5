<template>
    <h-dialog :visible.sync="showDialog" :mask="''">
        <div class="content">
            <div class="content-com">
                <slot/>
            </div>
        </div>
    </h-dialog>
</template>

<script>
    import HDialog from "./HDialog";
    export default {
        name: "TipDialogWrap",
        components: { HDialog},
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
</style>

