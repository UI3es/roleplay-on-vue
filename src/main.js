import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(Vuetify, {
  options: {
    customProperties: true
  },
  theme: {
    primary: '#607D8B',
    secondary: '#9C27B0',
    accent: '#FF5722'
  }
})
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
