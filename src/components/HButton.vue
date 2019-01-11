<template>
    <div class="wrap">
        <div class="bd left">

        </div>
        <div class="bd right">

        </div>
        <button class="btn" @click="handleClick" :disabled="loading">
            <slot/>
        </button>
    </div>

</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "HButton",
        props: {
            content: String
        },
        computed: {
            ...mapGetters(['loading'])
        },
        methods:{
            handleClick(e){
                this.$emit('click' , e)
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
        width: 8rem;
        height: 3rem;
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
            font-size: inherit;
            font-weight: inherit;
            font-family: inherit;
        }
    }
</style>
