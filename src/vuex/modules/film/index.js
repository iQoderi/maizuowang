/**
 * Created by qoder on 16/11/16.
 */
import * as getters from './getters'
import mutations from './mutations'
import * as actions from './actions'

const state = {
  comingSoonFilms: [],
  nowPlayingFilms: [],
  detail: {},
  billboards: []
}

export default {
  state,
  getters,
  mutations,
  actions
}

