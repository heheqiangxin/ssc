<template>
  <div class="article">
    <div class="buttonBox">
      <div class="buttonBoxLeft">
        <button class="producedButton">生成</button>
        <button class="searchButton" @click="searchButtonClick">查询</button>
      </div>
      <button class="importButton">导出</button>
    </div>
    <el-dialog
      title="选择的查询条件"
      :visible.sync="dialogChooseVisible"
      width="60%"
      :before-close="handleClose"
    >
      <el-table :data="inputsValues">
        <el-table-column
          v-for='item in eltableTitle'
          :key='item.id'
          :property="item.prop"
          :label="item.name"
          :width="item.width"
        ></el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogChooseVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogChooseVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog
      title="查询条件"
      :visible.sync="dialogTimeVisible"
      width="40%"
      :before-close="handleClose"
    >
      <span>时间不能为空</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogTimeVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogTimeVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <div class="searchBox">
      <achives-search-input></achives-search-input>
    </div>
    <div class="tableChoose">
      <table-choose :buttonData="data" @tableName='tableName'></table-choose>
    </div>
    <div class="tableBox">
      <keep-alive>
          <component :is="currentTabComponent" :key="currentTabComponent"> </component
        ></keep-alive>
      <!-- <achives-table></achives-table> -->
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
import AchivesSearchInput from "../components/achives-search-input.vue";
import AchivesTable from "../components/achives-table.vue";
import TableChoose from "../components/table-choose.vue";
import ErrorMessageTable from './errorMessage-table.vue';

export default {
  components: { TableChoose, AchivesTable, AchivesSearchInput, ErrorMessageTable },
  data() {
    return {
      currentPage: 1,
      data: ["合同信息", "错误信息"],
      dialogChooseVisible: false,
      dialogTimeVisible: false,
      eltableTitle:[
        {
          name: "结算日期",
          width: "140",
          prop: "date",
        },
        {
          name: "核算主体",
          width: "100",
          prop: "account",
        },
        {
          name: "供应商",
          width: "140",
          prop: "supplier",
        },
         {
          name: "合同编号",
          width: "140",
          prop: "contractNumber",
        },
        {
          name: "部门",
          width: "140",
          prop: "department",
        },
        {
          name: "合同状态",
          width: "140",
          prop: "contractState",
        },
         {
          name: "经营状态",
          width: "",
          prop: "managementState",
        },
      ],
      inputsValues:[]
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
    searchButtonClick() {
      console.log(this.selectValue);
      this.inputsValues = [this.selectValue]
      if (this.$store.state.achives.selectValue.date !== "") {
        this.dialogChooseVisible = true;
      } else {
        this.dialogTimeVisible = true;
      }
    },
    tableName(index){
      this.$store.commit('tableChoose02',index)
    }
  },
  computed:{
    selectValue(){
      return this.$store.state.achives.selectValue
    },
    currentTabComponent() {
      return this.$store.state.tableChoose02 + '-table'
    },
  }
};
</script>

<style scoped>
.article {
  width: 98%;
  height: 96%;
  background: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.article .buttonBox {
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
.buttonBox .producedButton {
  border: 1px solid rgba(10, 105, 250, 1);
  color: rgba(10, 105, 250, 1);
  background-color: rgba(255, 255, 255, 1);
}
.buttonBox .searchButton {
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
.article .searchBox {
  height: 112px;
  width: 98%;
  background: rgba(247, 248, 250, 1);
  display: flex;
  align-items: center;
}
.tableChoose {
  width: 98%;
  height: 74px;
  display: flex;
  align-items: center;
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
