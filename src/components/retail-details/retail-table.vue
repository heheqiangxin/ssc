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
      <el-table-column fixed="right" label="操作" width="70" type="expand">
        <template slot="header">
          <div class="set">
            <!-- <div class="line"></div> -->
            <div class="img"><img src="@/assets/set.svg" /></div>
          </div>
        </template>
        <template slot-scope="props">
          <div class="hiddenTable">
            <el-table
              :data="props.row.tableData1"
              :style="{ width: '98%', position: 'relative', left: '16px', top: '16px' }"
              height="150"
              :row-style="{ color: 'rgba(51, 51, 51, 1)', height: '50px' }"
              :cell-style="{ padding: '0' }"
              :header-cell-style="{
                background: 'rgba(247, 248, 250, 1)',
                color: 'rgba(51, 51, 51, 1)',
              }"
            >
              <el-table-column prop="order" label="序号" width="50"> </el-table-column>
              <el-table-column prop="type" label="促销类型" width="250">
              </el-table-column>
              <el-table-column prop="money" label="促销金额(元)" width="150">
              </el-table-column>
              <el-table-column prop="number" label="促销单号" width="250">
              </el-table-column>
              <el-table-column prop="actity" label="活动名称"> </el-table-column>
            </el-table>
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
        { prop: 'commodityCode', name: '商品编码', width: '96' },
        { prop: 'commodityBarCode', name: '商品条码', width: '128' },
        { prop: 'tradeName', name: '商品名称', width: '128' },
        { prop: 'sell', name: '售价', width: '128' },
        { prop: 'number', name: '数量', width: '128' },
        { prop: 'sellPrice', name: '售价金额', width: '128' },
        { prop: 'discountAmount', name: '折扣金额', width: '128' },
        { prop: 'transactionAmount', name: '成交金额', width: '128' },
        { prop: 'commodityBrand', name: '商品品牌', width: '128' },
        { prop: 'commodityType', name: '商品类别', width: '128' },
        { prop: 'supplier', name: '供应商', width: '108' },
        { prop: 'salesClerk', name: '营业员', width: '' },
      ],
      tableData: [
        {
          order: '1',
          commodityCode: '3333333',
          commodityBarCode: '11111111',
          tradeName: '寻艺彩笔记本',
          sell: '18.0002',
          number: '11',
          sellPrice: '98.0000',
          discountAmount: '98.0000',
          transactionAmount: '2.0000',
          commodityBrand: '哈哈哈',
          commodityType: '纸张',
          supplier: '苏宁',
          salesClerk: '李松林',
          tableData1: [
            {
              order: '1',
              type: '限时折扣',
              money: '11111.0000',
              number: '1009090986',
              actity: '如果你想获得幸福和安宁，那就要越过层层的障壁，敲起真理的钟前进。 —— 卡拉维洛夫',
            },
            {
              order: '2',
              type: '满减促销',
              money: '1111.0000',
              number: '350738653',
              actity: '张文宏医生喊你把窗户打开！收下这张疫情期“通风时刻表”',
            },
          ],
        },
        {
          order: '2',
          commodityCode: '2222222',
          commodityBarCode: '11111111',
          tradeName: '哇哈哈哈',
          sell: '18.0002',
          number: '11',
          sellPrice: '98.0000',
          discountAmount: '98.0000',
          transactionAmount: '2.0000',
          commodityBrand: '哈哈哈',
          commodityType: '饮料',
          supplier: '中百',
          salesClerk: '赵璇海',
          tableData1: [
           {
              order: '1',
              type: '限时折扣',
              money: '11111.0000',
              number: '1009090986',
              actity: '如果你想获得幸福和安宁，那就要越过层层的障壁，敲起真理的钟前进。 —— 卡拉维洛夫',
            },
            {
              order: '2',
              type: '满减促销',
              money: '1111.0000',
              number: '350738653',
              actity: '张文宏医生喊你把窗户打开！收下这张疫情期“通风时刻表”',
            },
          ],
        },
        {
          order: '3',
          commodityCode: '4444444',
          commodityBarCode: '11111111',
          tradeName: '可可可可',
          sell: '18.0002',
          number: '11',
          sellPrice: '98.0000',
          discountAmount: '98.0000',
          transactionAmount: '2.0000',
          commodityBrand: '百事可乐',
          commodityType: '饮料',
          supplier: '百事',
          salesClerk: '小K',
          tableData1: [
           {
              order: '1',
              type: '限时折扣',
              money: '11111.0000',
              number: '1009090986',
              actity: '买一瓶第二瓶只需半价换购',
            },
            {
              order: '2',
              type: '满减促销',
              money: '1111.0000',
              number: '350738653',
              actity: '张文宏医生喊你把窗户打开！收下这张疫情期“通风时刻表”',
            },
          ],
        },
        {
          order: '4',
          commodityCode: '45555555',
          commodityBarCode: '11111111',
          tradeName: '哇哈哈哈',
          sell: '18.0002',
          number: '11',
          sellPrice: '98.0000',
          discountAmount: '98.0000',
          transactionAmount: '2.0000',
          commodityBrand: '可口可乐',
          commodityType: '饮料',
          supplier: '可口',
          salesClerk: '小海',
          tableData1: [
           {
              order: '1',
              type: '限时折扣',
              money: '11111.0000',
              number: '1009090986',
              actity: '如果你想获得幸福和安宁，那就要越过层层的障壁，敲起真理的钟前进。 —— 卡拉维洛夫',
            },
            {
              order: '2',
              type: '满减促销',
              money: '1111.0000',
              number: '350738653',
              actity: '张文宏医生喊你把窗户打开！收下这张疫情期“通风时刻表”',
            },
          ],
        },
      ],

      maxheight: window.innerHeight - 550,
    }
  },
  methods: {
    handleChange(val) {
      console.log(val)
    },
    //合计行的自定义计算方法
    getSummaries(param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '总价'
          return
        }
        if (index === 1 || index === 2 || index === 5) {
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
