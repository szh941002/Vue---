<template>
    <!-- 公共的评论区域 -->
    <div class="comment-box">
        <!--发表评论 监听提交事件,并且阻止浏览器的默认属性提交,-->
        <form id="commentForm" name="commentForm" class="form-box" @submit.prevent="subComment">
            <div class="avatar-box">
                <i class="iconfont icon-user-full"></i>
            </div>
            <div class="conn-box">
                <div class="editor">
                    <textarea v-model="commentContent" id="txtContent" name="txtContent" sucmsg=" " 
                        datatype="*10-1000" nullmsg="请填写评论内容！">
                    </textarea>
                    <span class="Validform_checktip"></span>
                </div>
                <div class="subcon">
                    <button id="btnSubmit" name="submit" type="submit"  class="submit">提交评论</button>
                    <span class="Validform_checktip"></span>
                </div>
            </div>
        </form>
        <ul id="commentList" class="list-box">
            <p v-if="!commentList.length"  style="margin:5px 0 15px 69px;line-height:42px;text-align:center;border:1px solid #f7f7f7;">
                暂无评论，快来抢沙发吧！
            </p>
            <li v-for='item in commentList' :key='item.reply_time'>
                <div class="avatar-box">
                    <i class="iconfont icon-user-full"></i>
                </div>
                <div class="inner-box">
                    <div class="info">
                        <span>{{item.user_name}}</span>
                        <span>{{item.user_ip}}</span>
                        <span>{{item.add_time | date}}</span>
                    </div>
                    <p>{{item.content}}</p>
                </div>
            </li>
        </ul>
        <!--放置页码-->
        <div class="page-box" style="margin:5px 0 0 62px">
            <div id="pagination" class="digg">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page="query.pageIndex" :page-sizes="[10, 20,30,40]" :page-size="query.pageSize" 
                    layout="total, sizes, prev, pager, next, jumper" :total="totalcount">
                </el-pagination>
            </div>
        </div>
        <!--/放置页码-->
    </div>
</template>

<script>
    export default {
        // 接收父组传过来的参数
        props :['tablename','artId'] ,
        data(){
            return {
                // 评论类表数据
                commentList: [],
                // 评论文本数据
                commentContent : '',
                //总页面, 初始值
                totalcount: 0, 
                // 这里需要传入的参数当前第几页,每页显示的条数
                query:{
                    pageIndex:1,
                    pageSize:10
                }
            }
        },
        methods : {
            // 获取评论类表
            getCommentList(){
                this.$http.get(this.$api.commentList+this.tablename+'/'+this.artId,
                {params :this.query})
                .then(rsp=>{
                    console.log(rsp.data.message);
                    this.commentList = rsp.data.message;
                    this.totalcount = rsp.data.totalcount
                })
            },
            // 提交评论
            subComment (){
                this.$http.post(this.$api.comment+this.tablename+'/'+this.artId,
                {commenttxt :this.commentContent})
                .then(rsp=>{
                    // if(!textarea.value){
                    //     return ;
                    // }
                    // 评论成功后的提示
                    this.$message({
                        message: '恭喜你，发表成功',
                        type: 'success'
                     });
                    // 评论用户成功以后,手动加一个 unshift添加到数组最前面
                    
                    // if(commenttxt!=''){
                            this.commentList.unshift({
                            user_name: '匿名用户',
                            user_ip: '127.0.0.1',
                            add_time: new Date(),
                            content: this.commentContent
                        });
                        this.commentContent = '';
                    // }
                })
            },
            // 每页数量变化是触发
            handleSizeChange(pageSize){
                this.query.pageSize = pageSize ;
                console.log(pageSize);
                this.getCommentList();
            },
            // 页码发生变化是触发
            handleCurrentChange(pageIndex){
                this.query.pageIndex = pageIndex ;
                console.log(pageIndex);
                this.getCommentList();
            }
        },
        created(){
            this.getCommentList();
        }
    };
</script>

<style scoped>

</style>