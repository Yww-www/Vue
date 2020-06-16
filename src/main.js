// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'iview/dist/styles/iview.css'
import ViewUI from 'view-design'
import axios from 'axios'
import VueAxios from "vue-axios";
import Vuex from "vuex";
import 'ant-design-vue/dist/antd.css';
import  Antd from 'ant-design-vue';
// import echarts from 'vue-echarts';
import 'echarts';
Vue.prototype.$http =axios;
Vue.use(ViewUI);
Vue.use(Antd);
Vue.use(VueAxios,axios);
Vue.use(Vuex);
// Vue.component('v-chart',echarts);
Vue.config.productionTip = false;
// Vue.use(echarts);
// Vue.component('chart',echarts);
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;
const store  =  new Vuex.Store({
  state:{
    username:localStorage.getItem('username'),
    token:localStorage.getItem('usertoken'),
    currentexam:[],
    currenttime:'',
    currentexamid:'',
    examlist:[],
    currenthistory:{},
    historylist:[],
    currentexamendtime:0,
    currentexamstartime:0,
    status:'',
  },
  mutations:{
    getuser(state,name){
      state.username=name;
    },
    gettoken(state,token){
      state.token=token;
    },
    setExamId(state,examid){
      state.currentexamid=examid;
    },
    getexamlist(state,list){
      state.examlist=list;
    },
    getcurrentexam(state,list){
      state.currentexam=list;
    },
    getexamhistory(state,list){
      state.currenthistory=list;
    },
    gethistorylist(state,list){
      state.historylist=list;
    },
    getcurrentexamendtime(state,t){
      state.currentexamendtime=t;
    },
    getcurrentexamstarttime(state,t){
      state.currentexamstartime=t;
    },
    getstatus(state,t){
      state.status=t;
    }
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
