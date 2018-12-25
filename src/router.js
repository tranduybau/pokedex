import Vue from 'vue';
import Router from 'vue-router';

import Homepage from './pages/Homepage.vue';
import About from './pages/About.vue';
import Detail from './pages/Detail.vue';
import Errorpage from './pages/Error.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About,
    },
    {
      path: '/pokemon/:id',
      name: 'detail',
      component: Detail,
    },
    {
      path: '*',
      name: 'error',
      component: Errorpage,
    },
  ],
});
