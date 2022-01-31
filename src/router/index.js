import Vue from 'vue'
import VueRouter from 'vue-router'
import Productpage from '../views/Productpage.vue'
import Content from '../views/Content.vue'
import login from "../views/login.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/product-page',
    name: 'Productpage',
    component: Productpage,
  },
  {
    path: '/',
    name:'Content',
    component:Content,
    meta:{requiresAuth:true}
  },
  {
    path: '/login',
    name:'login',
    component:login,
    
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.meta.requiresAuth == false){
     next({
       name:'Content'
     })
  }else{
    next()
  }
})
export default router
