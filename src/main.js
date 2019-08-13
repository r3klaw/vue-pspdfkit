import Vue from 'vue'
import App from './App.vue'
import pdf from 'vue-pdf'
import PSPDFKit from "pspdfkit";
Vue.use(PSPDFKit)
Vue.use(pdf)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
