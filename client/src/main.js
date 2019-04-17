import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueSession from 'vue-session';
import './registerServiceWorker';

Vue.config.productionTip = false

Vue.use(VueSession, { persist: true });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
