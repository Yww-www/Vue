<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        :default-active="defaultActive"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <router-link to='/Yidong'>
          <el-menu-item index="/Yidong">
            <i class="el-icon-location"></i>
            <span slot="title">移动数据</span>
          </el-menu-item>
        </router-link>
        <router-link to='/Liantong'>
          <el-menu-item index="/Liantong">
            <i class="el-icon-menu"></i>
            <span slot="title">联通数据</span>
          </el-menu-item>
        </router-link>
        <router-link to='/Dianxin'>
          <el-menu-item index="/Dianxin3">
            <i class="el-icon-document"></i>
            <span slot="title">电信数据</span>
          </el-menu-item>
        </router-link>
        <router-link to='/Aboutus'>
          <el-menu-item index="/Aboutus">
            <i class="el-icon-setting"></i>
            <span slot="title">关于我们</span>
          </el-menu-item>
        </router-link>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'AsideNav',
  components: {

  },
  data () {
    return {

    };
  },
  computed: {
    defaultActive(){
      return this.$route.path
    }

  },
  mounted() {

  },
  methods: {
    handleOpen(index) {
      console.log(index)
    },
    handleClose(index){
      console.log(index)
    }
  }
}
</script>

<style  scoped>
.aside-nav{
  height:100%; 
}

</style>
