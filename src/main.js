import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from '../store';

Vue.use(VueRouter);
Vue.config.productionTip = false;
new Vue({
  store,
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
