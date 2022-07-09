<template>
  <div class="button-box">
    <el-button plain v-for="item in buttonValue" :key="item.id"> {{ item }}</el-button>
  </div>
</template>

<script>
export default {
  props: ['buttonValue'],
  data() {
    return {}
  },
}
</script>

<style scoped>
.button-box {
  height: 64px;
  align-items: center;
  background: rgba(255, 255, 255, 1);
}
.el-button {
  height: 32px;
  border-radius: 2px;
  border: 1px solid rgba(216, 216, 216, 1);
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: rgba(51, 51, 51, 1);
  font-family: PingFang SC;
  font-size: 14px;
  position: relative;
  left: 16px;
}
</style>
