<template>
  <div  class="examwrapper"  v-if="this.$store.state.currenthistory!=null">
    <div class="TwoWrapper">
      <div class="oneOfTwo">
        <div class="OneOfExample" >
          <div v-for="(item,index) in alltitle" style="width:600px;margin: 50px">
            <span class="tit1" style="color: #000 !important;">{{index + 1}}.{{item.QUESTION_BODY}}</span>
            <span style="position:absolute; left: 120px;font-weight: bolder;font-size: 18px">得分情况：{{item.QUESTION_KEY===item.ANSWER?'1/1':'0/1'}}</span>
            <div v-if="item.BRANCH_A!=null" >
              <span>你的答案为：{{item.ANSWER}}</span><span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp正确答案为：{{item.QUESTION_KEY}}</span>
              <p>A:{{item.BRANCH_A}}</p>
              <p>B:{{item.BRANCH_B}}</p>
              <p>C:{{item.BRANCH_C}}</p>
            </div>
            <div v-else>
              <p>你的答案为:{{item.ANSWER==='A'?'对':'错'}}</p>
              <p>正确答案为:{{item.QUESTION_KEY==='A'?'对':'错'}}</p>
            </div>
            <divider></divider>
          </div>
        </div>

      </div>
      <div class="oneOfTwo">
        <div class="OneOfExample">
          <Card style="width:320px;position: fixed">
            <div style="text-align:center">
              <a-col :span="24" style="margin-top: 32px;">
                <p>考试编号：{{this.$store.state.currenthistory.data.EXAM_ID}}</p>
                <p>考试成绩：{{this.$store.state.currenthistory.data.SCORE}} 分</p>
<!--                <p>完成时间：{{new Date(this.$store.state.currenthistory.data.END_TIME)-new Date(this.$store.state.currenthistory.data.SUBMIT_TIME)}}</p>-->
              </a-col>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
   let myMap = new Map();
    export default {
        name: "historyDetail",
      data(){
          return{
            alltitle:this.$store.state.currenthistory.data.questions,
            radioStyle: {
              display: 'block',
              height: '30px',
              lineHeight: '30px',
            },
          }
      },
      created() {
          console.log(this.$store.state.currenthistory.data)
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
    height: auto;
    margin-left: 250px;
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
