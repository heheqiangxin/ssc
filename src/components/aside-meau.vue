<template>
  <aside>
    <div class="logo">
      <img src="@/assets/logo.png" alt="科脉" title="科脉" />
      <p>深圳科脉</p>
    </div>
    <div class="aside_choose">
      <el-menu
        class="el-menu-vertical-demo"
        background-color="#00152b"
        text-color="#fff"
        active-text-color="#ffffff"
        :default-active="activeIndex"
        :router="true"
      >
        <el-menu-item
          v-for="item in el_menu_item_list"
          :key="item.id"
          :index="item.index"
          @click="changeIndex(item.index,item)"
        >
          <i :class="item.i_class"></i>
          <span slot="title">{{ item.span_value }}</span>
        </el-menu-item>
      </el-menu>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      el_menu_item_list: [
        {
          index:'achives',
          i_class: "el-icon-s-cooperation",
          span_value: "代销结算",
        },
        {
          index:'costs',
          i_class: "el-icon-s-cooperation",
          span_value: "成本代销",
        },
        {
          index:'actity',
          i_class: "el-icon-s-cooperation",
          span_value: "促销换购",
        },
        {
          index:'retail',
          i_class: "el-icon-s-cooperation",
          span_value: "零售明细",
        },
        {
          index:'cashier',
          i_class: "el-icon-s-cooperation",
          span_value: "收银员信息",
        },
        {
          index: "access",
          i_class: "el-icon-user-solid",
          span_value: "访客列表",
        }
      ],
    };
  },
  computed: {
    activeIndex() {
      return this.$store.state.activeIndex;
    },
  },
  methods: {
    changeIndex(index,value) {
      this.$store.commit("changeActiveIndex", index);
      this.$store.commit("increateDetailChoose",value)
    },
  },
  
};
</script>

<style scoped>
aside {
  width: 256px;
  height: 100%;
  background: #00152b;
  box-shadow: 2px 0px 6px 0px rgba(0, 21, 41, 0.35);
  position: fixed;
}
.logo {
  width: 256px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo img {
  height: 40px;
}
.logo p {
  display: inline-block;
  width: 72px;
  height: 25px;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 25px;
  margin-left: 30px;
}
.el-menu {
  border-right: 0 !important;
}
.el-menu i,
span {
  margin-left: 14px;
  width: 64px;
  height: 22px;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff !important;
  line-height: 22px;
}
.el-menu-item.is-active {
  background: #5677fc !important;
}
</style>