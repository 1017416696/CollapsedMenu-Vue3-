import { install } from '@icon-park/vue-next/es/all';
import {
    Home,
    MenuUnfoldOne,
    MenuFoldOne
} from '@icon-park/vue-next';
import '@icon-park/vue-next/styles/index.css';

export const components = [
    Home,
    MenuUnfoldOne,
    MenuFoldOne
];

export default (app) =>{
// 默认前缀是 'icon', 例如: 对于`People`这个icon, 组件名字是`icon-people`.
    install(app);

// 使用自定义前缀'i', 例如: 对于`People`这个icon，组件名字是`i-people`.
    install(app, 'i');
}
