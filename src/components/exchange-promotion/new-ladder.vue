<template>
  <div class="ladder-box">
    <div class="new-ladder">
      <div class="delete-ladder" @click.stop="hidden">
        <span class="delete-span">阶梯{{ itemIndex + 1 }}</span>
        <el-button plain class="delete-button" @click="deleteLadder()"
          >删除阶梯</el-button
        >
      </div>
      <div class="ladder-input-box" @click.stop="hidden">
        <div class="ladder-input">
          <div>
            <span class="input-span"><asterisk></asterisk> 满：</span>
            <input type="text" placeholder="全部" class="input" />
            <div class="input-right">元</div>
          </div>
          <div>
            <span class="input-span"> 送赠品：</span>
            <input type="text" class="input" />
            <div class="input-right">件</div>
          </div>
        </div>
        <div class="ladder-icon">
          <img src="@/assets/ladder-icon01.svg" id="ladder-icon01" />
          <label for="ladder-icon01" class="ladder-label">选择商品</label>
          <img src="@/assets/ladder-icon02.svg" id="ladder-icon02" />
          <label for="ladder-icon02" class="ladder-label">导入</label>
          <img src="@/assets/ladder-icon03.svg" id="ladder-icon03" />
          <label for="ladder-icon03" class="ladder-label">批量修改</label>
        </div>
      </div>
      <div class="ladder-table">
        <ladder-table
          :tableData="ladderDate.tableData"
          @increateClick="increateClick"
          @deleteClick="deleteClick"
          :tableTitle="tableTitle"
          :maxHeight="maxHeight"
        ></ladder-table>
      </div>
    </div>
  </div>
</template>

<script>
import asterisk from '../asterisk.vue'
import LadderTable from './ladder-table.vue'
export default {
  components: { asterisk, LadderTable },
  props: ['ladderDate', 'itemIndex'],
  data() {
    return {
      tableTitle: [
        { prop: 'commodityCode', name: '商品编码', width: '128' },
        { prop: 'commodityBarCode', name: '商品条码', width: '128' },
        { prop: 'tradeName', name: '商品名称', width: '280' },
        { prop: 'unit', name: '单位', width: '96' },
        { prop: 'purchasePrice', name: '参考进价', width: '120' },
        { prop: 'retailPrice', name: '零售价', width: '120' },
        { prop: 'promotionPrice', name: '促销价', width: '120' },
        { prop: 'replacementPrice', name: '换购单价', width: '152' },
        { prop: 'replacementNumber', name: '换购数量', width: '152' },
        { prop: 'replacementPrice', name: '换购单价', width: '152' },
        { prop: 'replacementNumber', name: '换购数量', width: '152' },
        { prop: 'supplierDiscount', name: '供应商折扣承担(%)', width: '152' },
      ],
      maxHeight:230
    }
  },
  methods: {
    hidden() {
      console.log(this.$children);
      this.$children[2].hid()
    },
    deleteLadder() {
      this.$emit('deleteLadder')
    },
    increateClick(rowindex) {
      let ladderIndex = this.itemIndex
      this.$emit('increateClick', rowindex, ladderIndex)
    },
    deleteClick(rowindex) {
      let ladderIndex = this.itemIndex
      this.$emit('deleteClick', rowindex, ladderIndex)
    },
  },
}
</script>

<style scoped>
.ladder-box {
  width: 100%;
  background: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: center;
  flex-grow: 0;
  flex-shrink: 0;
  padding-bottom: 16px;
}
.new-ladder {
  width: 98%;
  border: 1px solid rgba(216, 216, 216, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.delete-ladder {
  width: 100%;
  height: 58px;
  border-bottom: 1px solid rgba(216, 216, 216, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.delete-span {
  color: rgba(49, 53, 60, 1);
  font-family: PingFang SC;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  position: relative;
  left: 16px;
}
.delete-button {
  width: 92px;
  height: 32px;
  border-radius: 2px;
  border: 1px solid rgba(216, 216, 216, 1);
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(51, 51, 51, 1);
  font-family: PingFang SC;
  font-size: 14px;
  position: relative;
  right: 16px;
}
.ladder-input-box {
  width: 100%;
  height: 64px;
  display: flex;
}
.ladder-input,
.ladder-icon {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
}
.ladder-input > div {
  width: 42%;
  display: flex;
  align-items: center;
  position: relative;
}
.input-span {
  height: 20px;
  text-align: right;
  color: rgba(51, 51, 51, 1);
  font-family: PingFang SC;
  font-size: 14px;
  margin-left: 24px;
  white-space: nowrap;
}
.input {
  width: 100%;
  height: 32px;
  border-radius: 2px;
  border: 1px solid rgba(216, 216, 216, 1);
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  padding-left: 10px;
  padding-right: 36px;
}
.input-right {
  width: 18px;
  border-left: 2px solid rgba(200, 200, 200, 1);
  padding-left: 8px;
  font-family: PingFang SC;
  font-weight: 500;
  font-size: 14px;
  position: absolute;
  right: 8px;
}
.ladder-icon {
  justify-content: right;
}
.ladder-label {
  color: rgba(102, 102, 102, 1);
  font-family: PingFang SC;
  font-size: 14px;
  margin: 0 16px 0 6px;
}
.ladder-table {
  width: 98%;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
