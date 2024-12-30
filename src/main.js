import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'postcss-pxtorem'
import Vconsole from 'vconsole'
import router from './router'
import './sdk/jquery'
import './sdk/turn'
createApp(App).use(router).mount('#app')
