<template>
 <div style="margin: 50px">
   <a-spin tip="Loading..." :spinning="spining">
   <a-table :columns="columns" :data-source="this.$store.state.historylist"  bordered >
     <template slot="name" slot-scope="text">
       <a>{{ text }}</a>
     </template>
     <template slot="title" slot-scope="currentPageData">
       考试记录
     </template>
     <template slot="operation" slot-scope="text, record, index">
       <div class="editable-row-operations">
        <span >
          <a  @click="() => checkdetail(record.key)">查看详情</a>
          <a  @click="() => checkdetail(record.key)">考卷分析</a>
        </span>
       </div>
     </template>
   </a-table>
   </a-spin>
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
      title: '考试成绩',
      dataIndex: 'SCORE',
      key: 'SCORE',
      sorter: (a, b) => a.SCORE - b.SCORE,
    },
    {
      title: '操作',
      dataIndex: 'operation',
      scopedSlots: { customRender: 'operation' },
    },
  ];
    export default {
        name: "history",
      data () {
        return {
          data:[],
          columns,
          spining:false,
          con :Global.connect,
        }
      },
      methods: {

        show (index) {
          this.$Modal.info({
            title: 'User Info',
            content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
          })
        },
        remove (index) {
          this.data6.splice(index, 1);
        },
        checkdetail(e){
          let that = this;
          this.axios.get(that.con+'/exam/'+that.$store.state.historylist[e-1].EXAM_ID,{
            headers:{
              'token':that.$store.state.token
            }
          }).then(function (response) {
                    that.$store.commit('getexamhistory',response.data);
                    console.log(that.$store.state.currenthistory.data);
                    that.spining=!that.spining;
          });
          setTimeout(function () {
            console.log(that.$store.state.currentexam);
            that.$router.push('/historydetail');
          },1000);
        },
        lookdetail(e){
          let that = this;
        },
      },
      created() {
        // function dateFormat(fmt, date) {
        //   let ret;
        //   const opt = {
        //     "Y+": date.getFullYear().toString(),        // 年
        //     "m+": (date.getMonth() + 1).toString(),     // 月
        //     "d+": date.getDate().toString(),            // 日
        //     "H+": date.getHours().toString(),           // 时
        //     "M+": date.getMinutes().toString(),         // 分
        //     "S+": date.getSeconds().toString()          // 秒
        //     // 有其他格式化字符需求可以继续添加，必须转化成字符串
        //   };
        //   for (let k in opt) {
        //     ret = new RegExp("(" + k + ")").exec(fmt);
        //     if (ret) {
        //       fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        //     };
        //   };
        //   return fmt;
        // }
        let that = this;
        this.axios.get(that.con+'/exam',{
            headers:{
              'token':that.$store.state.token
            }
          }
        ).then(function (response) {
          let result = [];
          let count=1;
          console.log(response.data.data);
          for(let x of response.data.data){
            x.key=count;
            if(x.SCORE!=null){
              result.push(x);
              count++;
            }
            // let endtime = new Date(x.END_TIME);
            // let starttime = new Date(x.BEGIN_TIME);
            // x.BEGIN_TIME=dateFormat("YYYY-mm-dd HH:MM", starttime);
            // x.END_TIME=dateFormat("YYYY-mm-dd HH:MM", endtime);
          }
          console.log(result);
          that.$store.commit('gethistorylist',result);
          console.log(result);
          console.log(that.$store.state.historylist);
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
    }
</script>

<style scoped>

</style>
