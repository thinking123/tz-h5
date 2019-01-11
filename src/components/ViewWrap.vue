<template>
    <div class="page">
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
    import { mapGetters} from 'vuex'
    export default {
        name: "ViewWrap",
        props: {
            title: String
        },
        computed: {
            ...mapGetters([ 'isIOS'])
        }
    }
</script>

<style scoped lang="less">
    .not-ios{
        margin-bottom: 3rem;
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

        .wrap-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-image: url("../assets/home-border.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;

            width: 80%;

            align-self: center;

            @media screen and (max-height: 568px) {
                margin-top: 160px;
            }
            @media screen and (min-height: 569px) and (max-height: 667px) {
                margin-top: 180px;
            }

            @media screen and (min-height: 667px) and (max-height: 736px){
                margin-top: 200px;
            }

            @media screen and (min-height: 736px){
                margin-top: 250px;
            }
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
