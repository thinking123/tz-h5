<template>
    <div class="wrap">
        <h-header/>
        <router-view/>
        <!--<div v-if="showTouch" class="touch" >-->

        <!--</div>-->
    </div>
</template>

<script>
    import HHeader from "./HHeader";
    import {getOS} from "../utils/common";
    import {mapMutations} from 'vuex'
    import {md5} from "../utils/md5";

    export default {
        name: "Layout",
        components: {HHeader},
        methods:{
            ...mapMutations([
                'setAndroid',
                'setIOS',
            ]),
            async init(){
                // const md = await md5()
                // console.log('md'  , md)
            }
        },
        created(){
            // this.init()
            const os = getOS()
            this.setAndroid('setAndroid' , os[0])
            this.setIOS('setIOS' , os[1])
        }
    }
</script>

<style scoped>
.wrap{
    width: 100%;
    height: 100%;
    /*background-color: red;*/
    display: flex;
}

    .touch{
        pointer-events: none;
        position: fixed;
        width: 100%;
        height: 100%;
        top:0;
        left:0;
        bottom: 0;
        right: 0;
        z-index: 20;
    }
</style>
