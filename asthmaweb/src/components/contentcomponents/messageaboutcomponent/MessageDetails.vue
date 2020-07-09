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
            <h4 class="page-title">消息详情</h4>
          </div>
          <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <a @click="goback" class="btn btn-info pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">返回</a>
          </div>
          <!-- <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <a href="#" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">发布消息</a>
          </div> -->
          <!-- /.col-lg-12 -->
        </div>
        <!-- /.row -->
        <!-- ============================================================== -->
        <!-- chat-listing & recent comments -->
        <!-- ============================================================== -->
        <div class="row">
          <!-- .col -->
          <div class="col-md-12 col-lg-12 col-sm-12">
            <div class="mewssage-box">
              <h2 class="new-title">{{this.news.news_title}}</h2>
              <div class="comment-center p-t-10">
                <div class="message-body">
                  <div class="mail-contnet">
                    <div class="authorandtime">
                      <div style="height:20px;width:270px;margin:0 auto;">
                    <p>作者：{{this.news.news_author}}</p>
                    <p style="margin-left:3%">时间：</p><p style="margin-top: 1.4px;">{{this.news.news_time}}</p></div>
                    </div>
                    <br />
                    <div class="newscontent">
                    <p v-html="this.news.news_content"></p> 
                    </div>
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
export default {
  name: "customers",
  data() {
    return {
      newslist:[],
      news:["2222222"],
      news_id:'',
    };
  },
  methods: {
    getAllNews(){
      this.$http.get('asthma_diagnosis_system/get_all_news.php').then(result=>{
        if(result.status===200){
          this.newslist=result.body;
          console.log(this.newslist);
        }
      })
    },
    getNewsById(newsid){
      this.$http.post('asthma_diagnosis_system/get_news_by_id.php',{"news_id":newsid},{emulateJSON:true}).then(result=>{
        if(result.status===200){
          this.news=result.body[0];
          console.log(this.news);
        }
      })
    },
    goback(){
      this.$router.go(-1);//返回上一层
    }
  },
  beforeCreate() {
    
  },
  created() {
    var newsid=this.$route.params.news_id;
    console.log(this.$route.params.news_id);
    if(newsid){
      this.getNewsById(newsid)
    }
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
.mewssage-box{
  background: #fff;
    padding: 25px;
    margin-bottom: 30px;
    min-height: 800px;
}
.elementincenter {
  text-align: center;
}
.marginleft10 {
  margin-left: 10px;
}
.fontsize20{
    font-size: 20px;
}
.message-body{
  display: table;
  width: 90%;
  padding: 20px 0px;
  margin-left: 5%;
}
.new-title{
  margin: 0 0 12px 15px;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 30px;
  text-align: center;
  margin-top: 20px;
}
.authorandtime{
  height: 20px;
  width: 100%;
  text-align: center;
}
.authorandtime p{
  float: left;

}
.newscontent p{
  font-size: 18px;
  padding: 0 8%;
}
</style>
