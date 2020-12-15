import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins/iview.js'
// import './plugins/Papaw.js'
// import './plugins/clickLove.js'
import './assets/css/font/font.css'

import 'animate.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
