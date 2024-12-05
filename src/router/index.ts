/** @format */

import FrontendLayout from "@/layouts/frontend/index.vue";
import NotFound from "@/views/NotFound.vue";
import Vue from "vue";
import type { RouteConfig } from "vue-router";
import VueRouter from "vue-router";
import { usePermission } from "./gurad/permission";

Vue.use(VueRouter);

export const routes: RouteConfig[] = [
  {
    path: "/",
    name: "Home",
    meta: { title: "首页" },
    redirect: { name: 'index' },
    component: FrontendLayout,
    children: [
      {
        path: "/",
        name: 'index',
        meta: { title: "首页" },
        component: () => import("@/views/index/index.vue"),
      },
      {
        path: "/bt",
        name: 'bt',
        meta: { title: "宝塔面板" },
        component: () => import("@/views/bt/index.vue"),
      },
    ],
  },


  {
    path: "/:path(.*)",
    name: "NotFound",
    meta: { title: "404" },
    component: NotFound,
  },
];

const router = new VueRouter({
  base: "/",
  mode: "history",
  routes,
});

usePermission(router);

export default router;
