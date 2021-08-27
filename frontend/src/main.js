import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import VueMask from 'v-mask'
import VueCarousel from 'vue-carousel';
Vue.use(VueMask)

import App from './App'

import './config/bootstrap'
import './config/msgs'
import './config/axios'
import './config/mq'

import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false


new Vue({
  VueMask,
  VueCarousel,
  store,
  router,
  render: h => h(App)
}).$mount('#app')