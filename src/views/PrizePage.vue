<template>
    <div class="page">
        <title-animation top="70px"/>
        <div class="item"  v-if="user">
            电影券兑换码:{{user.movieCode }}
        </div>
        <div class="content center" >

            <img src="../assets/prize-content.png"/>
        </div>
        <h-button @click="handleReturn" class="center button">
            返回首页
        </h-button>



        <!--<div class="content" v-if="user">-->
            <!--<div class="item">-->
                <!--电影券兑换码:{{user.movieCode }}-->
            <!--</div>-->
            <!--<div class="info">-->
                <!--<div class="info-title">-->
                    <!--电影券使用方法-->
                <!--</div>-->
                <!--<div class="site-info">-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="btn-group">-->
                <!--<h-button @click="handleReturn">-->
                    <!--返回首页-->
                <!--</h-button>-->
            <!--</div>-->

        <!--</div>-->
    </div>
</template>

<script>
    /* eslint-disable */
    import HInput from "../components/HInput";
    import HButton from "../components/HButton";
    import HSelecter from "../components/HSelecter";
    import {mapGetters, mapActions} from 'vuex'
    import {getSiteByKey} from "../utils/common";
    import TitleAnimation from "../components/TitleAnimation";

    export default {
        name: "PrizePage",
        components: {TitleAnimation, HButton},
        data() {
            return {}
        },
        computed: {
            ...mapGetters(['user'])
        },
        methods: {
            ...mapActions([
                'getUser',
            ]),
            handleReturn() {
                this.$router.push({path: '/'})
            }
        },
        mounted() {
        }
    }
</script>

<style scoped lang="less">
    @import "../css/common";

    .page {
        background-image: url("../assets/prize-bg.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        .center{
            position: fixed;
            left: 50%;
            transform: translateX(-50%);
        }
        .content{
            overflow-y: auto;
            width: 200px;
            height: 120px;
            bottom: 130px;
            .img{
                background-image: url("../assets/prize-content.png");
                width: 100%;
            }

        }

        .item{
            top:200px;
        }
        .button{
            bottom: 50px;
        }

    }
</style>
