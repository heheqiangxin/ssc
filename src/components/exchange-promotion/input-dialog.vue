<template>
  <div class="input-dialog">
    <span>
      <div class="asterisk">*</div>
      {{ selectValue.spanValue }}:</span
    >
    <div class="input-box">
      <input
        class="select"
        v-model="select01"
        placeholder="请选择"
        @click="dialogVisible01 = true"
      />
      <div class="circle-box" @click="dialogVisible01 = true">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
      <el-dialog
        :title="selectValue.dialogTitle"
        :visible.sync="dialogVisible01"
        width="60%"
        :before-close="handleClose"
      >
        <input type="text" :placeholder="selectValue.placeholder" class="dialog-input" />
        <button class="dialog-button">查询</button>
        <el-tree
          ref="treeForm"
          :data="selectValue.data"
          show-checkbox
          node-key="id"
          :default-expanded-keys="[1, 2, 3, 4]"
          :check-strictly="true"
          @check="handleCheckChange"
        >
        </el-tree>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible01 = false">取 消</el-button>
          <el-button type="primary" @click="change01">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  props: ['selectValue'],
  data() {
    return {
      dialogVisible01: false,
      buttonValue: ['查询'],
      select01: '',
      chooseItem01: '',
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
    change01() {
      this.dialogVisible01 = false
      this.select01 = this.chooseItem01
    },
    handleCheckChange(data) {
      this.chooseItem01 = data.label.split(']')[1]
      var labvalojb = data //暂存选中节点
      console.log(data)
      this.$refs.treeForm.setCheckedKeys([]) //删除所有选中节点
      this.$refs.treeForm.setCheckedNodes([labvalojb]) //选中已选中节点
    },
  },
}
</script>

<style scoped>
.input-dialog {
  display: flex;
  align-items: center;
  width: 100%;
  height: 32px;
}
.asterisk {
  display: inline;
  color: red;
}
span {
  width: 90px;
  height: 20px;
  text-align: right;
  color: rgba(51, 51, 51, 1);
  font-family: PingFang SC;
  font-size: 14px;
  padding-right: 10px;
  flex-grow: 0;
  flex-shrink: 0;
}
.select {
  width: 100%;
  height: 32px;
  border-radius: 2px;
  border: 1px solid rgba(216, 216, 216, 1);
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  padding-left: 8px;
  cursor: pointer;
}
.input-box {
  position: relative;
  display: flex;
  justify-content: right;
  align-items: center;
  flex: 1;
  
}
.circle-box {
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
.dialog-input {
  height: 32px;
  width: 270px;
  padding-left: 10px;
  border: 1px solid rgb(185, 182, 182);
}
.dialog-button {
  height: 34px;
  width: 60px;
  background-color: #fff;
  border: 1px solid rgb(185, 182, 182);
  border-radius: 4px;
  position: relative;
  left: 10px;
  color: rgb(88, 88, 88);
}
.dialog-button:hover {
  border-color: rgb(47, 116, 245);
  color: rgb(47, 116, 245);
}
</style>
