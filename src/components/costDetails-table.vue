<template>
  <div class="table">
    <el-table
      :data="tableData"
      style="width: 100%"
      height="500"
      show-summary=""
      :summary-method="getSummaries"
      ref="multipleTable"
      tooltip-effect="dark"
      :header-cell-style="{
        background: 'rgba(247, 248, 250, 1)',
        color: 'rgba(51, 51, 51, 1)',
      }"
    >
      <el-table-column fixed type="selection" width="50"> </el-table-column>
      <el-table-column
        v-for="item in tableTitle"
        :key="item.id"
        :prop="item.prop"
        :label="item.name"
        :width="item.width"
      >
      </el-table-column>
      <el-table-column fixed="right" label="操作" min-width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1)
    },
    getSummaries(param) {
      const { columns } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 3) {
          sums[index] = '总计'
          return
        }
        if (
          index === 0 ||
          index === 1 ||
          index === 2 ||
          index === 4 ||
          index === this.tableTitle.length + 1
        ) {
          return
        } else if (index === 6) {
          sums[index] =
            '￥' +
            (
              (Number(this.account01.salesVolumes) +
                Number(this.account02.salesVolumes) +
                Number(this.account03.salesVolumes)) /
              2
            ).toFixed(2)
          return
        } else if (index === 9) {
          sums[index] = '20%'
          return
        } else {
          sums[index] =
            '￥' +
            (
              (Number(this.account01[column.property].split('￥')[1]) +
                Number(this.account02[column.property].split('￥')[1]) +
                Number(this.account03[column.property].split('￥')[1])) /
              2
            ).toFixed(2)
          return
        }
      })

      return sums
    },
  },
  data() {
    return {
      tableData: [
        {
          orderNumber: '1',
          organization: '[201]武汉店',
          category: '[0101]食品类',
          settlementType: '正常销售',
          sellingPrice: '￥25000.00',
          salesVolumes: '50000.00',
          salesRevenue: '￥22000.00',
          actualSalesRevenue: '￥22000.00',
          deductionRate: '20%',
          percentage: '￥4000.00',
          supplierDiscountCommitment: '￥2000.00',
          salesCost: '￥20000.00',
          adjustedAmount: '￥0.00',
        },
        {
          orderNumber: '1',
          organization: '[201]武汉店',
          category: '[0101]非食品类',
          settlementType: '正常销售',
          sellingPrice: '￥30000.00',
          salesVolumes: '50000.00',
          salesRevenue: '￥22000.00',
          actualSalesRevenue: '￥22000.00',
          deductionRate: '20%',
          percentage: '￥4000.00',
          supplierDiscountCommitment: '￥2000.00',
          salesCost: '￥20000.00',
          adjustedAmount: '￥0.00',
        },
        {
          orderNumber: '1',
          organization: '[201]武汉店',
          category: '[0101]非食品类',
          settlementType: '正常销售',
          sellingPrice: '￥35000.00',
          salesVolumes: '50000.00',
          salesRevenue: '￥22000.00',
          actualSalesRevenue: '￥22000.00',
          deductionRate: '20%',
          percentage: '￥4000.00',
          supplierDiscountCommitment: '￥2000.00',
          salesCost: '￥20000.00',
          adjustedAmount: '￥0.00',
        },
        {
          orderNumber: '2',
          organization: '[201]北京店',
          category: '[0101]食品类',
          settlementType: '正常销售',
          sellingPrice: '￥15000.00',
          salesVolumes: '50000.00',
          salesRevenue: '￥22000.00',
          actualSalesRevenue: '￥22000.00',
          deductionRate: '20%',
          percentage: '￥4000.00',
          supplierDiscountCommitment: '￥2000.00',
          salesCost: '￥20000.00',
          adjustedAmount: '￥0.00',
        },
        {
          orderNumber: '2',
          organization: '[201]北京店',
          category: '[0101]食品类',
          settlementType: '正常销售',
          sellingPrice: '￥25000.00',
          salesVolumes: '50000.00',
          salesRevenue: '￥22000.00',
          actualSalesRevenue: '￥22000.00',
          deductionRate: '20%',
          percentage: '￥4000.00',
          supplierDiscountCommitment: '￥2000.00',
          salesCost: '￥20000.00',
          adjustedAmount: '￥0.00',
        },
        {
          orderNumber: '2',
          organization: '[201]北京店',
          category: '[0101]食品类',
          settlementType: '正常销售',
          sellingPrice: '￥35000.00',
          salesVolumes: '50000.00',
          salesRevenue: '￥22000.00',
          actualSalesRevenue: '￥22000.00',
          deductionRate: '20%',
          percentage: '￥4000.00',
          supplierDiscountCommitment: '￥2000.00',
          salesCost: '￥20000.00',
          adjustedAmount: '￥0.00',
        },
        {
          orderNumber: '3',
          organization: '[201]北京店',
          category: '[0101]非食品类',
          settlementType: '正常销售',
          sellingPrice: '￥25000.00',
          salesVolumes: '50000.00',
          salesRevenue: '￥22000.00',
          actualSalesRevenue: '￥22000.00',
          deductionRate: '20%',
          percentage: '￥4000.00',
          supplierDiscountCommitment: '￥2000.00',
          salesCost: '￥20000.00',
          adjustedAmount: '￥0.00',
        },
        {
          orderNumber: '3',
          organization: '[201]北京店',
          category: '[0101]非食品类',
          settlementType: '正常销售',
          sellingPrice: '￥25000.00',
          salesVolumes: '50000.00',
          salesRevenue: '￥22000.00',
          actualSalesRevenue: '￥22000.00',
          deductionRate: '20%',
          percentage: '￥4000.00',
          supplierDiscountCommitment: '￥2000.00',
          salesCost: '￥20000.00',
          adjustedAmount: '￥0.00',
        },
      ],
      tableTitle: [
        { name: '序号', width: '50', prop: 'orderNumber' },
        { name: '机构', width: '132', prop: 'organization' },
        { name: '品类', width: '132', prop: 'category' },
        { name: '结算类型', width: '132', prop: 'settlementType' },
        { name: '售价金额', width: '132', prop: 'sellingPrice' },
        { name: '销售数量', width: '132', prop: 'salesVolumes' },
        { name: '销售收入', width: '132', prop: 'salesRevenue' },
        { name: '实际销售收入', width: '132', prop: 'actualSalesRevenue' },
        { name: '扣率', width: '100', prop: 'deductionRate' },
        { name: '提成', width: '100', prop: 'percentage' },
        { name: '供应商折扣承担', width: '132', prop: 'supplierDiscountCommitment' },
        { name: '销售成本', width: '132', prop: 'salesCost' },
        { name: '含税调整金额', width: '132', prop: 'adjustedAmount' },
      ],
    }
  },
  //进行小计行插入操作
  created() {
    let obj1 = []
    let obj2 = []
    let obj3 = []
    //拿到每个orderNumber的所有对象
    this.tableData.forEach((val) => {
      if (val.orderNumber === '1') {
        obj1.push(val)
      } else if (val.orderNumber === '2') {
        obj2.push(val)
      } else {
        obj3.push(val)
      }
    })
    obj1.shift()
    obj2.shift()
    obj3.shift()
    obj1.forEach((val) => {
      val.orderNumber = ''
      val.organization = ''
    })
    obj2.forEach((val) => {
      val.orderNumber = ''
      val.organization = ''
    })
    obj3.forEach((val) => {
      val.orderNumber = ''
      val.organization = ''
    })
    this.tableData.splice(
      this.tableData.findIndex((v) => v.orderNumber === '2'),
      0,
      this.account01
    )
    this.tableData.splice(
      this.tableData.findIndex((v) => v.orderNumber === '3'),
      0,
      this.account02
    )
    this.tableData.push(this.account03)
  },
  computed: {
    account01() {
      let sellingPriceNumber = 0
      let salesVolumesNumber = 0
      let salesRevenueNumber = 0
      let actualSalesRevenueNumber = 0
      let percentageNumber = 0
      let supplierDiscountCommitmentNumber = 0
      let salesCostNumber = 0
      let adjustedAmountNumber = 0
      for (let i = 0; i < this.tableData.findIndex((v) => v.orderNumber === '2'); i++) {
        sellingPriceNumber += Number(this.tableData[i].sellingPrice.split('￥')[1])
        salesVolumesNumber += Number(this.tableData[i].salesVolumes)
        salesRevenueNumber += Number(this.tableData[i].salesRevenue.split('￥')[1])
        actualSalesRevenueNumber += Number(
          this.tableData[i].actualSalesRevenue.split('￥')[1]
        )
        percentageNumber += Number(this.tableData[i].percentage.split('￥')[1])
        supplierDiscountCommitmentNumber += Number(
          this.tableData[i].supplierDiscountCommitment.split('￥')[1]
        )
        salesCostNumber += Number(this.tableData[i].salesCost.split('￥')[1])
        adjustedAmountNumber += Number(this.tableData[i].adjustedAmount.split('￥')[1])
      }
      let count = {
        orderNumber: '',
        organization: '',
        category: '小计',
        settlementType: '',
        sellingPrice: '￥' + sellingPriceNumber.toFixed(2),
        salesVolumes: salesVolumesNumber.toFixed(2),
        salesRevenue: '￥' + salesRevenueNumber.toFixed(2),
        actualSalesRevenue: '￥' + actualSalesRevenueNumber.toFixed(2),
        deductionRate: '20%',
        percentage: '￥' + percentageNumber.toFixed(2),
        supplierDiscountCommitment: '￥' + supplierDiscountCommitmentNumber.toFixed(2),
        salesCost: '￥' + salesCostNumber.toFixed(2),
        adjustedAmount: '￥' + adjustedAmountNumber.toFixed(2),
      }
      return count
    },
    account02() {
      let sellingPriceNumber = 0
      let salesVolumesNumber = 0
      let salesRevenueNumber = 0
      let actualSalesRevenueNumber = 0
      let percentageNumber = 0
      let supplierDiscountCommitmentNumber = 0
      let salesCostNumber = 0
      let adjustedAmountNumber = 0
      for (
        let i = this.tableData.findIndex((v) => v.orderNumber === '2');
        i < this.tableData.findIndex((v) => v.orderNumber === '3');
        i++
      ) {
        sellingPriceNumber += Number(this.tableData[i].sellingPrice.split('￥')[1])
        salesVolumesNumber += Number(this.tableData[i].salesVolumes)
        salesRevenueNumber += Number(this.tableData[i].salesRevenue.split('￥')[1])
        actualSalesRevenueNumber += Number(
          this.tableData[i].actualSalesRevenue.split('￥')[1]
        )
        percentageNumber += Number(this.tableData[i].percentage.split('￥')[1])
        supplierDiscountCommitmentNumber += Number(
          this.tableData[i].supplierDiscountCommitment.split('￥')[1]
        )
        salesCostNumber += Number(this.tableData[i].salesCost.split('￥')[1])
        adjustedAmountNumber += Number(this.tableData[i].adjustedAmount.split('￥')[1])
      }
      let count = {
        orderNumber: '',
        organization: '',
        category: '小计',
        settlementType: '',
        sellingPrice: '￥' + sellingPriceNumber.toFixed(2),
        salesVolumes: salesVolumesNumber.toFixed(2),
        salesRevenue: '￥' + salesRevenueNumber.toFixed(2),
        actualSalesRevenue: '￥' + actualSalesRevenueNumber.toFixed(2),
        deductionRate: '20%',
        percentage: '￥' + percentageNumber.toFixed(2),
        supplierDiscountCommitment: '￥' + supplierDiscountCommitmentNumber.toFixed(2),
        salesCost: '￥' + salesCostNumber.toFixed(2),
        adjustedAmount: '￥' + adjustedAmountNumber.toFixed(2),
      }
      return count
    },
    account03() {
      let sellingPriceNumber = 0
      let salesVolumesNumber = 0
      let salesRevenueNumber = 0
      let actualSalesRevenueNumber = 0
      let percentageNumber = 0
      let supplierDiscountCommitmentNumber = 0
      let salesCostNumber = 0
      let adjustedAmountNumber = 0
      for (
        let i = this.tableData.findIndex((v) => v.orderNumber === '3');
        i < this.tableData.length;
        i++
      ) {
        sellingPriceNumber += Number(this.tableData[i].sellingPrice.split('￥')[1])
        salesVolumesNumber += Number(this.tableData[i].salesVolumes)
        salesRevenueNumber += Number(this.tableData[i].salesRevenue.split('￥')[1])
        actualSalesRevenueNumber += Number(
          this.tableData[i].actualSalesRevenue.split('￥')[1]
        )
        percentageNumber += Number(this.tableData[i].percentage.split('￥')[1])
        supplierDiscountCommitmentNumber += Number(
          this.tableData[i].supplierDiscountCommitment.split('￥')[1]
        )
        salesCostNumber += Number(this.tableData[i].salesCost.split('￥')[1])
        adjustedAmountNumber += Number(this.tableData[i].adjustedAmount.split('￥')[1])
      }
      let count = {
        orderNumber: '',
        organization: '',
        category: '小计',
        settlementType: '',
        sellingPrice: '￥' + sellingPriceNumber.toFixed(2),
        salesVolumes: salesVolumesNumber.toFixed(2),
        salesRevenue: '￥' + salesRevenueNumber.toFixed(2),
        actualSalesRevenue: '￥' + actualSalesRevenueNumber.toFixed(2),
        deductionRate: '20%',
        percentage: '￥' + percentageNumber.toFixed(2),
        supplierDiscountCommitment: '￥' + supplierDiscountCommitmentNumber.toFixed(2),
        salesCost: '￥' + salesCostNumber.toFixed(2),
        adjustedAmount: '￥' + adjustedAmountNumber.toFixed(2),
      }
      return count
    },
  },
}
</script>

<style scoped>
.table {
  width: 100%;
  height: 100%;
}
</style>
