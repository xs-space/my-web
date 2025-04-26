import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"
import Layout from "@/layout/Index.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/Index.vue")
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/views/about/Index.vue")
      },
      {
        path: "notfound",
        name: "Notfound",
        component: () => import("@/views/notfound/Index.vue")
      }
    ]
  }
]

export default createRouter({
  routes, // 路由表
  history: createWebHistory() // 路由模式
})
