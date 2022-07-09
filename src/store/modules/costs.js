const costs = {
  state: () => ({
    selectValue: {
      date: '',
      supplier: '所有',
      contractNumber: '所有',
      documentNumber: '所有',
      type:'工作单据'
    },
    //表格点击传到finishdata的数据
    content:{
      supplier:'',
      maker:'',
      makeDate:'',
      auditor:'',
      auditorDate:'',
      voidPerson:'',
      voidDate:'',
      printTimes:'',
    }
  }),
  mutations: {
    dateValue(state, newValue) {
      state.selectValue.date = newValue
    },
    textValue(state, newValue) {
      state.selectValue.documentNumber = newValue
    },
    select01Value(state, newValue) {
      state.selectValue.supplier = newValue
    },
    select02Value(state, newValue) {
      state.selectValue.contractNumber = newValue
    },
    allSearchValue(state, newValue){
      state.selectValue.type = newValue
    },
    changeContent(state,value){
       state.content = {
        单据编号:value.supplier,
        制单人:value.maker,
        制单日期:value.makeDate,
        审核人:value.auditor,
        审核日期:value.auditorDate,
        作废人:value.voidPerson,
        作废日期:value.voidDate,
        打印次数:value.printTimes,
       } 
    }
  },
  actions: {},
  getters: {},
}
export default costs
