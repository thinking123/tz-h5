<template>
    <div class="wrap">
        <div @click="handleMusic" class="music">
            <div class="icon" :style="anim">
                <audio ref="music" loop="loop" autoplay="autoplay">
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
            ...mapGetters(['playMusic']),
            anim() {
                const animation = this.playMusic ? 'rotating 2s linear infinite' : ''
                return {
                    animation
                }
            }
        },
        data(){
            return{
                img:require('../assets/music.mp3')
            }

        },
        methods: {
            ...mapMutations([
                'setPlayMusic'
            ]),
            handleMusic() {
                try{
                    const m = this.$refs.music
                    this.setPlayMusic(!this.playMusic)
                    this.playMusic ? m.play() : m.pause()
                }catch (e) {
                    console.log(e)
                }

            },
            mounted(){
                const m = this.$refs.music
                this.playMusic ? m.play() : m.pause()
            }
        }
    }
</script>
<style >

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
