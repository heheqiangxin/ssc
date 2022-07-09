<template>
  <div class="table-box">
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
      show-summary
      :summary-method="getSummaries"
    >
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
      activeNames: ['1'],
      tableTitle: [
        { prop: 'order', name: '序号', width: '50' },
        { prop: 'commodityCode', name: '付款方式', width: '128' },
        { prop: 'commodityBarCode', name: '支付账号', width: '128' },
        { prop: 'tradeName', name: '支付金额', width: '128' },
        { prop: 'sell', name: '汇率', width: '128' },
        { prop: 'number', name: '折现金额', width: '128' },
        { prop: 'sellPrice', name: '账户分类', width: '128' },
        { prop: 'discountAmount', name: '卷种', width: '128' },
        { prop: 'transactionAmount', name: '卷溢余', width: '' },
      ],
      tableData: [
        {
          order: '1',
          commodityCode: '[0101]现金',
          commodityBarCode: '支付宝',
          tradeName: '300.0000',
          sell: '1.0000',
          number: '100.0000',
          sellPrice: '现金',
          discountAmount: '',
          transactionAmount: '',
        },
         {
          order: '2',
          commodityCode: '[0501]享钱',
          commodityBarCode: '微信',
          tradeName: '300.0000',
          sell: '1.0000',
          number: '300.0000',
          sellPrice: '现金',
          discountAmount: '',
          transactionAmount: '',
        },
         {
          order: '3',
          commodityCode: '[0301]积分消费',
          commodityBarCode: '积分',
          tradeName: '1000.0000',
          sell: '0.0100',
          number: '100.0000',
          sellPrice: '积分',
          discountAmount: '',
          transactionAmount: '',
        },
        {
          order: '4',
          commodityCode: '[0401]卷',
          commodityBarCode: '卷号',
          tradeName: '100.0000',
          sell: '',
          number: '100.0000',
          sellPrice: '卷',
          discountAmount: '[卷类型]卷名称',
          transactionAmount: '18.0000',
        },
      ],

      maxheight: window.innerHeight - 550,
    }
  },
  methods: {
    handleChange(val) {
      console.log(val)
    },
    getSummaries(param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 1) {
          sums[index] = '总价'
          return
        }
        if (index === 0 || index === 4 || index === 7) {
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
          sums[index] += sums[index]
          sums[index] = Number(sums[index]/2).toFixed(4)
        } else {
          sums[index] = ''
        }
      })

      return sums
    },
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        this.maxheight = window.innerHeight - 564
      })()
    }
  },
}
</script>

<style scoped>
.table-box {
  overflow: auto;
}
.set {
  display: flex;
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
.hiddenTable {
  width: 100%;
  height: 182px;
  background: rgba(242, 243, 245, 1);
}
</style>
