<template>
 <div style="margin: 50px;display: flex;flex-direction: column">
   <div>
     <a-descriptions title="考生信息" bordered>
       <a-descriptions-item label="考生姓名">
        叶文武
       </a-descriptions-item>
       <a-descriptions-item label="考生性别">
         男
       </a-descriptions-item>
       <a-descriptions-item label="准考证号">
         31701395
       </a-descriptions-item>
     </a-descriptions>
   </div>
   <div style="margin-top: 70px;margin-bottom: 20px">
     <a-steps :current="this.$store.state.status-1">
       <a-step v-for="item in steps" :key="item.title" :title="item.title" :description="item.description"/>
     </a-steps>
   </div>
<div style="margin-top: 50px">
  <a-spin tip="Loading..." :spinning="spining">
  <a-table :columns="columns" :data-source="this.$store.state.examlist" bordered >
    <template slot="title" slot-scope="currentPageData">
      即将到来的考试
    </template>
    <template slot="operation" slot-scope="text, record, index">
      <div class="editable-row-operations">
        <span >
          <a  @click="() => joinexam(record.key)">参加考试</a>
        </span>
      </div>
    </template>
  </a-table>
  </a-spin>
</div>

 </div>
</template>

<script>
  import Global from "../../../../Global";

  const columns = [
    {
      title: '考试编号',
      dataIndex: 'EXAM_ID',
      key: 'EXAM_ID',
      sorter: (a, b) => a.EXAM_ID - b.EXAM_ID,
    },
    {
      title: '考生准考证号',
      dataIndex: 'EN_ID',
      key: 'EN_ID',
    },
    {
      title: '考试项目',
      dataIndex: 'INFO',
      key: 'INFO',
      filters: [
        {
          text: '科目一考试',
          value: '科目一考试',
        },
        {
          text: '科目二考试',
          value: '科目二考试',
        },
        {
          text: '其他',
          value: '其他',
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.INFO.indexOf(value) === 0,
    },
    {
      title: '开始时间',
      key: 'BT',
      dataIndex: 'BT',
      sorter: (a, b) => new Date(a.BEGIN_TIME) - new Date(b.BEGIN_TIME),
    },
    {
      title: '结束时间',
      key: 'ET',
      dataIndex: 'ET',
      sorter: (a, b) => new Date(a.END_TIME) - new Date(b.END_TIME),
    },
    // {
    //   title: '考试状态',
    //   key: 'status',
    //   dataIndex:'status',
    // },
    {
      title: '操作',
      dataIndex: 'operation',
      scopedSlots: { customRender: 'operation' },
    },
  ];
  import desc from "./component/desc";
    export default {
      components:{desc},
        name: "examfirst",
      data(){
          return{
            steps: [
              {
                title: '科目一',
                description:'驾驶员理论考试',
              },
              {
                title: '科目二',
                description:'场地驾驶技能考试科目',
              },
              {
                title: '科目三',
                description:'机动车驾驶人道路考试',
              },
              {
                title: '科目四',
                description:'安全文明驾驶常识考试',
              },
              {
                title: '拿到驾驶证',
                description:'开心拿本，安全驾驶',
              },
            ],
            current:2,
            data:[],
            columns,
            spining:false,
            con:Global.connect
          }
      },
      methods:{
         joinexam(e){
           let that= this;
           this.axios.get(that.con+'/exam/'+this.$store.state.examlist[e-1].EXAM_ID,{
             headers:{
               'token':this.$store.state.token
             }
           }).then(function (response) {
             // that.alltitle=response.data.data;
             console.log(new Date(response.data.data.END_TIME).getTime());
             // that.$store.state.currentexam=response.data.data.questions;
             that.$store.commit('getcurrentexamendtime',new Date(response.data.data.END_TIME).getTime());
             that.$store.commit('getcurrentexamstarttime',new Date(response.data.data.BEGIN_TIME).getTime());
             that.$store.commit('getcurrentexam',response.data.data.questions);
             that.$store.state.currenttime=response.data.data.END_TIME;
             that.$store.commit('setExamId',response.data.data.EXAM_ID);
             that.spining=!that.spining;
           });
           setTimeout(function () {
             console.log(that.$store.state.currentexam);
             that.$router.push('/current');
           },1000);

         },
        createexam(){
           let that = this;
           this.axios.post(that.con+'/exam/create',null,{
             headers:{
               'token':this.$store.state.token
             }
           }).then(function (response) {
                console.log('创建考试完成');
           })
        },
        getexamlist(){
           let that=this;
          function dateFormat(fmt, date) {
            let ret;
            const opt = {
              "Y+": date.getFullYear().toString(),        // 年
              "m+": (date.getMonth() + 1).toString(),     // 月
              "d+": date.getDate().toString(),            // 日
              "H+": date.getHours().toString(),           // 时
              "M+": date.getMinutes().toString(),         // 分
              "S+": date.getSeconds().toString()          // 秒
              // 有其他格式化字符需求可以继续添加，必须转化成字符串
            };
            for (let k in opt) {
              ret = new RegExp("(" + k + ")").exec(fmt);
              if (ret) {
                fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
              };
            };
            return fmt;
          }
          this.axios.get(that.con+'/exam',{
              headers:{
                'token':this.$store.state.token
              }
            }
          ).then(function (response) {
            let result = [];
            let count=1;
            for(let x of response.data.data){
              if(x.SCORE===null&&(new Date(x.END_TIME).getTime()-Date.now())>0){
                x.key=count;
                console.log(x.END_TIME);
                console.log(Date.now());
                let endtime = new Date(x.END_TIME);
                let starttime = new Date(x.BEGIN_TIME);
                x.BT=dateFormat("YYYY-mm-dd HH:MM", starttime);
                x.ET=dateFormat("YYYY-mm-dd HH:MM", endtime);
                count++;
                result.push(x);
              }
            }
            console.log(result);
           that.$store.commit('getexamlist',result);
            // if (response.data.code == 50) {
            //   console.log(response.data.code);
            //   that.$Message.error('用户名或密码错误');
            // } else {
            //   console.log(response.data.data.token);
            //   that.$store.commit('gettoken',response.data.data.token);
            //   that.$store.commit('getuser',response.data.data.name);
            //   console.log(that.$store.state.username);
            //   that.$Message.success('登录成功');
            //   that.$router.push('/examfirst');
            // }
          })
        }
      },
     created() {
       function dateFormat(fmt, date) {
         let ret;
         const opt = {
           "Y+": date.getFullYear().toString(),        // 年
           "m+": (date.getMonth() + 1).toString(),     // 月
           "d+": date.getDate().toString(),            // 日
           "H+": date.getHours().toString(),           // 时
           "M+": date.getMinutes().toString(),         // 分
           "S+": date.getSeconds().toString()          // 秒
           // 有其他格式化字符需求可以继续添加，必须转化成字符串
         };
         for (let k in opt) {
           ret = new RegExp("(" + k + ")").exec(fmt);
           if (ret) {
             fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
           };
         };
         return fmt;
       }
        let that = this;
          that.createexam();
       this.axios.get(that.con+'/exam',{
           headers:{
             'token':that.$store.state.token
           }
         }
       ).then(function (response) {
         let result = [];
         let count=1;
         for(let x of response.data.data){
           if(x.SCORE===null&&(new Date(x.END_TIME).getTime()-Date.now())>0){
             x.key=count;
             let endtime = new Date(x.END_TIME);
             let starttime = new Date(x.BEGIN_TIME);
             x.BT=dateFormat("YYYY-mm-dd HH:MM", starttime);
             x.ET=dateFormat("YYYY-mm-dd HH:MM", endtime);z
             count++;
             result.push(x);
           }
             }
           that.$store.commit('getexamlist',result);
         console.log(result);
         // if (response.data.code == 50) {
         //   console.log(response.data.code);
         //   that.$Message.error('用户名或密码错误');
         // } else {
         //   console.log(response.data.data.token);
         //   that.$store.commit('gettoken',response.data.data.token);
         //   that.$store.commit('getuser',response.data.data.name);
         //   console.log(that.$store.state.username);
         //   that.$Message.success('登录成功');
         //   that.$router.push('/examfirst');
         // }
       })
      },
      mounted() {
         this.timer=setInterval(this.getexamlist,1000);
        // this.timer=setInterval(this.createexam,10000);
      },
      beforeDestroy() {
          clearInterval(this.timer);
      }
    }
</script>

<style scoped>

</style>
