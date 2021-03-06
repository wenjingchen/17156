
import Vue from 'vue'
import App from './app/App'
import router from './router'
import store from './vuex'
import animate from 'animate.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
