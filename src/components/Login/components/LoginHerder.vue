<template>
  <header class="login-header">
    <div class="logo">
        <!-- <img src="../../../../assets/img/login_logo.png" alt="登录图片"> -->
    </div>
    <div class="link-btn">注册</div>
  </header>
</template>

<script>
  export default {
    name: 'LoginHeader',
    components: {

    },
    data () {
      return {

      };
    },
    computed: {

    },
    mounted() {

    },
    methods: {

    },
  }
</script>

<style  scoped>
.login-header{
  height: 60px;
  background: #fff;
  box-shadow: 0px 4px 8px 0px rgba(102, 102, 102, 0.13);
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding:0 30px;
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  .logo{
    img{
      width:40px;
      height: 40px;
    }

  }
}

</style>
