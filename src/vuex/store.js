/**
 * Created by qoder on 16/11/15.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug=process.env.NODE_ENV!=="production";

export default new Vuex.Store({
  modules:{

  },
  strict:debug
})

