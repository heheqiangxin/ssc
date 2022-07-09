<template>
  <div class="button_box">
    <span class="spanValue">{{ selectValue.spanValue }}:</span>
    <div class="select-box" v-for="item in selectValue.option" :key="item.id">
      <input type="radio" :value="item" class="radio" v-model="radioValue" :id="item"/>
      <label :for="item" class="radioValue">{{ item }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: ['selectValue'],
  data() {
    return {
      radioValue: this.selectValue.option[0],
    }
  },
}
</script>

<style scoped>
.button_box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.spanValue {
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
.select-box {
  flex: 1;
  height: 32px;
  display: flex;
  align-items: center;
}
.radioValue {
  width: 70px;
  height: 20px;
  color: rgba(51, 51, 51, 1);
  font-family: PingFang SC;
  font-size: 14px;
  padding-left: 8px;
}
</style>
