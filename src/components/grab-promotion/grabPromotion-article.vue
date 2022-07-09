<template>
  <div class="grab-promotion">
    <back-click
      :exchangePromotionSpan="this.$store.state.exchangePromotionBack"
    ></back-click>
    <div class="button-box">
      <Button :buttonValue="buttonValue01"></Button>
      <Button :buttonValue="buttonValue02" class="button02"></Button>
    </div>
    <div class="input-box">
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
      </div>
    </div>
    <div class="table-box">
      <span class="span">促销规则</span>
      <grab-table
        :tableData="tableData"
        @increateClick="increateClick"
        @deleteClick="deleteClick"
        :tableTitle="tableTitle"
        :maxHeight="maxHeight"
      ></grab-table>
    </div>
    <div class="choose">
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
    <div class="box">
    <div class="table-box">
      <achives-table></achives-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="30"
        layout="total, sizes, prev, pager, next, jumper"
        :total="220"
        background=""
      >
      </el-pagination>
    </div></div>
  </div>
</template>    

<script>
import AchivesTable from "../achives-table.vue";
import backClick from "../back-click.vue";
import Button from "../button.vue";
import ExchangeDatepick from "../exchange-promotion/exchange-datepick.vue";
import InputDialog from "../exchange-promotion/input-dialog.vue";
import LongInput from "../exchange-promotion/long-input.vue";
import SelectInput from "../select-input.vue";
import TableChoose from "../table-choose.vue";
import GrabTable from "./grab-table.vue";
export default {
  components: {
    backClick,
    Button,
    SelectInput,
    ExchangeDatepick,
    LongInput,
    InputDialog,
    GrabTable,
    TableChoose,
    AchivesTable,
  },
  data() {
    return {
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
          width: "48%",
          spanValue: "活动名称",
          type: "text",
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
          spanValue: "循环规则",
          option: ["翻倍循环", "翻倍不循环", "不翻倍不循环"],
          type: "select",
        },
      ],
      tableTitle: [
        { prop: "fullPiece", name: "满件数", width: "280" },
        { prop: "totalPrice", name: "总价元", width: "128" },
      ],
      maxHeight: 150,
      tableData: [
        {
          order: "1",
          fullPiece: "满5件减一件满5件减一件",
          totalPrice: "2222.0000",
          show: false,
        },
      ],
      chooseData: ["商品范围", "时间"],
    };
  },
  methods: {
    increateClick(rowindex) {
      let newRow = {
        order: rowindex + 2,
        fullPiece: "",
        totalPrice: "",
        show: true,
      };
      let res = this.tableData;
      res.splice(rowindex + 1, 0, newRow);
      for (let i = rowindex + 2; i < res.length; i++) {
        res[i].order = parseInt(res[i].order) + 1;
      }
    },
    deleteClick(rowindex) {
      if (rowindex != 0) {
        this.tableData.splice(rowindex, 1);
        let res = this.tableData;
        for (let i = rowindex; i < res.length; i++) {
          res[i].order = parseInt(res[i].order) - 1;
        }
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style scoped>
.grab-promotion {
  width: 98%;
  height: 96%;
  background: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 98%;
  height: 112px;
  background: rgba(247, 248, 250, 1);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
}
.box{
    width: 100%;
  background: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
.table-box {
  width: 98%;
}
.span {
  display: block;
  width: 56px;
  height: 20px;
  color: rgba(51, 51, 51, 1);
  font-family: PingFang SC;
  font-weight: bold;
  font-size: 14px;
  margin: 16px 0 16px 0;
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
.el-pagination {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 16px;
}
</style>