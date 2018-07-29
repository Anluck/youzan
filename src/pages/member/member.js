import Vue from 'vue'
import router from './router'
import store from './vuex'

let app = new Vue({
  el: '#app',
  router,
  store
})