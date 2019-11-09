import Vue from 'vue'
import App from './App'
import store from './vuex/store'
import api from './common/api.js'
import config from './config.js'

Vue.config.productionTip = false

App.mpType = 'app'

// 注册导航组件
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

import home from './pages/home/home'
Vue.component('home', home)

// 分销
import retail from './pages/retail/retail'
Vue.component('retail', retail)

// 茶咖
import selfPro from './pages/selfPro/selfPro'
Vue.component('selfPro', selfPro)

// 户外产品
import outdoorsPro from './pages/outdoorsPro/outdoorsPro'
Vue.component('outdoorsPro', outdoorsPro)

// 我的
import mine from './pages/mine/mine'
Vue.component('mine', mine)

Vue.prototype.$store = store
Vue.prototype.$api = api
Vue.prototype.$config = config

const app = new Vue({
    ...App,
	store
})
app.$mount()
