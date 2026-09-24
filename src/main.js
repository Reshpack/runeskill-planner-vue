import { createApp } from 'vue'
import './assets/styles.css'
import App from './App.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

const app = createApp(App)

app.component("AppHeader", AppHeader).component("AppFooter", AppFooter)

app.mount('#app')
in indexedDB.html
