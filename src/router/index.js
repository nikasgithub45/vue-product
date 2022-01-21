import Vue from 'vue'
import VueRouter from 'vue-router'
import Productpage from '../views/Productpage.vue'
import Content from '../views/Content.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/product-page',
    name: 'Productpage',
    component: Productpage,
  },
  {
    path: '/Content',
    name:'Content',
    component:Content
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
