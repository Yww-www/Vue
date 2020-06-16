<template>
  <div class="backgroundWrapper">
<!--    <LoginHeader/>-->
    <div class="backgroundtitle">
        驾驶员理论考试系统
    </div>
    <div class="login-body">
    <div class="LoginWrapper">
      <div class="LoginBox">
        <div class="LoginTitle">用户登录</div>
        <div class="InputWrapper">
         <div class="ContentInputWarpper">
         <div class="content">用户名:</div>
           <div class="Input">
             <i-input v-model="name" placeholder="请输入用户名" style="width: 200px"></i-input>
           </div>
         </div>
          <div class="ContentInputWarpper">
            <div class="content">密码:</div>
            <div class="Input">
              <i-input type="password" v-model="password" placeholder="请输入密码" style="width: 200px"></i-input>
            </div>
          </div>
        </div>
        <div class="ButtonsWrapper">
          <div class="ButtonWrapper">
          <i-button type="info" style="padding-left: 40px;padding-right: 40px">注册</i-button>
          </div>
          <div class="ButtonWrapper">
            <i-button type="info"  @click="handelLogin" style="padding-left: 40px;padding-right: 40px">登录</i-button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  import LoginHeader from './components/LoginHerder';
  import Global from "../../Global";
  export default {
    name: 'Login',
    components: {
      LoginHeader,
    },
    data () {
      return {
          con :Global.connect,
          name:'',
          password:'',
          value:''

      };
    },
    created() {
      // localStorage.clear();
    },
    computed: {
    },
    mounted() {
    },
    methods: {
      handelLogin() {
        let that = this;
        if (this.name === '' || this.password === '') {
          that.$Message.error('账号或密码不能为空');
        } else {
        this.axios.post(that.con+'/users/login', {
          id:that.name,
          pwd:that.password,
        }).then(function (response) {
          if (response.data.code === 500) {
            console.log(response.data.code);
            that.$Message.error('用户名或密码错误');
          } else {
            localStorage.setItem('username',response.data.data.NAME);
            localStorage.setItem('usertoken',response.data.data.token);
            that.$store.commit('gettoken',response.data.data.token);
            that.$store.commit('getuser',response.data.data.NAME);
            that.$store.commit('getstatus',response.data.data.STATUS);
            that.$Message.success('登录成功');
            that.$router.push('/examfirst');
          }
        })
      }
      },

    },
  }
</script>

<style  scoped>
  .backgroundWrapper{
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-around;
    align-items: center;
    z-index: 10;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #2b81af;
    background-size: cover;
    zoom: 1;
  }
  .LoginBox{
    width: 320px;
    height: 400px;
    float: right;
    padding-top: 20px;
    border-radius: 12px;
    background: rgba(255,255,255,0.50);
  }
  .LoginTitle{
    width: 240px;
    font-size: 38px;
    font-family: "Hiragino Sans GB";
    color: #464c5b;
    margin: 30px auto 20px;
    text-align: center;
  }
  .InputWrapper{
    width: 320px;
  }
.ButtonsWrapper{
  width: 100%;
  text-align: center;
  height: 80px;
  margin-top: 40px;
  /*margin: -10px auto 0;*/
}
.ButtonWrapper{
  float: right;
  width: 100px;
  margin-right: 40px;
  height: 40px;
}
  .ContentInputWarpper{
    width: 240px;
    height: 40px;
    margin: 10px auto 10px;
  }
  .content{
    font-family: "Hiragino Sans GB";
    float: left;
    width: 55px;
    font-weight: bolder;
    font-size: 14px;
    text-align: right;
    line-height: 30px;
    vertical-align: center;
    color: #464c5b;
  }
  .Input{
    width: 180px;
    float: right;
  }
  .backgroundtitle{
    float: left;
    text-align: right;
    font-size: 50px;
    font-family: "黑体";
    color: #FFF;
  }
</style>
