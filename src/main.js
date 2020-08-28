import App from './App.vue'
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
new Vue({
  render: h => h(App),
}).$mount('#app');
