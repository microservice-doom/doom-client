import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

axios.get('/configuration').then(response => {
    Vue.prototype.$engineUrl = response.data.engineUrl
    Vue.prototype.$stateUrl = response.data.stateUrl

    new Vue({
      render: h => h(App)
    }).$mount('#app')

});




