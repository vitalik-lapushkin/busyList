import Vue from 'vue';
import VueRouter from 'vue-router';
import BusyList from '../views/BusyList';
import BusyListConfig from '../views/BusyListConfig';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'list',
      component: BusyList,
    },
    {
      path: '/config',
      name: 'config',
      component: BusyListConfig,
    },
  ],
});
