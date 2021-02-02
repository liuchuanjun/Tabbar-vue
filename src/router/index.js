import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter);

let routes = [
  {
    path: "/",
    component: () => import("@/views/home")
  },
  {
    path: "/home",
    component: () => import("@/views/home")
  },
  {
    path: "/profile",
    component: () => import("@/views/profile")
  },
  {
    path: "/category",
    component: () => import("@/views/category")
  },
  {
    path: "/shop",
    component: () => import("@/views/shop")
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

export default router
