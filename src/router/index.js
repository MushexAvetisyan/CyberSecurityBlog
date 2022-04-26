import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    meta: {
      title: 'Main'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/Blogs',
    name: 'Blogs',
    component: () => import('../views/Blogs.vue'),
    meta: {
      title: 'Blogs'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | CyberSecurityBlog`;
  next();
})

export default router
