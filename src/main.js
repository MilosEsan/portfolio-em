import Vue from 'vue'
import App from './App.vue'
import Vuelidate from "vuelidate"
import VueRouter from 'vue-router'
import Routes from "./routes.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import VueResource from 'vue-resource'


Vue.use(VueResource);

Vue.use(VueRouter)
Vue.use(Vuelidate)


Vue.config.productionTip = false

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
})

new Vue({
    render: h => h(App),
    router: router
}).$mount('#app')