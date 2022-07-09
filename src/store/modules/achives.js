const achives = {
  state: () => ({
    search: [
      {
        searchTitle: "结算日期",
        searchEnglishTitle: "date",
        searchValue: [],
      },
      {
        searchTitle: "核算主体",
        searchEnglishTitle: "account",
        searchValue: ["全部", "主体A", "主体B"],
      },
      {
        searchTitle: "供应商",
        searchEnglishTitle: "supplier",
        searchValue: ["全部", "gogo", "gngn"],
      },
      {
        searchTitle: "合同编号",
        searchEnglishTitle: "contractNumber",
        searchValue: ["全部", "北京", "上海"],
      },
      {
        searchTitle: "部门",
        searchEnglishTitle: "department",
        searchValue: ["全部", "部门A", "部门B"],
      },
      {
        searchTitle: "合同状态",
        searchEnglishTitle: "contractState",
        searchValue: ["全部", "正常", "异常"],
      },
      {
        searchTitle: "经营状态",
        searchEnglishTitle: "managementState",
        searchValue: ["全部", "开门", "关门"],
      },
      {
        searchTitle: "",
        searchEnglishTitle: "",
        searchValue: [],
      },
    ],
    date: "",
    selectValue: {
      date: '',
      account: "全部",
      supplier: "全部",
      contractNumber: "全部",
      department: "全部",
      contractState: "全部",
      managementState: "全部",
    },
    detailChoose: [
      {
        index: "costs",
        i_class: "el-icon-s-cooperation",
        value: "成本代销",
      },
    ],
    activeButton: "costs",
  }),
  mutations: {
    increateDetailChoose(state, value) {
      let newDetailChoose = {
        index: value.index,
        i_class: value.i_class,
        value: value.span_value,
      };
      if (
        JSON.stringify(state.detailChoose).indexOf(
          JSON.stringify(newDetailChoose)
        ) === -1
      ) {
        if (value.span_value !== "访客列表") {
          state.detailChoose.push(newDetailChoose); // 进行动态的操作
        }
      }
      state.activeButton = value.index;
    },
    handle(state, index) {
      state.activeButton = index;
    },
  },
  actions: {},
  getters: {},
};
export default achives;
