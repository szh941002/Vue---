// 引入第三方库
import Vue from 'vue' ;
import './css/style.css';


// 导入根组件
import Appcomponent from './component/App.vue';


new Vue({
    el : '#add',
    render : c=> c(Appcomponent)
});