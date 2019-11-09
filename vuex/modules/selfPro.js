import *as types from '../types';

 const state = {
	select_pro: null
 }

 const getters = {
	sp_select_pro: state => state.select_pro
 }

 const mutations  = {
 	[types.SELECT_SELF_PRO](state, obj) {
 		state.select_pro = obj
 	}
 }

 const actions = {
 	sp_getSelfProInfo({commit}, obj) {
 		commit(types.SELECT_SELF_PRO, obj)
 	}
 }

 export default {
	state,
    actions,
    getters,
    mutations
}