import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from "./components/Home";
import Parkin from "./components/projects/Parkin";
import Project from "./components/Project";
import Waterme from "./components/projects/Waterme";
import Dvent from "./components/projects/Dvent";
import Jot from "./components/projects/Jot";

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
    {name: 'home', path: '/', component: Home},
    {
        path: '/project', component: Project, children: [
            {
                path: 'parkin',
                component: Parkin
            },
            {
                path: 'waterme',
                component: Waterme
            },
            {
                path: 'dvent',
                component: Dvent
            },
            {
                path: 'jot',
                component: Jot
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash
            }
        } else if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})


new Vue({
    render: h => h(App),
    router
}).$mount('#app')
