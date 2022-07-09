<template>
  <div class="ladder-table-box">
    <el-table
      :data="tableData"
      style="width: 100%"
      :header-cell-style="{
        background: 'rgba(247, 248, 250, 1)',
        color: 'rgba(51, 51, 51, 1)',
      }"
      :row-style="{
        height: '50px',
      }"
      :cell-style="{padding: '0'}"
      @row-dblclick="dbclick"
      :max-height="maxHeight"
    >
      <el-table-column prop="order" fixed="left" label="序号" width="50">
      </el-table-column>
      <el-table-column
        v-for="item in tableTitle"
        :key="item.id"
        :prop="item.prop"
        :label="item.name"
        :width="item.width"
        show-overflow-tooltip
      >
        <template slot-scope="scope">
          <el-input v-show="scope.row.show" v-model="scope.row[item.prop]"></el-input>
          <span v-show="!scope.row.show"> {{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="address" fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="increateClick(scope.$index)" type="text" size="small"
            >添加</el-button
          >
          <el-button type="text" size="small" @click="deleteClick(scope.$index)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  components: {},
  props: ['tableData','tableTitle','maxHeight'],
  data() {
    return {
      
    }
  },
  computed: {},
  methods: {
    dbclick(row, event, column) {
      console.log(event, column)
      row.show = !row.show
    },
    hid() {
      this.tableData.forEach((element) => {
        element.show = false
      })
    },
    increateClick(rowindex) {
      this.$emit('increateClick',rowindex)
    },
    deleteClick(rowindex) {
      this.$emit('deleteClick',rowindex)
    },
  },
}
</script>

<style scoped>
.ladder-table-box {
  width: 100%;
  border: 1px solid rgba(216, 216, 216, 1);
  display: flex;
  justify-content: center;
}
input {
  outline: none;
  border: 0;
  background-color: rgba(255, 255, 255, 1);
  width: 100%;
}
</style>
