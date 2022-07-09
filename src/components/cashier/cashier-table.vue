<template>
  <div class="cashier-table">
    <el-table
      :row-style="{ color: 'rgba(51, 51, 51, 1)', height: '50px' }"
      :cell-style="{ padding: '0' }"
      ref="filterTable"
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
      <el-table-column prop="order" label="序号" width="60"> </el-table-column>
      <el-table-column
        prop="date"
        label="收银员编码"
        width="252"
        column-key="date"
        :filters="[
          { text: '2016-05-01', value: '2016-05-01' },
          { text: '2016-05-02', value: '2016-05-02' },
          { text: '2016-05-03', value: '2016-05-03' },
          { text: '2016-05-04', value: '2016-05-04' },
        ]"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column prop="name" label="收银员姓名" width="278">
      </el-table-column>
      <el-table-column
        prop="address"
        width="292"
        label="状态"
        :formatter="formatter"
      >
      </el-table-column>
      <el-table-column
        prop="tag"
        label="所属机构"
        :filters="[
          { text: 'windows', value: 'windows' },
          { text: 'linux', value: 'linux' },
        ]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="70">
        <template slot="header">
          <div class="set">
            <div class="line"></div>
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
      tableData: [
        {
          order: "1",
          date: "2016-05-02",
          name: "[201]武汉店",
          address: "正常",
          tag: "windows",
        },
        {
          order: "2",
          date: "2016-05-04",
          name: "[201]武汉店",
          address: "异常",
          tag: "windows",
        },
      ],
      maxheight: window.innerHeight - 300,
    };
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        this.maxheight = window.innerHeight - 300;
      })();
    };
  },
  methods: {
    formatter(row, column) {
      console.log(column);
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
  },
};
</script>

<style scoped>
.set {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.line {
  width: 1px;
  height: 44px;
  background: linear-gradient(
    180deg,
    rgba(227, 232, 239, 0) 0%,
    rgba(184, 188, 194, 1) 48.88%,
    rgba(194, 205, 218, 0) 100%
  );
}
.img {
  width: 49px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>