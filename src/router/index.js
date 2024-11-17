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
      path: "/",
      name: "Login",
      component: () => import("../views/User/Login.vue"),
    },
    {
      path: "/admin",
      name: "DashboardAdmin",
      component: () => import("../views/Admin/Dashboard.vue"),
      meta: {
        requiresAuth: true,
        requiredRole: "admin",
      },
    },
    {
      path: "/user",
      name: "Dashboarduser",
      component: () => import("../views/User/Dashboard.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/forum",
      name: "Forum",
      component: () => import("../views/Admin/Forum.vue"),
      meta: {
        requiresAuth: true,
        requiredRole: "admin",
      },
    },
    {
      path: "/forumdetail",
      name: "ForumDetail",
      component: () => import("../views/Admin/DetailPost.vue"),
      meta: {
        requiresAuth: true,
        requiredRole: "admin",
      },
    },
    {
      path: "/hospital",
      name: "Hospital",
      component: () => import("../views/Admin/Hospital.vue"),
      meta: {
        requiresAuth: true,
        requiredRole: "admin",
      },
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
      meta: {
        requiresAuth: true,
        requiredRole: "admin",
      },
    },
    {
      path: "/detailpost",
      name: "Detail Post",
      component: () => import("../views/Admin/DetailPost.vue"),
      meta: {
        requiresAuth: true,
        requiredRole: "admin",
      },
    },
    {
      path: "/forumvet",
      name: "Forum Vet",
      component: () => import("../views/Admin/ForumVet.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/daftarkunjungan",
      name: "Daftar Kunjungan",
      component: () => import("../views/Admin/DaftarKunjungan.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/tes",
      name: "tes",
      component: () => import("../views/Admin/tes.vue"),
    },
  ],
});

// Router guard to check for authentication before accessing routes that require it
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("authToken");
  const userRole = localStorage.getItem("userRole");

  if (to.matched.some((record) => record.meta.requiresAuth) && !token) {
    return next("/login");
  }

  if (to.meta.requiredRole && to.meta.requiredRole !== userRole) {
    return next("/user"); // Redirect to an unauthorized page or home
  }

  next();
});

export default router;
