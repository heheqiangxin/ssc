<template>
  <div class="showdata-box">
    <div class="showdata-top">
      <div class="top-box" v-for="topitem in topdata" :key="topitem.id">
        <span>{{ topitem.title }}</span
        >:
        <input :placeholder="topitem.placeholder" :disabled="true" />
      </div>
    </div>
    <div class="showdata-middle">
      <div class="middle-box" v-for="middleitem in middledata" :key="middleitem.id">
        <span>{{ middleitem.title }}</span
        >:
        <input :placeholder="middleitem.placeholder" :disabled="true" />
      </div>
    </div>
    <div class="showdata-bottom">
      <div class="bottom-box" v-for="bottomitem in bottomdata" :key="bottomitem.id">
        <span>{{ bottomitem.title }}</span
        >:
        <input :placeholder="bottomitem.placeholder" :disabled="true" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topdata: [
        { title: '核算主体', placeholder: '合同对应的核算主体' },
        { title: '供应商', placeholder: '[0001]XXX供应商' },
        { title: '合同号', placeholder: '显示结算的合同号' },
        { title: '部门', placeholder: '合同对应的部门' },
        { title: '结算方式', placeholder: '合同设置的结算方式' },
      ],
      middledata: [
        { title: '开户银行', placeholder: '供应商档案中的纳税信息' },
        { title: '开户账号', placeholder: '供应商档案中的纳税信息' },
        { title: '税号', placeholder: '供应商档案中的纳税信息' },
        { title: '计划付款日', placeholder: '结算日期当月对应的付款日期' },
      ],
      bottomdata: [
        { title: '销售收入', placeholder: '结算明细的实际销售收入合计' },
        { title: '销售成本', placeholder: '结算明细的销售成本合计' },
        { title: '销售调整', placeholder: '结算明细的含税调整合计' },
        { title: '折扣承担', placeholder: '结算明细的折扣承担合计' },
        { title: '销售提成', placeholder: '结算明细的销售提成合计' },
        { title: '损溢金额', placeholder: '勾选了损溢后显示合计,没有则为0' },
        { title: '铺底金额', placeholder: '合同设置的铺底金额' },
        {
          title: '库存结余金额',
          placeholder: '结算日期当天该供应商的期末库存金额',
        },
        { title: '库存比', placeholder: '合同设置的库存比率' },
        {
          title: '应付金额',
          placeholder: '抽单金额-损溢金额-铺底金额-库存结余金额*库存比',
        },
        { title: '票减账扣费用', placeholder: '票减账扣类费用合计' },
        { title: '开票金额', placeholder: '应付金额-票减费用' },
        { title: '非票减账扣费用', placeholder: '非票减账扣费用金额合计' },
        { title: '现金费用', placeholder: '现金类费用金额合计' },
        { title: '实际应付', placeholder: '开票金额-非票减账扣费用' },
        { title: '人民币大写', placeholder: '实际应付的大写' },
      ],
    }
  },
}
</script>

<style scoped>
.showdata-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.showdata-top {
  height: 111.5px;
  width: 96%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.top-box,
.middle-box,
.bottom-box {
  width: 25%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
span {
  width: 20%;
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
  width: 68%;
  height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 10px;
  margin-left: 10px;
}
input:hover{
  cursor:not-allowed;
}
.showdata-middle {
  height: 63px;
  width: 96%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-top: 1px dashed rgba(226, 229, 239, 1);
  border-bottom: 1px dashed rgba(226, 229, 239, 1);
}
.showdata-bottom {
  height: 207.5px;
  width: 96%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
</style>
