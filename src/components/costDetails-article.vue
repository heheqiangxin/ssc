<template>
  <div class="cost-details-article">
    <div class="head-box">
      <div class="back-box">
        <div class="back-click" @click="backCosts">
          <img src="@/assets/back.svg" />
          <a @click.prevent="backCosts" href="" class="back-a-click"
            >返回代销结算单列表</a
          >
        </div>
        <span>代销结算单列表明细</span>
      </div>
      <div class="button-box">
        <cost-details-button></cost-details-button>
      </div>
      <div class="search-box">
        <div class="finishdata-box">
          <cost-details-finishdata></cost-details-finishdata>
        </div>
        <div class="showdata-box">
          <cost-details-showdata></cost-details-showdata>
        </div>
      </div>
      <div class="table-choose">
        <cost-details-table-choose></cost-details-table-choose>
      </div>
      <div class="table-box">
        <cost-details-table></cost-details-table>
      </div>
      <div class="pagination-box">
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
    <div class="foot-box"></div>
  </div>
</template>

<script>
import costDetailsButton from './costDetails-button.vue'
import CostDetailsFinishdata from './costDetails-finishdata.vue'
import CostDetailsShowdata from './costDetails-showdata.vue'
import CostDetailsTableChoose from './costDetails-table-choose.vue'
import CostDetailsTable from './costDetails-table.vue'
export default {
  components: { costDetailsButton, CostDetailsFinishdata, CostDetailsShowdata, CostDetailsTableChoose, CostDetailsTable },
  methods: {
    backCosts() {
      this.$store.commit('costs')
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
  },
  data(){
    return{
      currentPage: 1,
    }
  }
}
</script>

<style scoped>
.cost-details-article {
  width: 98%;
  height: 1206px;
  background: rgba(255, 255, 255, 1);
  position: absolute;
  top: 16px;
}
.head-box {
  height: 1190px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.back-box {
  width: 100%;
  height: 48px;
  border-bottom: 0.8px solid rgba(232, 232, 232, 1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(51, 51, 51, 1);
  font-family: PingFang SC;
  font-size: 16px;
}
.back-click {
  height: 48px;
  position: absolute;
  left: 16px;
  display: flex;
  align-items: center;
}
.back-a-click {
  text-decoration: none;
  color: rgba(51, 51, 51, 1);
}
.back-a-click:hover {
  color: skyblue;
}
.foot-box {
  width: 100%;
  height: 16px;
  background-color: rgba(242, 243, 245, 1);
}
.button-box{
  width: 100%;
  height: 64px;
}
.search-box{
  width: 98%;
  height: 432px;
  display: flex;
  flex-direction: column;
}
.finishdata-box{
  width: 100%;
  height: 48px;
}
.showdata-box{
  width: 100%;
  flex: 1;
  background: rgba(247, 248, 250, 1);
}
.table-choose{
  width: 98%;
  height: 42px;
  position: relative;
  top: 16px;
  border-bottom: 1px rgba(232, 232, 232, 1) solid;
}
.table-box{
  width: 98%;
  height: 500px;
  position: relative;
  top: 32px;
}
.pagination-box{
  width: 100%;
  height: 32px;
  position: absolute;
  bottom: 32px;
}
.el-pagination {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 22px;
}
</style>
