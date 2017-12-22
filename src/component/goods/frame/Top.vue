<template>
    <!-- 商品顶部 -->
    <div class="section">
        <div class="wrapper">
            <div class="wrap-box">
                <!--类别菜单-->
                <div class="left-220" style="margin:0;">
                    <div class="banner-nav">
                        <ul>
                            <!--此处声明下面可重复循环-->
                            <li v-for='item in TopData.catelist' :key='item.id'>
                                <h3>
                                    <i class="iconfont icon-arrow-right"></i>
                                    <span>{{item.title}}</span>
                                    <!-- <router-link :to="{name:'gsd',params:{id:item.id}}">{{item.title}}</router-link> -->
                                    <p>
                                        <span v-for="subitem in item.subcates" :key="subitem.id">
                                            {{subitem.title}}
                                        </span>
                                    </p>
                                </h3>
                                <div class="item-box">
                                    <!--如有三级分类，此处可循环-->
                                    <dl>
                                        <dt>
                                            <router-link :to="{ name: 'gsd', params: { id: item.id } }">{{ item.title }}</router-link>
                                        </dt>
                                        <dd>
                                            <!-- 封装一个展示菜单列表的组件,把列表数据传递过去 -->
                                            
                                            <router-link :to="{name:'gsd',params:{id:subitem.id}}" v-for='subitem in item.subcates' :key='subitem.id'>
                                                {{subitem.title}}
                                            </router-link>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <!--/类别菜单-->
                <!--幻灯片-->
                <div class="left-705">
                    <div class="banner-img">
                        <el-carousel :interval="3000" arrow="always" height='350px'>
                            <el-carousel-item v-for="item in TopData.sliderlist" :key="item.id">
                                <img :src="item.img_url" alt="">
                                <span>{{item.title}}</span>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
                <!--/幻灯片-->
                <!--推荐商品-->
                <div class="left-220">
                    <ul class="side-img-list">
                        <li v-for='(item, index) in TopData.toplist ' :key='item.id' >
                            <div class="img-box">
                                <label>{{index+1}}</label>
                                <img :src="item.img_url">
                            </div>
                            <div class="txt-box">
                                <router-link :to="{name:'gsd',params:{id:item.id}}">{{item.title}}</router-link>
                                <span>{{item.add_time |date}}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    data() {
        return {
            TopData: {
                catelist: [], //当前频道中的一级分类数据数组
                sliderlist: [], //轮播图文章数组
                toplist: [] //置顶推荐文章数组
            }
        };
    },
    methods: {
        // 获取商品顶部的数据
        getTopData() {
            this.$http.get(this.$api.goodsTop).then(rep => {
                console.log(rep.data.message);
                this.TopData = rep.data.message;
                // console.log(this.TopData.sliderlist);
                
            });
        }
    },
    created() {
        this.getTopData();
    }
};
</script>

<style scoped>
     .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }
    
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .banner-img img {
        width: 100%;
        height: 100%;
    }
</style>