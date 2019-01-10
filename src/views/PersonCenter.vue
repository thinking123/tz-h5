<template>
    <div class="page">

        <div class="content" v-if="user">
            <div class="icon" >
                <img :src="user.userHead"/>
            </div>
            <div class="line">
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
            <div class="info" @click="handleToZone">
                <!--<div class="info-title">-->
                    <!--我的座位信息-->
                <!--</div>-->
                <div class="site-info">
                    <div class="site" :style="siteBg">
                        <!--{{site}}-->
                    </div>
                </div>
                <!--<div class="info-footer">-->
                    <!--"点急可查看全场座位号"-->
                <!--</div>-->
            </div>
            <div class="btn-group">
                <h-button @click="handlePrize">
                    我的奖品信息
                </h-button>
                <h-button @click="handleReturn">
                    返回首页
                </h-button>
            </div>

        </div>

        <tip-dialog :visible.sync="showTip"/>
    </div>
</template>

<script>
    /* eslint-disable */
    import HInput from "../components/HInput";
    import HButton from "../components/HButton";
    import HSelecter from "../components/HSelecter";
    import {mapGetters, mapActions} from 'vuex'
    import {getSiteByKey} from "../utils/common";
    import TipDialog from "../components/TipDialog";

    export default {
        name: "PersonCenter",
        components: {TipDialog, HSelecter, HButton, HInput},
        data() {
            return {
                showTip: false
            }
        },
        computed: {
            ...mapGetters(['user' , 'openid']),
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
                return {
                    'backgroundImage': `url(${url})`
                }
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
    .page {
        background-image: url("../assets/person-bg.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
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
            margin: 0 50px 60px;

            .icon{
                width: 5rem;
                height: 5rem;
                border-radius: 1rem;
                margin: 10px 0;
                background-color: white;

                & > img{
                    width: 100%;
                    height: 100%;
                    border-radius: 2rem;
                }
            }
            & > * {

            }

            .line {
                display: flex;

                & > .item {
                    display: inline;
                }
            }

            .item {
                margin: 0 5px;
                margin-bottom: 10px;
                font-size: larger;
                font-weight: bold;
                color: white;
            }

            .info {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 10rem;
                margin-top: 25px;
                z-index: 2;
                .info-title {
                    border: 1px solid @white;
                    position: absolute;
                    top: -8px;
                    background-color: #1D298E;
                    width: 100px;

                    text-align: center

                }

                .site-info {
                    flex: 1;
                    width: 95%;
                    margin: 5px;
                    height: 100%;
                    align-items: center;
                    justify-content: center;
                    .site {
                        margin: 20px 50px 40px;
                        height: 70%;
                        background-size: 100% 100%;
                        background-repeat: no-repeat;
                    }
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
