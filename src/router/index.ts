import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/login/index.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
          path: '/',
          component: Login,
          meta: {
              title: '登陆'
          }
      },
  ],
})

export default router
