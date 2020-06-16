<template>
  <section class="login">
    <LoginHeader/>
    <div class="login-body">
      <div class="login-form-wrap">
        <el-form label-width="54px" class="login-form">
          <el-form-item label="用户名" prop="name">
            <el-input type="text" v-model="form.name" auto-complete="off" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="form.password" auto-complete="off" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handelLogin" class="wid80">登录</el-button>
          </el-form-item>
        </el-form>
      </div>

    </div>

  </section>
</template>

<script>
  import LoginHeader from '../../../../../../../bigwork/src/components/views/Login/components/LoginHerder';
  export default {
    name: 'Login',
    components: {
      LoginHeader,
    },
    data () {
      return {
        form:{
          name:'',
          password:''

        }

      };
    },
    computed: {


    },
    mounted() {

    },
    methods: {
      handelLogin(){
        this.$router.push({path:'/'})
      }
    },
  }
</script>

<style  scoped>
  .wid80{
    width: 80px;
  }
  .login{
    width: 100%;
    height: 100%;
  }
  .login-body{
    box-sizing: border-box;
    margin-top:60px;
    height: 100%;
    background-size: 100% 100%;
    position: relative;
  }
  .login-form-wrap{
    box-sizing: border-box;
    padding:50px;
    width:500px;
    height: 300px;
    background:#fff;
    position:absolute;
    top:50%;
    left:50%;
    margin-top:-150px;
    margin-left:-250px;
    border-radius: 4px;
    .login-form{
      width: 400px;
      padding-top:30px;
    }
  }

</style>
