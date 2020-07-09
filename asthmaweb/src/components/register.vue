<template>
  <div class="container" style="height:1200px;">
    <div class="pen-title" style="margin-top:50px;">
      <h1>XX医院辅助诊断系统</h1>
      <span>
        Create
        <i class="fa fa-paint-brush"></i> +
        <i class="fa fa-code"></i> by
        <a href>Zhuang Li</a>
      </span>
    </div>
    <!-- Form Module-->
    <div class="module form-module">
      
      <div class="form" style="padding-bottom: 20px;">
        <h2>请输入用户信息</h2>
        <form class="registertable">
          <div class="registerline">
            <p class="registerlabel">用户名</p>
            <input class="form-module_input" v-model="account" type="text" placeholder="用户名" @blur="judgeaccount" :class="errborder_account"/>
            <p class="registerwarn">{{account_err}}</p>
          </div>
          <div class="registerline">
            <p class="registerlabel">密码</p>
            <input class="form-module_input" v-model="password" type="password" placeholder="密码" @blur="judgepassword" :class="errborder_password"/>
            <p class="registerwarn">{{password_err}}</p>
          </div>
          <div class="registerline">
            <p class="registerlabel">确认密码</p>
            <input class="form-module_input" v-model="repassword" type="password" placeholder="确认密码" @blur="judgerepassword" :class="errborder_repassword"/>
            <p class="registerwarn">{{repassword_err}}</p>
          </div>
          <div class="registerline">
            <p class="registerlabel">姓名</p>
            <input class="form-module_input" v-model="name" type="text" placeholder="姓名" @blur="judgename" :class="errborder_name"/>
            <p class="registerwarn">{{name_err}}</p>
          </div>
          <div class="registerlinesex">
            <p class="registerlabel" style="float:left;">性别</p>
            <input class="sexradio" name="sex" value="男" v-model="sex" type="radio"/><p class="sexlabel">男</p>
            <input class="sexradio" name="sex" value="女" v-model="sex" type="radio"/><p class="sexlabel">女</p>
            <p class="registerwarn"></p>
          </div>
          <div class="registerline">
            <p class="registerlabel">年龄</p>
            <input class="form-module_input" v-model="age" type="text" placeholder="年龄" :class="errborder_age" @blur="judgeage"/>
            <p class="registerwarn">{{age_err}}</p>
          </div>
          <div class="registerline">
            <p class="registerlabel">邮箱</p>
            <input class="form-module_input" v-model="email" type="text" placeholder="邮箱" :class="errborder_email" @blur="judgeemail"/>
            <p class="registerwarn">{{email_err}}</p>
          </div>
          <div class="registerline">
            <p class="registerlabel">电话</p>
            <input class="form-module_input" v-model="phone" type="text" placeholder="电话" :class="errborder_phone" @blur="judgephone" />
            <p class="registerwarn">{{phone_err}}</p>
          </div>
          <p class="errormessage">{{errmessage}}</p>
          <button @click.prevent="register">注册</button>
          <div class="flexline">
          <p class="tologinlink"><router-link  to="/login">已有账号？点击登录</router-link></P>
          <p class="libmessage" :class="error_register">{{libmessage}}</p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      doctorlist:[],

      account: "",
      password: "",
      repassword: "",
      name: "",
      sex: "男",
      age: "",
      email: "",
      phone: "",
      errmessage: "",
      libmessage:"",
      newdoctor: [],

      account_err:"",
      password_err:"",
      repassword_err:"",
      name_err:"",
      age_err:"",
      email_err:"",
      phone_err:"",

      errborder_account:"",
      errborder_password:"",
      errborder_repassword:"",
      errborder_name:"",
      errborder_age:"",
      errborder_email:"",
      errborder_phone:"",
      error_register:"",

      delaytime:4
    };
  },
  created() {
    //当Vm实例的data和methods初始化完毕后，Vm实例会自动执行
    this.getAllDoctor();
    $('#sex').prop('checked','checked');
  },
  methods: {
    delaygo(){
      var tid=setTimeout(delaygo(),1000);
      if(this.delaytime>0){
        this.delaytime--;
      }else{
        clearTimeout(tid);
        this.$router.push({path:"/messages"})
      }
    },
    getAllDoctor() {//获取当前已注册的所有用户
      this.$http
        .get("asthma_diagnosis_system/get_all_doctor.php.php")
        .then(result => {
          if (result.status === 200) {
            this.doctorlist = result.body;
          }
        });
    },
    judgeaccount(){//判断用户名是否存在
      for(var i=0;i<this.doctorlist.length;i++)
      {
        if(this.account==this.doctorlist[i].doctor_account){
          this.account_err="用户名已存在";
          this.errborder_account="border-color-red";
          return ;
        }
      }
      this.account_err="";
      this.errborder_account="";
    },
    judgepassword(){//判断密码输入是否一致
      if(this.password==""){
        this.password_err="请输入密码";
        this.errborder_password="border-color-red";
        return ;
      }
      this.password_err="";
      this.errborder_password="";
    },
    judgerepassword(){//判断密码输入是否一致
      if(this.password!=this.repassword){
        this.repassword_err="两次密码输入不一致";
        this.errborder_repassword="border-color-red";
        return ;
      }
      this.repassword_err="";
      this.errborder_repassword="";
    },
    judgename(){
      if(this.name==""){
        this.name_err="请输入姓名";
        this.errborder_name="border-color-red";
        return ;
      }
      this.name_err="";
      this.errborder_name="";
    },
    judgeage(){//判断年龄是否合法
      var agelegal=/^(?:[1-9][0-9]?|1[01][0-9]|120)$/.test(this.age);
      if(!agelegal){
        this.age_err="输入年龄不合法";
        this.errborder_age="border-color-red";
        return ;
      }
      this.age_err="";
      this.errborder_age="";
    },
    judgeemail(){//判断邮箱是否合法
      var emaillegal=/^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/.test(this.email);
      if(!emaillegal){
        this.email_err="请输入正确的邮箱";
        this.errborder_email="border-color-red";
        return ;
      }
      this.email_err="";
      this.errborder_email="";
    },
    judgephone(){//判断手机号码是否合法
      var phonelegal=/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone);
      if(!phonelegal){
        this.phone_err="请输入正确的手机号";
        this.errborder_phone="border-color-red";
        return ;
      }
      this.phone_err="";
      this.errborder_phone="";
    },
    register(){
    this.newdoctor={
        doctor_account:this.account,
        doctor_password:this.password,
        doctor_name:this.name,
        doctor_sex:this.sex,
        doctor_age:this.age,
        doctor_email:this.email,
        doctor_phone:this.phone,
      };
      if(this.account==""){
        this.account_err="请输入用户名"
        this.errborder_account="border-color-red"
      }
      if(this.password==""){
        this.password_err="请输入密码"
        this.errborder_password="border-color-red"
      }
      if(this.repassword==""){
        this.repassword_err="请确认密码"
        this.errborder_repassword="border-color-red"
      }
      if(this.name==""){
        this.name_err="请输入姓名"
        this.errborder_name="border-color-red"
      }
      if(this.age==""){
        this.age_err="请输入年龄"
        this.errborder_age="border-color-red"
      }
      if(this.email==""){
        this.email_err="请输入邮箱"
        this.errborder_email="border-color-red"
      }
      if(this.phone==""){
        this.phone_err="请输入电话"
        this.errborder_phone="border-color-red"
      }
      if(this.account_err==''&&this.repassword_err==''&&this.age_err==''&&this.email_err==''&&this.phone_err==''){
        this.$http.post('asthma_diagnosis_system/insert_doctor.php',this.newdoctor,{emulateJSON:true}).then(result =>{
        if(result.status===200){
          this.getAllDoctor();
          this.newdoctor='';
          this.error_register="";
          this.libmessage="注册成功，即将跳转"+this.delaytime;
          const timer = setInterval(() => {
        	if (this.delaytime <= 1) {
            	clearInterval(timer);
              //window.location.href = 'http://www.baidu.com';
              this.$router.push({path:'/login'})
            	return;
          }
          this.delaytime -= 1;
          this.libmessage="注册成功，即将跳转"+this.delaytime;
          },1000)
          this.delaytime=4;
          
        }
      })
      }
      else{
        this.libmessage="请按规范填写注册信息";
        this.error_register="color-red";
      }
      
    },
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pen-title {
  padding: 50px 0;
  text-align: center;
  letter-spacing: 2px;
}
.pen-title h1 {
  margin: 0 0 20px;
  font-size: 48px;
  font-weight: 300;
}
.pen-title span {
  font-size: 12px;
}
.pen-title span .fa {
  color: #33b5e5;
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transform: translate(0, 0);
}
.form-module {
  position: relative;
  background: #ffffff;
  max-width: 650px;
  width: 100%;
  border-top: 5px solid #33b5e5;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
}
.form-module .toggle {
  cursor: pointer;
  position: absolute;
  top: -0;
  right: -0;
  background: #33b5e5;
  width: 30px;
  height: 30px;
  margin: -5px 0 0;
  color: #ffffff;
  font-size: 12px;
  line-height: 30px;
  text-align: center;
}
.form-module .form {
  padding: 40px;
}
.form-module h2 {
  margin: 0 0 20px;
  color: #33b5e5;
  font-size: 18px;
  font-weight: 400;
  line-height: 1;
}
.form-module_input {
  outline: none;
  display: block;
  width: 100%;
  border: 1px solid #d9d9d9;
  margin: 0 0 20px;
  padding: 10px 15px;
  box-sizing: border-box;
  transition: 0.3s ease;
}
.form-module input:focus{
    outline:none;
    border:#87C6F9 1px solid;
    box-shadow: 0 0 3px rgba(103, 166, 217, 1);
}
.form-module button {
  cursor: pointer;
  background: #33b5e5;
  width: 80%;
  border: 0;
  padding: 10px 15px;
  color: #ffffff;
  transition: 0.3s ease;
}
.form-module .cta {
  background: #f2f2f2;
  width: 100%;
  padding: 15px 40px;
  box-sizing: border-box;
  color: #666666;
  font-size: 12px;
  text-align: center;
}
.form-module .cta a {
  color: #333333;
  text-decoration: none;
}
.flexline{
  display: flex;
  justify-content: space-between;
}
.tologinlink {
  color: #33b5e5;
  line-height: 15px;
  margin-top: 10px;
  height: 15px;
  font-family: monospace;
}
.errormessage {
  color: red;
  line-height: 15px;
  margin-top: -10px;
  height: 15px;
}
.libmessage{
  color: #33b5e5;
  line-height: 15px;
  margin-top: 10px;
  height: 15px;
  margin-right: 24%;
  text-align: justify;
  word-break: break-all;
  font-family: monospace;
}
.registerlink {
  color: #33b5e5;
  line-height: 15px;
  text-align: center;
  margin: 20px 0 0 0;
}
.registerline{
    color:black;
    width: 100%;

    text-align: left;
}
.registerlabel{
    display: inline-block; width:15%;
}
.registerline input{
    display: inline-block;
    width:65%;
    
}
.registerwarn{
    color:red;
    display: inline-block;
    width:18%;
    font-size:12px;
    line-height: 15px;
}
.registerlinesex{
  color:black;
    width: 95%;
    height: 50px;
    text-align: left;
    margin-top: 10px;
}
.sexradio{
width: 5%;
float: left;
line-height: 18px;
}
.sexlabel{
width: 10%;
float: left;
}

.border-color-red{
  border-color: red;
}
.color-red{
  color:red;
}
</style>
