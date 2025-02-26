import './assets/main.css'

import { createApp } from 'vue'
import { Quasar } from 'quasar'


import '@quasar/extras/material-icons/material-icons.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(Quasar, {
    plugins: {}
})

app.mount('#app')
