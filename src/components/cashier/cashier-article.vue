<template>
  <div class="cashier-box">
    <button-box></button-box>
    <div class="input-box">
      <div
        v-for="item in selectValue"
        :key="item.id"
        :style="{ width: item.width }"
      >
        <long-input
          v-if="item.type === 'text'"
          :selectValue="item"
        ></long-input>
        <input-dialog
          v-else-if="item.type === 'dialog'"
          :selectValue="item"
        ></input-dialog>
        <check-box v-else :selectValue="item"></check-box>
      </div>
    </div>
    <div class="tableBox">
      <cashier-table></cashier-table>
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
    </div>
  </div>
</template>

<script>
import CheckBox from "../exchange-promotion/check-box.vue";
import InputDialog from "../exchange-promotion/input-dialog.vue";
import LongInput from "../exchange-promotion/long-input.vue";
import buttonBox from "./button-box.vue";
import CashierTable from "./cashier-table.vue";
export default {
  components: { buttonBox, LongInput, CheckBox, InputDialog, CashierTable },
  data() {
    return {
      currentPage: 1,
      selectValue: [
        {
          width: "25%",
          spanValue: "收银员编码",
          type: "text",
        },
        {
          width: "25%",
          spanValue: "收银员姓名",
          type: "text",
        },
        {
          width: "25%",
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
          width: "30%",
          spanValue: "赠送方式",
          option: ["全部", "正常", "停用"],
          type: "check",
        },
      ],
    };
  },
  methods: {
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
.cashier-box {
  width: 98%;
  height: 96%;
  background: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input-box {
  width: 98%;
  height: 64px;
  background: rgba(247, 248, 250, 1);
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.tableBox {
  width: 98%;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.el-pagination {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 16px;
}
.el-pagination .el-input {
  border-radius: 0 !important;
}
</style>