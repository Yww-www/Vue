<template>
  <a-descriptions title="考生信息" bordered>
    <a-descriptions-item label="考生姓名">
      {{this.$store.state.username}}
    </a-descriptions-item>
    <a-descriptions-item label="考生性别">
      男
    </a-descriptions-item>
    <a-descriptions-item label="准考证号">
      31701395
    </a-descriptions-item>
  </a-descriptions>
</template>
<script>
    export default {
        name: "desc"
    }
</script>

<style scoped>

</style>
