import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import "./css/base.css"
import App from './App.vue'
import routes from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter)


const router = new VueRouter({
    // mode: 'history',
    routes
})


new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
