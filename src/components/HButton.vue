<template>
    <div class="wrap">
        <div class="bd left">

        </div>
        <div class="bd right">

        </div>
        <button class="btn" @click="handleClick">
            <slot/>
        </button>
    </div>

</template>

<script>
    export default {
        name: "HButton",
        props: {
            content: String
        },
        methods:{
            handleClick(){
                this.$emit('click')
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../css/common";

    @bd-gap:-2px;
    .left {
        left:@bd-gap;
        top:@bd-gap
    }

    .right {
        right:@bd-gap;
        bottom:@bd-gap
    }

    .wrap {
        width: 6rem;
        height: 1.7rem;
        position: relative;

        & > *{
            position: absolute;
            height: 100%;
            width: 100%;
        }
        .bd {
            border: 1px solid @white;
        }
        .btn{
            background-color: transparent;
            border: none;
            outline: none;
            color: @white;
            font-weight: @font-weight;
            font-size: @font-size;
        }
    }
</style>
