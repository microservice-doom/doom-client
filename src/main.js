import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

axios.get('/configuration').then(response => {

    new Vue({
      render: h => h(App)
    }).$mount('#app')

});




