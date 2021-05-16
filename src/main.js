import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueParticlesBg from "particles-bg-vue"
import './plugins/bootstrap-vue'

Vue.use(VueParticlesBg)

new Vue({
  router,
  created () {
    AOS.init()
  },
  render: function (h) { return h(App) }
}).$mount('#app')
