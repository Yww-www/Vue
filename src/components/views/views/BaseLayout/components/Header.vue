<template>
  <header class="header">
    <div class="logo">
       <!-- <img src="../../../assets/img/login_logo.png" alt="登录图片"> -->
    </div>
    <div class="link-btn">王小红</div>
  </header>
</template>

<script>
export default {
  name: '',
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

  }
}
</script>

<style  scoped>
.header{
  height: 60px;
  background: #fff;
  box-shadow: 0px 4px 8px 0px rgba(102, 102, 102, 0.13);
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding:0 30px;
  .logo{
    img{
      width:40px;
      height: 40px;
    }

  }
}

</style>
