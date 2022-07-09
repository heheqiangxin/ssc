<template>
  <div class="exchange-datepick">
    <span class="demonstration">
      <div class="asterisk">*</div>
      {{spanValue}}:</span
    >
    <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    >
    </el-date-picker>
  </div>
</template>

<script>
export default {
    props:['spanValue'],
  data() {
    return {
      value1: '',
      selfstyle: {
        flex: '1',
      },
    }
  },
}
</script>

<style scoped>
.exchange-datepick {
  display: flex;
  align-items: center;
  width: 100%;
  height: 32px;
}
.asterisk {
  display: inline;
  color: red;
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
</style>
