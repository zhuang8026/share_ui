import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from '@/page/HomeView.vue';
import ButtonView from '../page/ButtonView.vue';
import InputView from '../page/InputView.vue';


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
  },
  {
    path: '/input',
    name: 'input',
    component: InputView,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
