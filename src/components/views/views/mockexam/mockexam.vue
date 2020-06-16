<template>
  <div style="width: 100%;display:flex;justify-content:center;height: 600px">
    <a-modal v-model="visible" title="请选择练习模式" maskClosable="false">
      <template slot="footer">
        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
         确定
        </a-button>
      </template>
      <Card><div style="text-align:center;display: flex;justify-content: center">
        <div style="width: 40px;height:40px">
          <Icon type="ios-keypad" size="40" />
        </div>
        <div style="width: 200px;">
          <span style="display: block;font-size: 16px;font-weight: bolder">顺序练习</span>
          <span style="font-size: 12px">按照顺序练习做题</span>
        </div>
      </div></Card>
      <Card><div style="text-align:center;display: flex;justify-content: center">
        <div style="width: 40px;height:40px">
          <Icon type="ios-alarm-outline" size="40" />
        </div>
        <div style="width: 200px;">
          <span style="display: block;font-size: 16px;font-weight: bolder">专项训练</span>
          <span style="font-size: 12px">分门别类重点突破</span>
        </div>
      </div></Card>
      <Card><div style="text-align:center;display: flex;justify-content: center">
        <div style="width: 40px;height:40px">
          <Icon type="md-exit" size="40"/>
        </div>
        <div style="width: 200px;">
          <span style="display: block;font-size: 16px;font-weight: bolder">难点攻克</span>
          <span style="font-size: 12px">准确把握考试难点</span>
        </div>
      </div></Card>
      <Card><div style="text-align:center;display: flex;justify-content: center">
        <div style="width: 40px;height:40px">
          <Icon type="md-shuffle" size="40" />
        </div>
        <div style="width: 200px;">
          <span style="display: block;font-size: 16px;font-weight: bolder">随机训练</span>
          <span style="font-size: 12px">所有法规一个不漏</span>
        </div>
      </div></Card>
    </a-modal>
    <div style="width: 500px;margin-top: 100px;border: 1px solid #ddd;padding: 25px 20px;margin-bottom: 200px" v-show="visible===false">
      <div  style="width:470px;height: 300px;display: flex;flex-direction: column">
      <div style="margin-bottom: 40px" >
        <p class="tit1" style="background-color: #FFFFFF;width: 470px;font-size: 16px;font-weight: bolder" >{{active + 1}}.{{mocklist[active].QUESTION_BODY}}</p>
        <div v-if="stylelist[active]===true&&mocklist[active].BRANCH_A!=null">回答正确!正确答案为：{{mocklist[active].QUESTION_KEY}}</div>
        <div v-else-if="(stylelist[active]===false||currentisright===false)&&mocklist[active].BRANCH_A!=null">回答错误!正确答案为：{{mocklist[active].QUESTION_KEY}} </div>
        <div v-else-if="(stylelist[active]===false)">回答错误!正确答案为：{{mocklist[active].QUESTION_KEY==='A'?'对':'错'}} </div>
        <div v-else-if="stylelist[active]===true">回答正确!正确答案为：{{mocklist[active].QUESTION_KEY==='A'?'对':'错'}} </div>
        <a-radio-group v-if="mocklist[active].BRANCH_A!=null" v-model="checklist[active]" @change="onChange($event,mocklist[active].QUESTION_ID)" :disabled="stylelist[active]!=null">
          <a-radio :style="radioStyle" :value="'A'">
            {{mocklist[active].BRANCH_A}}
          </a-radio>
          <a-radio :style="radioStyle" :value="'B'">
            {{mocklist[active].BRANCH_B}}
          </a-radio>
          <a-radio :style="radioStyle" :value="'C'">
            {{mocklist[active].BRANCH_C}}
          </a-radio>
        </a-radio-group>
        <a-radio-group v-else v-model="checklist[active]" @change="onChange($event,mocklist[active].QUESTION_ID)" :disabled="stylelist[active]!=null">
          <a-radio :style="radioStyle" :value="'A'">
            对
          </a-radio>
          <a-radio :style="radioStyle" :value="'B'">
            错
          </a-radio>
        </a-radio-group>
      </div>
        <div style="margin-bottom: 10px">
          <a-button @click="judge">提交</a-button>
          <a-button @click="next">下一题</a-button>
          <a-button @click="pre">上一题</a-button>
        </div>
<!--        <RadioGroup v-if="mocklist[active].BRANCH_A!=null"   @on-change="onChange1($event,mocklist[active].QUESTION_ID)">-->
<!--&lt;!&ndash;          <RadioGroup>&ndash;&gt;-->
<!--          <Radio :label="mocklist[active].BRANCH_A" :style="radioStyle">-->
<!--            <span>{{mocklist[active].BRANCH_A}}</span>-->
<!--          </Radio>-->
<!--          <Radio :label="mocklist[active].BRANCH_B" :style="radioStyle">-->
<!--            <span>{{mocklist[active].BRANCH_B}}</span>-->
<!--          </Radio>-->
<!--          <Radio :label="mocklist[active].BRANCH_C" :style="radioStyle">-->
<!--            <span>{{mocklist[active].BRANCH_C}}</span>-->
<!--          </Radio>-->
<!--        </RadioGroup>-->
<!--        <RadioGroup v-else @on-change="onChange2($event,mocklist[active].QUESTION_ID)">-->
<!--          <Radio label="A" :style="radioStyle">-->
<!--            <span>对</span>-->
<!--          </Radio>-->
<!--          <Radio label="B" :style="radioStyle">-->
<!--            <span>错</span>-->
<!--          </Radio>-->
<!--        </RadioGroup>-->
      </div>
    </div>
    <div style="display:flex;width: 550px;flex-wrap: wrap;margin-left: 220px;margin-top: 100px;margin-bottom: 100px" v-show="visible===false">
<!--      <div v-for=" (item,i) in mocklist" class="problemundo"  @click="log(i)" :class="[{isactive:active==i},{'problemright':stylelist[i]},{'problemerror}':!stylelist[i]}]" v-if="mocklist!=null">-->
      <div v-for=" (item,i) in mocklist" class="problemundo"  @click="log(i)" :class="rightorerror(i)" v-if="mocklist!=null">
      {{i+1}}
      </div>
    </div>
  </div>
</template>

<script>
    import Global from "../../../../Global";

    export default {
        name: "mockexam",
      data(){
          return{
            active:0,
            mocklist:[],
            checklist:[],
            con:Global.connect,
            radioStyle: {
              display: 'block',
              height: '30px',
              lineHeight: '30px',
            },
            currentas:{},
            stylelist:[],
            currentisright:'',
            ModalText: 'Content of the modal',
            visible: true,
            confirmLoading: false,
          }
      },
      methods:{
          log(e){
            this.currentas={};
            this.currentisright=null;
            this.active=e;
            console.log(e);
          },
        next(){
          if(this.active<99){
            this.active++;
            this.currentisright=null;
          }else {
            this.$Message.error('已经是最后一题');
          }
        },
        pre(){
          if(this.active>0)  {
            this.active--;
            this.currentisright=null;
          }else {
            this.$Message.error('已经是第一题');
          }
        },
        judge(){
          let that= this;
          // console.log(this.active);
          console.log(JSON.stringify(that.currentas) === '{}');
          if(JSON.stringify(that.currentas) === '{}'){
            that.$Message.error('未选择答案，无法提交');
          }
          else {
            this.axios.post(that.con + '/judge', {
              data: [
                that.currentas
              ]
            }, {
              headers: {
                'token': this.$store.state.token
              }
            }).then(function (response) {
              console.log(response.data.data[0].correct);
              console.log(that.active);
              that.stylelist[that.active] = response.data.data[0].correct;
              that.currentisright=response.data.data[0].correct;
              console.log(that.currentisright);
            });
          };
          this.currentas={};
        },
        onChange(e,id){
          let result = {};
          this.checklist[this.active] = e.target.value;
          console.log(e.target.value+'target');
          console.log(id+'qid');
          result["QUESTION_ID"]=id;
          result["answer"]=e.target.value;
          console.log(result);
          this.currentas=result;
          console.log(this.currentas);
        },

          getmocktitle(){
            let that= this;
            this.axios.get(that.con+'/question/batch/100',{
                headers:{
                  'token':this.$store.state.token
                }
              }
            ).then(function (response) {
                  that.mocklist=response.data.data;
                  console.log(that.mocklist[0]);
            })
          },
        handleOk(){
            this.visible=false;
        },
        rightorerror:function(i){
          if(this.stylelist[i]===true){
            return{
              problemright:true,
              isactive:this.active===i,

            }
          }else if(this.stylelist[i]===false){
            return{
              problemerror:true,
              isactive:this.active===i,
            }
          }
          else {
            return{
              isactive:this.active===i,
            }
          }
        }
      },
      created() {
          this.getmocktitle();
          console.log(localStorage.getItem('usertoken'));
      },
      beforeDestroy() {
        clearInterval(this.timer);
      },
      computed:{

      }
    }
</script>

<style scoped>
 .problemundo{
 background-color: #ffffff;;
   width: 54px;
  height: 36px;
   border: 1px solid #eee;
   text-align: center;
   line-height: 36px;
 }
  .problemerror{
    background-color: #ff0000;
    width: 54px;
    height: 36px;
    border: 1px solid #eee;
    text-align: center;
    line-height: 36px;
  }
 .problemright{
   background-color: #00c356;
   width: 54px;
   height: 36px;
   border: 1px solid #eee;
   text-align: center;
   line-height: 36px;
 }
  .isactive{
    background: #e6e6e6;
    /*background-color: black;*/
  }
</style>
