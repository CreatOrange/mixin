import Vue from 'vue'
import Router from 'vue-router'
import GetPw from '@/components/getPw'
import PwInfo from '@/components/pwInfo'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/index',component: GetPw },
    { path: '/info',component: PwInfo },
    { path : '/*' , redirect : '/index' }

  ],
  mode : 'history'
})
