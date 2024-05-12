import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {path: '/enterprise_verify',
      name: 'enterprise_verify',
      component: () => import('../views/EnterpriseVerifyView.vue')
    },
    {path: '/repair_msg',
      name: 'repair_msg',
      component: () => import('../views/RepairMsgView.vue')
    }
  ]
})

export default router
