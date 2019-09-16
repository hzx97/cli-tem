import Vue from 'vue'
import Router from 'vue-router'
import {
  routeMap
} from './router'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: routeMap
})
