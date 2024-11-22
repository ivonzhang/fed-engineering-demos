import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import lodashEs from 'lodash-es'

console.log(lodashEs);

console.log('环境变量', import.meta.env.VITE_BASE_URL);

createApp(App).mount('#app')
