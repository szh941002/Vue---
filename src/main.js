// 引入第三方库
import Vue from 'vue' ;
import VueRouter from 'vue-router';
import './css/style.css';

// 启动路由
Vue.use(VueRouter);


// 导入路由实例
import routerConfig from './router/index.js';
const vueRouter = new VueRouter(routerConfig);

// 导入根组件
import Appcomponent from './component/App.vue';


new Vue({
    el : '#add',
    render : c=> c(Appcomponent),
    router: vueRouter 
});