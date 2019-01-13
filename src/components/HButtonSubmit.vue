

<template>
    <div class="wrap" >
        <div class="bd left">

        </div>
        <div class="bd right">

        </div>
        <input type="submit" class="btn" :disabled="loading" :value="text"/>
    </div>

</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "HButtonSubmit",
        props: {
            text: String
        },
        computed: {
            ...mapGetters(['loading'])
        },
        methods: {
            handleClick(e) {
                // alert('cli')
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
        display: flex;
        justify-content: center;
        align-items: center;

        & > * {

        }

        .bd {
            border: 1px solid $white;
            position: absolute;
            height: 100%;
            width: 100%;
        }

        .btn {
            background-color: transparent;
            border: none;
            outline: none;
            color: $white;
            height: 100%;
            width: 100%;
            left:0;
            position: absolute;
        }
    }

    $font-size-base: 2rem;
    $font-family: initial;
    $btn-w:8rem;
    $btn-h:3rem;
    $step:0.2;


    @include range-media(1, 4) {
        .btn {
            font-size: 1.8rem;
            font-weight: bold;
            font-family: $font-family;

        }
        .wrap {
            width:8rem;
            height: 2.5rem;
        }
    }

    @include range-media(5, 8) {
        .btn {
            font-size: 2rem;
            font-weight: bold;
            font-family: $font-family;

        }
        .wrap {
            width:9rem;
            height: 3rem;
        }
    }

    @include use-media($iphone4) {
        .btn {
            font-size: $font-size-base;
            font-weight: bold;
            font-family: $font-family;
        }
        .wrap {
            width: 18rem;
            height: $btn-h;
        }
    }

    @include use-media($iphone5, $iphone6) {
        .btn {
            font-size: 1.8rem;
            font-weight: bolder;
        }
        .wrap {
            width:8.5rem;
            height: 2.8rem;
        }
    }

    @include use-media($iphone-p , $iphonex) {

        .btn {
            font-size: 2rem;
            font-weight: bolder;
        }
        .wrap {
            width:9rem;
            height: 3rem;
        }
    }


</style>

