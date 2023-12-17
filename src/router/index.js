// Composables
import { createRouter, createWebHistory } from 'vue-router';


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
      },
      {
        path: '/cadastro',
        name: 'Cadastro',
        component: () => import('@/views/Cadastro.vue'),
        meta: {
        title: "Cadastro de Usuário",
        }
      },
      {
        path: '/lista-usuarios',
        name: 'ListaUsuarios',
        component: () => import('@/views/ListaUsuarios.vue'),
        meta: {
        title: "Lista de Usuários",
        }
      },
      {
        path: '/editar-usuario/:id',
        name: 'EditarUsuario',
        component: () => import('@/views/EditarUsuario.vue'),
        meta: {
        title: "Editar Usuário",
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

export default router;
