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
<style scoped lang="scss">

    @import "../css/common";
    @import "../css/media";

















    .img {

        transition: transform 0.5s;
        width: 8.5rem;
        height: 9.5rem;
        /*@media screen and (max-width: 321px)

             @include range-media(1 , 2 , 'w'){
        .img{
            height: 9rem;
        }
    }

    @include range-media(3 , 4, 'w'){
        .img{
            height: 10rem;
        }
    }


         {*/
            /*width: 6.5rem;*/
            /*height: 7.5rem;*/
        /*}*/
        /*@media screen and (min-width: 321px) and (max-width: 375px) {*/
            /*width: 7.5rem;*/
            /*height: 8.5rem;*/
        /*}*/

        /*@media screen and (min-width: 376px) and (max-width: 414px) {*/
            /*width: 7.5rem;*/
            /*height: 8.5rem;*/
        /*}*/


        /*@media screen and (min-width: 414px) {*/
            /*width: 7.5rem;*/
            /*height: 8.5rem;*/
        /*}*/


    }

    .img-tran {
        transform: skewY(20deg);
    }


    .tranform {
        /*transform: rotate(360deg);*/
        transform: skewY(20deg);
    }

    @include range-media(1 , 3){
        .img{
            width: 8.5rem;
            height: 9.5rem;
        }
    }

    @include range-media(4 , 6){
        .img{
            width: 9.5rem;
            height: 10.5rem;
        }
    }

    @include range-media(7 , 8){
        .img{
            width: 10.5rem;
            height: 11rem;
        }
    }





    @include use-media($iphone4) {
        .img{
            height: 9rem;
        }
    }
    @include use-media($iphone5, $iphone6) {
        .img{
            height: 10rem;
        }
    }
    @include use-media($iphone-p, $iphonex) {
        .img{
            height: 11rem;
            width: 9.5rem;
        }
    }
</style>
