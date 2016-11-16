/**
 * Created by qoder on 16/11/15.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import film from './modules/film'

Vue.use(Vuex)

const debug=process.env.NODE_ENV!=="production";

export default new Vuex.Store({
  modules:{
    film,
    app
  },
  strict:debug
})

