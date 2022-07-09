import Vue from "vue";
import Vuex from "vuex";
import achives from "./modules/achives.js";
import costs from "./modules/costs.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeIndex: "costs",
    currentTab: "costs",
    detailTab: "",
    exchangePromotionBack: "",
    tableName01: ["retail", "payDetail"],
    tableName02: ["achives", "errorMessage"],
    tableChoose01: "retail",
    tableChoose02: "achives",
  },
  mutations: {
    changeActiveIndex(state, n) {
      state.activeIndex = n;
      if (state.activeIndex === "costs") {
        if (state.detailTab === "costDetails") {
          state.currentTab = "costDetails";
        } else if (state.detailTab === "costIncreate") {
          state.currentTab = "costIncreate";
        } else if (state.detailTab === "exchangePromotion") {
          state.currentTab = "exchangePromotion";
        } else if (state.detailTab === "grabPromotion") {
          state.currentTab = "grabPromotion";
        } else {
          state.currentTab = "costs";
        }
      } else if (state.activeIndex === "cashier") {
        if (state.detailTab === "cashierIncreate") {
          state.currentTab = "cashierIncreate";
        } else {
          state.currentTab = "cashier";
        }
      } else {
        state.currentTab = n;
      }
    },
    costsDetails(state) {
      state.currentTab = "costDetails";
      state.detailTab = "costDetails";
    },
    costs(state) {
      state.currentTab = "costs";
      state.detailTab = "";
      state.activeIndex = "costs";
    },
    costIncreate(state) {
      state.currentTab = "costIncreate";
      state.detailTab = "costIncreate";
    },
    cashierIncreate(state) {
      state.currentTab = "cashierIncreate";
      state.detailTab = "cashierIncreate";
    },
    cashier(state){
      state.currentTab = "cashier";
      state.detailTab = "";
      state.activeIndex = "cashier";
    },
    exchangePromotion(state, index) {
      if (index === "换购促销") {
        state.currentTab = "exchangePromotion";
        state.detailTab = "exchangePromotion";
        state.exchangePromotionBack = "换购促销";
      }
      if (index === "赠品促销") {
        state.currentTab = "exchangePromotion";
        state.detailTab = "exchangePromotion";
        state.exchangePromotionBack = "赠品促销";
      }
      if (index === "抓堆促销") {
        state.currentTab = "grabPromotion";
        state.detailTab = "grabPromotion";
        state.exchangePromotionBack = "抓堆促销";
      }
    },
    tableChoose01(state, index) {
      state.tableChoose01 = state.tableName01[index];
    },
    tableChoose02(state, index) {
      state.tableChoose02 = state.tableName02[index];
    },
  },
  actions: {},
  modules: {
    achives: achives,
    costs: costs,
  },
});
