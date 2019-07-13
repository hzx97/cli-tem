import {
  getNav
} from '@/api/nav'

import {
  routerMap,
  openRouter
} from '@/router/router'

const state = {
  rules: {},
  routes: []
}

const mutations = {
  SET_RULES(state, value) {
    state.rules = value
  },
  CONCAT_ROUTES(state, value) {
    state.routes = value
  },
}

export function getAccesRouterList(routes, rules) {
  
  const res = []

  routes.forEach(item => {
    const tmp = {
      ...item
    }
    if (rules[tmp.name]) {
      if (tmp.children) {
        tmp.children = getAccesRouterList(tmp.children, rules)
      }
      res.push(tmp)
    }
  })
  return res

}

const actions = {
  getNav({
    commit
  }) {
    return new Promise((resolve, reject) => {
      getNav().then(response => {
        const {
          data
        } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }
        commit('SET_RULES', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },


  concatRoutes({
    commit
  }, rules) {
    return new Promise((resolve, reject) => {
      try {
        let routerList = []
        routerList = getAccesRouterList(routerMap, rules)
        // console.log(routerList)
        commit('CONCAT_ROUTES', routerList)
        resolve(routerList)
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}