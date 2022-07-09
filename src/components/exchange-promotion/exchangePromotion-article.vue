<template>
  <div class="exchange-promotion">
    <back-click
      :exchangePromotionSpan="this.$store.state.exchangePromotionBack"
    ></back-click>
    <div class="button-box">
      <Button :buttonValue="buttonValue01"></Button>
      <Button :buttonValue="buttonValue02" class="button02"></Button>
    </div>
    <div class="input-box">
      <div class="input">
        <div
          v-for="item in selectValue"
          :key="item.id"
          :style="{ width: item.width }"
        >
          <select-input
            v-if="item.type === 'select'"
            :selectValue="item"
          ></select-input>
          <exchange-datepick
            v-else-if="item.type === 'date'"
            :spanValue="item.spanValue"
          ></exchange-datepick>
          <long-input
            v-else-if="item.type === 'text'"
            :selectValue="item"
          ></long-input>
          <input-dialog
            v-else-if="item.type === 'dialog'"
            :selectValue="item"
          ></input-dialog>
          <check-box v-else :selectValue="item"></check-box>
        </div>
      </div>
    </div>
    <div class="increate-button-box">
      <span class="increate-span">促销规则</span>
      <el-button plain class="increate-button" @click="increateLadder"
        >新增阶梯</el-button
      >
    </div>
    <new-ladder
      :ladderDate="item"
      v-for="(item, index) in ladderDate"
      :key="item.id"
      @deleteLadder="deleteLadder(index)"
      :itemIndex="index"
      @increateClick="increateClick"
      @deleteClick="deleteClick"
    ></new-ladder>
    <div class="choose" @click.stop="hidden">
      <div class="table-choose">
        <div class="table-button">
          <table-choose :buttonData="chooseData"></table-choose>
        </div>
        <div class="table-icon">
          <img src="@/assets/ladder-icon01.svg" id="ladder-icon01" />
          <label for="ladder-icon01" class="ladder-label">选择商品</label>
          <img src="@/assets/ladder-icon02.svg" id="ladder-icon02" />
          <label for="ladder-icon02" class="ladder-label">导入</label>
          <img src="@/assets/ladder-icon03.svg" id="ladder-icon03" />
          <label for="ladder-icon03" class="ladder-label">批量修改</label>
        </div>
      </div>
    </div>
    <choose-table
      :tableData="ChooseTableData"
      @increateClick="increateClick01"
      @deleteClick="deleteClick01"
    ></choose-table>
    <div class="foot-box"></div>
  </div>
</template>

<script>
import backClick from "../back-click.vue";
import Button from "../button.vue";
import SelectInput from "../select-input.vue";
import TableChoose from "../table-choose.vue";
import CheckBox from "./check-box.vue";
import ChooseTable from "./choose-table.vue";
import ExchangeDatepick from "./exchange-datepick.vue";
import InputDialog from "./input-dialog.vue";
import LongInput from "./long-input.vue";
import NewLadder from "./new-ladder.vue";
export default {
  components: {
    backClick,
    Button,
    ExchangeDatepick,
    SelectInput,
    LongInput,
    InputDialog,
    CheckBox,
    NewLadder,
    TableChoose,
    ChooseTable,
  },
  data() {
    return {
      ChooseTableData: [
        {
          order: "1",
          commodityCode: "11111",
          commodityBarCode: "222222",
          tradeName:
            "大容量水杯大容量水杯大容量水杯大容量水杯大容量水杯大容量水杯",
          unit: "瓶",
          purchasePrice: "200.0000",
          retailPrice: "201.0000",
          promotionPrice: "",
          replacementPrice: "",
          replacementNumber: "",
          supplierDiscount: "",
          show: false,
        },
        {
          order: "2",
          commodityCode: "11111",
          commodityBarCode: "222222",
          tradeName:
            "大容量水杯大容量水杯大容量水杯大容量水杯大容量水杯大容量水杯",
          unit: "瓶",
          purchasePrice: "200.0000",
          retailPrice: "201.0000",
          promotionPrice: "",
          replacementPrice: "",
          replacementNumber: "",
          supplierDiscount: "",
          show: false,
        },
        {
          order: "3",
          commodityCode: "11111",
          commodityBarCode: "222222",
          tradeName:
            "大容量水杯大容量水杯大容量水杯大容量水杯大容量水杯大容量水杯",
          unit: "瓶",
          purchasePrice: "200.0000",
          retailPrice: "201.0000",
          promotionPrice: "",
          replacementPrice: "",
          replacementNumber: "",
          supplierDiscount: "",
          show: false,
        },
        {
          order: "4",
          commodityCode: "11111",
          commodityBarCode: "222222",
          tradeName:
            "大容量水杯大容量水杯大容量水杯大容量水杯大容量水杯大容量水杯",
          unit: "瓶",
          purchasePrice: "200.0000",
          retailPrice: "201.0000",
          promotionPrice: "",
          replacementPrice: "",
          replacementNumber: "",
          supplierDiscount: "",
          show: false,
        },
        {
          order: "5",
          commodityCode: "11111",
          commodityBarCode: "222222",
          tradeName:
            "大容量水杯大容量水杯大容量水杯大容量水杯大容量水杯大容量水杯",
          unit: "瓶",
          purchasePrice: "200.0000",
          retailPrice: "201.0000",
          promotionPrice: "",
          replacementPrice: "",
          replacementNumber: "",
          supplierDiscount: "",
          show: false,
        },
      ],
      chooseData: ["商品范围", "时间"],
      buttonValue01: [
        "新增",
        "保存",
        "审核",
        "延期",
        "终止",
        "复制",
        "删除",
        "上一条",
        "下一条",
      ],
      buttonValue02: ["打印", "导出"],
      selectValue: [
        {
          width: "24%",
          spanValue: "活动日期",
          type: "date",
        },
        {
          width: "24%",
          spanValue: "机构范围",
          dialogTitle: "选择机构",
          placeholder: "机构编码/机构名称",
          data: [
            {
              id: 1,
              label: "[%]所有门店",
              children: [
                {
                  id: 3,
                  label: "[01]华中区",
                  children: [
                    { id: 5, label: "[201]武汉店" },
                    { id: 4, label: "[202]郑州店" },
                  ],
                },
                {
                  id: 2,
                  label: "[02]华南区",
                  children: [{ id: 6, label: "[202]福州店" }],
                },
              ],
            },
          ],
          type: "dialog",
        },
        {
          width: "24%",
          spanValue: "消费群体",
          dialogTitle: "选择会员类别",
          placeholder: "类别编码/类别名称",
          data: [
            { id: 1, label: "[ALL]所有人" },
            { id: 2, label: "[HALL]所有会员" },
            { id: 3, label: "[NALL]所有非会员" },
            {
              id: 4,
              label: "会员类型",
              children: [
                { id: 5, label: "[01]银卡会员" },
                { id: 6, label: "[02]金卡会员" },
                { id: 7, label: "[03]铂金会员" },
              ],
            },
          ],
          type: "dialog",
        },
        {
          width: "24%",
          spanValue: "促销维度",
          option: ["商品", "品类+品牌", "品牌", "品类", "全场"],
          type: "select",
        },
        {
          width: "24%",
          spanValue: "是否积分",
          option: ["积分", "不积分"],
          type: "select",
        },
        {
          width: "24%",
          spanValue: "特价商品",
          option: ["参与", "不参与"],
          type: "select",
        },
        {
          width: "48%",
          spanValue: "特价商品",
          type: "text",
        },
        {
          width: "24%",
          spanValue: "循环规则",
          option: ["翻倍循环", "翻倍不循环", "不翻倍不循环"],
          type: "select",
        },
        {
          width: "24%",
          spanValue: "赠送规则",
          option: ["满金额赠送", "满件数赠送"],
          type: "check",
        },
        {
          width: "24%",
          spanValue: "赠送方式",
          option: ["任选N件", "全部赠送"],
          type: "check",
        },
      ],
      ladderDate: [
        {
          index: 1,
          tableData: [
            {
              order: "1",
              commodityCode: "11111",
              commodityBarCode: "222222",
              tradeName:
                "大容量水杯大容量水杯大容量水杯大容量水杯大容量水杯大容量水杯",
              unit: "瓶",
              purchasePrice: "200.0000",
              retailPrice: "201.0000",
              promotionPrice: "",
              replacementPrice: "",
              replacementNumber: "",
              supplierDiscount: "",
              show: false,
            },
            {
              order: "2",
              commodityCode: "11111",
              commodityBarCode: "222222",
              tradeName:
                "大容量水杯大容量水杯大容量水杯大容量水杯大容量水杯大容量水杯",
              unit: "瓶",
              purchasePrice: "200.0000",
              retailPrice: "201.0000",
              promotionPrice: "",
              replacementPrice: "",
              replacementNumber: "",
              supplierDiscount: "",
              show: false,
            },
          ],
        },
      ],
      newData: {
        index: 1,
        tableData: [
          {
            order: "1",
            commodityCode: "",
            commodityBarCode: "",
            tradeName: "",
            unit: "",
            purchasePrice: "",
            retailPrice: "",
            promotionPrice: "",
            replacementPrice: "",
            replacementNumber: "",
            supplierDiscount: "",
            show: false,
          },
        ],
      },
    };
  },
  methods: {
    hidden() {
      this.$children[16].hidden();
    },
    increateLadder() {
      let res = {
        index: 1,
        tableData: [
          {
            order: "1",
            commodityCode: "",
            commodityBarCode: "",
            tradeName: "",
            unit: "",
            purchasePrice: "",
            retailPrice: "",
            promotionPrice: "",
            replacementPrice: "",
            replacementNumber: "",
            supplierDiscount: "",
            show: false,
          },
        ],
      };
      if (this.newData.index >= this.ladderDate.length) {
        res.index = this.newData.index + 1;
        this.newData.index = this.ladderDate.length + 1;
        this.ladderDate.push(res);
      }
    },
    deleteLadder(index) {
      this.ladderDate.splice(index, 1);
    },
    increateClick(rowindex, ladderIndex) {
      let newRow = {
        order: rowindex + 2,
        commodityCode: "",
        commodityBarCode: "",
        tradeName: "",
        unit: "",
        purchasePrice: "",
        retailPrice: "",
        promotionPrice: "",
        replacementPrice: "",
        replacementNumber: "",
        supplierDiscount: "",
        show: true,
      };
      let res = this.ladderDate[ladderIndex].tableData;
      res.splice(rowindex + 1, 0, newRow);
      for (let i = rowindex + 2; i < res.length; i++) {
        res[i].order = parseInt(res[i].order) + 1;
      }
    },
    deleteClick(rowindex, ladderIndex) {
      console.log(rowindex, ladderIndex);
      if (rowindex != 0) {
        this.ladderDate[ladderIndex].tableData.splice(rowindex, 1);
        let res = this.ladderDate[ladderIndex].tableData;
        for (let i = rowindex; i < res.length; i++) {
          res[i].order = parseInt(res[i].order) - 1;
        }
      }
    },
    increateClick01(rowindex) {
      let newRow = {
        order: rowindex + 2,
        commodityCode: "",
        commodityBarCode: "",
        tradeName: "",
        unit: "",
        purchasePrice: "",
        retailPrice: "",
        promotionPrice: "",
        replacementPrice: "",
        replacementNumber: "",
        supplierDiscount: "",
        show: true,
      };
      let res = this.ChooseTableData;
      res.splice(rowindex + 1, 0, newRow);
      for (let i = rowindex + 2; i < res.length; i++) {
        res[i].order = parseInt(res[i].order) + 1;
      }
    },
    deleteClick01(rowindex) {
      if (rowindex != 0) {
        this.ChooseTableData.splice(rowindex, 1);
        let res = this.ChooseTableData;
        for (let i = rowindex; i < res.length; i++) {
          res[i].order = parseInt(res[i].order) - 1;
        }
      }
    },
  },
};
</script>

<style scoped>
.exchange-promotion {
  width: 98%;
  height: 96%;
  background: rgba(242, 243, 245, 1);
  display: flex;
  flex-direction: column;
}
.button-box {
  display: flex;
  width: 100%;
}
.button02 {
  width: 20%;
  justify-content: center;
}
.input-box {
  width: 100%;
  height: 160px;
  background: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input {
  width: 98%;
  height: 160px;
  background: rgba(247, 248, 250, 1);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.increate-button-box {
  width: 100%;
  height: 52px;
  background-color: rgba(255, 255, 255, 1);
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.increate-span {
  height: 20px;
  color: rgba(51, 51, 51, 1);
  font-family: PingFang SC;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  left: 16px;
}
.increate-button {
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
  right: 23px;
}
.foot-box {
  width: 100%;
  height: 16px;
  background: rgba(242, 243, 245, 1);
  flex-grow: 0;
  flex-shrink: 0;
}
.choose {
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  padding-bottom: 16px;
}
.table-choose {
  width: 98%;
  display: flex;
}
.table-button,
.table-icon {
  width: 50%;
  height: 100%;
}
.table-icon {
  display: flex;
  align-items: center;
  justify-content: right;
  border-bottom: 1px solid rgba(232, 232, 232, 1);
}
.ladder-label {
  color: rgba(102, 102, 102, 1);
  font-family: PingFang SC;
  font-size: 14px;
  margin: 0 16px 0 6px;
}
</style>
