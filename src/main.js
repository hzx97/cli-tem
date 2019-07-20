import Vue from 'vue'
import App from './App.vue'
import router from './router'

import store from './store'

import './permission'



import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './assets/css/index.scss'

Vue.use(ElementUI);


if (process.env.NODE_ENV !== 'production') require('./mock')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
