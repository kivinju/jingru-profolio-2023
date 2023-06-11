import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/om',
      name: 'om',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/Om.vue')
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('../components/Map.vue')
    },
    {
      path: '/midgar',
      name: 'midgar',
      component: () => import('../components/Midgar.vue')
    }
  ]
})

export default router
