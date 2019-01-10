<template>
    <base-dialog :visible.sync="showDialog">

        <img src="../../assets/sample.jpg"/>
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
                }
            },
        },
    }
</script>

<style scoped>


    img{
        width: 100%;
        height: 100%;
    }
</style>
