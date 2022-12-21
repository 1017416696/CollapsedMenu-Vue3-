import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import iconPark from './plugin/icon-park';

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

iconPark(app);
app.mount('#app')
