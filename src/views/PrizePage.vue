<template>
    <div class="page">

        <div class="content" v-if="user">
            <div class="item">
                电影券兑换码:{{user.movieCode }}
            </div>
            <div class="info">
                <div class="info-title">
                    电影券使用方法
                </div>
                <div class="site-info">
                </div>
            </div>
            <div class="btn-group">
                <h-button @click="handleReturn">
                    返回首页
                </h-button>
            </div>

        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    import HInput from "../components/HInput";
    import HButton from "../components/HButton";
    import HSelecter from "../components/HSelecter";
    import {mapGetters, mapActions} from 'vuex'
    import {getSiteByKey} from "../utils/common";

    export default {
        name: "PrizePage",
        components: { HButton},
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
        background-image: url("../assets/home-bg.png");
        background-size: contain;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            /*justify-content: center;*/
            margin: 0 50px 100px;


            .item {
                margin: 0 5px;
                margin-bottom: 10px;
                font-size: larger;
                font-weight: bold;
                color: white;
            }

            .info {
                border: 1px solid @white;
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 10rem;
                position: relative;
                align-items: center;
                color: @white;

                .info-title {
                    border: 1px solid @white;
                    position: absolute;
                    top: -8px;
                    background-color: #1D298E;
                    width: 100px;

                    text-align: center

                }
            }


        }

        .btn-group {
            display: flex;
            width: 100%;
            margin-top: 20px;
            justify-content: space-around;

            & > * {
                width: 9rem;
            }
        }
    }
</style>
