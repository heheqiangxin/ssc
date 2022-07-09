<template>
  <div class="details_list">
    <aside-meau></aside-meau>
    <div class="meaubox"></div>
    <div class="right">
      <header>
        <p class="p_vistor">访客列表</p>
        <i class="el-icon-arrow-down"></i>
        <p class="username">用户名</p>
      </header>
      <div class="details_choose">
        <table-list></table-list>
      </div>
      <div class="details_show">
        <table-list-details></table-list-details>
      </div>
    </div>
  </div>
</template>

<script>
import AsideMeau from "../components/aside-meau.vue";
import TableListDetails from "../components/table-list-details.vue";
import tableList from "../components/table-list.vue";
export default {
  components: { tableList, TableListDetails, AsideMeau },
  data() {
    return {
      el_menu_item_list: [
        {
          index: "1",
          i_class: "el-icon-s-data",
          span_value: "数据概览",
        },
        {
          index: "2",
          i_class: "el-icon-user-solid",
          span_value: "访客列表",
        },
        {
          index: "3",
          i_class: "el-icon-truck",
          span_value: "售货设备",
        },
        {
          index: "4",
          i_class: "el-icon-s-goods",
          span_value: "商品管理",
        },
        {
          index: "5",
          i_class: "el-icon-s-custom",
          span_value: "人员管理",
        },
      ],
    };
  },
};
</script>

<style scoped>
.details_list {
  height: 100%;
  width: 100%;
  background: #f0f2f5;
  display: flex;
}
.meaubox{
  height: 100%;
  width: 256px;
  flex-shrink: 0;
}
.right {
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
}
header {
  width: 100%;
  height: 76px;
  background: #ffffff;
  box-shadow: 0px 1px 4px 0px rgba(0, 21, 41, 0.12);
}
header .p_vistor {
  width: 81px;
  height: 28px;
  font-size: 20px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #000000;
  line-height: 28px;
  margin: 24px 0px 24px 32px;
  float: left;
}
header .username {
  width: 42px;
  height: 22px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.7);
  line-height: 22px;
  margin: 27px 0px 27px 0px;
  float: right;
}
header i {
  float: right;
  margin: 30px 35px 0px 9px;
}
.details_choose {
  width: 97%;
  height: 473px;
  background: #ffffff;
  border-radius: 2px;
  margin: 17px 24px 20px 24px;
}
.details_show {
  width: 97%;
  flex: 1;
  background: #ffffff;
  margin-bottom: 20px;
  /* overflow: scroll; */
}
</style>