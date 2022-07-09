<template>
  <div class="costs_search">
    <div class="input_box">
      <div class="time_box">
        <span
          ><div class="asterisk">*</div>
          结算日期:</span
        >
        <input type="date" class="select" v-model="date" />
      </div>
      <div class="time_box">
        <span>供应商:</span>
        <div class="circle_box1">
          <input
            type="select"
            class="select"
            v-model="select01"
            placeholder="请选择"
            @click="dialogVisible01 = true"
          />
          <div class="circle_box" @click="dialogVisible01 = true">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
          <el-dialog
            title="选择供应商"
            :visible.sync="dialogVisible01"
            width="60%"
            :before-close="handleClose"

          >
            <input type="text" placeholder="供应商编码/供应商名称" class="dialog_input" />
            <button class="dialog_button">查询</button>
            <div class="dialog_table">
              <table cellspacing="0" class="table">
                <th v-for="thItem in thAccountTitle" :key="thItem.id" class="th">
                  {{ thItem }}
                </th>
                <tr
                  v-for="(trItem, trIndex) in accountData"
                  :key="trItem.id"
                  @click="handle01(trItem, trIndex)"
                  :class="{ active: currentActive01 === trIndex }"
                  @dblclick="change01"
                >
                  <td v-for="tdItem in trItem" :key="tdItem.id" class="td">
                    {{ tdItem }}
                  </td>
                </tr>
              </table>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible01 = false">取 消</el-button>
              <el-button type="primary" @click="change01">确 定</el-button>
            </span>
          </el-dialog>
        </div>
      </div>
      <div class="time_box">
        <span>合同编号:</span>
        <div class="circle_box1">
          <input
            type="select"
            class="select"
            v-model="select02"
            placeholder="请选择"
            @click="dialogVisible02 = true"

          />
          <div class="circle_box" @click="dialogVisible02 = true">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
          <el-dialog
            title="选择合同"
            :visible.sync="dialogVisible02"
            width="60%"
            :before-close="handleClose"
          >
            <input
              type="text"
              placeholder="合同编号/供应商编码/供应商名称"
              class="dialog_input"
            />
            <button class="dialog_button">查询</button>
            <div class="dialog_table">
              <table cellspacing="0" class="table">
                <th v-for="thItem in thContractTitle" :key="thItem.id" class="th">
                  {{ thItem }}
                </th>
                <tr
                  v-for="(trItem, trIndex) in contractData"
                  :key="trItem.id"
                  @click="handle02(trItem, trIndex)"
                  @dblclick="change02"
                  :class="{ active: currentActive02 === trIndex }"
                >
                  <td v-for="tdItem in trItem" :key="tdItem.id" class="td">
                    {{ tdItem }}
                  </td>
                </tr>
              </table>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible02 = false">取 消</el-button>
              <el-button type="primary" @click="change02">确 定</el-button>
            </span>
          </el-dialog>
        </div>
      </div>
      <div class="time_box">
        <span>单据编号:</span>
        <input type="text" class="select" v-model="text" placeholder="请输入" />
      </div>
    </div>
    <div class="select_button">
      <div class="button_box">
        <span>类型:</span>
        <div class="select_box">
          <input type="checkbox" v-model="allSearch" value="工作单据" id="work" />
          <label for="work" class="check_name">工作单据</label>
          <input type="checkbox" v-model="allSearch" value="历史单据" id="history" />
          <label for="history" class="check_name">历史单据</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentActive01: null,
      currentActive02: null,
      date: '',
      text: '',
      select01: '',
      select02: '',
      allSearch: ['工作单据'],
      dialogVisible01: false,
      dialogVisible02: false,
      thAccountTitle: ['供应商编码', '供应商名称', '供应商分类', '经营方式'],
      accountData: [
        {
          accountNumber: '001',
          accountName: 'xxx',
          accountType: '1',
          type: '小型店',
        },
        {
          accountNumber: '002',
          accountName: 'xxx',
          accountType: '2',
          type: '大型店',
        },
        {
          accountNumber: '003',
          accountName: 'xxx',
          accountType: '3',
          type: '夫妻店',
        },
      ],
      thContractTitle: [
        '序号',
        '合同编号',
        '供应商',
        '部门',
        '经营方式',
        '生效日期',
        '失效日期',
      ],
      contractData: [
        {
          orderNumber: '1',
          contractNumber: '123456789',
          supplier: '001xxx',
          department: '北京',
          type: '夫妻店',
          effectiveDate: new Date().toLocaleDateString(),
          failureTime: new Date().toLocaleDateString(),
        },
        {
          orderNumber: '2',
          contractNumber: '123456777',
          supplier: '002xxx',
          department: '上海',
          type: '大型店',
          effectiveDate: new Date().toLocaleDateString(),
          failureTime: new Date().toLocaleDateString(),
        },
      ],
      chooseItem01: '',
      chooseItem02: '',
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭?')
        .then(() => {
          done()
        })
        .catch(() => {})
    },
    handle01(item, index) {
      this.currentActive01 = index
      this.chooseItem01 = item.accountNumber + item.accountName
    },
    handle02(item, index) {
      this.currentActive02 = index
      this.chooseItem02 = item.contractNumber
    },
    change01() {
      this.dialogVisible01 = false
      this.select01 = this.chooseItem01
    },
    change02() {
      this.dialogVisible02 = false
      this.select02 = this.chooseItem02
    },
  },
  watch: {
    date(newValue) {
      this.$store.commit('dateValue', newValue)
    },
    text(newValue) {
      this.$store.commit('textValue', newValue)
    },
    select01(newValue) {
      this.$store.commit('select01Value', newValue)
    },
    select02(newValue) {
      this.$store.commit('select02Value', newValue)
    },
    allSearch(newValue) {
      this.$store.commit('allSearchValue', newValue)
    },
  },
}
</script>

<style scoped>
.costs_search {
  width: 100%;
  height: 100%;
}
.input_box {
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.select_button {
  width: 100%;
  height: 25%;
}
.time_box {
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.asterisk {
  display: inline;
  color: red;
}
span {
  width: 70px;
  height: 20px;
  text-align: right;
  color: rgba(51, 51, 51, 1);
  font-family: PingFang SC;
  font-size: 14px;
  padding-right: 10px;
}
.select {
  width: 216px;
  height: 32px;
  border-radius: 2px;
  border: 1px solid rgba(216, 216, 216, 1);
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  padding-left: 5px;
  cursor: pointer;
}
.button_box {
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.select_box {
  width: 216px;
  height: 32px;
  display: flex;
  align-items: center;
}
.check_name {
  width: 70px;
  height: 20px;
  text-align: center;
  color: rgba(51, 51, 51, 1);
  font-family: PingFang SC;
  font-size: 14px;
  padding-right: 10px;
}
.circle_box1 {
  position: relative;
  display: flex;
  justify-content: right;
  align-items: center;
}
.circle_box {
  height: 22px;
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  align-items: center;
}
.circle {
  width: 3px;
  height: 3px;
  background: rgba(147, 153, 164, 1);
  border-radius: 50px;
}
.dialog_table {
  width: 96%;
  height: 400px;
  overflow: auto;
  position: relative;
  top: 20px;
}
.table {
  border-collapse: collapse;
}
.th,
.td {
  padding: 10px;
  border: 1px solid rgb(185, 182, 182);
}
.dialog_input {
  height: 32px;
  width: 270px;
  padding-left: 10px;
  border: 1px solid rgb(185, 182, 182);
}
.dialog_button {
  height: 34px;
  width: 60px;
  background-color: #fff;
  border: 1px solid rgb(185, 182, 182);
  border-radius: 4px;
  position: relative;
  left: 10px;
  color: rgb(88, 88, 88);
}
.active {
  background-color: rgba(86, 119, 252, 0.1);
}
</style>
