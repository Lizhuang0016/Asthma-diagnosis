<template>
  <!-- ============================================================== -->
  <!-- Wrapper -->
  <!-- ============================================================== -->
  <div id="wrapper">
    <!-- ============================================================== -->
    <!-- Topbar header - style you can find in pages.scss -->
    <!-- ============================================================== -->
    <nav class="navbar navbar-default navbar-static-top m-b-0">
      <div class="navbar-header">
        <div class="top-left-part">
          <!-- Logo -->
          <!-- <a class="logo" href="dashboard.html"> -->
          <!-- Logo icon image, you can use font-icon also -->
          <!--This is dark logo icon-->
          <!-- <img src="../assets/images/admin-logo-dark.png" alt="home" /> -->
          <!-- Logo text image you can use text also -->
          <!-- <span class="hidden-xs">

            </span> -->
          <!-- </a> -->
        </div>
        <!-- /Logo -->
        <div class="total-navigation pull-right">
          <!-- <div>
            <a class="nav-toggler open-close waves-effect waves-light hidden-md hidden-lg" href="javascript:void(0)">
              <i class="fa fa-bars"></i></a>
          </div> -->
          <div class="search-box" style="">
            <input type="text" placeholder="搜索..." class="search-input"> <a href="javascript:void(0)">
              <i style="margin-left: -8%;" class="fa fa-search"></i></a>
          </div>
          <div class="doctorinfo-box" style="">
            <a href="#" class="doctor-pic" @click="gotoaccount" style="">
              <img src="../../static/images/users/doctordefaultimage.jpg" alt="user-img" width="36" class="img-circle">
              <b class="hidden-xs">{{onlinedoctor.doctor_name}}医生</b>
            </a>
            <a href="#" class="loginout" @click="loginout" style="display:inline;color:#41b3f9;">注销</a>
          </div>
        </div>
      </div>
      <!-- /.navbar-header -->
      <!-- /.navbar-top-links -->
      <!-- /.navbar-static-side -->
    </nav>
    <!-- End Top Navigation -->
    <!-- ============================================================== -->
    <!-- Left Sidebar - style you can find in sidebar.scss  -->
    <!-- ============================================================== -->
    <div class="navbar-default sidebar" role="navigation">
      <div class="sidebar-nav slimscrollsidebar">
        <div class="sidebar-head">
          <h3 style="text-align: center;margin-top: 18px;font-weight: 600;">
          <span class="hide-menu">智能疾病辅助诊断系统</span>
          </h3>
        </div>
        <ul class="nav elementincenter" id="side-menu" @click="isActive()">
          <li style="padding: 70px 0 0;">
            <router-link id="messagelink" :to="'/navigation/message/index/'+ onlinedoctor.doctor_id" class="waves-effect"  
            :class="[currmenu=='messagelink'?'active-link':'']">
              <i class="fa fa-bell fa-fw" aria-hidden="true"></i>通知信息</router-link>
          </li>
          <li>
            <router-link id="patientslink" :to="'/navigation/patient/index/'+ onlinedoctor.doctor_id" class="waves-effect" 
            :class="[currmenu=='patientslink'?'active-link':'']">
              <i class="fa fa-male fa-fw" aria-hidden="true"></i>病人信息</router-link>
          </li>
          <li>
            <router-link id="medicallink" :to="'/navigation/medical/'+ onlinedoctor.doctor_id" class="waves-effect" 
            :class="[currmenu=='medicallink'?'active-link':'']">
              <i class="fa fa-calendar fa-fw" aria-hidden="true"></i>病例管理</router-link>
          </li>
          <li>
            <router-link id="prescriptionlink" :to="'/navigation/prescription/'+ onlinedoctor.doctor_id" class="waves-effect" 
            :class="[currmenu=='prescriptionlink'?'active-link':'']">
              <i class="fa fa-book fa-fw" aria-hidden="true"></i>处方管理</router-link>
          </li>
          <li>
            <router-link id="departmentlink" :to="'/navigation/department/'+ onlinedoctor.doctor_id" class="waves-effect" 
            :class="[currmenu=='departmentlink'?'active-link':'']">
              <i class="fa fa-bars fa-fw" aria-hidden="true"></i>部门管理</router-link>
          </li>
          <li>
            <router-link id="tasklink" :to="'/navigation/task/'+ onlinedoctor.doctor_id" class="waves-effect" 
            :class="[currmenu=='tasklink'?'active-link':'']">
              <i class="fa fa-calendar-o fa-fw" aria-hidden="true"></i>我的任务</router-link>
          </li>
          <li>
            <router-link id="accountlink" :to="'/navigation/account/'+ onlinedoctor.doctor_id" class="waves-effect" 
            :class="[currmenu=='accountlink'?'active-link':'']">
              <i class="fa fa-gear fa-fw" aria-hidden="true"></i>账户管理</router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- ============================================================== -->
    <!-- End Left Sidebar -->
    <!-- ============================================================== -->
    <!-- Page Content -->
    <!-- ============================================================== -->

    <!-- /.container-fluid -->
    <router-view></router-view>

    <footer class="footer text-center"> 2020 &copy; Ample Admin brought to you by wrappixel - More Templates </footer>
    <!-- /#page-wrapper -->
  </div>
  <!-- /#wrapper -->

</template>
    

<script>
export default {
  name: "customers",
  data() {
    return {
      doctors: [],
      onlinedoctor: [],
      news: [],
      alert: "",
      filterInput: "",
      messagelinkclass: "",
      currmenu:"messagelink"
    };
  },
  methods: {
    getOnlineDoctor() {
      var onedoctor = JSON.parse(localStorage.getItem("onlinedoctor"));
      console.log("onedoctor",onedoctor);
      this.onlinedoctor = onedoctor;
    },
    loginout() {
      this.$router.push({ path: "/login" });
    },
    gotoaccount() {
      this.$router.push({
        path: "/navigation/account/" + this.onlinedoctor.doctor_id
      });
    },
    //获取当前点击的菜单栏名称并制定样式
    isActive(e){
      var event=e||window.event;
      console.log("event",event)
      var target=event.target||event.srcElement;
      console.log("target",target.id);
      this.currmenu=target.id;
    }
  },
  created() {
    this.getOnlineDoctor();
  },
  updated() {},
  components: {
    //Alert
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
.fontsize20 {
  font-size: 20px;
}
.router-link-active {
  /* color: #54667a !important;
  border-left: 3px solid #41b3f9 !important;
  font-weight: 500 !important;
  background: rgba(0, 0, 0, 0.07) !important; */
}
.active-link{
  color: #54667a !important;
  border-left: 3px solid #41b3f9 !important;
  font-weight: 500 !important;
  background: rgba(0, 0, 0, 0.07) !important;
}

.total-navigation {
  height: 60px;
  line-height: 60px;
  width: 33%;
}
.total-navigation a:hover {
  text-decoration: none;
}
.search-box {
  float: left;
  width: 60%;
}
.search-box input {
  height: 30px;
  width: 80%;
  border-radius: 15px;
  border: 2px solid beige; 
  padding-left:8px;
}
.doctorinfo-box {
  float: left;
  width: 40%;
}
.doctor-pic {
  color: white;
}
.doctor-pic img{
  margin-right:3%;
}

.loginout {
  display: inline;
  color: rgb(65, 179, 249);
  margin-left: 10%;
}
</style>
