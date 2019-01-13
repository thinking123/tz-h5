import "@babel/polyfill"
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
    // // mode: 'history',
    // mode: 'history',
    routes
})


router.beforeEach((pageTo, pageFrom, next) => {
    if (pageTo.path === '/') {





        let {openid} = pageTo.query
        const pro = process.env.NODE_ENV === 'production'
        // if(!pro){
        //     openid = 123
        // }
        if(openid){
            store.commit('setOpenId' , openid)
            return next({path:'/'})
        }

        // if(store.state.openid){
        //     return next()
        //
        // }
        // try{
        //     let l = location
        //
        //     if (l.href.indexOf('openid') !== -1){
        //         let index = l.href.indexOf('openid')
        //         let end = l.href.indexOf('#/') !== -1
        //         end = end ? 2 : 0
        //         let openidquery = l.href.substr(index , l.href.length - end - index)
        //         let openid = openidquery.split('=')[1]
        //         if(openid){
        //             console.log('openid' , openid)
        //             store.commit('setOpenId' , openid)
        //             return next({path:'/'})
        //         }
        //        //  let q = l.href.indexOf('?')
        //        //  let url = l.href.substr(0 , q)
        //        //  console.log('url' , url)
        //        //  // location.href = url ;
        //        // location.replace("/#/");
        //     }
        // }catch (e) {
        //     console.log("route " , e)
        // }


    }
    next()
})

router.afterEach((route)=>{
    // let l = location;
    // //强制?#方式访问 以兼容微信分享
    // if (l.href.indexOf('openid') === -1) {
    //
    //     location.href = l.origin +  '?' + l.hash;
    //     return false;
    // }
});
new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
