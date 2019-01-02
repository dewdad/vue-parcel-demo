import Vue from 'vue';

// Uncomment if babel-polyfill is required (but larger).
// import 'babel-polyfill'


import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import vSelect from 'vue-select'
Vue.component('v-select', vSelect)

import App from './App.vue'
import router from './router'
import store from './store'



import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "@fortawesome/fontawesome-free/css/all.css"

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
