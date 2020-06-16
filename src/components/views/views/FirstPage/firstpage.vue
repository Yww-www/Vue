<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-nav" style="margin-right:-200px">
            <MenuItem name="1"  to="/Login">
             登录
            </MenuItem>
            <MenuItem name="2">
             查看后台
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout :style="{padding: '0 50px',marginTop:'25px'}">
        <div style="width: 100%;height: 100%;background-color: #2b81af;margin-top: 25px">
          <div style="width: 70%;height: 100px;margin: 0 auto;padding-top: 20px">
            <Menu mode="horizontal"  active-name="1">
              <MenuItem name="1">
                <Icon type="ios-paper" />
                首页
              </MenuItem>
              <Submenu name="2">
                <template slot="title">
                  <Icon type="ios-people" />
                  模拟考试
                </template>
                  <MenuItem name="2-1">科目一</MenuItem>
                  <MenuItem name="2-2">科目二</MenuItem>
                  <MenuItem name="2-3">科目三</MenuItem>
                  <MenuItem name="2-4">科目四</MenuItem>
              </Submenu>
              <Submenu name="3">
                <template slot="title">
                  <Icon type="ios-stats" />
                 找驾校
                </template>
                  <MenuItem name="3-1">找驾校</MenuItem>
                  <MenuItem name="3-2">找教练</MenuItem>
                  <MenuItem name="3-3">找陪练</MenuItem>
              </Submenu>
              <MenuItem name="4">
                <Icon type="ios-construct" />
                驾考圈
              </MenuItem>
              <MenuItem name="5">
                <Icon type="ios-construct" />
               学车指南
              </MenuItem>
              <MenuItem name="6">
                <Icon type="ios-construct" />
                学车视频
              </MenuItem>
              <MenuItem name="7">
                <Icon type="ios-construct" />
                交通标志
              </MenuItem>
              <MenuItem name="9">
                <Icon type="ios-construct" />
                驾考宝典企业版
              </MenuItem>
              <Submenu name="10">
                <template slot="title">
                  <Icon type="ios-stats" />
                  找驾校
                </template>
                <MenuItem name="10-1">汽车网</MenuItem>
                <MenuItem name="10-2">套麦网</MenuItem>
                <MenuItem name="10-3">平安之家</MenuItem>
              </Submenu>
            </Menu>
          </div>
        </div>
        <div class="carsoulwrapper" >
          <Card style="width: 280px;position: absolute;margin-top: 10px;margin-left:200px;z-index:1;background-color: rgba(255,255,255,.7)">
            <p slot="title" style="text-align: center">
              学车流程
            </p>
            <List>
              <ListItem>
                <ListItemMeta  title="科目一" description="真实还原交管局考题难度" />
              </ListItem>
              <ListItem>
                <ListItemMeta  title="科目二" description="官方视频，详解考点" />
              </ListItem>
              <ListItem>
                <ListItemMeta title="科目三" description="全方位讲解，攻克难点" />
              </ListItem>
              <ListItem>
                <ListItemMeta  title="科目四" description="驾考新政，已更新题库" />
              </ListItem>
            </List>
          </Card>
       <template>
         <Carousel v-model="value1" autoplay loop>
           <CarouselItem>
             <div class="demo-carousel"><img src="../../../../assets/img/home_banner_download.jpg" style="width: 100% ;height:100%"></div>
           </CarouselItem>
           <CarouselItem>
             <div class="demo-carousel"><img src="../../../../assets/img/home_banner_jiaolian.jpg" style="width: 100% ;height:100%"></div>
           </CarouselItem>
           <CarouselItem>
             <div class="demo-carousel"><img src="../../../../assets/img/home_banner_jiaxiaobang.png" style="width: 100% ;height:100%"></div>
           </CarouselItem>
           <CarouselItem>
             <div class="demo-carousel"><img src="../../../../assets/img/home_banner_new1.png" style="width: 100% ;height:100%"></div>
           </CarouselItem>
         </Carousel>
       </template>
        </div>
        <div class="mainwrapper">
          <div class="titlewrapper">
            <divider :dashed="true"><h1>2020小车理论考试</h1></divider>
          </div>
          <div class="testwrapper">
            <div class="oneoftest1">
              <h2 style="padding: 20px 0px;font-size: 24px"> <Icon type="md-bonfire" size="40"/>科目一考试</h2>
              <div class="testdetail">
                <ol>
                  <li>
                    <Card><div style="text-align:center;display: flex;justify-content: center">
                        <div style="width: 40px;height:40px">
                          <Icon type="ios-keypad" size="40" />
                        </div>
                      <div style="width: 200px;">
                        <span style="display: block;font-size: 16px;font-weight: bolder">顺序练习</span>
                        <span style="font-size: 12px">按照顺序练习做题</span>
                      </div>
                    </div></Card>
                  </li>
                  <li><Card><div style="text-align:center;display: flex;justify-content: center">
                    <div style="width: 40px;height:40px">
                      <Icon type="ios-alarm-outline" size="40" />
                    </div>
                    <div style="width: 200px;">
                      <span style="display: block;font-size: 16px;font-weight: bolder">专项训练</span>
                      <span style="font-size: 12px">分门别类重点突破</span>
                    </div>
                  </div></Card></li>
                  <li><Card><div style="text-align:center;display: flex;justify-content: center">
                    <div style="width: 40px;height:40px">
                      <Icon type="md-exit" size="40"/>
                    </div>
                    <div style="width: 200px;">
                      <span style="display: block;font-size: 16px;font-weight: bolder">难点攻克</span>
                      <span style="font-size: 12px">准确把握考试难点</span>
                    </div>
                  </div></Card></li>
                  <li><Card><div style="text-align:center;display: flex;justify-content: center">
                    <div style="width: 40px;height:40px">
                      <Icon type="md-shuffle" size="40" />
                    </div>
                    <div style="width: 200px;">
                      <span style="display: block;font-size: 16px;font-weight: bolder">随机训练</span>
                      <span style="font-size: 12px">所有法规一个不漏</span>
                    </div>
                  </div></Card></li>
                </ol>
              </div>
              <div>
                <Button type="primary" size="large" style="padding-left: 50px;padding-right: 50px;font-size: 24px;margin-top: 20px">模拟考试</Button>
              </div>
            </div>
            <div class="oneoftest2">
              <h2 style="padding: 20px 0px;font-size: 24px"> <Icon type="md-bonfire" size="40"/>科目四安全文明驾驶</h2>
              <div class="testdetail">
                <ol>
                  <li >
                    <Card><div style="text-align:center;display: flex;justify-content: center">
                      <div style="width: 40px;height:40px">
                        <Icon type="ios-keypad" size="40" />
                      </div>
                      <div style="width: 200px;">
                        <span style="display: block;font-size: 16px;font-weight: bolder"><a >顺序练习</a></span>
                        <span style="font-size: 12px">按照顺序练习做题</span>
                      </div>
                    </div></Card>
                  </li>
                  <li><Card><div style="text-align:center;display: flex;justify-content: center">
                    <div style="width: 40px;height:40px">
                      <Icon type="ios-alarm-outline" size="40" />
                    </div>
                    <div style="width: 200px;">
                      <span style="display: block;font-size: 16px;font-weight: bolder">专项训练</span>
                      <span style="font-size: 12px">分门别类重点突破</span>
                    </div>
                  </div></Card></li>
                  <li><Card><div style="text-align:center;display: flex;justify-content: center">
                    <div style="width: 40px;height:40px">
                      <Icon type="md-exit" size="40"/>
                    </div>
                    <div style="width: 200px;">
                      <span style="display: block;font-size: 16px;font-weight: bolder">难点攻克</span>
                      <span style="font-size: 12px">准确把握考试难点</span>
                    </div>
                  </div></Card></li>
                  <li><Card><div style="text-align:center;display: flex;justify-content: center">
                    <div style="width: 40px;height:40px">
                      <Icon type="md-shuffle" size="40" />
                    </div>
                    <div style="width: 200px;">
                      <span style="display: block;font-size: 16px;font-weight: bolder">随机训练</span>
                      <span style="font-size: 12px">所有法规一个不漏</span>
                    </div>
                  </div></Card></li>
                </ol>
              </div>
              <div >
                <Button type="primary" size="large" style="padding-left: 50px;padding-right: 50px;font-size: 24px;margin-top: 20px">模拟考试</Button>
              </div>
            </div>
          </div>
          <div class="titlewrapper">
            <divider :dashed="true"><h1>学车问答</h1></divider>
          </div>
          <div class="sortwrapper">
           <div style="background-color: #F7F7F7;margin: 20px;height: 200px;width: 30%">
            <p style="margin-bottom: 15px; font-size: 28px;font-weight: 600; color: #333;margin-top: 20px;">学车问答</p>
             <p style="font-size: 18px;line-height: 40px;">驾校教练和拿本学长为您专业解答学车问题</p>
             <p style="color: #4160A0;font-size: 18px;line-height: 40px;">已解决<span style="color: #f90;">4892154</span>个问题</p>
             <p style="color: #4160A0;font-size: 18px;line-height: 40px;"><Button type="primary" size="large" style="padding-left: 50px;padding-right: 50px;font-size: 24px;margin-top: 20px;border-radius: 24px;">更多回答</Button></p>
           </div>
            <div style="background-color: #fff;margin: 20px;height: 240px;width: 30%">
              <div style="margin-top: 20px;display: flex">
                <i class="qz">问</i>
                <p class="q-p" style="margin-right: 10px">倒车入库一般得练多久，为什么我右倒库总是朝左歪</p>
              </div>
              <divider></divider>
              <div style="margin-top: 20px;display: flex">
                <i class="az">答</i>
                <p class="q-p" style="margin-right: 10px">一个星期左右，要学会看两个反射镜子</p>
              </div>
            </div>
            <div style="background-color: #fff;margin: 20px;height: 240px;width: 30%">
              <div style="margin-top: 20px;display: flex">
                <i class="qz">问</i>
                <p class="q-p" style="margin-right: 10px">科二，科三可以考几次，挂了还花钱吗。求大神指教？</p>
              </div>
              <divider></divider>
              <div style="margin-top: 20px;display: flex">
                <i class="az">答</i>
                <p class="q-p" style="margin-right: 10px">每门5次，挂了需要交补考费</p>
              </div>
            </div>
          </div>
          <div class="titlewrapper">
            <divider :dashed="true"><h1>学车流程</h1></divider>
          </div>
          <div class="Bottomwrapper" v-show="isshow">
            <div class="BottomText" >考驾照要多少钱？<span style="color: #ffd200;">了解预算不被坑</span>
            <Button type="primary" style="background-color: #FF8000;height: 36px;
    width: 96px;margin-left: 40px;font-size: 16px;" @click="modalshow=true">立即计算</Button>
              <Icon type="md-close" style="margin-left: 70px" @click="closebottom"/>
            </div>
          </div>
          <div class="FlowWrapper">
            <div class="Flowitem" v-for="x in movieList">
             <img :src="x.img">
              <span>{{x.name}}</span>
              <p>{{x.desc}}</p>
            </div>
          </div>
        </div>
      </Layout>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
  </div>
</template>

<script>
    export default {
        name: "firstpage",
      data(){
          return{
            value1:0,
            movieList: [
              {
                name:'找驾校',
                desc:'口碑好的驾校',
                img:require('../../../../assets/img/汽车.png')
              },
              {
                name:'科目一',
                desc:'驾驶员理论考试',
                img:require('../../../../assets/img/铅笔.png')
              },
              {
                name:'科目二',
                desc:'场地驾驶技能考试科目',
                img:require('../../../../assets/img/轮胎.png')
              },
              {
                name:'科目三',
                desc:'机动车驾驶人道路考试',
                img:require('../../../../assets/img/方向盘.png')
              },
              {
                name:'科目四',
                desc:'安全文明驾驶常识考试',
                img:require('../../../../assets/img/Notepad-记事本-1.png')
              },
              {
                name:'拿本',
                desc:'开心拿本，安全驾驶',
                img:require('../../../../assets/img/证件.png')
              },
            ],
            isshow:true,
            modalshow:false,
            randomMovieList: [],
            formItem: {
              input: '',
              select: '',
              radio: 'male',
              checkbox: [],
              switch: true,
              date: '',
              time: '',
              slider: [20, 50],
              textarea: ''
            }
          }
      },
      methods:{
        changeLimit () {
          function getArrayItems(arr, num) {
            const temp_array = [];
            for (let index in arr) {
              temp_array.push(arr[index]);
            }
            const return_array = [];
            for (let i = 0; i<num; i++) {
              if (temp_array.length>0) {
                const arrIndex = Math.floor(Math.random()*temp_array.length);
                return_array[i] = temp_array[arrIndex];
                temp_array.splice(arrIndex, 1);
              } else {
                break;
              }
            }
            return return_array;
          }
          this.randomMovieList = getArrayItems(this.movieList, 5);
        },
        closebottom(){
          this.isshow=false;
        },
        toLogin(){
          this.$router.push('/Login');
        }
      },
      mounted() {
        this.changeLimit();
      }
    }
</script>

<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .layout-footer-center{
    text-align: center;
  }
  .carsoulwrapper{
    margin-top: 10px;
    height: 380px;
  }
  .mainwrapper{
    width: 100%;
    text-align: center;
  }
  .titlewrapper{
    margin: 0 auto;
    margin-top: 40px;
    display:block;
    width: 70%;
  }
  .testwrapper{
    margin: 0 auto;
    display:block;
    width: 70%;
    height: 380px;
  }
  .oneoftest1{
    float: left;
    display: inline-block;
    width: 45%;
   padding-bottom: 40px;
    background-color: #2b81af;
  }
  .oneoftest2{
    float: right;
    display: inline-block;
    width: 45%;
    padding-bottom: 40px;
    background-color: #2b81af;
  }
  .testdetail{
    text-align: center;
    /*height: 200px;*/
  }
  .testdetail li{
    width: 250px;
    padding: 10px;
    display: inline-block;
  }
  .sortwrapper{
    margin: 0 auto;
    margin-top: 40px;
    display:flex;
    width: 70%;
  }
  .q-p{
    position: relative;
    width: 100%;
    line-height: 36px;
     color: #999;
    padding-left: 10px;
     overflow: hidden;
    white-space: nowrap;
    font-size: 16px;
    text-overflow: ellipsis;
  }
  .qz,.az{
    font-style: normal;
    width: 36px;
    margin-left: 30px;
    height: 36px;
    line-height: 36px;
    background: #4160A0;
    border-radius: 50%;
    font-size: 16px;
    color: #fff;
    display: inline-block;
    text-align: center;
  }
  .az{
    background: #F5AD1D;
  }
  .FlowWrapper{
    margin: 0 auto;
    margin-top: 40px;
    display:flex;
    width: 70%;
  }
  .Flowitem{

    width: 200px;
    height: 200px;
    margin: 20px;
    display: flex;
    flex-direction: column;
  }

  .Flowitem img{
    width: 50px;
    height: 52px;
    margin: 0 auto;
    margin-top: 10px;
    border: solid 1px #ccc;
    border-radius: 50%;
  }
  .Flowitem span{
    font-size: 24px;
    margin-top: 10px;
  }
  .Flowitem p{
    color: #999;
    margin-top: 10px;
  }
  .Bottomwrapper{
position: fixed;
    height: 100px;
    width: 100%;
    background-color: rgba(0,0,0,.7);
    left: 0;
    right: 0;
    bottom: 0;
  }
  .BottomText{
    padding-top: 40px;
    line-height: 20px;
    text-align: center;
    color: #fff;
    font-size: 32px
  }
</style>
