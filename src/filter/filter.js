// 这里注册一个所有全局自定义过滤器,使用vue插件的方式来写
// vue插件编写非常简单只需要定义一个函数就可以,这个函数
// 在vue.use(函数)的时候,会接收到vue对象
export default (Vue)=>{
    Vue.filter('date',(time)=>{
        let date = new Date(time);
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    });
}