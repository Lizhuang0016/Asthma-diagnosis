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
            <h4 class="page-title">发布新闻</h4>
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
            <div class="white-box">
              <div class="comment-center p-t-10">
                <div class="release-body">
                  <div class="mail-contnet">
                    <div class="releasetitle">
                        <p class="release-p">标题:</p>
                        <input v-model="news_title" class="titleinput" type="text"  @blur="titleCheck" placeholder="标题"/>
                        <p class="warntip1">{{titlewarn}}</p>
                    </div>
                    <div class="releasecontent">
                        <p class="release-p">内容:</p>
                        <quill-editor class="contentinput" v-model="news_content" @blur="contentCheck"></quill-editor>
                        <p class="warntip2">{{contentwarn}}</p>
                    </div>
                    <div class="releasebutton">
                        <a class="btn btn-info pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light"
                        @click="releaseMessageCancel">取消</a>
                        <a class="btn btn-info pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light"
                        @click="releaseMessage">发布</a>
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
      news:[""],
      news_title:'',
      news_content:'',
      onlinedoctor:[],
      titlewarn:'',
      contentwarn:''
    };
  },
  methods: {
    getOnlineDoctor(){
      var onedoctor=JSON.parse(localStorage.getItem('onlinedoctor'));
      this.onlinedoctor=onedoctor;
    },
    titleCheck(){
      if(!this.news_title){
        this.titlewarn="标题不能为空";
        return ;
      }
      if(this.news_title.length>30){
        this.titlewarn="标题过长，不能超过30个字"
        return ;
      }
      this.titlewarn='';
      //console.log(this.news_title.length)
    },
    contentCheck(){
      if(!this.news_content){
        this.contentwarn="内容不能为空";
        return ;
      }
      if(this.news_content.length>5000){
        this.contentwarn="内容过长，不能超过5000个字"
        return ;
      }
      this.contentwarn='';
    },
    releaseMessage(){
      if(!this.news_title){
        this.titlewarn="标题不能为空";
      } 
      if(!this.news_content){
        this.contentwarn="内容不能为空";
      }
      if(this.news_title.length>40){
        this.titlewarn="标题过长，不能超过40个字"
      }
      if(this.news_content.length>5000){
        this.contentwarn="内容过长，不能超过5000个字"
      }
        if(this.news_title&&this.news_content&&this.news_title.length<40&&this.news_content.length<5000){
            this.news={
                news_title:this.news_title,
                news_author:this.onlinedoctor.doctor_name,
                news_author_id:this.onlinedoctor.doctor_id,
                news_time:this.getFormatDate(),
                news_views:1,
                news_content:this.news_content
            }
            console.log(this.news);
            this.$http.post('insert_news',this.news,{emulateJSON:true}).then(result=>{
             if(result.status===200&&result.body.err_code===0){
               this.news=result.body;
               console.log(this.news);
               alert("发布成功!")
               this.$router.push('/navigation/message/index/'+ this.onlinedoctor.doctor_id);
            }
            })

        }

    },
    releaseMessageCancel(){
      this.$router.push({path:'/navigation/message/index/'+this.onlinedoctor.doctor_id});
    },
    getFormatDate(){
        var date = new Date();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentDate = date.getFullYear() + "-" + month + "-" + strDate
            + " " + date.getHours() + ":" + date.getMinutes();
    return currentDate;
    }
  },
  beforeCreate() {},
  created() {
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
<style scoped>
.elementincenter {
  text-align: center;
}
.marginleft10 {
  margin-left: 10px;
}
.fontsize20{
  font-size: 20px;
}
.release-body{
  display: table;
  width: 76.6%;
  padding: 20px 0px;
  margin-left: 5%;
}
.releasetitle{
  width: 100%;
  height: 60px;
  clear: both;
}
.release-p{
  float: left;
  font-size: 20px;
  width: 10%;
  text-align: center;
}
.titleinput{
  float: left;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  width: 80%;
  border: 2px solid #d9d9d9;
  margin: 0 0 20px;
  padding: 10px 15px;
  box-sizing: border-box;
  transition: 0.3s ease;
  -webkit-transition: box-shadow 0.30s ease-in-out;
}
.titleinput:focus{
  outline:none;
  border:#87C6F9 2px solid;
  box-shadow: 0 0 3px rgba(103, 166, 217, 1);
}
.warntip1{
  font-size: 12px;
  color:red;
  float: left;
  width: 10%;
  padding-left: 5px;
}
.warntip2{
  font-size: 12px;
  color:red;
  float: left;
  width: 9%;
  padding-left: 5px;
  position:absolute;
  bottom: -60px;
  right: 10px;
}
.releasecontent{
  clear: both;
  width: 100%;
  height: 400px;
  position: relative;
}
.contentinput{
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  width: 80%;
  border: 1px solid #d9d9d9;
  margin: 0 0 20px;
  box-sizing: border-box;
  transition: 0.3s ease;
  -webkit-transition: box-shadow 0.30s ease-in-out;
  float: left;
}
.contentinput:focus{
  outline:none;
  border:#87C6F9 1px solid;
  box-shadow: 0 0 8px rgba(103, 166, 217, 1);
}
.ql-editor{
  height: 400px;
}
.releasebutton{
  width: 90%;
  height: 60px;
}
</style>
