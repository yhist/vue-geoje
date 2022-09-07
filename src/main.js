import { createApp } from 'vue'
import App from './App.vue'

// vue 프로그램이 실행되면 자동으로 시작되는 .js
// Entry point(진입시점)
import router from './router/index.js'
import store from './store/store.js'
createApp(App).use(router).use(store).mount('#app')
