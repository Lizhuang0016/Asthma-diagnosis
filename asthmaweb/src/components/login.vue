<template>
  <div class="login container">
    <div class="pen-title" style="margin-top:50px;">
      <h1>XX医院辅助诊断系统</h1><span>Create <i class='fa fa-paint-brush'></i> + <i class='fa fa-code'></i> by <a
          href=''>Zhuang Li</a></span>
    </div>
    <!-- Form Module-->
    <div class="module form-module">
      <!-- <div class="toggle"><i class="fa fa-times fa-pencil"></i>
        <div class="tooltip">Click Me</div>
      </div> -->
      <div class="form" style="padding-bottom: 20px;">
        <h2>请输入用户名和密码</h2>
        <form>
          <input v-model="account" type="text" placeholder="用户名" />
          <input v-model="password" type="password" placeholder="密码" />
          <p class="errormessage">{{errmessage}}</p>
          <button @click.prevent="login">登录</button>
          <div class="registerlink"><router-link to="/register" >注册</router-link></div>
        </form>
      </div>
      <div class="form" style="display:none;">
        <h2>Create an account</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Phone Number" />
          <button>Register</button>
        </form>
      </div>
      <div class="cta"><a href="">忘记密码?</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      account:'',
      password:'',
      errmessage:'',
      doctorlist:[],
    };
  },
  created(){//当Vm实例的data和methods初始化完毕后，Vm实例会自动执行
  this.getAllDoctor();
  },
  methods: {
    getAllDoctor(){
      this.$http.get('asthma_diagnosis_system/get_all_doctor.php').then(result => {
        if(result.status===200){
          console.log(result)
          this.doctorlist=result.body;
        }
      })
    },
    login(){
      console.log(this.doctorlist.length);
      for(var i=0;i<this.doctorlist.length;i++){
        if(this.doctorlist[i].doctor_account==this.account&&this.doctorlist[i].doctor_password==this.password)
        {
          console.log("登录成功")
          this.$router.push({path:'/navigation/message/index/'+this.doctorlist[i].doctor_id})
          localStorage.setItem('onlinedoctor',JSON.stringify(this.doctorlist[i]))
          return;
        }
      }
      this.errmessage='用户名或密码错误';
    }
  },
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
    max-width: 400px;
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
.form-module input {
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
    width: 100%;
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
.errormessage{
  color: red;
  line-height: 15px;
  margin-top: -10px;
  height: 15px;
}
.registerlink{
  color: #33b5e5;
  line-height: 15px;
  text-align: center;
  margin: 20px 0 0 0;
}
</style>
