<template>
    <base-dialog :visible.sync="showDialog">

        <div class="img-wrap" @touchmove="touchMove">
            <img src="../../assets/sample.jpg"/>
        </div>

    </base-dialog>
</template>

<script>
    import BaseDialog from "./BaseDialog";
    export default {
        name: "SamplePhotoDialog",
        components: {BaseDialog},
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
                },
            },
        },
        methods:{
            touchMove(e){
                e.stopPropagation();
                e.preventDefault()
            }
        }
    }
</script>

<style scoped lang="less">

    img{
        width: 100%;
        height: 100%;
        transform: scale(1.1);
    }

</style>
