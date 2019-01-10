<template>
    <div class="page" :style="bg">
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "SiteInfo",
        computed: {
            ...mapGetters(['user']),
            bg() {
                if(this.user.userSeat || this.user.userSeat === 0){
                    const url = require(`../assets/sites/${this.user.userSeat}.jpg`)
                    return {backgroundImage: `url(${url})`}
                }else{
                    return ''
                }

            }
        }
    }
</script>

<style scoped lang="less">
    @import "../css/common";

    .page {
        /*background-image: url("../assets/sites/hl.jpg");*/
        background-size: 100% 100%;
        background-repeat: no-repeat;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        .content {

        }
    }
</style>
