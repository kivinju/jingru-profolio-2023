// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

const app = createApp(App)

app.use(router)
app.use(VueFullPage)

app.mount('#app')
