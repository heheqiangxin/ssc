<template>
  <div class="buttonBox">
    <div class="buttonBoxLeft">
      <button class="increateButton" @click="toCashierIncreate">新增</button>
      <button class="searchButton">查询</button>
    </div>
    <button class="importButton">导出</button>
  </div>
</template>

<script>
export default {
  methods:{
    toCashierIncreate(){
      this.$store.commit('cashierIncreate')
    }
  }
};
</script>

<style scoped>
.buttonBox {
  height: 60px;
  width: 98%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.buttonBoxLeft {
  display: flex;
  justify-content: space-around;
  width: 140px;
}
.buttonBox button {
  width: 64px;
  height: 32px;
  border-radius: 2px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: PingFang SC;
  font-size: 14px;
}
.buttonBox .searchButton {
  border: 1px solid rgba(10, 105, 250, 1);
  color: rgba(10, 105, 250, 1);
  background-color: rgba(255, 255, 255, 1);
  cursor: pointer;
}
.buttonBox .increateButton {
  background: rgba(10, 105, 250, 1);
  border: 1px solid rgba(10, 105, 250, 1);
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
}
.buttonBox .importButton {
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(216, 216, 216, 1);
  color: rgba(51, 51, 51, 1);
  margin-left: auto;
}
</style>