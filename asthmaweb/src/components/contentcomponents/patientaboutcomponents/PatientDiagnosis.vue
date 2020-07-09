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
          <div v-if="addbuttonflag" class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <a @click="addrbdata"
              class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">添加数据</a>
          </div>
          <div v-if="backbuttonflag" class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <a @click="goback"
              class="btn btn-info pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">返回</a>
          </div>
          <!-- /.col-lg-12 -->
        </div>
        <!-- /row -->
        <div class="row">
          <div class="col-sm-12">
            <div class="rbdata-box">
              <h3 class="box-title">病人 {{patient_info.patient_name}} 血常规数据</h3>
              <div>
                <div class="table-responsive blackborder bloodtable" style="float:left;">
                  <thead>
                    <tr>
                      <th>代号</th>
                      <th>项目</th>
                      <th>结果</th>
                      <th>参考值</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>WBC</td>
                      <td class="prowidth">白细胞数</td>
                      <td>{{rbdata.WBC}}</td>
                      <td class="refvalwidth">4-10 10^9/L</td>
                    </tr>
                    <tr>
                      <td>NE%</td>
                      <td class="prowidth">中性细胞比率</td>
                      <td>{{rbdata.NEUT2}}</td>
                      <td class="refvalwidth">50-75%</td>
                    </tr>
                    <tr>
                      <td>LY%</td>
                      <td class="prowidth">淋巴细胞比率</td>
                      <td>{{rbdata.LYMPH2}}</td>
                      <td class="refvalwidth">20-40%</td>
                    </tr>
                    <tr>
                      <td>MO%</td>
                      <td class="prowidth">单核细胞比率</td>
                      <td>{{rbdata.MONO2}}</td>
                      <td class="refvalwidth">1-9%</td>
                    </tr>
                    <tr>
                      <td>EO%</td>
                      <td class="prowidth">嗜酸性粒细胞比率</td>
                      <td>{{rbdata.EO2}}</td>
                      <td class="refvalwidth">0-5%</td>
                    </tr>
                    <tr>
                      <td>BA%</td>
                      <td class="prowidth">嗜碱性粒细胞比率</td>
                      <td>{{rbdata.BASO2}}</td>
                      <td class="refvalwidth">0-2%</td>
                    </tr>
                    <tr>
                      <td>NE#</td>
                      <td class="prowidth">中性粒细胞计数</td>
                      <td>{{rbdata.NEUT1}}</td>
                      <td class="refvalwidth">1-7.5 10^9/L</td>
                    </tr>
                    <tr>
                      <td>LY#</td>
                      <td class="prowidth">淋巴细胞计数</td>
                      <td>{{rbdata.LYMPH1}}</td>
                      <td class="refvalwidth">0.8-4.4 10^9/L</td>
                    </tr>
                    <tr>
                      <td>MO#</td>
                      <td class="prowidth">单核细胞计数</td>
                      <td>{{rbdata.MONO1}}</td>
                      <td class="refvalwidth">0-0.8 10^9/L</td>
                    </tr>
                    <tr>
                      <td>EO#</td>
                      <td class="prowidth">嗜酸性粒细胞计数</td>
                      <td>{{rbdata.EO1}}</td>
                      <td class="refvalwidth">0-0.5 10^9/L</td>
                    </tr>
                    <tr>
                      <td>BA#</td>
                      <td class="prowidth">嗜碱性粒细胞计数</td>
                      <td>{{rbdata.BASO1}}</td>
                      <td class="refvalwidth">0-0.21 10^9/L</td>
                    </tr>
                  </tbody>
                </div>
                <div class="table-responsive blackborder1 bloodtable">
                  <thead>
                    <tr>
                      <th>代号</th>
                      <th>项目</th>
                      <th>结果</th>
                      <th>参考值</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>RBC</td>
                      <td class="prowidth">红细胞计数</td>
                      <td>{{rbdata.RBC}}</td>
                      <td class="refvalwidth">3.8-5.5 10^12/L</td>
                    </tr>
                    <tr>
                      <td>HGB</td>
                      <td class="prowidth">血红蛋白</td>
                      <td>{{rbdata.HGB}}</td>
                      <td class="refvalwidth">110-170g</td>
                    </tr>
                    <tr>
                      <td>HCT</td>
                      <td class="prowidth">红细胞压积</td>
                      <td>{{rbdata.HCT}}</td>
                      <td class="refvalwidth">37-56%</td>
                    </tr>
                    <tr>
                      <td>MCV</td>
                      <td class="prowidth">红细胞平均体积</td>
                      <td>{{rbdata.MCV}}</td>
                      <td class="refvalwidth">4-10 10^9/L</td>
                    </tr>
                    <tr>
                      <td>MCH</td>
                      <td class="prowidth">平均血红蛋白量</td>
                      <td>{{rbdata.MCH}}</td>
                      <td class="refvalwidth">27-32pg</td>
                    </tr>
                    <tr>
                      <td>MCHC</td>
                      <td class="prowidth">平均血红蛋白浓度</td>
                      <td>{{rbdata.MCHC}}</td>
                      <td class="refvalwidth">310-370g/L</td>
                    </tr>
                    <tr>
                      <td>RDW</td>
                      <td class="prowidth">红细胞分布宽度</td>
                      <td>{{rbdata.RDW}}</td>
                      <td class="refvalwidth">11.5-16.5%</td>
                    </tr>
                    <tr>
                      <td>PLT</td>
                      <td class="prowidth">血小板计数</td>
                      <td>{{rbdata.PLT}}</td>
                      <td class="refvalwidth">100-300 10^9/L</td>
                    </tr>
                    <tr>
                      <td>PCT</td>
                      <td class="prowidth">血小板压积</td>
                      <td>{{rbdata.PCT}}</td>
                      <td class="refvalwidth">0.1-0.3</td>
                    </tr>
                    <tr>
                      <td>MPV</td>
                      <td class="prowidth">平均血小板体积</td>
                      <td>{{rbdata.MPV}}</td>
                      <td class="refvalwidth">6-10 fL</td>
                    </tr>
                    <tr>
                      <td>PDW</td>
                      <td class="prowidth">血小板分布宽度</td>
                      <td>{{rbdata.PDW}}</td>
                      <td class="refvalwidth">13-18 fL</td>
                    </tr>
                  </tbody>
                </div>
              </div>
              <div class="diagnosistable" v-if="diabuttonflag">
                <!-- Split button -->
                <div class="btn-group">
                  <button type="button" class="btn btn-default" style="width:100px;">{{diseasecate}}</button>
                  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false" style="height:34px;">
                    <span class="caret"></span>
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <ul class="dropdown-menu" style="min-width:125px;">
                    <li @click="choosefirst"><a>哮喘</a></li>
                    <li @click="choosesecond"><a>肺癌</a></li>
                    <li @click="choosethird"><a>肝炎</a></li>
                  </ul>
                </div>
                <button class="btn btn-danger" @click="diagnosis">诊断</button>
                <p class="margintop10">该名病人的诊断结果为：{{diaresult}}</p>
              </div>
              <p v-if="diatapflag" style="margin-top:30px;float:right;margin-right:60px;color:red;">病人血常规数据缺失，请添加!</p>
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
  name: "patientrbdata",
  data() {
    return {
      onlinedoctor:[],
      curr_patient_id:"",
      patient_info:[],
      rbdata:[],
      showmessage:"",
      diseasecate:"哮喘",
      diadata:"",
      diaresult:"",
      diatapflag:false,
      addbuttonflag:false,
      backbuttonflag:true,
      diabuttonflag:true,
    };
  },
  methods: {
    getOnlineDoctor(){
      var onedoctor=JSON.parse(localStorage.getItem('onlinedoctor'));
      this.onlinedoctor=onedoctor;
    },
    goback(){
      this.$router.push('/navigation/patient/details/'+ this.onlinedoctor.doctor_id+'/'+this.curr_patient_id);
    },
    //拿到当前病人的血常规信息
    getRbdataByPid(){
      this.$http.post(
        "http://localhost/asthma_diagnosis_system/get_rbdata_by_pid.php",
        { "patient_id": this.curr_patient_id },
        { emulateJSON: true })
        .then(result=>{
          if (result.status === 200) {
            if(result.body.length==0){
              console.log("未或得数据")
              this.addbuttonflag=true;
              this.backbuttonflag=false;
              this.diabuttonflag=false;
              this.diatapflag=true;
            }
            else{
              this.rbdata = result.body[0];
              console.log("血常规数据:",this.rbdata);
            }
            
          }
      })
    },
    //拿到当前病人的所有信息
    getPatientInfoByPid(){
      this.$http.post(
        "http://localhost/asthma_diagnosis_system/get_patient_by_pid.php",
        { "patient_id": this.curr_patient_id },
        { emulateJSON: true })
        .then(result=>{
          if (result.status === 200) {
            this.patient_info = result.body[0];
            console.log("病人数据:",this.patient_info);
          }
      })
    },
    //调用python接口进行疾病诊断功能
    diagnosis(){
      //拼接血常规数据作为url中的参数
      if(this.patient_info.patient_sex=="男"){
        this.diadata=this.diadata+"0,1,";
      }else{
        this.diadata=this.diadata+"1,0,"
      }
      this.diadata=this.diadata+this.patient_info.patient_age+",";

      this.diadata=this.diadata+this.rbdata.BASO2+","+this.rbdata.BASO1+","+this.rbdata.EO2+","+this.rbdata.EO1+","+this.rbdata.HCT+","
      +this.rbdata.HGB+","+this.rbdata.LYMPH2+","+this.rbdata.LYMPH1+","+this.rbdata.MCH+","+this.rbdata.MCHC+","+this.rbdata.MCV+","
      +this.rbdata.MONO2+","+this.rbdata.MONO1+","+this.rbdata.MPV+","+this.rbdata.NEUT2+","+this.rbdata.NEUT1+","+this.rbdata.PCT+","
      +this.rbdata.PDW+","+this.rbdata.PLT+","+this.rbdata.RBC+","+this.rbdata.RDW+","+this.rbdata.WBC
      //调用python接口
      this.$http.get("http://localhost:5000/diagnosis?data="+this.diadata).then(result=>{
        if(result.status===200){
          this.diaresult=result.body;
          console.log(this.diaresult);
        }
      })
      this.diadata="";
    },
    addrbdata(){
      this.$router.push('/navigation/patient/addrbdata/'+ this.onlinedoctor.doctor_id+'/'+this.curr_patient_id);
    },
    choosefirst(){

    },
    choosesecond(){

    },
    choosethird(){

    },
  },
  created() {
    this.curr_patient_id=this.$route.params.patient_id;
    console.log("当前病人ID",this.curr_patient_id);
    this.getOnlineDoctor();
    this.getRbdataByPid();
    this.getPatientInfoByPid();
    $("#patientslink").addClass("router-link-active");
    $("#messagelink").removeClass("router-link-active");
    //$("#patientslink").removeClass("router-link-active");
    $("#medicallink").removeClass("router-link-active");
    $("#prescriptionlink").removeClass("router-link-active");
    $("#departmentlink").removeClass("router-link-active");
    $("#tasklink").removeClass("router-link-active");
    $("#accountlink").removeClass("router-link-active");
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
.margintop10 {
  margin-top: 10px;
}
.paddingbottom0 {
  padding-bottom: 0px;
}
.paddingbottom10 {
  padding-bottom: 10px;
}
.rbdata-box{
  background: #fff;
  padding: 60px 15%;
  margin-bottom: 30px;
  height: 800px;
}
.table-responsive th {
  width: 100px;
  border-bottom: 1px solid #0c0b0b;
  padding: 3px;
}
.table-responsive td {
  width: 100px;
  padding: 3px;
}
.table-responsive .prowidth {
  width: 180px;
}
.table-responsive .refvalwidth {
  width: 150px;
}
.bloodtable {
  width: 480px;
  padding: 10px;
}
.diagnosistable {
  width: 960px;
  margin-top: 30px;
  margin-left: 780px;
}
.h2000 {
  height: 2000px;
}
.blackborder {
  border: 1px solid #0c0b0b;
}
.blackborder1 {
  border-top: 1px solid #0c0b0b;
  border-right: 1px solid #0c0b0b;
  border-bottom: 1px solid #0c0b0b;
}
</style>
