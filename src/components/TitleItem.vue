<template>
    <div class="title-item" >
        <div class="item-wrap">
            <div class="item"  :style="bg">

            </div>
        </div>

        <!--{{content}}-->
    </div>
</template>

<script>
    export default {
        name: "TitleItem",
        props:{
            content:{
                type:String,
                default:"敬请期待"
            },
            src:{
                type:String,
                default: ''
            }
        },
        computed: {
            bg() {
                const url = require(`../assets/home/${this.content}.png`)
                return {backgroundImage: `url(${url})`}
            }
        },
        methods:{
        }
    }
</script>

<style scoped lang="less">
    @item-bg:#CCD2F2;
    @item-border:#10379A;

    .title-item{

        height: 8rem;
        width: 7rem;
        background-color: @item-bg;
        opacity: 0.8;
        display: flex;

        .item-wrap{
            display: flex;
            flex:1;
            margin: 5px;
            border:1px solid @item-border;
            .item{
                flex:1;
                background-color: @item-bg;
                margin: 15px;

                /*opacity: 0.5;*/
                background-size: 100% 100%;
            }
        }

    }
</style>
