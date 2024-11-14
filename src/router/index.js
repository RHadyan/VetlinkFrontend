import { createRouter, createWebHistory } from "vue-router";
import App from "@/App.vue";
import DashboardComponent from "@/components/DashboardComponent.vue";
import ForumComponent from "@/components/ForumComponent.vue";
import HospitalComponent from "@/components/HospitalComponent.vue";
import Sidebar from "@/components/Layouts/Sidebar.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/User/Login.vue"),
    },
    {
      path: "/",
      name: "Dashboard",
      component: () => import("../views/Admin/Dashboard.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/forum",
      name: "Forum",
      component: () => import("../views/Admin/Forum.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/hospital",
      name: "Hospital",
      component: () => import("../views/Admin/Hospital.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("../views/User/Register.vue"),
    },
    {
      path: "/detailklinik",
      name: "Detail Klinik",
      component: () => import("../views/Admin/DetailKlinik.vue"),
    },
    {
      path: "/detailpost",
      name: "Detail Post",
      component: () => import("../views/Admin/DetailPost.vue"),
    },
    {
      path: "/forumvet",
      name: "Forum Vet",
      component: () => import("../views/Admin/ForumVet.vue"),
    },
    {
      path: "/daftarkunjungan",
      name: "Daftar Kunjungan",
      component: () => import("../views/Admin/DaftarKunjungan.vue"),
    },
    {
      path: "/tes",
      name: "tes",
      component: () => import("../views/Admin/tes.vue")
    }
  ],
});

// Router guard to check for authentication before accessing routes that require it
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("authToken");

  if (to.matched.some((record) => record.meta.requiresAuth) && !token) {
    next("/login");
  } else {
    next();
  }
});

export default router;
