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
            <h4 class="page-title">处方管理</h4>
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
            <div class="prescription-box">
              <h3 class="box-title">处方信息列表</h3>

                <div class="prescription" v-for="prescription in allprescription" :key="prescription.prescription_id">
                  <div class="prescription-title">
                    <div class="prescription-title-p" style="font-size:24px;font-weight:500;width:66%;padding-left: 40%;">处方笺</div>
                    <div class="prescription-title-p" style="font-size:14px;width:33%;padding-top: 70px;padding-left: 4%;line-height:0px;">NO：{{prescription.prescription_id}}</div>
                  </div>
                  <div class="prescription-info">
                    <div style="width:25%">姓名：{{prescription.patient_name}}</div>
                    <div style="width:25%">性别：{{prescription.patient_sex}}</div>
                    <div style="width:25%">年龄：{{prescription.patient_age}}</div>
                    <div style="width:25%">科别：{{prescription.prescription_depart_cate}}</div>
                  </div>
                  <div class="prescription-info">
                    <div style="width:50%">费别：{{prescription.prescription_cost_cate}}</div>
                    <div style="width:50%">门诊号：{{prescription.patient_id}}</div>
                  </div>
                  <div class="prescription-content">
                    <div style="font-size:30px;font-weight:600;float:left;padding-left:5px;">R</div>
                    <div style="height: 50px;line-height: 50px;margin-left: 10%;" v-html="prescription.prescription_content"></div>
                  </div>
                  <div class="prescription-info">
                    <div style="width:40%">处方医师：{{prescription.prescription_doctor_name}}</div>
                    <div style="width:30%">调配者：{{prescription.prescription_deploy_people}}</div>
                    <div style="width:30%">校对者：{{prescription.prescription_pro_people}}</div>
                  </div>
                  <div class="prescription-info" style="border: 0px;">
                    <div style="width:50%">药价：￥{{prescription.prescription_cost}}</div>
                    <div style="width:50%;text-align:center;">{{prescription.prescription_time}}</div>
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
      allprescription:[],
    };
  },
  methods: {
    getAllPrescription(){
      this.$http.get("asthma_diagnosis_system/get_all_prescription.php").then(result=>{
        if(result.status==200){
          this.allprescription=result.body;   
          console.log(this.allprescription);   
        }
      })
    }
  },
  created() {
    this.getAllPrescription();

    $("#prescriptionlink").addClass("router-link-active");
    $("#messagelink").removeClass("router-link-active");
    $("#patientslink").removeClass("router-link-active");
    $("#medicallink").removeClass("router-link-active");
    //$("#prescriptionlink").removeClass("router-link-active");
    $("#departmentlink").removeClass("router-link-active");
    $("#tasklink").removeClass("router-link-active");
    $("#accountlink").removeClass("router-link-active");
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
.prescription-box {
  background: #fff;
  padding: 25px 5%;
  margin-bottom: 30px;
  min-height: 860px;
  padding-bottom: 60px;
}
.elementincenter {
  text-align: center;
}
.marginleft10 {
  margin-left: 10px;
}
.paddingbottom0 {
  padding-bottom: 0px;
}
.paddingbottom10 {
  padding-bottom: 10px;
}
.prescription{
  width: 40%;
  height: 700px;
  border: 1px solid black;
  float: left;
  margin-left: 3%;
  margin-top:30px;
}
.prescription-title{
  width:90%;
  margin-left: 5%;
  height: 90px;
  border-bottom: 1px solid black;
}
.prescription-title-p{
  float: left;
  height: 90px;
  line-height: 90px;
}
.prescription-info{
  width:90%;
  margin-left: 5%;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid black;
  clear: both;
}
.prescription-info div{
  float: left;
  font-size:16px;
  padding-left: 6px;
}
.prescription-content{
  width:90%;
  margin-left: 5%;
  height: 360px;
  border-bottom: 1px solid black;
}
</style>
