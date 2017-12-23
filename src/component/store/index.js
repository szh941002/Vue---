// 引入vue实例
import Vue from 'vue';

// 导出配置
export default {
    state: {
        // 存储购物车商品购买记录,记录初始值,应该从本地localStorage里面取,没有则为一个空的对象
        shopcartData: JSON.parse(localStorage.getItem('shopcartData')) ||  {} ,  // 购买的不可能是一个,所以这个是一个对象
    },

    // 获取状态, 记住以属性的方式使用
    getters: {
        // 取原值
       getshopcartData(state) {
           return state.shopcartData;
        },
        // 获取商品的总数
        // 1.先取出所有商品的购买数量,对象中每个元素的value既购买数量
        // 2.在通过reduce方法把数量累加起来.
        // 3.返回累加的结果集
        getshopcartTotal(state){
            return object.values(state.shopcartData).reduce((s,v)=>s+v,0);
        },
        // 获取所有商品的ID 
        // 1.先取出所有商品的id,对象中每个元素的key既为商品的id
        // 2.通过join方法把所有id通过逗号,连接成字符串
        // 3.返回字符结果
        getshopcarIDs(state){
            return object.keys(status.shopcartData).join(',');
           
        }
    },

    // 修改状态, 记住要commit方法调用  每次做修改,删除,添加都需要把跟新后的值本地存储起来
    mutations: {
        // 修改数据
        // 1.通过params.id得到要修改的商品id
        // 2.然后通过这个id直接赋值,如果没有之前的记录,就是新增,有就是修改
        upShopcartData(state,params){
            // 因为这里可能是新增,也可能是修改,为了保证视图一定刷新,所以改用vue.set
            // vue.set(target,key,value)
            Vue.set(state.shopcartData,params.id,params.val);
            localStorage.setItem('shopcartData', JSON.stringify(status.shopcartData));
        },
        // 增加操作,在原有的基础上累加购买数量
        // 1.先判断原ID有没有该id的购买记录
        // 2.有就累加,没有就直接做新增
        addShopcartData(state, params) {
            if(state.shopcartData[params.id]){
                state.shopcartData[params.id] += params.val;    
            }else{
                Vue.set(state.shopcartData,params.id,params.val);
            }
            localStorage.setItem('shopcartData', JSON.stringify(status.shopcartData));
        },
        // 删除购买记录 根据id去删除 vue.delete(target,key)方法
        delShopcartData(state,params){
            Vue.delete(state.shopcartData,params.id);
            localStorage.setItem('shopcartData', JSON.stringify(status.shopcartData));
        }
    }
}