<template>
  <div class="tableList">
    <el-table
      :row-style="{ color: 'rgba(51, 51, 51, 1)', height: '50px' }"
      :cell-style="{ padding: '0' }"
      :data="tableData"
      style="width: 100%"
      :height="maxheight"
      :header-row-style="{ height: '50px' }"
      :header-cell-style="{
        background: 'rgba(247, 248, 250, 1)',
        color: 'rgba(51, 51, 51, 1)',
        padding: '0',
      }"
    >
      <el-table-column fixed type="selection" width="56"> </el-table-column>
      <el-table-column
        v-for="item in tableTitle"
        :key="item.id"
        :prop="item.prop"
        :label="item.name"
        :width="item.width"
      >
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="70">
        <template slot="header">
          <div class="set">
            <div class="img"><img src="@/assets/set.svg" /></div>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableTitle: [
        { prop: 'orderNumber', name: '序号', width: '50' },
        { prop: 'supplier', name: '供应商', width: '128' },
        { prop: 'contractNumber', name: '合同编号', width: '132' },
        { prop: 'error', name: '错误信息', width: '132' },
        { prop: 'icon', name: '', width: '' },
      ],
      tableData:[{
          orderNumber: '1',
          supplier: 'gn9090',
          contractNumber: '北京',
          error:'ssssssss',
          icon:''
      },
      {
          orderNumber: '2',
          supplier: 'gn9090',
          contractNumber: '北京',
          error:'ssssssss',
          icon:''
      },
      {
          orderNumber: '3',
          supplier: 'gn9090',
          contractNumber: '北京',
          error:'ssssssss',
          icon:''
      }]
    }
  },
}
</script>

<style scoped>
.tableList {
  flex: 1;
  overflow: auto;
  position: relative;
}
</style>
