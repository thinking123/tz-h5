<template>
    <div class="wrap"  @touchstart="touch">
        <div @click="handleMusic" class="music">
            <div class="icon" :style="anim">
                <audio ref="music" loop="loop" autoplay="autoplay" >
                    <source src="../assets/music.mp3" type="audio/mpeg" >
                </audio>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        name: "HHeader",
        computed: {
            ...mapGetters(['playMusic' , 'beginMusic']),
            anim() {
                const animation = this.playMusic ? 'rotating 2s linear infinite' : ''
                return {
                    animation
                }
            }
        },
        data() {
            return {
                // img: require('../assets/music.mp3')
            }

        },
        methods: {
            ...mapMutations([
                'setPlayMusic'
            ]),
            handleMusic() {
                try {
                    const m = this.$refs.music
                    this.setPlayMusic(!this.playMusic)
                    this.playMusic ? m.play() : m.pause()
                } catch (e) {
                    console.log(e)
                }

            },
            // mounted() {
            //     const m = this.$refs.music
            //     this.playMusic ? m.play() : m.pause()
            // },
            audioAutoPlay(id) {
                // var audio = document.getElementById(id);
                // alert('play music first')
                const m = this.$refs.music
                this.setPlayMusic(true)
                m.play().catch(err=>alert(err.message)) ;
                // document.addEventListener("WeixinJSBridgeReady", function () {
                //     audio.play();
                // }, false);
            },
            touch(e){
                // e.stopPropagation();
            },
            init(){
                // const appId=''
                // wx.config({
                //     debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                //     appId: appId, // 必填，公众号的唯一标识
                //     timestamp: , // 必填，生成签名的时间戳
                //     nonceStr: '', // 必填，生成签名的随机串
                //     signature: '',// 必填，签名
                //     jsApiList: [] // 必填，需要使用的JS接口列表
                // });
            }
        },
        created(){


            // const m = document.body
            // m.addEventListener("WeixinJSBridgeReady", this.audioAutoPlay, false)
            // m.addEventListener("YixinJSBridgeReady", this.audioAutoPlay, false)

            // const m = this.$refs.music
            // alert('play music')
            // m.play();
        },
        mounted() {
            const m = document
            m.addEventListener("WeixinJSBridgeReady", this.audioAutoPlay, false)
            // m.addEventListener("YixinJSBridgeReady", this.audioAutoPlay, false)

            // document.addEventListener("WeixinJSBridgeReady", function () {
            //     music.play();
            // }, false);
            // this.init()
            // const m = this.$refs.music
            // m.addEventListener("WeixinJSBridgeReady", this.audioAutoPlay, false)
            // m.addEventListener("YixinJSBridgeReady", this.audioAutoPlay, false)
        },
        beforeDestroy() {
            const m = document
            // const m = document.body
            // if (m) {
                m.removeEventListener("WeixinJSBridgeReady", this.audioAutoPlay)
            //     m.removeEventListener("YixinJSBridgeReady", this.audioAutoPlay)
            // }
        }
    }
</script>
<style>

    @keyframes rotating {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>
<style scoped lang="less">
    @import "../css/common";

    @width: 2.5rem;
    .wrap {
        position: fixed;

        .music {
            position: absolute;
            height: @width;
            width: @width;
            margin: 25px;
            right: 0;
            display: flex;

            .icon {
                background-image: url("../assets/music.png");
                background-size: 100% 100%;
                background-repeat: no-repeat;
                /* position: relative; */
                -webkit-box-flex: 1;
                -ms-flex: 1;
                flex: 1;
                /* padding: 5px; */
            }


            /*animation: rotating 2s linear infinite;*/
        }
    }

</style>
