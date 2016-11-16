/**
 * Created by qoder on 16/11/15.
 */
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

const state = {
  leftNavState: false,
  loading: false
}

export default {
  state,
  actions,
  getters,
  mutations
}
