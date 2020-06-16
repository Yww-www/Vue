import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from "../components/Login/Login";
import BaseLayout from "../components/views/views/BaseLayout/BaseLayout";
import test from "../components/views/views/test";
import currentexam from "../components/views/views/currentexam/currentexam";
import history from "../components/views/views/history/history";
import firstpage from "../components/views/views/FirstPage/firstpage";
import examfirst from "../components/views/views/examfirst/examfirst";
import mockexam from "../components/views/views/mockexam/mockexam";
import historyDetail from "../components/views/views/historyDetail/historyDetail";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'Login'
    },
    {

      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path:'/current',
      name:'current',
      component: currentexam
    },
    {
      path: '/firstpage',
      name: 'firstpage',
      component: firstpage
    },
    {
      path: '/base',
      name: 'BaseLayout',
      component: BaseLayout,
      children:[
        {
          path:'/test',
          name:'test',
          component:test
        },

        {
          path: '/history',
          name: 'history',
          component: history
        },
        {
          path: '/examfirst',
          name:'examfirst',
          component: examfirst
        },
        {
          path: '/mockexam',
          name:'mockexam',
          component: mockexam
        },
      ]
    },
    {
      path: '/historydetail',
      name:'historydetail',
      component:historyDetail
    }
  ]
})
