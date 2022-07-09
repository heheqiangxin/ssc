<template>
  <div class="choose-table-box" @click.stop="hidden">
    <div class="choose-table">
      <ladder-table
        :tableData="tableData"
        @increateClick="increateClick"
        @deleteClick="deleteClick"
        :tableTitle="tableTitle"
        :maxHeight="maxHeight"
      ></ladder-table>
    </div>
  </div>
</template>

<script>
import LadderTable from './ladder-table.vue'
export default {
  components: { LadderTable },
  props: ['tableData'],
  data() {
    return {
      tableTitle: [
        { prop: 'commodityCode', name: '商品编码', width: '128' },
        { prop: 'commodityBarCode', name: '商品条码', width: '189' },
        { prop: 'tradeName', name: '商品名称', width: '485' },
        { prop: 'unit', name: '单位', width: '146' },
        { prop: 'purchasePrice', name: '参考进价', width: '220' },
        { prop: 'retailPrice', name: '零售价' },
        // { prop: 'promotionPrice', name: '促销价', width: '120' },
        // { prop: 'replacementPrice', name: '换购单价', width: '152' },
        // { prop: 'replacementNumber', name: '换购数量', width: '152' },
        // { prop: 'replacementPrice', name: '换购单价', width: '152' },
        // { prop: 'replacementNumber', name: '换购数量', width: '152' },
        // { prop: 'supplierDiscount', name: '供应商折扣承担(%)', width: '152' },
      ],
      maxHeight: 350,
    }
  },
  methods: {
    hidden() {
      this.$children[0].hid()
    },
    increateClick(rowindex) {
      this.$emit('increateClick', rowindex)
    },
    deleteClick(rowindex) {
      this.$emit('deleteClick', rowindex)
    },
  },
}
</script>

<style scoped>
.choose-table-box {
  width: 100%;
  background: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: center;
  flex-grow: 0;
  flex-shrink: 0;
  padding-bottom: 16px;
}
.choose-table {
  width: 98%;
  border: 1px solid rgba(216, 216, 216, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
