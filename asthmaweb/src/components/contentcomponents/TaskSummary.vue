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
            <h4 class="page-title">任务管理</h4>
          </div>
          <!-- <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <a href="#" target="_blank"
              class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">添加</a>
          </div> -->
          <!-- /.col-lg-12 -->
        </div>

        <!-- /row -->
        <div class="row">
          <div class="col-sm-12">
            <div class="task-box">
              <h3 class="box-title">我的任务列表</h3>

                <div class="task" v-for="onetask in task" :key="onetask.task_id">
                  <span class="boxicon glyphicon glyphicon-pushpin"></span>
                  <div class="task-line">
                    <div class="task-label">任务内容:</div>
                  </div>
                  <div class="task-content">
                    <div class="task-textera">{{onetask.task_content}}</div>
                  </div>
                  <div class="task-line" style="padding-top: 10px;text-align: right;padding-right: 25px;">
                    <div class="task-label">{{onetask.task_time}}</div>
                  </div>
                </div>
                
                
                <!-- 空白div用来清除浮动所导致的父div高度不会自适应 -->
                <div style="clear:both;"></div>
            </div>
          </div>
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </div>
    <!-- /#page-wrapper -->
  </div>
  <!-- /#wrapper -->

</template>
    

<script>
// import Alert from "./Alert";
export default {
  data() {
    return {
      task:[],
      onlinedoctor:[],
    };
  },
  methods: {
    getOnlineDoctor() {
      var onedoctor = JSON.parse(localStorage.getItem("onlinedoctor"));
      this.onlinedoctor = onedoctor;
    },
    getTaskByDid(){
      this.$http.post("get_task_by_did",{doctor_id: this.onlinedoctor.doctor_id },{ emulateJSON: true }).then(result=>{
        if(result.status==200&&result.body.err_code===0){
          this.task=result.body.tasks;
          console.log(this.task);
        }
      })
    }
  },
  created() {
    this.getOnlineDoctor();
    this.getTaskByDid();

    // $("#tasklink").addClass("router-link-active");
    // $("#messagelink").removeClass("router-link-active");
    // $("#patientslink").removeClass("router-link-active");
    // $("#medicallink").removeClass("router-link-active");
    // $("#prescriptionlink").removeClass("router-link-active");
    // $("#departmentlink").removeClass("router-link-active");
    // //$("#tasklink").removeClass("router-link-active");
    // $("#accountlink").removeClass("router-link-active");
  },
  updated() {
   
  },
  components: {
    //Alert
  }
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
.task-box{
  background: #fff;
  padding: 25px 5%;
  margin-bottom: 30px;
  padding-bottom: 60px;
  min-height: 860px;
}
.task{
  width: 40%;
  min-width: 450px;
  height: 340px;
  border: 1px solid black;
  float: left;
  margin-left: 3%;
  margin-top:30px;
  padding-top: 20px;
  position: relative;
}
.task-line{
  width: 90%;
  margin-left: 5%;
  font-size: 18px;
  clear: both;
  padding-top: 30px;
}
.task-content{
  width: 90%;
  margin-left: 5%;
  font-size: 16px;
  clear: both;
  font-size: 18px;
  padding-top: 10px;
}
.task-label{
  float: left;
  width: 100%;
  margin-left: 3%;
}
.task-info{
  float: left;
  width: 40%;
  border-bottom: 1px solid black;
}
.task-textera{
  float: left;
  width: 96%;
  margin-left: 2%;
  height: 200px;
  border: 1px solid black;
  font-size: 14px;
  padding:5px;
  overflow:hidden;/*来将多出来的字体隐藏*/
  word-break:keep-all;
  /* white-space:nowrap;规定段落中的文本不进行换行 */
  text-overflow:ellipsis;/*是用来代替的格式*/
  display: block;/*必须有*/
}
.boxicon{
  font-size: 28px;
  margin-left: 5%;
  position: absolute;
  margin-top: 15px;
}
</style>
