import *as types from '../types';

 const state = {
	cardList: [],
 }

 const getters = {
	c_cardList: state => state.cardList,
 }

 const mutations  = {
 	[types.CARD_ARR_LIST](state, arr) {
 		state.cardList = arr
 	}
 }

 const actions = {
 	c_getCardArrList({commit}, arr) {
 		commit(types.CARD_ARR_LIST, arr)
 	}
 }

 export default {
	state,
    actions,
    getters,
    mutations
}