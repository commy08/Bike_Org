import '@babel/polyfill'
import Vue from 'vue'

import './plugins/vuetify'
import "./assets/custom.css"
// import '~vuetify/src/stylus/main'

// import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

import Vuetify from 'vuetify'
Vue.use(Vuetify)

import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Vuex from 'vuex'
Vue.use(Vuex)

import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
