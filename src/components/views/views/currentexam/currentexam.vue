<template>
<!--   <div v-if="this.$store.state.currentexam===null">-->
<!--     <a-result  title="暂无考试,请在考试开始前5分钟进入考场">-->
<!--     </a-result>-->
<!--   </div>-->
  <div  class="examwrapper"  v-if="this.$store.state.currentexam!=null">
    <div class="TwoWrapper">
      <div class="oneOfTwo">
        <div class="OneOfExample" >
          <div v-for="(item,index) in alltitle"  style="width:600px">
            <p class="tit1" style="background-color: #FFFFFF">{{index + 1}}.{{item.QUESTION_BODY}}</p>
            <RadioGroup v-if="item.BRANCH_A!=null"   @on-change="onChange1($event,item.QUESTION_ID)">
              <Radio label="A" :style="radioStyle">
                <span>{{item.BRANCH_A}}</span>
              </Radio>
              <Radio label="B" :style="radioStyle">
                <span>{{item.BRANCH_B}}</span>
              </Radio>
              <Radio label="C" :style="radioStyle">
                <span>{{item.BRANCH_C}}</span>
              </Radio>
            </RadioGroup>
            <RadioGroup v-else @on-change="onChange2($event,item.QUESTION_ID)">
              <Radio label="A" :style="radioStyle">
                <span>对</span>
              </Radio>
              <Radio label="B" :style="radioStyle">
                <span>错</span>
              </Radio>
            </RadioGroup>
            <divider></divider>
          </div>
        </div>
      </div>
      <div class="oneOfTwo">
        <div class="OneOfExample">
          <Card style="width:320px;position: fixed">
            <div style="text-align:center">
              <a-col :span="24" style="margin-top: 32px;margin-bottom: 32px">
                <a-statistic-countdown title="剩余时间" :value="deadline" format="m 分 s 秒" @finish="finish" />
                <a-progress :percent="this.currentpercent" status="active" :stroke-color="{
        '0%': '#108ee9',
        '100%': '#87d068',
      }"/>
              </a-col>
            </div>
          </Card>
        </div>
      </div>
    </div>
    <div class="buttonwrapper">
      <Button type="primary" style="padding-left: 50px;padding-right: 50px;font-size: 24px" @click="submit">提交</Button>
    </div>
  </div>
</template>

<script>
  import Global from "../../../../Global";
  let myMap = new Map();
    export default {
        name: "currentexam",
        data(){
          return{
            alltitle:this.$store.state.currentexam,
              date:'',
            radioStyle: {
              display: 'block',
              height: '30px',
              lineHeight: '30px',
            },
            single: false,
            currentpercent:0,
            phone:'',
            deadline: Date.now(),
            con:Global.connect,
            unfinish:'第8题 第9题 第10题 ',
            cla: {
              color:'#123456'
            },
            clb: {
              color:'#ffffff'
            },
          };
        },
      methods:{
        info() {
          const h = this.$createElement;
          this.$info({
            title: 'This is a notification message',
            content: h('div', {}, [
              h('p', 'some messages...some messages...'),
              h('p', 'some messages...some messages...'),
            ]),
            onOk() {},
          });
        },
          onChange1(e,id) {
            myMap.set(id,e);
            console.log();
            console.log(this.$store.state.currentexamendtime);
            console.log(new Date().getTime());
            // console.log(e);
            // console.log(id);
            // list[e]
            // this.currentpercent=((new Date().getTime()-this.$store.state.currentexamstartime)/(this.$store.state.currentexamendtime-this.$store.state.currentexamstartime)).toFixed(2);
            console.log(this.currentpercent);
          console.log(myMap);
        },
        onChange2(e,id) {
          myMap.set(id,e);
          console.log(e);
          console.log(id);
          console.log(myMap);
        },
        changepercent(){
          this.currentpercent=((new Date().getTime()-this.$store.state.currentexamstartime)/(this.$store.state.currentexamendtime-this.$store.state.currentexamstartime))*100;
          this.currentpercent=Number(this.currentpercent.toFixed(2));
          // console.log(new Date(this.$store.state.currentexamstartime));
          // console.log(Date.now());
          // console.log( Date.now() + (this.$store.state.currentexamendtime- Date.now()));
          // console.log(this.currentpercent);
        },
        submit() {
          let that = this;
          var score  = 0;
          let result = [];
          if (myMap.size < 10) {
            let c = 0;
             for(let x in myMap){
               for(let y of that.$store.state.currentexam){
                 if(x===y.QUESTION_ID) {
                   that.checklist.push(1);
                   c++;
                 }
               }
             }
             console.log(that.checklist);
            this.$Message.error('还有题目没有填写');
          }
        else {
          for (var [key, value] of myMap.entries()) {
            result.push({
              QUESTION_ID:key,
              answer:value
            })
          }
            console.log(result);
              this.axios.post(that.con+'/exam/submit',{
                exam_id:that.$store.state.currentexamid,
                data:result
              },{
                headers:{
                  'token':that.$store.state.token
                }
              }).then(function (response) {
                that.axios.post(that.con+'/exam/finish',{
                  exam_id:that.$store.state.currentexamid
                },{
                  headers:{
                    'token':that.$store.state.token
                  }
                }).then(function (response) {
                  console.log(response.data.data.SCORE);
                  score=response.data.data.SCORE;
                  console.log(myMap);
                  that.$Message.success('提交成功');
                  const h = that.$createElement;
                  that.$info({
                    title: '考试完成 ',
                    content: h('div', {}, [
                      h('p', '成绩'),
                      h('p', score),
                    ]),
                    onOk() { that.$router.push('/history')},
                  });
                });
              });

        }
        },
        finish(){
          let result = [];
          for (var [key, value] of myMap.entries()) {
            result.push({
              QUESTION_ID:key,
              answer:value
            })
          }
          this.$Message.error('时间不足，即将提交');
          this.axios.post(that.con+'/exam/submit',{
            exam_id:that.$store.state.currentexamid,
            data:result
          },{
            headers:{
              'token':that.$store.state.token
            }
          }).then(function (response) {
            console.log(response);
          });
          this.$Message.success('提交成功');
        }
      },
      mounted() {
          console.log(this.$store.state.currentexam.length);
          this.timer = setInterval(this.changepercent,1000);
      },
      created() {
      this.deadline=Date.now()+1000 * 60 * 60 * 24 * 2 + 1000 * 30;
        console.log('asdasdasd');
        this.deadline=Date.now() + (this.$store.state.currentexamendtime- Date.now());
      console.log(this.deadline);
      console.log(Date.now() + (this.$store.state.currentexamendtime- Date.now()));
      console.log('asdasdasd');
      },
      beforeDestroy() {
         clearInterval( this.timer);
      }
    }
</script>

<style scoped>
.examwrapper{
  backgroundColor:#ececec;
  padding: 12px 0;
}
  .TwoWrapper{
    width: 100%;
    padding: 0 12px;
    display: flex;
    flex-wrap: wrap;
  }
  .oneOfTwo{
    padding-top: 12px;
    padding-right: 12px;
    padding-left: 12px;
    padding-bottom: 12px;
  }
  .OneOfExample{
    background-color: #fff;
    width: 100%;
    margin-left: 250px;
    height: auto;
  }
  .buttonwrapper{
    width: 100%;
    text-align: center;
    margin: 0 auto;
  }
.tit1 {
  font-weight: bold;
}
</style>
