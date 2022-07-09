<template>
  <div class="cashierIncreate-box">
    <cashier-increate-back :backData="backData"></cashier-increate-back>
    <div class="button-box"><Button :buttonValue="buttonValue"></Button></div>
  </div>
</template>

<script>
import cashierIncreateBack from "./cashierIncreate-back.vue";
import Button from "../button.vue";
export default {
  components: { cashierIncreateBack, Button },
  data() {
    return {
      backData: { clickData: "返回收银员信息", spanData: "收银员信息详情" },
      buttonValue: ["新增", "保存", "权限复制", "删除"],
    };
  },
};
</script>

<style scoped>
.cashierIncreate-box {
  width: 98%;
  height: 96%;
  background-color: rgba(242, 243, 245, 1);
  display: flex;
  flex-direction: column;
}
.button-box {
  display: flex;
  width: 100%;
}
</style>