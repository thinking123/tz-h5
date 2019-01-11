<template>
    <div class="info">
        <div class="info-title">
            {{title}}
        </div>
        <div class="site-info">
            <slot/>
        </div>
        <div class="info-footer">
            {{footer}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "HCard",

        props: {
            title: String,
            footer: String
        }
    }
</script>

<style scoped lang="less">
    @import "../css/common";
    .info {
        display: flex;
        flex-direction: column;
        width: 100%;
        z-index: 2;
        border: 1px solid @white;
        position: relative;
        display: flex;
        flex-direction: column;
        .info-title {
            border: 1px solid @white;
            position: absolute;
            background-color: #1D298E;
            width: 100px;

            text-align: center;
            left:50%;
            transform: translate(-50%, -50%);



        }

        .site-info {
            flex: 1;
            margin: 1rem;
            margin-bottom: 0;
            align-items: center;
            justify-content: center;
            min-width: 40px;
            min-height: 20px;
        }
        .info-footer{
            text-align: center;
        }
    }
</style>
