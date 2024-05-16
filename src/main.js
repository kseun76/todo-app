// main.js
import {createApp} from 'vue'
import App from './App.vue'
// main.js 에서 store.js 연결하기
import store from '@/store/store'


const app = createApp(App);
app.use(store);
window.app = app.mount('#app')