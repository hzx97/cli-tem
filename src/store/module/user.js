import {
  login,
  getUserInfo
} from '@/api/user'
import {
  removeToken,
  setToken
} from '../../lib/auth';

import { resetRouter } from "../../router/index";

const state = {
  token: '',
  roles: [],
  userName: ''
}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token

  },
  SET_ROLES(state, roles) {
    state.roles = roles

  },
  SET_USERNAME(state, userName) {
    state.userName = userName

  },
}

const actions = {

  //登录操作
  async login({
    commit
  }, model) {
    const {
      userName,
      password
    } = model
    return new Promise((resolve, reject) => {
      login({
        userName: userName.trim(),
        password: password
      }).then(response => {
        const {
          data
        } = response
        // console.log(data)
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  //获取用户信息

  getUserInfo({
    commit,
    state
  }) {
    return new Promise((resolve, reject) => {
      getUserInfo().then((response) => {
        const {
          data
        } = response

        if (!data) {
          reject('please Login again')
        }
        const {
          userName,
          roles
        } = data

        if (!roles || roles.length <= 0) {
          reject('roles must be a non-null array!')
        }

        commit('SET_ROLES', roles)
        commit('SET_USERNAME', userName)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  //登录失败
  //重置登录信息

  resetToken({commit}){
    return new Promise(resolve=>{
      commit('SET_TOKEN','')
      commit('SET_ROLES',[])
      removeToken()
      resolve()
    })
  },

  /**
   * @todo 退出登录
   */
  logout({commit}){
    return new Promise((resolve,reject)=>{
      commit('SET_TOKEN','')
      commit('SET_ROLES', [])
      removeToken()
      resetRouter()
      resolve()

    })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}