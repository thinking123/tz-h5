<template>
    <view-wrap title="我的奖品信息">
        <div class="content">
            <!--<div class="item" v-if="user">-->
            <!--电影券兑换码:{{user.movieCode }}-->
            <!--</div>-->
            <div class="item">
                电影券兑换码:{{user ? user.movieCode : '' }}
            </div>
            <h-card title="电影券使用方法" :footer="footer">
                <img src="../assets/prize-text.png" class="text"/>
                <div class="sample-page" @click="handleView">

                    <img src="../assets/prize-content.png" class="img"/>
                </div>
            </h-card>
            <h-button @click="handleReturn" class="button">
                返回首页
            </h-button>
        </div>

        <view-dialog :visible.sync="showView">
            <img src="../assets/prize-content.png" class="img" style="z-index: 3002" @touchstart="touch"/>
        </view-dialog>
    </view-wrap>
</template>

<script>
    /* eslint-disable */
    import HInput from "../components/HInput";
    import HButton from "../components/HButton";
    import HSelecter from "../components/HSelecter";
    import {mapGetters, mapActions} from 'vuex'
    import {getSiteByKey} from "../utils/common";
    import TitleAnimation from "../components/TitleAnimation";
    import ViewWrap from "../components/ViewWrap";
    import HCard from "../components/HCard";
    import ViewDialog from "../components/dialog/ViewDialog";

    export default {
        name: "PrizePage",
        components: {ViewDialog, HCard, ViewWrap, TitleAnimation, HButton},
        data() {
            return {
                showView: false
            }
        },
        computed: {
            ...mapGetters(['user']),
            footer() {
                const f = '滑动可查看详细使用规则'
                return `"${f}"`
            },
        },
        methods: {
            ...mapActions([
                'getUser',
            ]),
            touch(e){
                e.stopPropagation();
            },
            handleReturn() {
                this.$router.push({path: '/'})
            },
            handleView() {
                this.showView = true
            }
        },

    }
</script>

<style scoped lang="less">
    @import "../css/common";


    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        /*margin: 0 50px 60px;*/
        width: 80%;
        margin-bottom: 1.5rem;


        .item {
            margin: 0.2rem 0 1.5rem;
            font-size: large;


        }

        .text {
            width: 100%;
            height: 10rem;
        }

        .button {
            font-family: Hz-Tz;
            font-size: large;
            margin-top: 1rem;
            height: 3rem;
            width: 10rem;

            font-size: large;
        }

        .sample-page {
            overflow-y: auto;
            width: 100%;
            height: 10rem;


            .img {

                width: 100%;
                height: auto;
            }

        }
    }


</style>
