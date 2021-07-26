import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog/:blog',
    name: 'Blog',
    component: Blog
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to) => {
  setTimeout(() => {
    const hash = to.hash
    if (hash) {
      const position = window.document.querySelector(hash).getBoundingClientRect()
      const y = window.top.scrollY + position.top
      const x = window.top.scrollX + position.left
      if (y > 0) {
        window.scrollTo({ top: y, left: x })
      } else {
        window.scrollTo({ top: position.top, left: position.left })
      }
    } else {
      window.scrollTo({ top: 0, left: 0 })
    }
  }, 200)
})

export default router
