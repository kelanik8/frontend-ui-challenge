import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import Scrollspy from 'vue2-scrollspy';

Vue.use(Scrollspy);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
