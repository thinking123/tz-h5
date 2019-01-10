<template>
    <div class="wrap">
        <div class="bd left">

        </div>
        <div class="bd right">

        </div>
        <input class="input" @change="handleChange" :value="v" :placeholder="placeholder"/>
    </div>
</template>

<script>
    export default {
        name: "HInput",
        props:{
            value:{
                type:String,
                default:''
            },
            placeholder:String
        },
        computed:{
            v: {
                set(v) {
                    this.$emit('update:value', v)
                },
                get() {
                    return this.value
                }
            },
        },
        methods:{
            handleChange(e){
                this.v = e.target.value
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../css/common";

    @bd-gap:-3px;
    .left {
        left:@bd-gap;
        top:@bd-gap
    }

    .right {
        right:@bd-gap;
        bottom:@bd-gap
    }

    .wrap {

        position: relative !important;
        display: flex;
        & > *{
            position: absolute;
        }
        .bd {
            border: 1px solid @white;

            height: 100%;
            width: 100%;
        }
    }
    ::placeholder {
        opacity: 1;
        color: @white;
        font-weight: @font-weight;
        font-size: @font-size;
    }
    .input{
        position: static;
        flex: 1;
        z-index: 2;
        border: none;
        margin: 0;
        outline: none;
         background: transparent;
        height: 2.5rem;
        color: @white;
        font-weight: @font-weight;
        font-size: @font-size;
    }
</style>
