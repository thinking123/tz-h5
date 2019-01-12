<template>
    <div class="page" @touchstart="touch" @touchend="touch" @touchmove="touch">

        <form class="wrap-content">
            <div class="title-wrap">
                <span class="line"></span>
                <span class="title">
                    {{title}}
                </span>
                <span class="line"></span>
            </div>
            <slot/>

        </form>
        <slot name="error"/>
    </div>
</template>

<script>
    /* eslint-disable */
    import {mapGetters} from 'vuex'

    export default {
        name: "ViewWrap",
        props: {
            title: String,
            isReg: false
        },
        methods: {
            touch(e) {
                // e.stopPropagation()
                // e.preventDefault()
            }
        },
        computed: {
            ...mapGetters(['isIOS'])
        }
    }
</script>

<style scoped lang="scss">
    @import "../css/common";
    @import "../css/media";

    $font-size-b: 3rem;
    $font-size: 2rem;
    $font-weight: bolder;
    $font-size-base-s: 1.2rem;
    $top: 25rem;
    $m-top: 1.5rem;
    $line-w: 3rem;
    $b: 1rem;
    $font-family: Hz-Tz;
    @include all-media(($iphone4), 1, 3) {
        .title-wrap {
            font-weight: bold ;
            font-size: $font-size-b - 1;
            margin-top: $m-top - 0.5rem;
        }
        .line {
            width: $line-w -0.2;
        }
        .wrap-content {
            margin-top: $top - 6;
        }
        .title {
            margin: 0 0.6rem;
        }
    }

    @include all-media(($iphone5, $iphone6), 4, 6) {
        .title-wrap {
            font-weight: bold;
            font-size: $font-size-b - 0.5;
            margin-top: $m-top - 3;
        }
        .line {
            width: $line-w;
        }
        .wrap-content {
            margin-top: $top;
        }
        .title {
            margin: 0 0.8rem;
        }
    }


    @include all-media(($iphone-p, $iphonex), 7, 8) {
        .title-wrap {
            font-weight: bolder;
            font-size: $font-size-b;
            margin-top: $m-top;
        }
        .line {
            width: $line-w;
        }
        .wrap-content {
            margin-top: 20rem;
        }
        .title {
            margin: 0 1rem;
        }
    }

    .page {
        background-image: url("../assets/view/register.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        color: white;


        background-color: #009FE8;

        .wrap-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-image: url("../assets/home-border.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;

            width: 80%;

            align-self: center;

            .title-wrap {
                display: flex;
                /*font-size: large;*/
                /*font-weight: bolder;*/
                color: white;
                justify-content: center;
                align-items: center;
                font-family: Hz-Tz;
                /*font-size: xx-large;*/
                /*margin-top: 15px;*/


                .line {
                    height: 0;
                    /*width: 3rem;*/
                    border: 1px solid white;
                    font-size:inherit;
                }

                .title {
                    /*margin: 0 10px;*/
                    font-size:inherit;
                }
            }


        }
    }
</style>
