<template>
    <div class="page" :style="bg" >
        <div class="cp" @click="handleClick"/>
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
        },
        methods:{

            handleClick(){
                // console.log(back)
                this.$router.back()
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../css/common";
.cp{
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
}
    .page {
        /*background-image: url("../assets/sites/hl.jpg");*/
        background-size: 100% 100%;
        background-repeat: no-repeat;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        z-index: 200;
        .content {

        }
    }
</style>
