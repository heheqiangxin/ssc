<template>
  <div class="button-box">
    <el-button plain v-for="item in buttonValue" :key="item.id">
      {{ item }}</el-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonValue: ['保存', '审核', '重获单据', '删除', '作废'],
    }
  },
}
</script>

<style scoped>
.button-box {
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
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
