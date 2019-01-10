<template>
    <div class="wrap" :style="sty">
        <div class="img-wrap">
            <div class="anim img1 img">

            </div>
        </div>
        <div class="img-wrap">
            <div class="anim img2 img">

            </div>
        </div>
        <div class="img-wrap">
            <div class="anim img3 img">

            </div>
        </div>
        <div class="img-wrap">
            <div class="anim img4 img">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TitleAnimation",
        props: {
            top: {
                type: String,
                default: '75px'
            }
        },
        computed: {
            sty() {
                return {
                    top: this.top
                }
            }
        },
    }
</script>
<style>
    @keyframes bounce {

    }
</style>
<style scoped lang="less">

    .wrap {
        display: flex;
        justify-content: space-around;
        position: fixed;
        width: 100%;
        top: 95px;

        .img-wrap {
            position: relative;


        }

    }

    .img {
        position: absolute;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width: 3rem;
        height: 3rem;
        margin: 5px;
        animation: bounce 3s infinite;
        animation-direction: alternate;
    }

    .img1 {
        background-image: url("../assets/anim/j.png");


    }

    .img2 {
        background-image: url("../assets/anim/b.png");
        animation-delay: 1s;
    }

    .img3 {
        background-image: url("../assets/anim/g.png");
        animation-delay: 2s;
    }

    .img4 {
        background-image: url("../assets/anim/y.png");
        animation-delay: 3s;
    }
</style>
