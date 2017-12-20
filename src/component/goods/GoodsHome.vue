
<template>
    <!-- 商城主页主页面 -->
    <div>
        <app-Breadcumd></app-Breadcumd>
        <app-Top></app-Top>
        <app-List></app-List>
    </div>
</template>

<script>
    // 导入路由配置
    import BreadcumdComponent from "./frame/Breadcumd.vue";
    import TopComponent from "./frame/Top.vue";
    import ListComponent from "./frame/List.vue";
    export default {
        components :{
            appBreadcumd: BreadcumdComponent,
            appTop: TopComponent,
            appList: ListComponent,
        }
    };
</script>

<style scoped>

</style>