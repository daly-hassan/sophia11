import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store/store'
import App from './App.vue'

Vue.use(VueRouter);

// mounted() {
//         let eventTimerScript = document.createElement('script')
//         eventTimerScript.setAttribute('src', 'https://hassan-shebbani.github.io/sophia11-demo1/src/assets/js/event-countdown.js')
//         document.body.appendChild(eventTimerScript)
//     },

const router = new VueRouter({
    mode: "history",
    routes,
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})