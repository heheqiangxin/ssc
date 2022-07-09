<template>
  <div class="costs_article">
    <div class="buttonBox">
      <div class="buttonBoxLeft">
        <button class="producedButton" @click="searchButtonClick">查询</button>
        <button class="searchButton" @click="toCostIncreate">新增</button>
      </div>
      <button class="importButton">导出</button>
    </div>
    <div class="dialog">
      <el-dialog
        title="选择的查询条件"
        :visible.sync="dialogChooseVisible"
        width="60%"
        :before-close="handleClose"
      >
        <el-table :data="inputsValues">
          <el-table-column
            v-for="item in eltableTitle"
            :key="item.id"
            :property="item.prop"
            :label="item.name"
            :width="item.width"
          ></el-table-column>
        </el-table>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogChooseVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogChooseVisible = false"
            >确 定
          </el-button>
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
    </div>
    <div class="searchBox">
      <costs-search-input></costs-search-input>
    </div>
    <div class="tableBox">
      <costs-table></costs-table>
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
import costsSearchInput from './costs-search-input.vue'
import CostsTable from './costs-table.vue'
export default {
  components: { costsSearchInput, CostsTable },
  data() {
    return {
      currentPage: 1,
      dialogChooseVisible: false,
      dialogTimeVisible: false,
      inputsValues: [],
      eltableTitle:[
        {
          name: "结算日期",
          width: "140",
          prop: "date",
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
          name: "单据编号",
          width: "140",
          prop: "documentNumber",
        },
        {
          name: "类型",
          width: "80",
          prop: "type",
        }
      ],
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    handleClose(done) {
      this.$confirm('确认关闭?')
        .then(() => {
          done()
        })
        .catch(() => {})
    },
    searchButtonClick() {
      this.inputsValues = [this.selectValue]
      if (this.$store.state.costs.selectValue.date !== '') {
        this.dialogChooseVisible = true
      } else {
        this.dialogTimeVisible = true
      }
    },
    toCostIncreate(){
      this.$store.commit('costIncreate')
    }
  },
  computed: {
    selectValue() {
      return this.$store.state.costs.selectValue
    },
  },
}
</script>

<style scoped>
.costs_article {
  width: 98%;
  height: 96%;
  background: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.buttonBox {
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
  background: rgba(10, 105, 250, 1);
  border: 1px solid rgba(10, 105, 250, 1);
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
}
.buttonBox .searchButton {
  border: 1px solid rgba(10, 105, 250, 1);
  color: rgba(10, 105, 250, 1);
  background-color: rgba(255, 255, 255, 1);
  cursor: pointer;
}
.buttonBox .importButton {
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(216, 216, 216, 1);
  color: rgba(51, 51, 51, 1);
  margin-left: auto;
  cursor: pointer;
}
.costs_article .searchBox {
  height: 112px;
  width: 98%;
  background: rgba(247, 248, 250, 1);
}
.tableBox {
  width: 98%;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 16px;
}
.el-pagination {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
  padding-right: 16px;
}
.el-pagination .el-input {
  border-radius: 0 !important;
}
</style>
