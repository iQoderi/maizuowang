/**
 * Created by qoder on 16/11/15.
 */
"use strict";
export default [{
  path: '/',
  name: 'index',
  component: require('./views/home/index.vue')
}, {
  path: "/login",
  name: 'login',
  component: require('./views/member/login.vue')
}, {
  path: "/film",
  name: 'film',
  component: require('./views/film/film-view.vue'),
  children: [
    {
      path: 'nowPlaying',
      name: 'nowPlaying',
      component: require('./views/film/now-playing.vue')
    },
    {
      path: 'comingSoon',
      name: 'comingSoon',
      component: require('./views/film/coming-soon.vue')
    }
  ]
}, {
  path: '/detail/:id',
  name: 'detail',
  component: require('./views/film/detail.vue')
}, {
  path: '/card',
  name: 'card',
  component: require('./views/card/index')
}, ]
