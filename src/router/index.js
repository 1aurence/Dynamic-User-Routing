import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/user/Login.vue'
import SignUp from '../components/user/SignUp.vue'
import Dashboard from '../components/user/Dashboard.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/', alias: '/login',
      component: Login
    },
    {
      path: '/signup',
      component: SignUp
    },
    {
      path: '/dashboard',
      component: Dashboard
    }
  ]
})
