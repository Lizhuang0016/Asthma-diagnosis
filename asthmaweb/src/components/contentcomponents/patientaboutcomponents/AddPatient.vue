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
            <h4 class="page-title">添加新病人</h4>
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
                <h2 class="add-patient-title">病人信息录入</h2>
              <div class="comment-center p-t-10">
                <div class="release-body">
                  <div class="mail-contnet">
                    <div class="releasetitle">
                        <p class="release-p">患者姓名:</p>
                        <input v-model="patient_name" class="titleinput" type="text"  @blur="nameCheck" placeholder="姓名"/>
                        <p class="warntip1">{{namewarn}}</p>
                    </div>
                    <div class="releasetitle">
                        <p class="release-p">患者性别:</p>
                        <div style="padding-top: 10px;">
                        <input class="sexradio" name="patient_sex" value="男" v-model="patient_sex" type="radio"/><p class="sexlabel">男</p>
                        <input class="sexradio" name="patient_sex" value="女" v-model="patient_sex" type="radio"/><p class="sexlabel">女</p>
                        </div>
                    </div>
                    <div class="releasetitle">
                        <p class="release-p">患者年龄:</p>
                        <input v-model="patient_age" class="titleinput" type="text"  @blur="ageCheck" placeholder="年龄"/>
                        <p class="warntip1">{{agewarn}}</p>
                    </div>
                    <div class="releasetitle">
                        <p class="release-p">患者电话:</p>
                        <input v-model="patient_phone" class="titleinput" type="text"  @blur="phoneCheck" placeholder="电话"/>
                        <p class="warntip1">{{phonewarn}}</p>
                    </div>
                    <div class="releasetitle">
                        <p class="release-p">患病类别:</p>
                        <div class="patient-cate">
                        <select class="patient-cate-select" v-model="patient_cate" @chage="catechange">
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
                    <div class="addinfo">
                        <p class="release-p">患者诊断信息:</p>
                        <div class="disinfoinput">
                        <textarea v-model="patient_disinfo" type="text"  @blur="infoCheck" placeholder="标题"></textarea>
                        </div>
                        <p class="warntip1">{{infowarn}}</p>
                    </div>
                    <div class="releasebutton">
                        <a class="btn btn-info pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light"
                        @click="releaseMessageCancel">取消</a>
                        <a class="btn btn-info pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light"
                        @click="releaseMessage">添加</a>
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
      onlinedoctor:[],
      patient:[],
      
      patient_name:"",
      patient_age:'',
      patient_sex:"男",
      patient_phone:"",
      patient_cate:"过敏性哮喘",
      patient_disinfo:"",

      namewarn:"",
      agewarn:"",
      phonewarn:"",
      infowarn:"",
    };
  },
  methods: {
    getOnlineDoctor(){
      var onedoctor=JSON.parse(localStorage.getItem('onlinedoctor'));
      this.onlinedoctor=onedoctor;
    },
    nameCheck(){
      if(!this.patient_name){
        this.namewarn="姓名不能为空";
        return ;
      }
      this.namewarn='';
    },
    ageCheck(){
      if(!this.patient_age){
        this.agewarn="年龄不能为空";
        return ;
      }
      this.agewarn='';
    },
    phoneCheck(){
      if(!this.patient_phone){
        this.phonewarn="电话不能为空";
        return ;
      }
      this.phonewarn='';
    },
    infoCheck(){
      if(!this.patient_disinfo){
        this.infowarn="诊断信息不能为空";
        return ;
      }
      this.infowarn='';
    },
    catechange(){
      console.log(this.patient_cate);
    },
    releaseMessage(){
      if(!this.patient_name){
        this.namewarn="姓名不能为空";
      }
      if(!this.patient_age){
        this.agewarn="年龄不能为空";
      }
      if(!this.patient_phone){
        this.phonewarn="电话不能为空";
      }
      if(!this.patient_disinfo){
        this.infowarn="诊断信息不能为空";
      }
        if(this.patient_name&&this.patient_age&&this.patient_phone&&this.patient_disinfo){
            this.patient={
                patient_name:this.patient_name,
                patient_sex:this.patient_sex,
                patient_age:this.patient_age,
                patient_phone:this.patient_phone,
                patient_disease_cate:this.patient_cate,
                patient_disease_info:this.patient_disinfo,
                patient_clinic_time:this.getFormatDate(),
                patient_doctor_id:this.onlinedoctor.doctor_id,
                patient_doctor_name:this.onlinedoctor.doctor_name
            }
            console.log("this.patient",this.patient);
            this.$http.post('insert_patient',this.patient,{emulateJSON:true}).then(result=>{
             if(result.status===200&&result.body.err_code===0){
               alert("添加成功!")
               this.$router.push('/navigation/patient/index/'+ this.onlinedoctor.doctor_id);
            }
            })

        }

    },
    releaseMessageCancel(){
      this.$router.push({path:'/navigation/patient/index/'+this.onlinedoctor.doctor_id});
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
    // $("#patientslink").addClass("router-link-active");
    // $("#messagelink").removeClass("router-link-active");
    // //$("#patientslink").removeClass("router-link-active");
    // $("#medicallink").removeClass("router-link-active");
    // $("#prescriptionlink").removeClass("router-link-active");
    // $("#departmentlink").removeClass("router-link-active");
    // $("#tasklink").removeClass("router-link-active");
    // $("#accountlink").removeClass("router-link-active");
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
.add-patient-title{
  margin-left: 6%;
  margin-top: 20px;
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
.addinfo{
  width: 100%;
  height: 200px;
  clear: both;
  margin-bottom: 20px;
}
.release-p{
  float: left;
  font-size: 20px;
  width: 15%;
  text-align: right;
  line-height: 45px;
  padding-right: 20px;
}
.titleinput{
  float: left;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  width: 75%;
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
.sexradio{
width: 5%;
float: left;
line-height: 18px;
margin-top: 7px;
}
.sexlabel{
width: 5%;
float: left;
font-size: 16px;
}
.disinfoinput{
  float: left;
  width: 75%;
  height: 200px;
}
.disinfoinput textarea{
  width: 100%;
  height: 200px;
  border: 2px solid #d9d9d9;
  line-height: 30px;
  font-size: 14px;
  padding-left: 10px;
}
.patient-cate{
  width: 75%;
  height: 60px;
  align-content: center;
}
.patient-cate-select{
  line-height: 20px;
  height: 40px;
  border: 2px solid #d9d9d9;
  width: 30%;
}
.patient-cate-select option{
  height: 20px;
}
</style>
