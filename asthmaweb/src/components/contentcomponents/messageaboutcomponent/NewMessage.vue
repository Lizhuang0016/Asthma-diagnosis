<template>
  <!-- ============================================================== -->
  <!-- Wrapper -->
  <!-- ============================================================== -->
  <div id="wrapper">
    <!-- ============================================================== -->
    <!-- Topbar header - style you can find in pages.scss -->
    <!-- ============================================================== -->


    <!-- End Top Navigation -->
    <!-- ============================================================== -->
    <!-- Left Sidebar - style you can find in sidebar.scss  -->
    <!-- ============================================================== -->


    <!-- ============================================================== -->
    <!-- End Left Sidebar -->
    <!-- ============================================================== -->
    <!-- Page Content -->
    <!-- ============================================================== -->
    <div id="page-wrapper">
      <div class="container-fluid">
        <div class="row bg-title">
          <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">通知</h4>
          </div>
          <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <router-link :to="'/navigation/message/release/'+this.onlinedoctor.doctor_id" 
            class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">发布消息</router-link>
          </div>
          <!-- /.col-lg-12 -->
        </div>
        <!-- /.row -->
        <!-- ============================================================== -->
        <!-- chat-listing & recent comments -->
        <!-- ============================================================== -->
        <div class="row">
          <!-- .col -->
          <div class="col-md-12 col-lg-8 col-sm-12">
            <div class="white-box">
              <h2 class="message-title">最新消息</h2>
              <div class="comment-center p-t-10" style="min-height:700px;">
                <div class="comment-body" v-for="onenew in currentnewslist" :key="onenew.news_id">
                  <div class="messages_box">
                    <router-link :to="'/navigation/message/details/'+onenew.news_id">{{onenew.news_title}}</router-link>
                    <span class="time">{{onenew.news_time}}</span>
                  </div>
                </div>
              </div>
<div class="pageComponentsTest">
    <!-- <page-component :page-config="pageConfigTotal" @changeCurrentPage="changePage"></page-component> -->
    <page-component :page-config="pageConfigPageTotal" @changeCurrentPage="changePage"></page-component>
  </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="panel">
              <div class="sk-chat-widgets">
                <div class="panel panel-default">
                  <div class="panel-heading" style="max-height: 840px;overflow: hidden;">
                    医生列表
                  </div>
                  <div class="panel-body">
                    <ul class="chatonline">
                      <li v-for="doctor in doctorlist" :key="doctor.doctor_id">
                        <!-- <div class="call-chat">
                          <button class="btn btn-success btn-circle btn-lg" type="button"><i class="fa fa-phone"></i></button>
                          <button class="btn btn-info btn-circle btn-lg" type="button"><i class="fa fa-comments-o"></i></button>
                        </div> -->
                        <div class="dlist-line">
                        <div class="online-info">
                            <img :src="doctor.doctor_image" alt="user-img" class="img-circle"> 
                            <p>{{doctor.doctor_name}}</p>
                        </div>
                        <div class="online-state">
                          在线
                        </div>
                        </div>
                      </li>
                
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /.col -->
        </div>
      </div>
      <!-- /.container-fluid -->
    </div>
    <!-- /#page-wrapper -->
  </div>
  <!-- /#wrapper -->

</template>
    

<script>
 import pageComponent from "../../childcomponents/pagebreak.vue"
export default {
  name: "newmessage",
  data() {
    return {
      doctorlist: [],
      newslist:[],
      currentnewslist:[],
      onlinedoctor:[],
      onlinestate:"离线",
      //pageConfigTotal:{total:21,pageSize:10,pageNo:1},
      pageConfigPageTotal:{total:21,pageSize:10,pageNo:1}
    };
  },
  methods: {
    getAllDoctor(){
      this.$http.get('asthma_diagnosis_system/get_all_doctor.php').then(result => {
        if(result.status===200){
          this.doctorlist=result.body;
          console.log(result);
        }
      })
    },
    getAllNews(){
      this.$http.get('asthma_diagnosis_system/get_all_news.php').then(result=>{
        if(result.status===200){
          this.newslist=result.body;
          // console.log(this.newslist);
          // this.newslist=this.newslist.reverse();
          console.log("长度",this.newslist.length);
          console.log(this.newslist.slice(18,30));
          console.log("所有信息",this.newslist);
          this.pageConfigPageTotal.total=this.newslist.length;
          var curpage=this.pageConfigPageTotal.pageNo;
          console.log("当前页",curpage);
          console.log("总信息数量",this.pageConfigPageTotal.total);
          console.log("每页数量",this.pageConfigPageTotal.pageSize);
          this.currentnewslist=this.newslist.slice((curpage-1)*this.pageConfigPageTotal.pageSize,(curpage)*this.pageConfigPageTotal.pageSize);
        }
      })
    },
    getOnlineDoctor(){
      var onedoctor=JSON.parse(localStorage.getItem('onlinedoctor'));
      this.onlinedoctor=onedoctor;
    },
    changePage(page){
      this.pageConfigPageTotal.pageNo = page
      var curpage=this.pageConfigPageTotal.pageNo;
      console.log("当前页",curpage);
      console.log("总信息数量",this.pageConfigPageTotal.total);
      console.log("每页数量",this.pageConfigPageTotal.pageSize);
      this.currentnewslist=this.newslist.slice((curpage-1)*this.pageConfigPageTotal.pageSize,(curpage)*this.pageConfigPageTotal.pageSize);
    },
  },
  //挂载分页子组件
  components:{'page-component':pageComponent},
  created() {
    this.getAllDoctor();
    this.getAllNews();
    this.getOnlineDoctor();

    $("#messagelink").addClass("router-link-active");
    //$("#messagelink").removeClass("router-link-active");
    $("#patientslink").removeClass("router-link-active");
    $("#medicallink").removeClass("router-link-active");
    $("#prescriptionlink").removeClass("router-link-active");
    $("#departmentlink").removeClass("router-link-active");
    $("#tasklink").removeClass("router-link-active");
    $("#accountlink").removeClass("router-link-active");
  },
  updated() {
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style slot-scoped>
.elementincenter {
  text-align: center;
}
.marginleft10 {
  margin-left: 10px;
}
.fontsize20{
    font-size: 20px;
}
.messages_box{
  width: 100%; 
  

}
.messages_box a{
  color:black;
  font-size: 20px;
  overflow:hidden;/*来将多出来的字体隐藏*/
  word-break:keep-all;
  white-space:nowrap;/*规定段落中的文本不进行换行*/
  text-overflow:ellipsis;/*是用来代替的格式*/
  display: block;/*必须有*/
  width: 66.6%;
  float: left;
}
.messages_box span{
  float: right;
  margin-top: 8px;
}
.pageComponentsTest {
  padding-top: 50px;
}
.pageComponent{
  margin-bottom: 20px;
  text-align: center;
}
.dlist-line{
  clear: both;
    width: 90%;
    font-size: 18px;
    height: 40px;
    line-height: 40px;
    margin-bottom: 5px;
}
.online-info{
  float: left;
  width: 40%;
  margin-left: 5%;
  height: 40px;
}
.online-info img{
      margin-right: 10px;
    float: left;
    width: 40px;
}
.online-info p{
  float: left;
  font-size: 22px;
  margin-top: 3px;
}
.online-state{
  float: left;
    width: 55%;
    text-align: right;
    color: #41b3f9;
    font-size: 12px;
}
</style>
