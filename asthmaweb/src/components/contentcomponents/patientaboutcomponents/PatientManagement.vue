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
    <!-- ============================================================== -->
    <!-- Page Content -->
    <!-- ============================================================== -->
    <div id="page-wrapper">
      <div class="container-fluid">
        <div class="row bg-title">
          <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">我的所有病人信息</h4>
          </div>
          <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <router-link :to="'/navigation/patient/addpatient/'+this.onlinedoctor.doctor_id" 
            class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">添加病人</router-link>
          </div>
          <!-- /.col-lg-12 -->
        </div>
        <!-- /row -->
        <div class="row">
          <div class="col-sm-12">
            <div class="patient-box">
              <h3 class="box-title">病人列表</h3>
              <div class="table-responsive" style="min-height: 740px;">
                <table class="table">
                  <thead>
                    <tr>
                      <th style="width:8%;">编号</th>
                      <th style="width:10%;">姓名</th>
                      <th style="width:10%;">性别</th>
                      <th style="width:10%;">年龄</th>
                      <th style="width:15%;">疾病类别</th>
                      <th style="width:25%;">问诊时间</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="patient in currpatientlist" :key="patient.patient_id" style="border-bottom:1px solid #ddd;">
                      <td>{{patient.patient_id}}</td>
                      <td>{{patient.patient_name}}</td>
                      <td>{{patient.patient_sex}}</td>
                      <td>{{patient.patient_age}}</td>
                      <td>{{patient.patient_disease_cate}}</td>
                      <td style="min-width:120px;overflow-y:hidden;">{{patient.patient_clinic_time}}</td>
                      <td style="text-align:center;">
                        <router-link class="btn btn btn-default btn-outline m-r-5" style="margin-top: 11px;" 
                        :to="'/navigation/patient/details/'+onlinedoctor.doctor_id+'/'+patient.patient_id">详情</router-link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="pageComponentsTest">
                <!-- <page-component :page-config="pageConfigTotal" @changeCurrentPage="changePage"></page-component> -->
                <page-component :page-config="pageConfigPageTotal" @changeCurrentPage="changePage"></page-component>
              </div>
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
import pageComponent from "../../childcomponents/pagebreak.vue";
export default {
  name: "patientmanagement",
  data() {
    return {
      patientlist: [],
      onlinedoctor: [], 
      currpatientlist:[],
      pageConfigPageTotal: { total: 21, pageSize: 10, pageNo: 1}
    };
  },
  methods: {
    getOnlineDoctor() {
      var onedoctor = JSON.parse(localStorage.getItem("onlinedoctor"));
      this.onlinedoctor = onedoctor;
    },
    getAllPatientsByDid() {
      this.$http
        .post(
          "get_patients_by_did",
          { doctor_id: this.onlinedoctor.doctor_id },
          { emulateJSON: true }
        )
        .then(result => {
          if (result.status === 200&&result.body.err_code===0) {
            console.log(result.body);
            this.patientlist = result.body.patients;
            console.log(this.patientlist);
            console.log("长度",this.patientlist.length);
            console.log(this.patientlist.slice(18,30));
            console.log("所有信息",this.patientlist);
            this.pageConfigPageTotal.total=this.patientlist.length;
            var curpage=this.pageConfigPageTotal.pageNo;
            console.log("当前页",curpage);
            console.log("总信息数量",this.pageConfigPageTotal.total);
            console.log("每页数量",this.pageConfigPageTotal.pageSize);
            this.currpatientlist=this.patientlist.slice((curpage-1)*this.pageConfigPageTotal.pageSize,(curpage)*this.pageConfigPageTotal.pageSize);
          }
        });
    },
    changePage(page) {
      this.pageConfigPageTotal.pageNo = page;
      var curpage = this.pageConfigPageTotal.pageNo;
      console.log("当前页", curpage);
      console.log("总信息数量", this.pageConfigPageTotal.total);
      console.log("每页数量", this.pageConfigPageTotal.pageSize);
      this.currpatientlist = this.patientlist.slice(
        (curpage - 1) * this.pageConfigPageTotal.pageSize,
        curpage * this.pageConfigPageTotal.pageSize
      );
    }
  },
  created() {
    this.getOnlineDoctor();
    this.getAllPatientsByDid();
    // $("#patientslink").addClass("router-link-active");
    // $("#messagelink").removeClass("router-link-active");
    // //$("#patientslink").removeClass("router-link-active");
    // $("#medicallink").removeClass("router-link-active");
    // $("#prescriptionlink").removeClass("router-link-active");
    // $("#departmentlink").removeClass("router-link-active");
    // $("#tasklink").removeClass("router-link-active");
    // $("#accountlink").removeClass("router-link-active");
  },
  updated() {},
  //挂载分页子组件
  components: { "page-component": pageComponent }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.patient-box {
  background: #fff;
  padding: 25px 5%;
  margin-bottom: 30px;
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
.pinfotitle td {
  width: 10%;
}
.pageComponentsTest {
  padding-top: 50px;
}
.pageComponent {
  margin-bottom: 20px;
  text-align: center;
}
</style>
