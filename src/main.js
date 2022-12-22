import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

import iconPark from './plugin/icon-park';
iconPark(app);

import loadComponent from "@/plugin/i18n.js";
loadComponent(app)

app.mount('#app')

