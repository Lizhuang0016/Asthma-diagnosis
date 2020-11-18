// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//引入静态css文件，否则会出现打包后样式丢失问题，因为css静态文件未被打包。
import "../static/bootstrap/dist/css/bootstrap.min.css";
import "../static/plugins/bower_components/sidebar-nav/dist/sidebar-nav.min.css";
import "../static/css/animate.css";
import "../static/css/style.css";
import "../static/css/colors/default.css";

import Vue from "vue";

//1.1.导入路由模块
import VueRouter from 'vue-router'
//1.2.安装路由模块
Vue.use(VueRouter)
//1.3.导入自己的路由配置模块即单独放置路由信息的router.js文件
import router from './router.js'

//注册vuex
// import Vuex from 'vuex'
// Vue.use(Vuex)

//2.1.导入vue-resource
import VueResource from 'vue-resource'
//2.2.安装vue-resource
Vue.use(VueResource)
Vue.http.options.xhr = {
    withCredentials: true
}
//设置请求的根路径,要放在vue-resource之后，因为Vue的http属性要在安装了vue-resource之后才能调用
Vue.http.options.root = "http://localhost:5000";
//Vue.http.options.root = 'http://northwind123.gz2vip.idcfengye.com'
//全局设置post时候表单数据格式组织形式 application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;

// 导入axios
//import axios from 'axios'
// axios.get('/api/json.php').then(function(res){
//           console.log(res);
// });

//引入富文本编辑器的代码
import VueQuillEditor from "vue-quill-editor"; //调用编辑器
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
Vue.use(VueQuillEditor);

//引入element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
//导入App跟组件
import app from "./App.vue";

var vm = new Vue({
  el: "#app", //绑定vm实例到id为app的div上
  data: {},
  render: c => c(app), //把app组件绑定到vm实例上
  router //挂载路由对象到VM实例(app)上
  //store,//将Vuex的store挂载到Vue实例上
});
