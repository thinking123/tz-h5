<template>
    <div class="wrap">
        <div class="bd left">

        </div>
        <div class="bd right">

        </div>
        <button class="btn" @click="handleClick" :disabled="loading">
            <slot/>
        </button>
    </div>

</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "HButton",
        props: {
            content: String
        },
        computed: {
            ...mapGetters(['loading'])
        },
        methods: {
            handleClick(e) {
                this.$emit('click', e)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../css/common";
    @import "../css/media";

    $bd-gap: -2px;
    .left {
        left: $bd-gap;
        top: $bd-gap
    }

    .right {
        right: $bd-gap;
        bottom: $bd-gap
    }

    .wrap {
        width: 8rem;
        height: 3rem;
        position: relative;

        & > * {
            position: absolute;
            height: 100%;
            width: 100%;
        }

        .bd {
            border: 1px solid $white;
        }

        .btn {
            background-color: transparent;
            border: none;
            outline: none;
            color: $white;

        }
    }

    $font-size-base: 2rem;
    $font-family: initial;
    $btn-w:8rem;
    $btn-h:3rem;
    $step:0.2;

    @include all-media(($iphone4) , 1,3){
        .btn {
            font-size: $font-size-base - $step;
            font-weight: bold;
            font-family: $font-family;
        }
        .wrap {
            width: $btn-w - $step;
            height: $btn-h -$step;
        }
    }

    @include all-media(($iphone4) , 1,3){
        .btn {
            font-size: $font-size-base - $step;
            font-weight: bold;
            font-family: $font-family;
        }
        .wrap {
            width: $btn-w - $step;
            height: $btn-h -$step;
        }
    }

    @include range-media(4, 6) {
        .btn {
            font-size: $font-size-base;
            font-weight: bold;
            font-family: $font-family;
        }
        .wrap {
            width: $btn-w;
            height: $btn-h;
        }
    }

    @include range-media(7, 8) {
        .btn {
            font-size: $font-size-base + $step;
            font-weight: bold;
            font-family: $font-family;
        }
        .wrap {
            width: $btn-w + 0.5;
            height: $btn-h + 0.5;
        }
    }


    @include use-media($iphone5, $iphone6) {
        .btn {
            font-size: $font-size-base;
            font-weight: bold;
            font-family: $font-family;
        }
        .wrap {
            width: $btn-w;
            height: $btn-h;
        }
    }

    @include use-media($iphone-p , $iphonex) {

        .btn {
            font-size: $font-size-base + $step;
            font-weight: bold;
            font-family: $font-family;
        }
        .wrap {
            width: $btn-w + 1.2;
            height: $btn-h + 0.2;
        }
    }


</style>
