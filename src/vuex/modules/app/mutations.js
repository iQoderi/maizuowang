/**
 * Created by qoder on 16/11/15.
 */
import * as types from './mutation-type'

const mutations = {
  [types.CHANGE_LEFTNAV_STATE](state, isShow){
    state.leftNavState = isShow
  },
  [types.START_LOADING](state){
    state.loading = true
  },
  [types.START_LOADING](state){
    state.loading = false
  }
}

export default  mutations
