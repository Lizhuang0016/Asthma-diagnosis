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
            <h4 class="page-title">病人相关信息</h4>
          </div>
          <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <a href="#" @click="goback" class="btn btn-info pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">返回</a>
          </div>
          <!-- /.col-lg-12 -->
        </div>
        <!-- /row -->
        <div class="row">
          <div class="col-sm-12">
            <div class="patient-box">
              <h3 class="box-title" style="margin-bottom:30px;">病人信息详情</h3>
              <div class="info-line">
                <div class="title-info">姓名：</div>
                <div class="content-info">{{patient.patient_name}}</div>
              </div>
              <div class="info-line">
                <div class="title-info">性别：</div>
                <div class="content-info">{{patient.patient_sex}}</div>
              </div>
              <div class="info-line">
                <div class="title-info">年龄：</div>
                <div class="content-info">{{patient.patient_age}}</div>
              </div>
              <div class="info-line">
                <div class="title-info">联系方式：</div>
                <div class="content-info">{{patient.patient_phone}}</div>
              </div>
              <div class="info-line">
                <div class="title-info">疾病类别：</div>
                <div class="content-info" v-if="changecateflag">{{patient.patient_disease_cate}}</div>
                <div class="patient-cate" v-if="!changecateflag">
                  <select class="patient-cate-select" v-model="changepatient_cate">
                    <option value="未患病">未患病</option>
                    <option value="过敏性哮喘">过敏性哮喘</option>
                    <option value="感染性哮喘">感染性哮喘</option>
                    <option value="药物性哮喘">药物性哮喘</option>
                    <option value="职业性哮喘">职业性哮喘</option>
                    <option value="运动性哮喘">运动性哮喘</option>
                    <option value="神经精神性哮喘">神经精神性哮喘</option>
                    <option value="其他哮喘类型">其他哮喘类型</option>
                  </select>
                </div>
              </div>
              <div class="info-line" style="height:220px;">
                <div class="title-info" style="height:220px;line-height: 220px;">患病信息：</div>
                <div class="content-info" style="height:220px;">
                  <div v-if="changeinfotextshow">{{patient.patient_disease_info}}</div>
                  <div v-if="!changeinfotextshow"><textarea v-model="changediseaseinfo" class="changeinfotext"></textarea></div>
                </div>
              </div>
              <div class="info-line" style="border-bottom:1px solid black;">
                <div class="title-info">主治医师：</div>
                <div class="content-info">{{patient.patient_doctor_name}}</div>
              </div>
              <div class="patient_button_box">
                <div class="patient_button">
                  <button @click="autoDiagnosis" class="btn btn-danger m-l-20 hidden-xs hidden-sm waves-effect waves-light">智能诊断</button>
                </div>
                <div class="patient_button" v-if="changebuttonshow">
                  <button @click="changePatientInfo" class="btn btn-info m-l-20 hidden-xs hidden-sm waves-effect waves-light">修改病历</button>
                </div>
                <div class="patient_button2" v-if="!changebuttonshow">
                  <button @click="cancelChagePatientInfo" class="btn btn-info m-l-20 hidden-xs hidden-sm waves-effect waves-light">取消</button>
                </div>
                <div class="patient_button2" v-if="!changebuttonshow">
                  <button @click="confirmChagePatientInfo" class="btn btn-danger m-l-20 hidden-xs hidden-sm waves-effect waves-light">确定</button>
                </div>
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
export default {
  name: "patientdetails",
  data() {
    return {
      onlinedoctor: [],
      patient: [],
      curr_patient_id: "",
      changebuttonshow: true,
      changeinfotextshow: true,
      changecateflag:true,
      changediseaseinfo: "",
      changepatient_cate:"",
    };
  },
  methods: {
    goback() {
      this.$router.push('/navigation/patient/index/'+ this.onlinedoctor.doctor_id);
    },
    getOnlineDoctor() {
      var onedoctor = JSON.parse(localStorage.getItem("onlinedoctor"));
      this.onlinedoctor = onedoctor;
    },
    getPatientDetailsbyPid(patient_id) {
      this.$http
        .post(
          "get_patient_by_pid",
          { patient_id: patient_id },
          { emulateJSON: true }
        )
        .then(result => {
          if (result.status === 200&&result.body.err_code===0) {
            this.patient = result.body.patient[0];
            console.log(this.patient);
          }
        });
    },
    autoDiagnosis() {
      this.$router.push({
        path:
          "/navigation/patient/diagnosis/" +
          this.onlinedoctor.doctor_id +
          "/" +
          this.patient.patient_id
      });
    },
    //修改病例信息
    changePatientInfo() {
      this.changebuttonshow = !this.changebuttonshow;
      this.changeinfotextshow = !this.changeinfotextshow;
      this.changecateflag=!this.changecateflag;
      console.log(this.changebuttonshow);
      this.changediseaseinfo = this.patient.patient_disease_info;
      this.changepatient_cate=this.patient.patient_disease_cate;
    },
    //取消修改病例信息
    cancelChagePatientInfo() {
      this.changebuttonshow = !this.changebuttonshow;
      this.changeinfotextshow = !this.changeinfotextshow;
      this.changecateflag=!this.changecateflag;
      console.log(this.changebuttonshow);
    },
    //确认修改病例信息
    confirmChagePatientInfo() {
      this.changebuttonshow = !this.changebuttonshow;
      this.changeinfotextshow = !this.changeinfotextshow;
      this.changecateflag=!this.changecateflag;
      console.log(this.changebuttonshow);
      this.$http
        .post(
          "update_patient_disinfo_by_pid",
          {
            patient_id: this.$route.params.patient_id,
            patient_disease_info: this.changediseaseinfo,
            patient_disease_cate:this.changepatient_cate
          },
          { emulateJSON: true }
        )
        .then(result => {
          if (result.status === 200&&result.body.err_code===0) {
            console.log("更新成功");
            this.patient.patient_disease_info = this.changediseaseinfo;
            this.patient.patient_disease_cate=this.changepatient_cate;
          }
        });
    }
  },
  created() {
    this.curr_patient_id = this.$route.params.patient_id;
    this.getPatientDetailsbyPid(this.curr_patient_id);
    this.getOnlineDoctor();

    // $("#patientslink").addClass("router-link-active");
    // $("#messagelink").removeClass("router-link-active");
    // //$("#patientslink").removeClass("router-link-active");
    // $("#medicallink").removeClass("router-link-active");
    // $("#prescriptionlink").removeClass("router-link-active");
    // $("#departmentlink").removeClass("router-link-active");
    // $("#tasklink").removeClass("router-link-active");
    // $("#accountlink").removeClass("router-link-active");
  }
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
.margintop10 {
  margin-top: 10px;
}
.paddingbottom0 {
  padding-bottom: 0px;
}
.paddingbottom10 {
  padding-bottom: 10px;
}
.patient-box {
  background: #fff;
  padding: 25px 5%;
  margin-bottom: 30px;
  width: 100%;
  padding-bottom: 50px;
}
.info-line {
  border: 1px solid black;
  border-bottom: none;
  width: 66.6%;
  /* clear: both; */
  height: 60px;
  line-height: 60px;
}
.title-info {
  border-right: 1px solid black;
  font-size: 20px;
  float: left;
  height: 60px;
  width: 20%;
  text-align: right;
  padding-right: 10px;
  margin-right: -1px;
  margin-bottom: -1px;
}
.content-info {
  font-size: 20px;
  float: left;
  height: 60px;
  width: 80%;
  padding-left: 10px;
  margin-right: -1px;
  margin-bottom: -1px;
}
.patient_button_box {
  margin-top: 20px;
  height: 100px;
  text-align: right;
  width: 66.6%;
}
.patient_button {
  margin-top: 20px;
  width: 150px;
  height: 50px;
  float: right;
  text-align: center;
}
.patient_button2 {
  margin-top: 20px;
  width: 100px;
  height: 50px;
  float: right;
  text-align: center;
}
.changeinfotext {
  height: 210px;
  width: 100%;
  /* margin: auto; */
  margin-top: 4px;
  margin-left: -3px;
  line-height: 30px;
}
.patient-cate{
  width: 75%;
  height: 60px;
  align-content: center;
}
.patient-cate-select{
line-height: 20px;
    height: 40px;
    border: 1px solid black;
    width: 40%;
    margin-left: 8px;
    margin-top: 9px;
    font-size: 16px;
    padding-left: 5px;
    color: black;
}
.patient-cate-select option{
  height: 20px;
}
</style>
