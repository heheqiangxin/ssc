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
      <el-table-column fixed="right" label="操作" width="70" >
        <template slot="header">
          <div class="set">
            <!-- <div class="line"></div> -->
            <div class="img"><img src="@/assets/set.svg" /></div>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <!-- <table cellspacing="0" class="achivesTable">
      <tr class="th">
        <td v-for="(thItem, thIndex) in tableTitle" :key="thItem.id">
          <div v-if="thIndex === 0" class="th0">
            <input type="checkbox" />
          </div>
          <div v-else-if="thIndex === 1" class="th1">
            {{ thItem }}
          </div>
          <div v-else-if="thIndex === 6" class="th6">
            {{ thItem }}
          </div>
          <div v-else-if="thIndex === 10" class="th10">
            <div class="line"></div>
            <div class="img"><img src="@/assets/set.svg" /></div>
          </div>
          <div v-else class="thElse">{{ thItem }}</div>
        </td>
      </tr>
      <tr v-for="trItem in tableData" :key="trItem.id" class="td">
        <td v-for="(tdItem, key, tdIndex) in trItem" :key="tdIndex">
          <div v-if="key === 'isselected'" class="th0">
            <input type="checkbox" />
          </div>
          <div v-else-if="key === 'icon'" class="th10"></div>
          <div v-else-if="key === 'orderNumber'" class="th1">{{ tdItem }}</div>
          <div v-else-if="key === 'account'" class="th6">{{ tdItem }}</div>
          <div v-else-if="key === 'contractState'" class="thElse">
            <div v-if="tdItem === '正常'">
              <div class="circle1"></div>
              <p class="isRelateWechat_p">正常</p>
            </div>
            <div v-else>
              <div class="circle2"></div>
              <p class="isRelateWechat_p">异常</p>
            </div>
          </div>
          <div v-else-if="key === 'effectiveDate'" class="thElse">
            {{ getNowFormatDate }}
          </div>
          <div v-else-if="key === 'failureTime'" class="thElse">
            {{ getNowFormatDate }}
          </div>
          <div v-else class="thElse">{{ tdItem }}</div>
        </td>
      </tr>
    </table> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableTitle: [
        { prop: 'orderNumber', name: '序号', width: '50' },
        { prop: 'supplier', name: '供应商', width: '128' },
        { prop: 'department', name: '部门', width: '128' },
        { prop: 'contractNumber', name: '合同编号', width: '132' },
        { prop: 'contractTheme', name: '合同主题', width: '132' },
        { prop: 'account', name: '核算主体', width: '212' },
        { prop: 'contractState', name: '合同状态', width: '132' },
        { prop: 'effectiveDate', name: '生效时间', width: '132' },
        { prop: 'failureTime', name: '失效时间', width: '132' },
        { prop: 'icon', name: '', width: '' },
      ],
      tableData: [
        {
          isselected: false,
          orderNumber: '1',
          supplier: 'gn9090',
          department: '123456',
          contractNumber: '北京',
          contractTheme: '飞云之下',
          account: '零售',
          contractState: '正常',
          effectiveDate: new Date().toLocaleDateString(),
          failureTime: new Date().toLocaleDateString(),
          icon:''
        },
        {
          isselected: false,
          orderNumber: '2',
          supplier: 'gn9090',
          department: '123456',
          contractNumber: '北京',
          contractTheme: '飞云之下',
          account: '零售',
          contractState: '不正常',
          effectiveDate: new Date().toLocaleDateString(),
          failureTime: new Date().toLocaleDateString(),
          icon:''
        },
        {
          isselected: false,
          orderNumber: '3',
          supplier: 'gn9090',
          department: '123456',
          contractNumber: '北京',
          contractTheme: '飞云之下',
          account: '零售',
          contractState: '正常',
          effectiveDate: new Date().toLocaleDateString(),
          failureTime: new Date().toLocaleDateString(),
          icon:''
        },
        {
          isselected: false,
          orderNumber: '1',
          supplier: 'gn9090',
          department: '123456',
          contractNumber: '北京',
          contractTheme: '飞云之下',
          account: '零售',
          contractState: '正常',
          effectiveDate: new Date().toLocaleDateString(),
          failureTime: new Date().toLocaleDateString(),
          icon:''
        },
        {
          isselected: false,
          orderNumber: '2',
          supplier: 'gn9090',
          department: '123456',
          contractNumber: '北京',
          contractTheme: '飞云之下',
          account: '零售',
          contractState: '不正常',
          effectiveDate: new Date().toLocaleDateString(),
          failureTime: new Date().toLocaleDateString(),
          icon:''
        },
        {
          isselected: false,
          orderNumber: '3',
          supplier: 'gn9090',
          department: '123456',
          contractNumber: '北京',
          contractTheme: '飞云之下',
          account: '零售',
          contractState: '正常',
          effectiveDate: new Date().toLocaleDateString(),
          failureTime: new Date().toLocaleDateString(),
          icon:''
        },
      ],
      maxheight: window.innerHeight - 440,
    }
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        this.maxheight = window.innerHeight - 440
      })()
    }
  },
  computed: {
    // getNowFormatDate() {
    //   var date = new Date()
    //   var seperator1 = '/'
    //   var seperator2 = ':'
    //   var month = date.getMonth() + 1
    //   var strDate = date.getDate()
    //   if (month >= 1 && month <= 9) {
    //     month = '0' + month
    //   }
    //   if (strDate >= 0 && strDate <= 9) {
    //     strDate = '0' + strDate
    //   }
    //   var currentdate =
    //     date.getFullYear() +
    //     seperator1 +
    //     month +
    //     seperator1 +
    //     strDate +
    //     ' ' +
    //     date.getHours() +
    //     seperator2 +
    //     date.getMinutes() +
    //     seperator2 +
    //     date.getSeconds()
    //   return currentdate
    // },
  },
}
</script>

<style scoped>
.tableList {
  flex: 1;
  overflow: auto;
  position: relative;
}
/* .achivesTable {
  width: 100%;
  height: 100%;
  position: absolute;
}
.th {
  background: rgba(247, 248, 250, 1);
  color: rgba(51, 51, 51, 1);
  font-family: PingFang SC;
  font-weight: 600;
  font-size: 14px;
}
.td {
  border-bottom: 1px solid rgba(241, 244, 248, 1);
}
.achivesTable tr {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.th0 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 50px;
}
.th1 {
  width: 58px;
  height: 50px;
  display: flex;
  align-items: center;
}
.th6 {
  width: 212px;
  height: 50px;
  display: flex;
  align-items: center;
  font-family: PingFang SC;
  font-size: 14px;
}
.th10 {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
}
.thElse {
  width: 140px;
  height: 50px;
  display: flex;
  align-items: center;
  font-family: PingFang SC;
  font-size: 14px;
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
.circle1 {
  width: 10px;
  height: 10px;
  background-color: rgba(37, 198, 190, 1);
  border-radius: 50px;
  display: inline-block;
  margin-right: 8px;
}
.isRelateWechat_p {
  display: inline-block;
}
.circle2 {
  width: 10px;
  height: 10px;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  display: inline-block;
  margin-right: 8px;
} */
</style>
