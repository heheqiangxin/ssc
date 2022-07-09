<template>
  <div class="costs-table">
    <el-table
      v-model="loading"
      :data="tableData"
      style="selfstyle"
      :height="maxheight"
      :header-cell-style="{
        background: 'rgba(247, 248, 250, 1)',
        color: 'rgba(51, 51, 51, 1)',
      }"
      :row-style="{ color: 'rgba(51, 51, 51, 1)', height: '50px' }"
      :cell-style="{padding: '0'}"
      show-summary
      :summary-method="getSummaries"
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
      <el-table-column fixed="right" label="实际应付" width="100" prop="money">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="detailsRow(scope.$index, tableData)"
            type="text"
          >
            查看详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  methods: {
    getSummaries(param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '总价'
          return
        }
        if (index === 17) {
          const values = data.map((item) => String(item[column.property]))
          let number = 0
          values.forEach((value) => {
            let num = value.split('￥')[1]
            number += Number(num)
            sums[index] = '￥' + number.toFixed(2)
          })
          return
        }
        const values = data.map((item) => Number(item[column.property]))
        if (!values.every((value) => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
          sums[index] = ''
        } else {
          sums[index] = ''
        }
      })

      return sums
    },
    detailsRow(index, rows) {
      console.log(index, rows[index])
      this.$store.commit('costsDetails')
      this.$store.commit('changeContent', rows[index])
    },
  },
  data() {
    return {
      loading: false,
      tableData: [
        {
          orderNumber: '1',
          supplier: 'gn9090',
          contractState: '正常',
          contractTheme: '飞云之下',
          account: '零售',
          department: 'a123456',
          contractNumber: 'aasssccccaaa',
          settlementDate: new Date().toLocaleDateString(),
          payState: '已支付',
          maker: '小K',
          makeDate: new Date().toLocaleDateString(),
          auditor: '龙猫',
          auditorDate: new Date().toLocaleDateString(),
          voidPerson: '小海',
          voidDate: new Date().toLocaleDateString(),
          printTimes: '2次',
          money: '￥' + '128.00',
        },
        {
          orderNumber: '2',
          supplier: 'fn9090',
          contractState: '正常',
          contractTheme: '告白气球',
          account: '零售',
          department: 'xxx011',
          contractNumber: '55555555',

          settlementDate: new Date().toLocaleDateString(),
          payState: '已支付',
          maker: '龙猫',
          makeDate: new Date().toLocaleDateString(),
          auditor: '小K',
          auditorDate: new Date().toLocaleDateString(),
          voidPerson: '小海',
          voidDate: new Date().toLocaleDateString(),
          printTimes: '1次',
          money: '￥' + '228.00',
        },
        {
          orderNumber: '3',
          supplier: 'gn9090',
          contractState: '正常',
          contractTheme: '飞云之下',
          account: '零售',
          department: 'xxx002',
          contractNumber: 'aasssccccaaa',
          settlementDate: new Date().toLocaleDateString(),
          payState: '已支付',
          maker: '小K',
          makeDate: new Date().toLocaleDateString(),
          auditor: '龙猫',
          auditorDate: new Date().toLocaleDateString(),
          voidPerson: '小海',
          voidDate: new Date().toLocaleDateString(),
          printTimes: '3次',
          money: '￥' + '328.00',
        },
        {
          orderNumber: '4',
          supplier: 'gn9090',
          contractState: '正常',
          contractTheme: '飞云之下',
          account: '零售',
          department: 'a123456',
          contractNumber: 'aasssccccaaa',
          settlementDate: new Date().toLocaleDateString(),
          payState: '未支付',
          maker: '郑西洋',
          makeDate: new Date().toLocaleDateString(),
          auditor: '钱浩然',
          auditorDate: new Date().toLocaleDateString(),
          voidPerson: '钱浩然',
          voidDate: new Date().toLocaleDateString(),
          printTimes: '2次',
          money: '￥' + '128.00',
        },
        {
          orderNumber: '5',
          supplier: 'gn9090',
          contractState: '异常',
          contractTheme: '飞云之下',
          account: '零售',
          department: 'xxx006',
          contractNumber: 'wwwwwwww',
          settlementDate: new Date().toLocaleDateString(),
          payState: '已支付',
          maker: '郑西洋',
          makeDate: new Date().toLocaleDateString(),
          auditor: '钱浩然',
          auditorDate: new Date().toLocaleDateString(),
          voidPerson: '钱浩然',
          voidDate: new Date().toLocaleDateString(),
          printTimes: '8次',
          money: '￥' + '428.00',
        },
      ],
      tableTitle: [
        {
          name: '序',
          width: '50',
          prop: 'orderNumber',
        },
        {
          name: '单据编号',
          width: '128',
          prop: 'supplier',
        },
        {
          name: '单据状态',
          width: '128',
          prop: 'contractState',
        },
        {
          name: '核算主体',
          width: '128',
          prop: 'contractTheme',
        },
        {
          name: '供应商',
          width: '128',
          prop: 'account',
        },
        {
          name: '部门',
          width: '128',
          prop: 'department',
        },
        {
          name: '合同编号',
          width: '128',
          prop: 'contractNumber',
        },

        {
          name: '结算日期',
          width: '128',
          prop: 'settlementDate',
        },
        {
          name: '付款状态',
          width: '128',
          prop: 'payState',
        },
        {
          name: '制单人',
          width: '128',
          prop: 'maker',
        },
        {
          name: '制单日期',
          width: '128',
          prop: 'makeDate',
        },
        {
          name: '审核人',
          width: '128',
          prop: 'auditor',
        },
        {
          name: '审核日期',
          width: '128',
          prop: 'auditorDate',
        },
        {
          name: '作废人',
          width: '128',
          prop: 'voidPerson',
        },
        {
          name: '作废日期',
          width: '128',
          prop: 'voidDate',
        },
        {
          name: '打印次数',
          width: '128',
          prop: 'printTimes',
        },
      ],
      selfstyle: {
        width: '100%',
      },
      maxheight: window.innerHeight - 374,
    }
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        this.maxheight = window.innerHeight - 374
      })()
    }
  },
}
</script>
<style scoped>
.costs-table {
  overflow: auto;
}
</style>
