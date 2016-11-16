/**
 * Created by qoder on 16/11/16.
 */
import Vue from 'vue'
import resource from 'vue-resource'
Vue.use(resource)

const vm = new Vue()
const __APIHOST__ = 'http://m.maizuo.com/v4/api'

const apiMaker = (path, option)=> {
  if (option) {
    return vm.$resource(`${__APIHOST__}/path`, option)
  } else {
    return vm.$resource(`${__APIHOST__}/path`)
  }
}

export default {
  login: apiMaker('/user/login')
}
