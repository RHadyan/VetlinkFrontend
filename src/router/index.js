import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import DashboardComponent from '@/components/DashboardComponent.vue'
import ForumComponent from '@/components/ForumComponent.vue'
import HospitalComponent from '@/components/HospitalComponent.vue'
import Sidebar from '@/components/Layouts/Sidebar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import("../views/Admin/Dashboard.vue"),
    },
    {
      path: '/forum',
      name: 'Forum',
      component: import("../views/Admin/Forum.vue"),
    },
    {
      path: '/hospital',
      name: 'Hospital',
      component: import("../views/Admin/Hospital.vue"),
    },
  ]
})

export default router
