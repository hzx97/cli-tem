import router from './router'
import store from './store'

import {
  Message
} from 'element-ui'

import {
  getToken
} from './lib/auth.js'

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  console.log(to)
  const hasToken = getToken()
  if (hasToken) {
    //有token
    if (to.path === '/login') {
      // 登录页
      next({
        path: '/'
      })
    } else {
      //非登录页,其他页面   
      //判断是否获取过菜单

      const hasRules = store.getters.rules && Object.keys(store.getters.rules).length > 0

      if (hasRules) {
        //有菜单了
        next()
      } else {
        //没菜单
        try {
          //去获取菜单
          const getNav = await store.dispatch('nav/getNav')
          const rules = JSON.parse(JSON.stringify(getNav))
          console.log(rules)
          const navList = await store.dispatch('nav/concatRoutes',
            rules)
          console.log(navList, 'nav')
          router.addRoutes(navList)
          next({
            ...to,
            replace: true
          })
          next()
        } catch (error) {
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login`)

        }
      }
    }
  } else {
    //没token
    if (to.meta.public) {
      //没token进开放的页面
      next()
    } else {
      //没token进没开放的界面,眺登录
      next('/login')
    }

  }

})