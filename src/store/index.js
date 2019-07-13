import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutatioans'
import actions from './actions'

import getters from './getters'

import user from './module/user'
import nav from './module/nav'

import saveInLocal from './plugin/saveInLocal'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{
   user,
    nav
  },
  //plugins:[saveInLocal]
  

})
