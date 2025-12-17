import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/login/index.vue"
import Layout from '@/layout/default-layout.vue'
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
      {
          path:'/index',
          component: Layout,
          children: [

          ]
      }
  ],
})

export default router
