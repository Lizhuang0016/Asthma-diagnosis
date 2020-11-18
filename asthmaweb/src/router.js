//因为要使用到路由对象，所以需要导入VueRouter
import VueRouter from "vue-router";

import Login from "./components/login.vue";
import Register from "./components/register.vue";
import Navigation from "./components/Navigation.vue";

import Message from "./components/contentcomponents/messageaboutcomponent/Message.vue";
import NewMessage from "./components/contentcomponents/messageaboutcomponent/NewMessage.vue";
import MessageDetails from "./components/contentcomponents/messageaboutcomponent/MessageDetails.vue";
import ReaeaseMessage from "./components/contentcomponents/messageaboutcomponent/ReleaseMessage.vue";

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


//设置路由
const router = new VueRouter({
  //mode: "hash",
  base: __dirname,
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    {
      path: "/navigation",
      component: Navigation,
      children: [
        {
          path: "message",
          component: Message,
          children: [
            { path: "index/:news_id", component: NewMessage },
            { path: "details/:news_id", component: MessageDetails },
            { path: "release/:news_id", component: ReaeaseMessage }
          ]
        },

        {
          path: "patient",
          component: Patient,
          children: [
            { path: "index/:doctor_id", component: PatientManagement },
            {
              path: "details/:doctor_id/:patient_id",
              component: PatientDetails
            },
            { path: "addpatient/:doctor_id", component: AddPatient },
            {
              path: "diagnosis/:doctor_id/:patient_id",
              component: patientDiagnosis
            },
            { path: "addrbdata/:doctor_id/:patient_id", component: AddRbdata }
          ]
        },

        { path: "medical/:doctor_id", component: MedicalRecordManagement },

        { path: "prescription/:doctor_id", component: PrescriptionManagement },

        { path: "department/:doctor_id", component: DepartmentManagement },

        { path: "task/:doctor_id", component: TaskSummary },

        { path: "account/:doctor_id", component: AccountManagement }
      ]
    }
  ]
});

//把路由对象暴露出去，在main.js中引用
export default router