<template>
    <div class="wrap">
        <div @click="handleMusic" class="music">
            <div class="icon" :style="anim">

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
        methods: {
            ...mapMutations([
                'setPlayMusic'
            ]),
            handleMusic() {
                this.setPlayMusic(!this.playMusic)
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
            border-radius: @width;
            border: 2px solid @white;
            margin: 25px;
            right: 0;
            display: flex;

            .icon {
                background-image: url(/img/music.385b83a3.png);
                background-size: 100% 100%;
                background-repeat: no-repeat;
                /* position: relative; */
                -webkit-box-flex: 1;
                -ms-flex: 1;
                flex: 1;
                /* padding: 5px; */
                border: 5px solid transparent;
            }


            /*animation: rotating 2s linear infinite;*/
        }
    }

</style>
