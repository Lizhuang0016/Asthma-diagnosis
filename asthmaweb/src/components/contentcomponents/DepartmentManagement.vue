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
            <h4 class="page-title">部门管理</h4>
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
            <div class="department-box">
              <h3 class="box-title">部门名片列表</h3>
                <div class="department" v-for="department in alldepartment" :key="department.department_id">
                  <span class="boxicon glyphicon glyphicon-pushpin"></span>
                  <div class="department-line">
                    <div class="department-label">部门编号:</div>
                    <div class="department-info">{{department.department_id}}</div>
                  </div>
                  <div class="department-line">
                    <div class="department-label">部门名称:</div>
                    <div class="department-info">{{department.department_name}}</div>
                  </div>
                  <div class="department-line">
                    <div class="department-label">部门联系人:</div>
                    <div class="department-info">{{department.department_contacts}}</div>
                  </div>
                  <div class="department-line">
                    <div class="department-label">部门联系电话:</div>
                    <div class="department-info">{{department.department_phone}}</div>
                  </div>
                  <div class="department-content">
                    <div class="department-label">部门职能简介:</div>
                    <div class="department-textera">{{department.department_introduce}}</div>
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
export default {
  name: "customers",
  data() {
    return {
      alldepartment: [],
      
    };
  },
  methods: {
    getAllDepartment(){
      this.$http.get("get_all_department").then(result=>{
        if(result.status==200&&result.body.err_code===0){
          this.alldepartment=result.body.departments;
        }
      })
    }
  },
  created() {
    this.getAllDepartment();

    // $("#departmentlink").addClass("router-link-active");
    // $("#messagelink").removeClass("router-link-active");
    // $("#patientslink").removeClass("router-link-active");
    // $("#medicallink").removeClass("router-link-active");
    // $("#prescriptionlink").removeClass("router-link-active");
    // $("#departmentlink").removeClass("router-link-active");
    // $("#tasklink").removeClass("router-link-active");
    //$("#accountlink").removeClass("router-link-active");
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
.department-box{
  background: #fff;
  padding: 25px 5%;
  margin-bottom: 30px;
  padding-bottom: 60px;
  min-height: 860px;
}
.department{
  width: 40%;
  min-width: 450px;
  height: 540px;
  border: 1px solid black;
  float: left;
  margin-left: 3%;
  margin-top:30px;
  padding-top: 20px;
  position: relative;
}
.department-line{
  width: 90%;
  margin-left: 5%;
  height: 60px;
  font-size: 18px;
  clear: both;
  padding-top: 30px;
}
.department-content{
  width: 90%;
  margin-left: 5%;
  font-size: 16px;
  clear: both;
  font-size: 18px;
  padding-top: 30px;
}
.department-label{
  float: left;
  width: 30%;
  text-align: right;
  margin-right: 3%;
}
.department-info{
  float: left;
  width: 40%;
  border-bottom: 1px solid black;
}
.department-textera{
  float: left;
  width:65%;
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
