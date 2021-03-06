import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("../views/Main.vue"),
    meta: {
      title: "Main",
    },
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/Blogs",
    name: "Blogs",
    component: () => import("../views/Blogs.vue"),
    meta: {
      title: "Blogs",
    },
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      title: "Login",
    },
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import("../views/Register.vue"),
    meta: {
      title: "Register",
    },
  },
  {
    path: "/Reset-Password",
    name: "Reset-Password",
    component: () => import("../views/ForgotPassword.vue"),
    meta: {
      title: "Reset-Password",
    },
  },
  {
    path: "/CreatePost",
    name: "CreatePost",
    component: () => import("../views/CreatePost.vue"),
    meta: {
      title: "CreatePost"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | CyberSecurityBlog`;
  next();
});

export default router;
