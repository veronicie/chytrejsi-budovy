import Vue from 'vue'
import App from './App.vue'
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false
Vue.use(VueAnalytics, {
  id: 'G-C6RHQLH52E'
}),

new Vue({
  render: h => h(App),
}).$mount('#app')
