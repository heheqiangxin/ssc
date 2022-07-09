<template>
  <div class="show-data">
    <div class="data-box" v-for="item in data" :key="item.id">
      <span>{{ item.title }}：</span
      >
      <input :placeholder="item.placeholder" :disabled="true" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [{ title: '单据编号', placeholder: '20220100545555' },
      { title: '单据类型', placeholder: '销售' },
      { title: '销售日期', placeholder: '2021-10-11 17:59:59' },
      { title: '单据状态', placeholder: '已处理' },
      { title: '销售渠道', placeholder: '线上' },
      { title: '会员类别', placeholder: '101' },
      { title: '会员卡号', placeholder: '101' },
      { title: '会员姓名', placeholder: '101' },
      { title: '机构', placeholder: '[202]武汉店' },
      { title: '收银员号', placeholder: '[0088]张三' },
      { title: '退货原单号', placeholder: '101' },
      { title: '应付金额', placeholder: '101.0000' },
      { title: '实付金额', placeholder: '101.0000' },
      { title: '找零', placeholder: '101.0000' },
      { title: '收银损溢', placeholder: '101.0000' },
      { title: '商城订单号', placeholder: '101' },
      { title: '享钱商户单号', placeholder: '101' },],
    }
  },
}
</script>

<style scoped>
.show-data {
  width: 100%;
  height: 100%;
  background: rgba(247, 248, 250, 1);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.data-box {
  width: 25%;
  height: 32px;
  display: flex;
  align-items: center;
}
span {
  width: 27%;
  display: inline-block;
  text-align: right;
  color: rgba(51, 51, 51, 1);
  font-family: PingFang SC;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
input {
  width: 64%;
  height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 10px;
}
input:hover{
  cursor:not-allowed;
}
</style>
