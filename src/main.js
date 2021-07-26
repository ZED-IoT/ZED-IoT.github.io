import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import i18n from './plugins/i18n'
import router from './router'

Vue.config.productionTip = false

new Vue({
  i18n,
  vuetify,
  render: h => h(App),
  router,
  mounted: () => document.dispatchEvent(new Event("x-app-rendered"))
}).$mount('#app')
