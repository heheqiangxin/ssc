<template>
  <div class="select-input" >
    <span>{{ selectValue.spanValue }}:</span>
    <input type="text" placeholder="请输入" />
  </div>
</template>

<script>
export default {
  props: ['selectValue'],
}
</script>

<style scoped>
.select-input {
  display: flex;
  align-items: center;
  width: 100%;
  height: 32px;
}
span {
  width: 90px;
  height: 20px;
  text-align: right;
  color: rgba(51, 51, 51, 1);
  font-family: PingFang SC;
  font-size: 14px;
  padding-right: 10px;
  flex-grow: 0;
  flex-shrink: 0;
}
input {
  flex: 1;
  height: 32px;
  border-radius: 2px;
  border: 1px solid rgba(216, 216, 216, 1);
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  padding-left: 8px;
}
</style>
