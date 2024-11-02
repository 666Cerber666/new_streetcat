// router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from './pages/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

// Создание экземпляра маршрутизатора
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;