import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Assess from '../views/Assess.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/results',
    name: 'Results',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Results.vue'),
  },
  {
    path: '/assess',
    name: 'Assess',
    component: Assess,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
