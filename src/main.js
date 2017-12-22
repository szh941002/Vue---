// 引入第三方库
import Vue from 'vue' ;
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Filters from './filter/filter.js'
import ElemenUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import './css/style.css';
import './less/index.less';

// 启动插件
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(ElemenUI);
Vue.use(Filters);


// 把axios,api注入到vue实例对象当中,这样组件的实例对象就可以直接访问勒
import axios from './js/axios_config';
import api from './js/api_config';
Vue.prototype.$http = axios
Vue.prototype.$api = api ;

// 导入路由实例
import routerConfig from './router/index.js';
const vueRouter = new VueRouter(routerConfig);

// 导入购物车组件
// import shopcart from './component/goods/detail/frame/cart.js';
// const cart = new Vuex.Store(shopcart);
// 导入根组件
import Appcomponent from './component/App.vue';


new Vue({
    el : '#add',
    render : c=> c(Appcomponent),
    router: vueRouter ,
    // store: cart
});