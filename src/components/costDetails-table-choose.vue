<template>
  <div class="tableChooseBox">
    <button
      v-for="(item, index) in data"
      :key="item.id"
      :class="{ activeButton: activeButton === index }"
      @click="handle(index)"
    >
      {{ item }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: ["结算明细", "费用明细"],
      activeButton: 0,
    };
  },
  methods: {
    handle(index) {
      this.activeButton = index;
    },
  },
};
</script>

<style scoped>
.tableChooseBox {
  width: 100%;
  height: 42px;
  background-color: #fff;
  border-bottom: 1px solid rgba(232, 232, 232, 1);
  display: flex;
  align-items: flex-start;
}
button {
  width: 56px;
  height: 42px;
  background-color: #fff;
  border: none;
  color: rgba(51, 51, 51, 1);
  font-family: PingFang SC;
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-right: 20px;
}
.activeButton {
    color: rgba(10, 105, 250, 1);
    border-bottom:2px solid rgba(10, 105, 250, 1);;
}
</style>