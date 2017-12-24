<template>
    <div class="section">
        <div v-for='item in listData' :key='item.level1cateid'>
            <!--子类-->
            <div class="main-tit">
                <h2>{{item.catetitle}}</h2>
                <p>
                    <span v-for='subitem in item.level2catelist' :key='subitem.subcateid'>
                        <router-link :to="{name:'gsm', params:{id:subitem.subcateid}}">
                            <span>{{subitem.subcatetitle}}</span>
                        </router-link>
                    </span>
                    <i>更多+</i>
                </p>
            </div>
            <!--/子类-->
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <ul class="img-list">
                        <li v-for='datasitem in item.datas' :key='datasitem.artID'>
                            <router-link :to="{name:'gsd',params:{id:datasitem.artID}}">
                                <div class="img-box">
                                    <img :src="datasitem.img_url">
                                </div>
                                <div class="info">
                                    <h3>{{datasitem.artTitle}}</h3>
                                    <p class="price">
                                        <b>¥{{datasitem.sell_price}}</b>元</p>
                                    <p>
                                        <strong>库存 {{datasitem.stock_quantity}}</strong>
                                        <span>市场价：
                                            <s>{{datasitem.market_price}}</s>
                                        </span>
                                    </p>
                                </div>
                            </router-link>
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
      listData: {
        level1cateid: {}, //1级分类id
        catetitle: {}, //1级分类标题
        level2catelist: [], //子级分类数据数组
        datas: [] //当前分类下的文章数组
      }
    };
  },
  methods: {
    getListData() {
      this.$http.get(this.$api.goodsContent).then(rsp => {
        // console.log(rsp.data.message);
        this.listData = rsp.data.message;
      });
    }
  },
  created() {
    this.getListData();
  }
};
</script>

<style scoped>

</style>