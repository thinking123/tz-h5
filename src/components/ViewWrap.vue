<template>
    <div class="page">
        <form class="content">
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

    export default {
        name: "ViewWrap",
        props: {
            title: String
        }
    }
</script>

<style scoped lang="less">
    .page {
        background-image: url("../assets/view/register.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        color: white;

        .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-image: url("../assets/home-border.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;

            width: 80%;
            margin-bottom: 1rem;
            align-self: center;

            .title-wrap {
                display: flex;
                font-size: large;
                font-weight: bolder;
                color: white;
                justify-content: center;
                align-items: center;
                font-family: Hz-Tz;
                font-size: xx-large;
                margin-top: 15px;

                .line {
                    height: 0;
                    width: 3rem;
                    border: 1px solid white;
                }

                .title {
                    margin: 0 10px;
                }
            }


        }
    }
</style>
