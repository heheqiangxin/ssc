<template>
  <div class="retail-box">
    <retail-back :backData="backData"></retail-back>
    <div class="retail-showdata">
      <retail-showdata></retail-showdata>
    </div>
    <div class="table-choose">
      <table-choose :buttonData="buttonData" @tableName='tableName'></table-choose>
    </div>
    <div class="tableBox">
      <keep-alive>
          <component :is="currentTabComponent" :key="currentTabComponent"> </component
        ></keep-alive>
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
import TableChoose from '../table-choose.vue'
import PayDetailTable from './payDetail-table.vue'
import retailBack from './retail-back.vue'
import RetailShowdata from './retail-showdata.vue'
import RetailTable from './retail-table.vue'
export default {
  components: { retailBack, RetailShowdata, TableChoose, RetailTable, PayDetailTable },
  data() {
    return {
      backData: { clickData: '返回零售单查询', spanData: '零售单明细' },
      buttonData: ['单据列表', '支付明细'],
      currentPage: 1,
    }
  },
   methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    tableName(index){
      this.$store.commit('tableChoose01',index)
    }
   },
   computed:{
     currentTabComponent() {
      return this.$store.state.tableChoose01 + '-table'
    },
   }
}
</script>

<style scoped>
.retail-box {
  width: 98%;
  height: 96%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.retail-showdata {
  width: 98%;
  height: 244px;
  position: relative;
  top: 12px;
  flex-grow: 0;
  flex-shrink: 0;
}
.table-choose {
  width: 98%;
  height: 62px;
  display: flex;
  justify-content: center;
  position: relative;
  top: 16px;
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
</style>
