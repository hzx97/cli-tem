import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import './styles.scss'

Vue.use(ElementUI)


//icon
import './assets/iconfont/iconfont.css';

//rem插件
import './utils/flexible'

import iView from 'cview-huangsir';
import 'cview-huangsir/dist/styles/iview.css'; 


//引入自定义css
import './assets/css/index.scss';

Vue.use(iView);


// if (process.env.NODE_ENV !== 'production') require('./mock')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
