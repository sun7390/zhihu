import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/layout/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout
    }
  ]
})
