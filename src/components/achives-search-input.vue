<template>
  <div class="search">
    <div v-for="(item, index) in search" :key="item.id" class="input_box">
      <div v-if="index === 0" class="box">
        <span>
          <div class="asterisk">*</div>
          {{ item.searchTitle }}:</span
        >
        <input type="date" class="select" v-model="selectValue.date" />
      </div>
      <div v-else-if="index === 7" class="box"></div>
      <div v-else class="box">
        <span>{{ item.searchTitle }}:</span>
        <select class="select" @change="selected($event.target.value, item)">
          <option
            :value="value"
            v-for="value in item.searchValue"
            :key="value.id"
          >
            {{ value }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      
    };
  },
  computed: {
    search() {
      return this.$store.state.achives.search;
    },
    selectValue(){
      return this.$store.state.achives.selectValue;
    }
  },
  methods: {
    selected(value, item) {
      let index = Object.keys(this.selectValue).indexOf(
        item.searchEnglishTitle
      );
      if (index !== -1) {
        for (let i = 0; i <= Object.keys(this.selectValue).length; i++) {
          let num = Object.keys(this.selectValue)[index];
          this.selectValue[num] = value;
        }
      }
      // console.log(JSON.stringify(this.selectValue));
    },
  },
};
</script>

<style scoped>
.search {
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.input_box {
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
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
span {
  width: 70px;
  height: 20px;
  text-align: right;
  color: rgba(51, 51, 51, 1);
  font-family: PingFang SC;
  font-size: 14px;
  padding-right: 10px;
}
.box {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.asterisk {
  color: red;
  display: inline;
}
</style>
