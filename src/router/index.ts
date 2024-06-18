import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/BukuForm.vue')
    },
    {
      path: '/Kategori',
      name: 'kategori',
      component: () => import('@/components/KategoriForm.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pesanan',
      name: 'pesanan',
      component: () => import('@/components/PesananForm.vue')
    },
    {
      path: '/Manajemen',
      name: 'Manajemen',
      component: () => import('@/components/ManajemenForm.vue')
    },

  ]
})

export default router
