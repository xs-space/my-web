import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"
import Layout from "@/layout/index.vue"

// 静态路由
const constantroutes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard/Index.vue"),
        meta: {
          icon: "ant-design:bank-outlined",
          title: "dashboard"
        }
      }
    ]
  }
]

// 动态路由
export const asyncRoutes: RouteRecordRaw[] = [
  {
    path: "/documentation",
    component: Layout,
    redirect: "/documentation/index",
    children: [
      {
        path: "index",
        name: "documentation",
        component: () => import("@/views/documentation/Index.vue"),
        meta: {
          icon: "ant-design:database-outlined",
          title: "documentation"
        }
      }
    ]
  },
  {
    path: "/guide",
    component: Layout,
    redirect: "/guide/index",
    children: [
      {
        path: "index",
        name: "guide",
        component: () => import("@/views/guide/Index.vue"),
        meta: {
          icon: "ant-design:car-twotone",
          title: "guide"
        }
      }
    ]
  },
  {
    path: "/system",
    component: Layout,
    redirect: "/system/user",
    meta: {
      icon: "ant-design:unlock-filled",
      title: "system"
    },
    children: [
      {
        path: "user",
        name: "user",
        component: () => import("@/views/system/User.vue"),
        meta: {
          icon: "ant-design:unlock-filled",
          title: "user"
        }
      },
      {
        path: "role",
        name: "role",
        component: () => import("@/views/system/Role.vue"),
        meta: {
          icon: "ant-design:unlock-filled",
          title: "role"
        }
      },
      {
        path: "menu",
        name: "menu",
        component: () => import("@/views/system/Menu.vue"),
        meta: {
          icon: "ant-design:unlock-filled",
          title: "menu"
        }
      }
    ]
  }
]

export const routes = [...constantroutes, ...asyncRoutes]

export default createRouter({
  routes, // 路由表
  history: createWebHistory() // 路由模式
})
