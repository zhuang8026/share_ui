import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from '@/page/HomeView.vue';
import ButtonView from '../page/ButtonView.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/button',
    name: 'button',
    component: ButtonView,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
