/**
 * Created by qoder on 16/11/16.
 */
import * as appTypes from '../app/mutation-type'
import * as filmTypes from './mutation-type'
import API from '../../../api'

/**
 * 获取即将上映的电影
 * @param commit
 * @param page
 * @param count
 * @returns {Promise.<TResult>}
 */
export const fetchComingSoonLists = ({commit}, page, count)=> {
  const films = API.comingSoonFilms
  commit(appTypes.START_LOADING)
  return films.get({
    page,
    count,
    _t: new Date().getTime()
  }).then((json)=> {
    commit(appTypes.STOP_LOADING)
    if (json.body.status === 0) {
      return commit(filmTypes.FETCH_COMING_SOON_SUCCESS, json.body.data)
    }
    return Promise.reject(new Error('fetchFilmsLists failure'))
  }).catch((error) => {
    return Promise.reject(error)
  })
}

/**
 * 获取正在上映的电影
 * @param commit
 * @param page
 * @param count
 */
export const fetchNowPlayingLists = ({commit}, page, count)=> {
  const films = API.nowPlayFilms
  commit(appTypes.START_LOADING)
  films.get({
    page,
    count,
    _t: new Date().getTime()
  }).then((json)=> {
    console.log(json.body)
    commit(appTypes.STOP_LOADING)
    if (json.body.status === 0) {
      return commit('FETCH_NOW_PLAYING_SUCCESS', json.body.data)
    }
    return Promise.reject(new Error('FETCH_NOW_PLAYING failure'))
  }).catch((error) => {
    return Promise.reject(error)
  })
}


/**
 * 获取电影详情
 * @param commit
 * @param id
 */
export const fetchFilmDetail = ({commit}, id)=> {
  const film = API.filmDetail
  commit(appTypes.START_LOADING)
  film.get({id, _t: new Date().getTime()}).then((json)=> {
    commit(appTypes.STOP_LOADING)
    if (json.body.status === 0) {
      return commit(filmTypes.FETCH_DETAIL_SUCCESS)
    } else {
      return Promise.reject(new Error("fetch detail fail"))
    }
  }).catch((e)=> {
    return Promise.reject(e)
  })
}

/**
 * 获取广告
 * @param commit
 */
export const fetchBillboards = ({commit})=> {
  const bills = API.filmBill;
  commit(appTypes.START_LOADING)
  bills.get({
    _t: new Date().getTime()
  }).then((json)=> {
    commit(appTypes.STOP_LOADING)
    if (json.body.status === 0) {
      return commit(filmTypes.FETCH_BANNER_SUCCESS, json.body.data)
    }
    return Promise.reject(new Error('FETCH_BANNER_SUCCESS failure'))
  }).catch((error) => {
    return Promise.reject(error)
  })
}



