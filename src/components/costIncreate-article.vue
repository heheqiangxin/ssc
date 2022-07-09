<template>
  <div class="cost-increate">
    <div class="cost-back">
      <span class="back-span">新增</span>
      <i class="el-icon-close" @click="backCosts"></i>
    </div>
    <cost-increate-actity
      v-for="item in actityData"
      :key="item.id"
      :actityName="item.actityName"
      :details="item.details"
    ></cost-increate-actity>
  </div>
</template>

<script>
import costIncreateActity from './costIncreate-actity.vue'

export default {
  components: { costIncreateActity },
  methods: {
    backCosts() {
      this.$store.commit('costs')
    },
  },
  data() {
    return {
      actityData: [
        {
          actityName: '单品促销',
          details: [
            {
              icon: require('@/assets/Frame1.svg'),
              actityType: '限时特价',
              actityDetail: '',
            },
            {
              icon: require('@/assets/Frame2.svg'),
              actityType: '限时折扣',
              actityDetail: '',
            },
          ],
        },
        {
          actityName: '订单促销',
          details: [
            {
              icon: require('@/assets/Frame (1).svg'),
              actityType: '逢倍数特价',
              actityDetail: '第M件,特价X元购买',
            },
            {
              icon: require('@/assets/Frame (2).svg'),
              actityType: '满一定件数特价',
              actityDetail: '买满M件,每件特价X元',
            },
            {
              icon: require('@/assets/Frame (3).svg'),
              actityType: '抓堆促销',
              actityDetail: 'X元在一堆商品中任选M件',
            },
            {
              icon: require('@/assets/Frame (4).svg'),
              actityType: '满减促销',
              actityDetail: '满X元减金额;满M件减金额',
            },
            {
              icon: require('@/assets/Frame (5).svg'),
              actityType: '瞒折促销',
              actityDetail: '满X元全部N折;满M件全部N折;第M件打N折',
            },
            {
              icon: require('@/assets/Frame (6).svg'),
              actityType: '赠品促销',
              actityDetail: '满X元赠商品;满M件赠商品',
            },
            {
              icon: require('@/assets/Frame (7).svg'),
              actityType: '换购促销',
              actityDetail: '满X元赠商品;满M件赠商品',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>
.cost-increate {
  width: 98%;
  background: rgba(255, 255, 255, 1);
  height: 96%;
}
.cost-back {
  width: 100%;
  height: 64px;
  color: rgba(49, 53, 60, 1);
  font-family: PingFang SC;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(233, 237, 243, 1);
}
.back-span {
  position: relative;
  left: 16px;
}
.el-icon-close {
  position: relative;
  right: 20px;
}
</style>
