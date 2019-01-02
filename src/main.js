import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from "./components/Home";
import Parkin from "./components/projects/Parkin";
import Project from "./components/Project";

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
    {name: 'home', path: '/', component: Home},
    {
        path: '/project', component: Project, children: [
            {
                path: 'parkin',
                component: Parkin
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})


new Vue({
    render: h => h(App),
    router
}).$mount('#app')
