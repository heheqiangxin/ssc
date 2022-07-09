<template>
  <div class="box">
    <aside-meau class="meau"></aside-meau>
    <div class="meaubox"></div>
    <div class="right">
      <header>
        <el-input placeholder="请输入你要搜索的关键词" v-model="input">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </header>
      <div class="detailChoose">
        <div class="buttonEmptyBox"></div>
        <!-- <button>首页</button> -->
        <button
          v-for="item in detailChoose"
          :key="item.index"
          :class="{ activeButton: activeButton === item.index }"
          @click="handle(item.index)"
        >
          {{ item.value }}
        </button>
      </div>
      <article>
        <keep-alive>
          <component :is="currentTabComponent" :key="currentTabComponent">
          </component
        ></keep-alive>
      </article>
    </div>
  </div>
</template>

<script>
import AchivesArticle from "../components/achives-article.vue";
import asideMeau from "../components/aside-meau.vue";
import costsArticle from "../components/costs-article.vue";
import costDetailsArticle from "../components/costDetails-article.vue";
import CostIncreateArticle from "../components/costIncreate-article.vue";
import ExchangePromotionArticle from "../components/exchange-promotion/exchangePromotion-article.vue";
import ActityArticle from "../components/actity-article.vue";
import RetailArticle from "../components/retail-details/retail-article.vue";
import GrabPromotionArticle from "../components/grab-promotion/grabPromotion-article.vue";
import CashierArticle from '../components/cashier/cashier-article.vue';
import CashierIncreateArticle from '../components/cashier-increate/cashierIncreate-article.vue';

export default {
  components: {
    asideMeau,
    AchivesArticle,
    costsArticle,
    costDetailsArticle,
    CostIncreateArticle,
    ExchangePromotionArticle,
    ActityArticle,
    RetailArticle,
    GrabPromotionArticle,
    CashierArticle,
    CashierIncreateArticle,
  },
  data() {
    return {
      input: "",
    };
  },
  computed: {
    detailChoose() {
      return this.$store.state.achives.detailChoose;
    },
    activeButton() {
      return this.$store.state.achives.activeButton;
    },
    currentTabComponent() {
      return this.$store.state.currentTab + "-article";
    },
  },
  methods: {
    handle(index) {
      this.$store.commit("handle", index);
      this.$store.commit("changeActiveIndex", index);
      this.$router.push("/" + index);
    },
  },
};
</script>

<style scoped>
.box {
  height: 100%;
  width: 100%;
  display: flex;
  background-color: rgba(242, 243, 245, 1);
}
.meau {
  position: fixed;
}
.meaubox {
  height: 100%;
  width: 256px;
  flex-shrink: 0;
}
.right {
  flex: 1;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  overflow: auto;
}
header {
  width: 100%;
  height: 54px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px rgba(236, 237, 240, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
  flex-shrink: 0;
}
header .el-input {
  width: 360px;
  background: rgba(247, 248, 250, 1);
}
.detailChoose {
  width: 100%;
  height: 44px;
  background: rgba(247, 248, 250, 1);
  display: flex;
  align-items: flex-end;
  flex-grow: 0;
  flex-shrink: 0;
}
.detailChoose .buttonEmptyBox {
  width: 11px;
  height: 32px;
  flex-shrink: 0;
}
.activeButton {
  background: rgba(255, 255, 255, 1) !important;
  color: rgba(10, 105, 250, 1) !important;
}
.detailChoose button {
  height: 32px;
  padding: 0px 24px;
  border: 1px solid rgba(232, 232, 232, 1);
  background: rgba(248, 249, 250, 1);
  color: rgba(85, 85, 85, 1);
  font-family: PingFang SC;
  font-size: 14px;
  line-height: 14px;
  cursor: pointer;
}
.el-dropdown span {
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(232, 232, 232, 1);
}
article {
  width: 100%;
  flex: 1;
  height: 732px;
  /* background: rgba(242, 243, 245, 1); */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
</style>
