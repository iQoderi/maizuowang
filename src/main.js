import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import routerConfig from './routers';
import FastClick from 'fastclick';

window.addEventListener('load', ()=> {
  FastClick.attach(document.body);
})

Vue.use(VueRouter);
Vue.use(VueResource);
const router = new VueRouter({routes: routerConfig})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  render:h=>h(App)
})
