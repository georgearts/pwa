// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    // name: 'Home',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [

      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {
          title: "Início",
        }
      }
      
    ]
  },


  {
    path: '/login',
    name: 'Login',
    component: () => import('@/layouts/Login.vue'),
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
