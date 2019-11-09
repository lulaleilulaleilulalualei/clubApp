import Vue from 'vue'
import Vuex from 'vuex'

import common from './modules/common.js'
import selfPro from './modules/selfPro.js'


Vue.use(Vuex);
//创建store实例
export default new Vuex.Store({
	modules : {
		common,
		selfPro
	}
});