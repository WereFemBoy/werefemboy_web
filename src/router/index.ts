import { createRouter, createWebHistory } from "vue-router";

import HomeViewVue from "@/views/HomeView.vue";
import AuthViewVue from "@/views/AuthView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewVue
    },
    {
      path: '/login',
      name: 'auth',
      component: AuthViewVue
    }
  ],
});

export default router;
