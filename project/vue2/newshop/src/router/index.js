import Vue from 'vue'
import VueRouter from 'vue-router'

const HomePage = () => import ('../views/HomePage.vue')
const SortPage = () => import  ('../views/SortPage.vue')
const CartPage = () => import  ('../views/CartPage.vue')
const AboutPage = () => import  ('../views/AboutPage.vue')

Vue.use(VueRouter) 

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path:'/home',
    name: 'Home',
    component: HomePage
  },
  {
    path:'/sort',
    name: 'Sort',
    component: SortPage
  },
  {
    path:'/cart',
    name: 'Cart',
    component: CartPage
  },
  {
    path:'/about',
    name: 'About',
    component: AboutPage
  }
]

const router = new VueRouter({
  mode:'history',
  base: process.env.BASE_URL,
  routes
})



export default router