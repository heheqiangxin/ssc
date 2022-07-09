<template>
  <div class="actity">
    <div class="actity-name">
      <div class="line"></div>
      <span>{{ actityName }}</span>
    </div>
    <div class="detail-box">
      <div class="actity-detail" v-for="(item,index) in details" :key="item.id">
        <img :src="item.icon" />
        <div class="details">
          <p>{{ item.actityType }}</p>
          <p class="detailsText">{{ item.actityDetail }}</p>
        </div>
        <div class="increate-box">
          <i class="el-icon-plus" @click="hanldel(index)"></i>
          <button @click="hanldel(index)">新增</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['actityName', 'details'],
  methods:{
      hanldel(index){
         let res =  this.details[index]
         console.log(res)
         this.$store.commit('exchangePromotion',res.actityType)
      }
  }
}
</script>

<style scoped>
.actity {
  color: rgba(51, 51, 51, 1);
  font-family: PingFang SC;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  top: 16px;
}
.actity-name {
  width: 69px;
  height: 20px;
  display: flex;
  align-items: center;
  margin-left: 16px;
  margin-bottom: 13px;
}
.line {
  width: 2.5px;
  height: 16px;
  background: rgba(47, 126, 238, 1);
}
span {
  position: relative;
  left: 10.5px;
}
.detail-box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.actity-detail {
  width: 280px;
  height: 80px;
  border-radius: 4px;
  border: 1px solid rgba(216, 216, 216, 1);
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  margin-left: 16px;
  margin-bottom: 12px;
}
img {
  position: relative;
  left: 17px;
}
.details {
  width: 143px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  left: 25px;
}
.increate-box {
  width: 55.5px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 32.5px;
  border-left: 1px dashed rgba(216, 216, 216, 1);
}
button {
  border-style: none;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(102, 102, 102, 1);
  font-family: PingFang SC;
  font-size: 14px;
  cursor: pointer;
}
.detailsText {
  font-size: 12px;
}
</style>
