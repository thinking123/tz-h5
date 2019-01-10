import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import "./css/base.css"
import App from './App.vue'
import routes from './router'
import store from './store'
import {getOS} from "./utils/common";

Vue.config.productionTip = false
Vue.use(VueRouter)


const router = new VueRouter({
    // mode: 'history',
    routes
})

router.beforeEach((pageTo, pageFrom, next) => {
    if (pageTo.path === '/') {

        const [isAndroid , isIOS] = getOS()

        let {openid} = pageTo.query
        const pro = process.env.NODE_ENV === 'production'
        // if(!pro){
        //     openid = 123
        // }
        if(openid){
            store.commit('setOpenId' , openid)
        }
    }
    next()
})

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
