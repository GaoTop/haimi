// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'
import App from './App'
import router from './router'
import direcNav from './static/js/direcNav.js'
import VueLazyLoad from 'vue-lazyload'
Vue.directive('direcNav',direcNav)
Vue.config.productionTip = false
Vue.use(vueResource)
/* eslint-disable no-new */
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  attempt: 2
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
