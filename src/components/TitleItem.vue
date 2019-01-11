<!--<template>-->
<!--<div>-->

<!--</div>-->
<!--</template>-->
<!--<script>-->
<!--export default {name:TitleItem}-->
<!--</script>-->

<template>
    <div class="title-item" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
        <img :src="img" class="img" :class="{'tranform':isTouching}"/>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "TitleItem",
        props: {
            index: {
                type: Number,
                default: 0
            },
        },
        computed: {
            img() {
                let url

                if (this.index == 7) {
                    url = require(`../assets/home-btn/${this.index}.png`)
                } else {
                    url = require(`../assets/home-btn/${this.index}.jpg`)
                }
                return url
            }
        },
        data() {
            return {
                isTouching: false
            }
        },
        methods: {
            handleTouchStart() {
                this.isTouching = true
            },
            handleTouchEnd() {
                if (this.isTouching) {
                    this.time = setTimeout(() => {
                        this.isTouching = false
                    }, 1000)
                }


            }
        },
        beforeDestroy() {
            clearTimeout(this.time)
        }
    }
</script>
<style scoped lang="less">

    @import "../css/common";


    @item-bg: #dbe2f6;
    @item-border: #10379A;
    @outer-p: 90%;
    @inner-p: 70%;
    @gap-h: 0px;
    @gap-w: 0px;
    @gap-h-d: 0px;
    @gap-w-d: 0px;


    .img {

        transition: transform 0.5s;
        @media screen and (max-width: 321px) {
            width: 6.5rem;
            height: 7.5rem;
        }
        @media screen and (min-width: 321px) and (max-width: 375px) {
            width: 7.5rem;
            height: 8.5rem;
        }

        @media screen and (min-width: 376px) and (max-width: 414px) {
            width: 7.5rem;
            height: 8.5rem;
        }


        @media screen and (min-width: 414px) {
            width: 7.5rem;
            height: 8.5rem;
        }


    }

    .img-tran {
        transform: skewY(20deg);
    }


    .tranform {
        /*transform: rotate(360deg);*/
        transform: skewY(20deg);
    }


</style>
