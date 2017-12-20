<template>
    <div>
        <app-header></app-header>
    </div>
</template>

<script>
// 导入头部与底部的子组件  以及jquery
    import HeaderComponent from "./frame/Header.vue";
    import $ from "jquery";
    export default {
        // 注册子组件
        components: {
            appHeader: HeaderComponent
        },
        // 执行生命周期函数,模板挂载到视图后执行
        mounted() {
            $("#menu2 li a").wrapInner('<span class="out"></span>');
            $("#menu2 li a").each(function() {
                    $('<span class="over">' + $(this).text() + "</span>").appendTo(this);
            });
            $("#menu2 li a").hover(
                function() {
                    $(".out", this)
                    .stop()
                    .animate({ top: "48px" }, 300); // move down - hide
                    $(".over", this)
                    .stop()
                    .animate({ top: "0px" }, 300); // move down - show
                },
                function() {
                    $(".out", this)
                    .stop()
                    .animate({ top: "0px" }, 300); // move up - show
                    $(".over", this)
                    .stop()
                    .animate({ top: "-48px" }, 300); // move up - hide
                }
            );
        }
    };
</script>

<style scoped>

</style>