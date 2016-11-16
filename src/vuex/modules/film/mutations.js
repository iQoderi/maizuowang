/**
 * Created by qoder on 16/11/16.
 */
import * as  types from './mutation-type'

const mutations = {
  //获取即将上映的电影
  [types.FETCH_COMING_SOON_SUCCESS](state, data){
    state.comingSoonFilms = data.films
  },
  //获取正在上映的电影列表
  [types.FETCH_NOW_PLAYING_SUCCESS](state, data){
    state.nowPlayingFilms = data.films
  },
  //获取电影详情
  [types.FETCH_DETAIL_SUCCESS](state, data){
    state.detail = data.film
  },
  //获取广告列表
  [types.FETCH_BANNER_SUCCESS](state, data){
    state.billboards = data.billboards
  }
}


export default mutations
