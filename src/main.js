import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'postcss-pxtorem'
import Vconsole from 'vconsole'
import router from './router'
import './sdk/jquery'
import './sdk/turn'
import { createPinia } from 'pinia';
const pinia = createPinia();
createApp(App).use(pinia).use(router).mount('#app')
