<template>
    <div v-if="showDialog" class="dialog" @click="handleClose">

        <div class="dialog-content">
            <slot/>
        </div>

    </div>
</template>

<script>
    /* eslint-disable */
    export default {
        name: "ViewDialog",
        props: {
            visible: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            showDialog: {
                set(v) {
                    this.$emit('update:visible', v)
                },
                get() {
                    return this.visible
                }
            },
        },
        methods: {
            handleClose() {
                this.showDialog = false
            },
            handleTouch1(e) {
                // e.preventDefault()
                e.stopPropagation();
            }, handleTouch(e) {

                e.stopPropagation();
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../css/common";

    .mask {
        background-color: @black;
        opacity: 0.9;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    .title {
        font-family: Hz-Tz;
        font-size: x-large;
        color: @white;

    }

    .dialog {
        background-color: @black;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 3000;

        .dialog-content {
            margin: 20px;
            z-index: 3001;
            overflow-y: auto;
            width: 100%;
            height: 100%;
            margin: 20px;
            /* min-width: 100px; */
            z-index: 30001;
            overflow-y: auto;
            height: 90%;

            & > * {
                width: 100%;
                z-index: 3002;
            }
        }


    }
</style>
