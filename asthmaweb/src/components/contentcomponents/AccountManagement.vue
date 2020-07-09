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
            <h4 class="page-title">账户管理</h4>
          </div>
          <!-- <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <a href="#" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">修改个人信息</a>
          </div> -->
          <!-- /.col-lg-12 -->
        </div>

        <!-- /row -->
        <div class="row">
          <div class="col-sm-12">
            <div class="account-box">
              <h3 class="box-title">我的信息</h3>

              <div class="account">
                <div class="account-line">
                  <div class="account-label">账户:</div>
                  <div class="account-info">{{onlinedoctor.doctor_account}}</div>
                </div>
                <div class="account-line">
                  <div class="account-label">姓名:</div>
                  <div class="account-info" v-if="changeinfoflag">{{onlinedoctor.doctor_name}}</div>
                  <div class="account-input" v-if="!changeinfoflag">
                    <input type="text" v-model="doctor_name"/>
                  </div>
                </div>
                <div class="account-line">
                  <div class="account-label">年龄:</div>
                  <div class="account-info" v-if="changeinfoflag">{{onlinedoctor.doctor_age}}</div>
                  <div class="account-input" v-if="!changeinfoflag">
                    <input type="text" v-model="doctor_age"/>
                  </div>
                </div>
                <div class="account-line">
                  <div class="account-label">性别:</div>
                  <div class="account-info" v-if="changeinfoflag">{{onlinedoctor.doctor_sex}}</div>
                  <div class="" style="height:26px;" v-if="!changeinfoflag">
                    <input class="sexradio" style="margin-top: 8px;" name="sex" value="男" v-model="doctor_sex" type="radio"/><p class="sexlabel">男</p>
                    <input class="sexradio" style="margin-top: 8px;" name="sex" value="女" v-model="doctor_sex" type="radio"/><p class="sexlabel">女</p>
                  </div>
                </div>
                <div class="account-line">
                  <div class="account-label">联系电话:</div>
                  <div class="account-info" v-if="changeinfoflag">{{onlinedoctor.doctor_phone}}</div>
                  <div class="account-input" v-if="!changeinfoflag">
                    <input type="text" v-model="doctor_phone"/>
                  </div>
                </div>
                <div class="account-line">
                  <div class="account-label">邮箱:</div>
                  <div class="account-info" v-if="changeinfoflag">{{onlinedoctor.doctor_email}}</div>
                  <div class="account-input" v-if="!changeinfoflag">
                    <input type="text" v-model="doctor_email"/>
                  </div>
                </div>
              </div>
              <div class="accountbutton">
                <a class="btn btn-info pull-right" @click="changepassword">更改密码</a>
                <div v-if="changeinfoflag">
                  <a class="btn btn-info pull-right" style="margin-right: 5%;" @click="changeinfo">修改个人信息</a>
                </div>
                <div v-if="!changeinfoflag">
                  <a class="btn btn-info pull-right" style="margin-right: 5%;" @click="cancelchangeinfo">取消</a>
                  <a class="btn btn-danger pull-right" style="margin-right: 5%;" @click="confirmchangeinfo">确认</a>
                </div>
                
              </div>

              <div class="password" v-if="changepasswordflag">
                <div class="password-line">
                  <div class="password-label">请输入旧密码：</div>
                  <div class="password-info">
                    <input type="password" v-model="oldpassword"/>
                  </div>
                  <div class="password-tip">
                    <p>{{warntip1}}</p>
                  </div>
                </div>
                <div class="password-line">
                  <div class="password-label">请输入新密码：</div>
                  <div class="password-info">
                    <input type="password" v-model="newpassword"/>
                  </div>
                  <div class="password-tip">
                    <p>{{warntip2}}</p>
                  </div>
                </div>
                <div class="password-line">
                  <div class="password-label">请确认新密码：</div>
                  <div class="password-info">
                    <input type="password" v-model="renewpassword"/>
                  </div>
                  <div class="password-tip">
                    <p>{{warntip3}}</p>
                  </div>
                </div>
                <div class="password-button">
                  <p style="float: left;margin-left: 40%;color: #41b3f9;">{{changescussestip}}</p>
                  <a class="btn btn-info pull-right" style="" @click="cancelchangepassword">取消</a>
                  <a class="btn btn-danger pull-right" style="margin-right: 5%;" @click="confirmchangepassword">确认</a>
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
  name: "customers",
  data() {
    return {
      changeinfoflag:true,
      changepasswordflag:false,
      onlinedoctor:[],
      doctor_name:"",
      doctor_sex:"男",
      doctor_age:"",
      doctor_phone:"",
      doctor_email:"",
      oldpassword:"",
      newpassword:"",
      renewpassword:"",
      warntip1:"",
      warntip2:"",
      warntip3:"",
      changescussestip:"",
    };
  },
  methods: {
    getOnlineDoctor() {
      var onedoctor = JSON.parse(localStorage.getItem("onlinedoctor"));
      this.onlinedoctor = onedoctor;
      this.doctor_name=this.onlinedoctor.doctor_name;
      this.doctor_sex=this.onlinedoctor.doctor_sex;
      this.doctor_age=this.onlinedoctor.doctor_age;
      this.doctor_phone=this.onlinedoctor.doctor_phone;
      this.doctor_email=this.onlinedoctor.doctor_email;
    },
    regetOnlineDoctor(){
      var onedoctor = JSON.parse(localStorage.getItem("onlinedoctor"));
      this.onlinedoctor = onedoctor;
    },
    changeinfo(){
      this.changeinfoflag=!this.changeinfoflag;
    },
    confirmchangeinfo(){
      if(this.doctor_name&&this.doctor_sex&&this.doctor_age&&this.doctor_phone&&this.doctor_email){
        this.$http.post('asthma_diagnosis_system/update_doctor_info_by_did.php',
        {doctor_id:this.onlinedoctor.doctor_id,
        doctor_name:this.doctor_name,
        doctor_sex:this.doctor_sex,
        doctor_age:this.doctor_age,
        doctor_phone:this.doctor_phone,
        doctor_email:this.doctor_email},
        {emulateJSON:true}
        ).then(result=>{
          if(result.status==200){
            this.$http.post('asthma_diagnosis_system/get_doctor_by_did.php',{doctor_id:this.onlinedoctor.doctor_id},{emulateJSON:true}).then(result=>{
              if(result.status==200){
                this.onlinedoctor=result.body[0];
                //console.log(result.body[0])
                localStorage.setItem('onlinedoctor',JSON.stringify(this.onlinedoctor))
                this.regetOnlineDoctor();
                console.log("医生信息更新成功")
                this.changeinfoflag=!this.changeinfoflag;
              }
            })
          }
        })
      }
    },
    cancelchangeinfo(){
      this.changeinfoflag=!this.changeinfoflag;
    },
    changepassword(){
      this.changepasswordflag=!this.changepasswordflag;
    },
    cancelchangepassword(){
      this.changepasswordflag=!this.changepasswordflag;
      this.warntip1="";
      this.warntip2="";
      this.warntip3="";
      this.newpassword="";
      this.oldpassword="";
      this.renewpassword="";
    },
    confirmchangepassword(){
      if(this.oldpassword&&this.newpassword&&this.renewpassword){
        if(this.oldpassword!=this.onlinedoctor.doctor_password){
          this.warntip1="旧密码输入错误";
          return ;
        }
        if(this.newpassword==this.oldpassword){
          this.warntip2="新旧密码不能一致";
          return ;
        }
        if(this.renewpassword!=this.newpassword){
          this.warntip3="两次输入的密码不一致";
          return ;
        }
        this.$http.post('asthma_diagnosis_system/update_doctor_password_by_did.php',
        {doctor_id:this.onlinedoctor.doctor_id,doctor_password:this.newpassword},{emulateJSON:true}).then(result=>{
          if(result.status==200){
            console.log("密码修改成功")
            this.changescussestip="密码修改成功!"
            //当在vue中使用定时器在function里直接使用this，发现没有效果，
            //这是由于setTimeout函数调用的代码运行在与所在函数完全分离的执行环境上，这会使得this指向的是window对象
            //所以需要重新定义this的指向，并用新定义的参数进行调用
            let _this=this;
            var t=setTimeout(function(){
              //console.log('执行了1');
              _this.changepasswordflag=!_this.changepasswordflag;
              _this.changescussestip="";
              //console.log('执行了2',_this.changescussestip);
              },1000);
            this.warntip1="";
            this.warntip2="";
            this.warntip3="";
          }
        })
      }else{
        this.warntip1="请输入正确的密码";
        this.warntip2="请输入正确的密码";
        this.warntip3="请输入正确的密码";
      }
    }
  },
  created() {
    this.getOnlineDoctor();

    $("#accountlink").addClass("router-link-active");
    $("#messagelink").removeClass("router-link-active");
    $("#patientslink").removeClass("router-link-active");
    $("#medicallink").removeClass("router-link-active");
    $("#prescriptionlink").removeClass("router-link-active");
    $("#departmentlink").removeClass("router-link-active");
    $("#tasklink").removeClass("router-link-active");
    //$("#accountlink").removeClass("router-link-active");
  },
  updated() {},
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
.fontsize20 {
  font-size: 20px;
}
.account-box {
  background: #fff;
  padding: 25px 5%;
  margin-bottom: 30px;
  padding-bottom: 60px;
  min-height: 860px;
}
.account {
  width: 66.6%;
  border: 1px solid black;
  margin-left: 3%;
  margin-top: 30px;
  padding-top: 20px;
  position: relative;
  height: 430px;
}
.account-line {
  width: 90%;
  margin-left: 5%;
  font-size: 18px;
  clear: both;
  padding-top: 30px;
}
.account-content {
  width: 90%;
  margin-left: 5%;
  font-size: 16px;
  clear: both;
  font-size: 18px;
  padding-top: 10px;
}
.account-label {
  float: left;
  width: 30%;
  margin-left: 3%;
  padding-left: 10%;
  height: 26px;
}
.account-info {
  float: left;
  width: 60%;
  padding-left: 5px;
  height: 26px;
}
.account-input{
  float: left;
  width: 60%;
  padding-left: 5px;
  height: 26px;
}
.account-input input{
  height: 26px;
  border: 0px;
  border-bottom: 1px solid black;
  width: 100%;
}
.account-textera {
  float: left;
  width: 96%;
  margin-left: 2%;
  height: 200px;
  border: 1px solid black;
  font-size: 14px;
  padding: 5px;
  overflow: hidden; /*来将多出来的字体隐藏*/
  word-break: keep-all;
  /* white-space:nowrap;规定段落中的文本不进行换行 */
  text-overflow: ellipsis; /*是用来代替的格式*/
  display: block; /*必须有*/
}
.boxicon {
  font-size: 28px;
  margin-left: 5%;
  position: absolute;
  margin-top: 15px;
}
.accountbutton {
  width: 66.6%;
  height: 60px;
  float: none;
  margin-left: 3%;
  margin-top: 30px;
}
.sexradio{
width: 5%;
float: left;
line-height: 18px;
}
.sexlabel{
width: 10%;
float: left;
    margin: 0px;
    height: 26px;
}
.password{
  width: 66.6%;
  border: 1px solid black;
  margin-left: 3%;
  margin-top: 30px;
  padding-top: 50px;
  position: relative;
  height: 310px;
  font-size: 18px;
}
.password-line{
  width: 90%;
  margin-left: 5%;
  height: 60px;
  clear: both;
}
.password-label{
  float: left;
  width: 30%;
  margin-left: 3%;
  padding-left: 6%;
  height: 26px;
}
.password-info{
  width:50%;
  float: left;
}
.password-info input{
  width:100%;
  border:0px;
  border-bottom: 1px solid black;
}
.password-button{
width: 80%;
    margin-top: 12px;
    margin-bottom: 70px;
}
.password-tip{
  float: left;
  width:14%;
  color:red;
  font-size: 12px;
}
</style>
