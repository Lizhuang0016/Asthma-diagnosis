// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";

import VueRouter from "vue-router";
import Customers from "./example/Customers.vue";
import About from "./example/About.vue";
import Add from "./example/Add.vue";
import CustomerDetails from "./example/CustomerDetails.vue";
import Edit from "./example/Edit.vue";

import Login from "./components/login.vue";
import Register from "./components/register.vue";
import Navigation from "./components/Navigation.vue";

import Message from "./components/contentcomponents/messageaboutcomponent/Message.vue"
import NewMessage from "./components/contentcomponents/messageaboutcomponent/NewMessage.vue";
import MessageDetails from "./components/contentcomponents/messageaboutcomponent/MessageDetails.vue"
import ReaeaseMessage from "./components/contentcomponents/messageaboutcomponent/ReleaseMessage.vue"

import MedicalRecordManagement from "./components/contentcomponents/MedicalRecordManagement.vue";
import PrescriptionManagement from "./components/contentcomponents/PrescriptionManagement.vue";
import DepartmentManagement from "./components/contentcomponents/DepartmentManagement.vue";
import TaskSummary from "./components/contentcomponents/TaskSummary.vue";
import AccountManagement from "./components/contentcomponents/AccountManagement.vue";

import Patient from "./components/contentcomponents/patientaboutcomponents/Patient.vue";
import PatientManagement from "./components/contentcomponents/patientaboutcomponents/PatientManagement.vue";
import PatientDetails from "./components/contentcomponents/patientaboutcomponents/PatientDetails.vue";
import AddPatient from "./components/contentcomponents/patientaboutcomponents/AddPatient.vue";
import AddRbdata from "./components/contentcomponents/patientaboutcomponents/AddRbdata.vue";
import patientDiagnosis from "./components/contentcomponents/patientaboutcomponents/PatientDiagnosis.vue";

import VueResource from "vue-resource";

//引入富文本编辑器的代码
import VueQuillEditor from "vue-quill-editor"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
Vue.use(VueQuillEditor);

//引入jQuery
import $ from 'jquery'

//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);

//设置请求的根路径,要放在vue-resource之后，因为Vue的http属性要在安装了vue-resource之后才能调用
Vue.http.options.root = 'localhost'
//Vue.http.options.root = 'http://3026s732c6.zicp.vip:54825/'
//全局设置post时候表单数据格式组织形式 application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true


//设置路由
const router = new VueRouter({
  //mode: "hash",
  base: __dirname,
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/navigation", component: Navigation,children:[
      { path: "message", component: Message,children:[
        { path: "index/:news_id", component: NewMessage },
        { path: "details/:news_id", component: MessageDetails },
        { path: "release/:news_id", component: ReaeaseMessage },
      ]},

      { path: "patient", component:Patient ,children:[
        { path: "index/:doctor_id", component: PatientManagement },
        { path: "details/:doctor_id/:patient_id", component: PatientDetails },
        { path: "addpatient/:doctor_id", component: AddPatient },
        { path: "diagnosis/:doctor_id/:patient_id", component: patientDiagnosis },
        { path: "addrbdata/:doctor_id/:patient_id", component: AddRbdata },
      ]},

      

      { path: "medical/:doctor_id", component: MedicalRecordManagement },

      { path: "prescription/:doctor_id", component: PrescriptionManagement },

      { path: "department/:doctor_id", component: DepartmentManagement },

      { path: "task/:doctor_id", component: TaskSummary },

      { path: "account/:doctor_id", component: AccountManagement },
    ]},

    
    

    { path: "/about", component: About },
    { path: "/add", component: Add },
    { path: "/customer/:id", component: CustomerDetails },
    { path: "/edit/:id", component: Edit }
  ]
});
/* eslint-disable no-new */
//导入App跟组件
import app from './App.vue'

var vm = new Vue({
    el: "#app",//绑定vm实例到id为app的div上
    data: {},
    render: c => c(app), //把app组件绑定到vm实例上
    router, //挂载路由对象到VM实例(app)上
})