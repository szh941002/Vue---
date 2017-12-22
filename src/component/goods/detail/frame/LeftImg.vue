<template>
    <div class="magnifier" id="magnifier1">
        <div class="magnifier-container">
            <div class="images-cover"></div>
            <!--当前图片显示容器-->
            <div class="move-view"></div>
            <!--跟随鼠标移动的盒子-->
        </div>
        <div class="magnifier-assembly">
            <div class="magnifier-btn">
                <span class="magnifier-btn-left">&lt;</span>
                <span class="magnifier-btn-right">&gt;</span>
            </div>
            <!--按钮组-->
            <div class="magnifier-line">
                <ul class="clearfix animation03">
                    <li v-for='item in imglist' :key='item.id'>
                        <div class="small-img">
                            <img :src="item.original_path" />
                        </div>
                    </li>
                </ul>
            </div>
            <!--缩略图-->
        </div>
        <div class="magnifier-view"></div>
        <!--经过放大的图片显示容器-->
    </div>
</template>

<script>
    // 问题1 :为什么jQuery放大镜插件引入进来就报错？
    // 导入jQuery放大镜插件,该插件是依赖于jQuery的变量,
    // 所以我们还需要在他的源代码里面import, 因为我们这是模块化的开发
    import '../../../../../lib/imgzoom/js/magnifier.js';
    // 导入$引入jQuery的方法
    import $ from 'jquery';
    export default {
        // 接收父组件传过来的数据
        props: ["imglist"],
        data() {
            return {};
        },
        // 问题2：为什么试用勒mounted周期函数,数据不能渲染 
        // 因为该函数只会执行一次 ,执行的那一次,数据渲染imglist刚好是空数组,
        
        // 解决方案1：使用 setTimeout 延迟加载 ,治标不治本,如果网络出现延迟,又渲染不出来勒
        // mounted () {
        //    setTimeout(()=>{
        //             var _magnifier = $().imgzoon({
        //             magnifier : "#magnifier1",//最外层的大容器
        //             width : 370,//承载容器宽
        //             height : 370,//承载容器高
        //             moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
        //             zoom : 5//缩放比例
        //         });
        //    },100) 
        // },

        // 彻底解决方案：想要等到整个视图都渲染完毕使用 vm.$nextTick 或者 Vue.nextTick替换掉 mounted
        // 使用watch监听imgList的变化,每次变化都要重新的初始化放大镜插件
        watch : {
            imglist(){
                this.$nextTick(()=>{
                      var _magnifier = $().imgzoon({
                        magnifier : "#magnifier1",//最外层的大容器
                        width : 370,//承载容器宽
                        height : 370,//承载容器高
                        moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
                        zoom : 5//缩放比例
                    });
                })
            }
        }
    };
    
</script>

<style scoped>
    @import '../../../../../lib/imgzoom/css/magnifier.css'
</style>