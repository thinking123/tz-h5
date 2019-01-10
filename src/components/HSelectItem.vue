<template>
    <div class="item">
       {{item.content}}
    </div>
</template>

<script>
    export default {
        name: "HSelectItem",
        props:{
            content:String,
            isActive:{
                type:Boolean,
                default:false
            }
        },
    }
</script>

<style scoped lang="less">
    .item{

    }
</style>
