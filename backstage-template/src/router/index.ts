/*
 * @Author: zdj
 */
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

// @ts-ignore
const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/page/Login/Index.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/page/Home/Index.vue"),
    children: [
      // {
      //   path: "/home/project_manage",
      //   name: "ProjectManage",
      //   component: () => import("@/views/ProjectManage/Index.vue"),
      //   meta: {
      //     zhword: "xmgl",
      //     title: "项目管理",
      //     icon: "el-icon-s-home",
      //     key: "path",
      //   },
      // },
      { path: "*", redirect: "/404" },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
