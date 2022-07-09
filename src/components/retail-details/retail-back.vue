<template>
  <div class="back-box">
    <div class="back-click" @click="backCosts">
      <img src="@/assets/back.svg" />
      <a @click.prevent="backCosts" href="" class="back-a-click">{{backData.clickData}}</a>
    </div>
    <span>{{ backData.spanData }}</span>
  </div>
</template>

<script>
export default {
  props: ['backData'],
  methods: {
    backCosts() {
      this.$store.commit('costs')
    },
  },
}
</script>

<style scoped>
.back-box {
  width: 100%;
  height: 48px;
  border-bottom: 0.8px solid rgba(232, 232, 232, 1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(51, 51, 51, 1);
  font-family: PingFang SC;
  font-size: 16px;
  flex-grow: 0;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 1);
}
.back-click {
  height: 48px;
  position: absolute;
  left: 16px;
  display: flex;
  align-items: center;
}
.back-a-click {
  text-decoration: none;
  color: rgba(51, 51, 51, 1);
}
.back-a-click:hover {
  color: skyblue;
}
</style>
