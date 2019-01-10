<template>
    <div class="full" v-if="visible">

    </div>
</template>

<script>
    export default {
        name: "SplashPage",
        props:{
            visible:{
                type:Boolean,
                default:false
            }
        }
    }
</script>

<style scoped lang="less">
.full{
    background-image: url("../assets/home-bg.png");
    background-size: contain;
    height: 100%;
    width: 100%;
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: aquamarine;
}
</style>
