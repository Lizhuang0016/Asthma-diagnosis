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
            <h4 class="page-title">病人信息录入</h4>
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
              <h2 class="add-patient-title">添加用户 {{this.patient.patient_name}} 血常规信息</h2>
              <h3 class="add-patient-title">添加方式一</h3>
              <div class="comment-center p-t-10">
                <div class="add-body">
                  <div class="mail-contnet">
                    <div class="inputline">
                      <div class="leftinput">
                        <p class="inputlabel">嗜碱细胞比例</p>
                        <input v-model="BASO2" class="rbdatainput" type="text" placeholder="" />
                      </div>
                      <div class="rightinput">
                        <p class="inputlabel">嗜碱细胞计数</p>
                        <input v-model="BASO1" class="rbdatainput" type="text" placeholder="" />
                      </div>
                    </div>
                    <div class="inputline">
                      <div class="leftinput">
                        <p class="inputlabel">嗜酸细胞比例</p>
                        <input v-model="EO2" class="rbdatainput" type="text" placeholder="" />
                      </div>
                      <div class="rightinput">
                        <p class="inputlabel">嗜酸细胞计数</p>
                        <input v-model="EO1" class="rbdatainput" type="text" placeholder="" />
                      </div>
                    </div>
                    <div class="inputline">
                      <div class="leftinput">
                        <p class="inputlabel">红细胞压积</p>
                        <input v-model="HCT" class="rbdatainput" type="text" placeholder="" />
                      </div>
                      <div class="rightinput">
                        <p class="inputlabel">血红蛋白</p>
                        <input v-model="HGB" class="rbdatainput" type="text" placeholder="" />
                      </div>
                    </div>
                    <div class="inputline">
                      <div class="leftinput">
                        <p class="inputlabel">淋巴细胞比例</p>
                        <input v-model="LYMPH2" class="rbdatainput" type="text" placeholder="" />
                      </div>
                      <div class="rightinput">
                        <p class="inputlabel">淋巴细胞计数</p>
                        <input v-model="LYMPH1" class="rbdatainput" type="text" placeholder="" />
                      </div>
                    </div>
                    <div class="inputline">
                      <div class="leftinput">
                        <p class="inputlabel">平均血红蛋白量</p>
                        <input v-model="MCH" class="rbdatainput" type="text" placeholder="" />
                      </div>
                      <div class="rightinput">
                        <p class="inputlabel">平均血红蛋白浓度</p>
                        <input v-model="MCHC" class="rbdatainput" type="text" placeholder="" />
                      </div>
                    </div>
                    <div class="inputline">
                      <div class="leftinput">
                        <p class="inputlabel">红细胞平均体积</p>
                        <input v-model="MCV" class="rbdatainput" type="text" placeholder="" />
                      </div>
                      <div class="rightinput">
                        <p class="inputlabel">单核细胞比例</p>
                        <input v-model="MONO2" class="rbdatainput" type="text" placeholder="" />
                      </div>
                    </div>
                    <div class="inputline">
                      <div class="leftinput">
                        <p class="inputlabel">单核细胞计数</p>
                        <input v-model="MONO1" class="rbdatainput" type="text" placeholder="" />
                      </div>
                      <div class="rightinput">
                        <p class="inputlabel">平均血小板体积</p>
                        <input v-model="MPV" class="rbdatainput" type="text" placeholder="" />
                      </div>
                    </div>
                    <div class="inputline">
                      <div class="leftinput">
                        <p class="inputlabel">中性粒细胞比例</p>
                        <input v-model="NEUT2" class="rbdatainput" type="text" placeholder="" />
                      </div>
                      <div class="rightinput">
                        <p class="inputlabel">中性粒细胞计数</p>
                        <input v-model="NEUT1" class="rbdatainput" type="text" placeholder="" />
                      </div>
                    </div>
                    <div class="inputline">
                      <div class="leftinput">
                        <p class="inputlabel">血小板压积</p>
                        <input v-model="PCT" class="rbdatainput" type="text" placeholder="" />
                      </div>
                      <div class="rightinput">
                        <p class="inputlabel">血小板分布宽度</p>
                        <input v-model="PDW" class="rbdatainput" type="text" placeholder="" />
                      </div>
                    </div>
                    <div class="inputline">
                      <div class="leftinput">
                        <p class="inputlabel">血小板计数</p>
                        <input v-model="PLT" class="rbdatainput" type="text" placeholder="" />
                      </div>
                      <div class="rightinput">
                        <p class="inputlabel">红细胞计数</p>
                        <input v-model="RBC" class="rbdatainput" type="text" placeholder="" />
                      </div>
                    </div>
                    <div class="inputline">
                      <div class="leftinput">
                        <p class="inputlabel">红细胞分布宽度</p>
                        <input v-model="RDW" class="rbdatainput" type="text" placeholder="" />
                      </div>
                      <div class="rightinput">
                        <p class="inputlabel">白细胞计数</p>
                        <input v-model="WBC" class="rbdatainput" type="text" placeholder="" />
                      </div>
                    </div>
                    <div style="float:right;margin-right:20%;margin-top:30px;margin-bottom:60px;">
                      <button class="btn btn-danger" style="width: 80px;margin-right: 30px;" @click="addrbdata">确认</button>
                      <button class="btn btn-info" style="width: 80px" @click="goback">取消</button>
                      <p style="margin-top:20px;font-size:12px;color:red;margin-left: 20%;">{{addwarn1}}</p>
                    </div>
                    
                  </div>
                </div>
              </div>
              <h3 class="add-patient-title">添加方式二</h3>
              <div class="add-content2">
                <p class="" style="float:left;">数据集合(按顺序并以空格分割)：</p>
              <input v-model="allrbdata"  class="rbdatainput2" type="text" placeholder="" />
              <div style="float:right;margin-right:15.8%;margin-top:45px;margin-bottom:60px;">
                <button class="btn btn-danger" style="width: 80px;margin-right: 30px;" @click="addrbdata1">确认</button>
                <button class="btn btn-info" style="width: 80px" @click="goback">取消</button>
                <p style="margin-top:20px;font-size:12px;color:red;margin-left: 20%;">{{addwarn2}}</p>
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
      onlinedoctor: [],
      curr_patient_id:"",
      patient:[],
      rbdata:[],

      BASO2: "",
      BASO1: "",
      EO2: "",
      EO1: "",
      HCT: "",
      HGB: "",
      LYMPH2: "",
      LYMPH1: "",
      MCH: "",
      MCHC: "",
      MCV: "",
      MONO2: "",
      MONO1: "",
      MPV: "",
      NEUT2: "",
      NEUT1: "",
      PCT: "",
      PDW: "",
      PLT: "",
      RBC: "",
      RDW: "",
      WBC: "",

      allrbdata:"",

      addwarn1:"",
      addwarn2:""
    };
  },
  methods: {
    getPatientDetailsbyPid(patient_id){
      this.$http.post('asthma_diagnosis_system/get_patient_by_pid.php',{"patient_id":patient_id},{emulateJSON:true}).then(result=>{
        if(result.status===200){
          this.patient=result.body[0];
          console.log(this.patient);
        }
      })
    },
    getOnlineDoctor() {
      var onedoctor = JSON.parse(localStorage.getItem("onlinedoctor"));
      this.onlinedoctor = onedoctor;
    },
    addrbdata() {
        this.rbdata={
            rb_patient_id:this.curr_patient_id,
            BASO2:this.BASO2,
            BASO1:this.BASO1,
            EO2:this.EO2,
            EO1:this.EO1,
            HCT:this.HCT,
            HGB:this.HGB,
            LYMPH2:this.LYMPH2,
            LYMPH1:this.LYMPH1,
            MCH:this.MCH,
            MCHC:this.MCHC,
            MCV:this.MCV,
            MONO2:this.MONO2,
            MONO1:this.MONO1,
            MPV:this.MPV,
            NEUT2:this.NEUT2,
            NEUT1:this.NEUT1,
            PCT:this.PCT,
            PDW:this.PDW,
            PLT:this.PLT,
            RBC:this.RBC,
            RDW:this.RDW,
            WBC:this.WBC,
        }
        if(this.BASO2!=""&&this.BASO1!=""&&this.EO2!=""&&this.EO1!=""&&this.HCT!=""&&this.HGB!=""&&this.LYMPH2!=""&&this.LYMPH1!=""&&
        this.MCH!=""&&this.MCHC!=""&&this.MCV!=""&&this.MONO2!=""&&this.MONO1!=""&&this.MPV!=""&&this.NEUT2!=""&&this.NEUT1!=""&&
        this.PCT!=""&&this.PDW!=""&&this.PLT!=""&&this.RBC!=""&&this.RDW!=""&&this.WBC!=""){
            this.$http.post('asthma_diagnosis_system/insert_rbdata.php',this.rbdata,{emulateJSON:true}).then(result=>{
            if(result.status==200){
                alert("添加成功！")
                this.$router.push('/navigation/patient/diagnosis/'+ this.onlinedoctor.doctor_id+'/'+this.curr_patient_id);
            }
        })
        }else{
            this.addwarn1="请正确填写各项数据！"
        }
    },
    addrbdata1(){
      if(this.allrbdata){
        var alldata=this.allrbdata;
        var datalist=alldata.trim().split(/\s+/);
        console.log(datalist[0]);
        this.rbdata={
            rb_patient_id:this.curr_patient_id,
            BASO2:datalist[0],
            BASO1:datalist[1],
            EO2:datalist[2],
            EO1:datalist[3],
            HCT:datalist[4],
            HGB:datalist[5],
            LYMPH2:datalist[6],
            LYMPH1:datalist[7],
            MCH:datalist[8],
            MCHC:datalist[9],
            MCV:datalist[10],
            MONO2:datalist[11],
            MONO1:datalist[12],
            MPV:datalist[13],
            NEUT2:datalist[14],
            NEUT1:datalist[15],
            PCT:datalist[16],
            PDW:datalist[17],
            PLT:datalist[18],
            RBC:datalist[19],
            RDW:datalist[20],
            WBC:datalist[21],
        }
        this.$http.post('asthma_diagnosis_system/insert_rbdata.php',this.rbdata,{emulateJSON:true}).then(result=>{
          if(result.status==200){
            alert("添加成功！")
            this.$router.push('/navigation/patient/diagnosis/'+ this.onlinedoctor.doctor_id+'/'+this.curr_patient_id);
          }else{
            this.addwarn2="请正确填写各项数据！"
          }
        })
      }else{
        this.addwarn2="请正确填写各项数据！"
      }
    },
    goback() {
      this.$router.go(-1); //返回上一层
    }
  },
  beforeCreate() {},
  created() {
    this.curr_patient_id = this.$route.params.patient_id;
    console.log("当前病人ID", this.curr_patient_id);
    this.getOnlineDoctor();
    this.getPatientDetailsbyPid(this.curr_patient_id)
    $("#patientslink").addClass("router-link-active");
    $("#messagelink").removeClass("router-link-active");
    //$("#patientslink").removeClass("router-link-active");
    $("#medicallink").removeClass("router-link-active");
    $("#prescriptionlink").removeClass("router-link-active");
    $("#departmentlink").removeClass("router-link-active");
    $("#tasklink").removeClass("router-link-active");
    $("#accountlink").removeClass("router-link-active");
  },
  updated() {}
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
.fontsize20 {
  font-size: 20px;
}
.add-patient-title {
  margin-left: 6%;
  margin-top: 20px;
}
.add-body {
  display: table;
  width: 76.6%;
  padding: 20px 0px;
  margin-left: 5%;
}
.releasetitle {
  width: 100%;
  height: 60px;
  clear: both;
}
.addinfo {
  width: 100%;
  height: 200px;
  clear: both;
  margin-bottom: 20px;
}
.add-content2{
    height: 200px;
    width: 66.7%;
    margin-left: 11%;
    margin-top: 30px;
}
.inputline {
  width: 100%;
  height: 40px;
}
.inputline input:focus{
    border-bottom:#87C6F9 1px solid;
    box-shadow: 0px 5px 5px -5px rgba(103, 166, 217, 1);
}
.leftinput {
  float: left;
  width: 40%;
  margin-left: 10%;
}
.rightinput {
  float: left;
  width: 40%;
}
.inputlabel {
  float: left;
  width: 33%;
}
.rbdatainput {
  width: 45%;
  border: 0px;
  border-bottom: 1px solid black;
}
.rbdatainput2{
  width: 66%;
  border: 0px;
  border-bottom: 1px solid black;
}
</style>
