import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import Home from './components/Home'
import Menu from './components/Menu'
import About from './components/about/About'
import Admin from './components/Admin'
import Login from './components/Login'
import Register from './components/Register'
import {store} from './store/store.js'

//二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

//三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'


Vue.use (VueRouter)

//配置默认根路径
axios.defaults.baseURL = 'https://wd1695319840sjftof.wilddogio.com/'

//配置vue原型(在任何组件中都能使用axios)
Vue.prototype.http = axios

const routes = [
  {path: '/',name: 'homeLink',components: {
    default: Home,
      'orderingGuide':OrderingGuide,
      'delivery':Delivery,
      'history':History
      // OrderingGuide,
      // Delivery,
      // History 
  }},
  {path: '/menu',name: 'menuLink',component: Menu},
  {path: '/About',name: 'aboutLink',redirect: '/about/contact',component: About,children:[
    {path:'/about/contact',name:'contactLink',redirect: '/about/contact/phone',component:Contact,children:[
      {path:'/about/contact/phone',name:'phoneNumber',component:Phone},
      {path:'/about/contact/personname',name:'personName',component:PersonName}
    ]},
    {path:'/about/history',name:'historyLink',component:History},
    {path:'/about/delivery',name:'deliveryLink',component:Delivery},
    {path:'/about/orderingguide',name:'orderingguideLink',component:OrderingGuide}
  ]}, 
  {path: '/Admin',name: 'adminLink',component: Admin,
  // beforeEnter:(to, from, next) => {
  //   //路由独享守卫
  //   alert('不能操作');
  //   next('/login');
  // }
  },
  {path: '/Login',name: 'loginLink',component: Login},
  {path: '/Register',name: 'registerLink',component: Register},
  {path: '*', redirect: '/'}
]



const router = new VueRouter({
  routes,
  mode: 'history',
  // scrollBehavior(to,from,savePosition) {
  //   return { selector: '.btn' }
  // }
})

//全局守卫
// router.beforeResolve((to,from,next) => {
//   //判断store.gettes.isLogin === false
//   if(to.path == '/login' || to.path =='/register'){
//     next();
//   }else{
//     alert('请登录');
//     next('/login');
//   }
// })

//后置钩子
// router.afterEach((to,from) => {
//   alert('after each')
// })

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
