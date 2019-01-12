<template>
    <div class="wrap">
        <div class="bd left">

        </div>
        <div class="bd right">

        </div>

        <input ref="input" class="input" @change="handleChange" :value="v" :placeholder="placeholder"
               @focus="handleFocus" @blur="handleBlur"/>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "HInput",
        computed: {
            ...mapGetters(['isAndroid'])
        },
        props: {
            value: {
                type: String,
                default: ''
            },
            autofocus: {
                type: Boolean,
                default: false
            },
            placeholder: String
        },
        computed: {
            v: {
                set(v) {
                    this.$emit('update:value', v)
                },
                get() {
                    return this.value
                }
            },
        },
        methods: {
            handleChange(e) {
                this.v = e.target.value
            },
            handleFocus(e) {
                // setTimeout(()=>{
                //     let panel = this.$refs.input
                //     pannel.scrollIntoView(true)
                //     pannel.scrollIntoViewIfNeeded();
                // },200)

                this.$emit('hfocus', e)
            },
            handleBlur(e) {
                this.$emit('hblur', e)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../css/common";
    @import "../css/media";

    $bd-gap: -6px;
    .left {

    }

    .right {
        right: $bd-gap;
        bottom: $bd-gap
    }

    .wrap {

        position: relative !important;
        display: flex;

        & > * {
            position: absolute;
        }

        .bd {
            border: 1px solid $white;

            height: 100%;
            width: 100%;
        }
    }

    ::placeholder {
        opacity: 1;
        color: $white;
        font-weight: $font-weight;
        font-size: $font-size;

    }

    .input {
        position: static;
        flex: 1;
        z-index: 2;
        border: none;
        margin: 0;
        outline: none;
        background: transparent;
        height: 3rem;
        color: $white;
        /*font-weight: bolder;*/
        /*font-size: large;*/

        /*height: 3rem;*/

    }

    @include range-media(1, 2) {
        .input{
            height: 2.5rem;
            font-weight: bold;
            font-size: initial;
        }
        ::placeholder {
            font-weight: bold;
            font-size: initial;
        }
    }

    @include range-media(2, 5) {
        .input{
            height: 3rem;
            font-weight: bolder;
            font-size: large;
        }
        ::placeholder {
            font-weight: bolder;
            font-size: large
        }

    }
    @include range-media(6, 7) {
        .input{
            height: 3rem;
            font-weight: bolder;
            font-size: large;
        }
        ::placeholder {
            font-weight: bolder;
            font-size: large
        }
    }
    @include range-media(7, 8) {
        .input{
            height: 3.5rem;
            font-weight: bolder;
            font-size: large;
        }
        ::placeholder {
            font-weight: bolder;
            font-size: large;
        }
    }

    @include use-media($iphone4) {
        .input{
            height: 2.5rem;
            font-weight: bold;
            font-size: initial;
        }
        ::placeholder {
            font-weight: bold;
            font-size: initial;
        }

    }
    @include use-media($iphone5, $iphone6) {
        .input{
            height: 3rem;
            font-weight: bolder;
            font-size: large;
        }
        ::placeholder {
            font-weight: bolder;
            font-size: large
        }
    }
    @include use-media($iphone-p) {
        .input{
            height: 3.5rem;
            font-weight: bolder;
            font-size: large;
        }
        ::placeholder {
            font-weight: bolder;
            font-size: large;
        }

    }
    @include use-media($iphonex) {
        .input{
            height: 3.5rem;
            font-weight: bolder;
            font-size: large;
        }
        ::placeholder {
            font-weight: bolder;
            font-size: large;
        }
    }


</style>
