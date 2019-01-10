<template>
    <div class="full" v-if="visible">
        <span class="remain">
            {{remainTime}}
        </span>
    </div>
</template>

<script>
    export default {
        name: "SplashPage",
        props:{
            visible:{
                type:Boolean,
                default:false
            },
            remainTime:String
        }
    }
</script>

<style scoped lang="less">
.full{
    background-image: url("../assets/splash-bg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: aquamarine;

    .remain{
        position: fixed;
        right: 20px;
        top: 20px;
        z-index: 101;
        height: 20px;
        width: 20px;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #009FE8;
    }
}
</style>
