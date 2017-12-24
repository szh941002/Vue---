// 导入配置的路由组件、
import GoodsHomeComponent from '../component/goods/GoodsHome.vue';
import GoodsMoreComponent from '../component/goods/more/GoodsMore.vue';
import GoodsDetailComponent from '../component/goods/detail/GoodsDetail.vue';

// 导入购物车模块组件
import ShopcartComponent from '../component/shopcart/Shopcart.vue';

// 导出路由配置
export default {
    routes :[
        // 默认的访问首页
        { path: '/', redirect:'/goods'}, //redirect 重定向 从一个路径重新定义到另外一个路径
        // 商品模块
        { name: 'gs', path: '/goods', component: GoodsHomeComponent},
        { name: 'gsm', path: '/goods/more', component: GoodsMoreComponent},
        { name: 'gsd', path: '/goods/detail/:id', component: GoodsDetailComponent},

        // 购物车
        { name: 's', path: '/shopcart', component: ShopcartComponent}
    ]
}