<template>
  <div class="finishdata-box">
    <span class="finishdata">结算日期: 2012-09-01至2012-09-30</span>
    <el-popover placement="bottom-start" visible-arrow width="230" trigger="hover">
      <div class="popoverbox">
        <div class="pbox">
          <p
            v-for="(item, itemindex) in this.$store.state.costs.content"
            :key="item.id"
            class="p"
          >
            {{ itemindex + ': ' }}
          </p>
        </div>
        <div class="span">
          <span v-for="item in this.$store.state.costs.content" :key="item.id">{{
             item
          }}</span>
        </div>
      </div>
      <button class="circle" slot="reference">!</button>
    </el-popover>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.finishdata-box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.finishdata {
  color: rgba(51, 51, 51, 1);
  font-family: PingFang SC;
  font-size: 14px;
  position: relative;
  left: 14px;
}
.circle {
  width: 12px;
  height: 12px;
  border: 1.5px solid rgba(153, 153, 153, 1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(153, 153, 153, 1);
  background: rgba(255, 255, 255, 1);
  font-size: 8px;
  position: relative;
  left: 22px;
}
.popoverbox {
  display: flex;
}
.pbox {
  width: 86px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: right;
  color: rgba(51, 51, 51, 1);
  font-family: PingFang SC;
  font-size: 14px;
  padding-right: 20px;
}
.span {
  width: 144px;
  height: 220px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  color: rgba(51, 51, 51, 1);
  font-family: PingFang SC;
  font-size: 14px;
}
</style>
