import { createApp } from 'vue'
import jquery from 'jQuery'
import App from './App.vue'
import './index.css'

import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"


import router from './router'

const app = createApp(App).use(jquery)
app.use(router)
app.mount('#app')
