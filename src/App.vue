<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    // import {getOS} from "./utils/common";
    // import {mapMutations} from 'vuex'
    export default {
        name: 'app',
        // methods:{
        //     ...mapMutations([
        //         'setAndroid',
        //         'setIOS',
        //     ]),
        // },
        mounted() {

            // const os = getOS()
            // this.setAndroid('setAndroid' , os[0])
            // this.setIOS('setIOS' , os[1])
        }
    }
</script>

<style>
    #app {
        height: 100%;
        width: 100%;
    }
</style>
