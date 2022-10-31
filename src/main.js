import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as VueRouter from "vue-router";
import routes from "./router/index";
import {createPinia} from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
import './index.css'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

// 状态管理
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App)
app.use(router)
app.use(pinia)
// app.use(Antd)
app.mount('#app')
