<template>
    <div class="sidebar-box">
        <h4>推荐商品</h4>
        <ul class="side-img-list">
            <li v-for='(item,index) in  hotgoodslist' :key='item.id'>
                <div class="img-box">
                    <router-link :to="{name:'gsd',params:{id:item.id}}">
                        <label>{{index+1}}</label>
                        <img :src="item.img_url">
                    </router-link>
                </div>
                <div class="txt-box">
                   <router-link :to="{name:'gsd',params:{id:item.id}}">{{item.title}}</router-link>
                    <span>{{item.add_time | date}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        // 这里接收父组件传递过来的数据
          props: ['hotgoodslist']
    };
</script>

<style scoped>

</style>