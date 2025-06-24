import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
     {
      path: '/ejercicio1',
      name: 'ejercicio1',
      component: () => import('../views/Ejercicio1View.vue'),
    },
      {
      path: '/ejercicio2',
      name: 'ejercicio2',
      component: () => import('../views/Ejercicio2View.vue'),
    },
      {
      path: '/ejercicio3',
      name: 'ejercicio3',
      component: () => import('../views/Ejercicio3View.vue'),
    },
      {
      path: '/ejercicio4',
      name: 'ejercicio4',
      component: () => import('../views/Ejercicio4View.vue'),
    },
       {
      path: '/ejercicio5',
      name: 'ejercicio5',
      component: () => import('../views/Ejercicio5View.vue'),
    },
         {
      path: '/ejercicio6',
      name: 'ejercicio6',
      component: () => import('../views/Ejercicio6View.vue'),
    },
  ],
})

export default router
