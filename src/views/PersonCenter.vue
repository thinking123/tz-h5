<template>
    <view-wrap title="我的信息">
        <div class="content" v-if="user">
            <img :src="user.userHead" class="icon"/>
            <div class="item-wrap">
                <div class="one-line">
                    <div class="item">
                        姓名:{{user.userName}}
                    </div>
                    <div class="item">
                        手机:{{user.userPhone}}
                    </div>
                </div>
                <div class="item">
                    公司:{{user.userCompany}}
                </div>
            </div>
            <h-card title="我的座位信息" :footer="footer" @click.native="handleToZone">
                <img :src="siteBg" class="img-str"/>
            </h-card>
            <div class="btn-group">
                <h-button @click="handlePrize">
                    我的奖品信息
                </h-button>
                <h-button @click="handleReturn">
                    返回首页
                </h-button>
            </div>

        </div>

        <!--<tip-dialog :visible.sync="showTip"/>-->
        <tip-dialog-ex  :visible.sync="showTip" title="敬请期待"/>
    </view-wrap>
</template>

<script>
    /* eslint-disable */
    import HInput from "../components/HInput";
    import HButton from "../components/HButton";
    import HSelecter from "../components/HSelecter";
    import {mapGetters, mapActions} from 'vuex'
    import {getSiteByKey} from "../utils/common";
    import TipDialog from "../components/TipDialog";
    import ViewWrap from "../components/ViewWrap";
    import HCard from "../components/HCard";
    import TipDialogEx from "../components/dialog/TipDialogEx";

    export default {
        name: "PersonCenter",
        components: {TipDialogEx, HCard, ViewWrap, TipDialog, HSelecter, HButton, HInput},
        data() {
            return {
                showTip: false,

            }
        },
        computed: {
            ...mapGetters(['user' , 'openid']),
            footer(){
                const f = '点击查看所在座位区'
              return `"${f}"`
            },
            site() {
                if(this.user.userSeat){
                    return getSiteByKey(this.user.userSeat)
                }else{
                    return null
                }
            } ,
            siteBg() {
                // const index = getSiteByKey(this.user.userSeat)
                const url = require(`../assets/sites-sm/${this.user.userSeat}.png`)
                console.log(url)
                return url
            }
        },
        methods: {
            ...mapActions([
                'getUser',
            ]),
            handlePrize() {
                if(this.user.state != 0){
                    this.$router.push({path: 'prize-page'})
                }else{
                    this.showTip = true
                }
            },
            handleReturn() {
                this.$router.push({path: '/'})
            },
            handleToZone() {
                this.$router.push({path: 'site-info'})
            },
            async init() {
                try {
                    await this.getUser(this.openid)
                } catch (e) {

                }
            }
        },
        mounted() {
            this.init()
        }
    }
</script>

<style scoped lang="less">
    @import "../css/common";
    @item-col: #0f6EB0;
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        /*margin: 0 50px 60px;*/
        width: 80%;
        margin-bottom: 3rem;
        .img-str{
            width: 100%;
            height: 100%;
        }
        .icon{
            width: @camera;
            height: @camera;
            border-radius: @camera-r;
            /*margin: 10px 0;*/
            margin-bottom: 0.5rem;
            background-color: white;

        }

        .one-line {
            display: flex;
            align-self: start;
            & > .item {
                display: inline;
            }
        }

        .item-wrap{
            display: flex;
            flex-direction: column;
            justify-content: center;

        }
        .item {
            margin: 0 5px;
            margin-bottom: 10px;
            font-size: larger;
            font-weight: bold;
            color: white;
            align-self: start;
        }




    }

    .btn-group {
        display: flex;
        width: 100%;
        margin-top: 1.5rem;
        justify-content: space-around;
        font-family: Hz-Tz;
        & > * {
            width: 10rem;
            font-size: larger;
        }
    }
</style>
