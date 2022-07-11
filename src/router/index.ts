import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/html",
    name: "html",
    component: () => import("../views/HTMLView.vue"),
  },
  {
    path: "/css",
    name: "css",
    component: () => import("../views/CSSView.vue"),
  },
  {
    path: "/javascript",
    name: "javascript",
    component: () => import("../views/JavaScriptView.vue"),
  },
  {
    path: "/vue",
    name: "vue",
    component: () => import("../views/VueView.vue"),
  },
  {
    path: "/react",
    name: "react",
    component: () => import("../views/ReactView.vue"),
  },
  {
    path: "/typescript",
    name: "typescript",
    component: () => import("../views/TypeScriptView.vue"),
  },
  {
    path: "/node",
    name: "node",
    component: () => import("../views/NodeView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
