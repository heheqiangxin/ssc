<template>
  <div class="tableList">
    <div class="table">
      <table cellspacing="0" cellpadding="10">
        <tr
          v-for="(item, index) in dataList"
          :key="item.id"
          @click="handle(index)"
          :class="{ active: currentActive === index }"
        >
          <td class="name">{{ item.name }}</td>
          <td class="value">
            <div v-for="(value, ind) in item.b" :key="ind">
              <el-date-picker
                v-if="index === 1"
                :style="selfstyle1"
                v-model="value1"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="['00:00:00', '23:59:59']"
              >
              </el-date-picker>
              <button
                v-else
                @click="handleButton(ind, index)"
                :class="{
                  activeButton:
                    activeButton[index].index === index &&
                    activeButton[index].ind === ind,
                }"
              >
                {{ value }}
              </button>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <button
      class="searchButton"
      onMouseDown="this.className = 'searchButton_click'"
      onMouseUp="this.className = 'searchButton'"
      @click="handleQuerm"
    >
      <i class="el-icon-search"></i>
      <span class="search">查询</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [
        {
          name: "选择吸烟室:",
          b: ["所有吸烟室", "会议室", "吸烟室"],
        },
        {
          name: "冒泡时间:",
          b: [""],
        },
        {
          name: "访客性别:",
          b: ["全部", "男", "女"],
        },
        {
          name: "访客年龄:",
          b: [
            "全部",
            "18-25岁",
            "26-30岁",
            "31-35岁",
            "36-40岁",
            "41-45岁",
            "更多",
          ],
        },
        {
          name: "关联微信:",
          b: ["全部", "已关联", "未关联"],
        },
        {
          name: "选择时间段内活动类型:",
          b: ["全部", "吸烟", "关联卷烟", "娱乐互动"],
        },
        {
          name: "选择时间段内到访次数:",
          b: ["全部", "1次", "2-3次", "4-5次", "6次以上"],
        },
        {
          name: "选择时间段内抽烟次数:",
          b: ["全部", "1-3支", "4-7支", "8-10支", "10支以上"],
        },
      ],
      value1: "",
      selfstyle1: {
        width: "392px",
        margin: "4px 0 7px 24px",
      },
      currentActive: null,
      activeButton: [
        {
          index: 0,
          ind: 0,
        },
        {
          index: 1,
          ind: 0,
        },
        {
          index: 2,
          ind: 0,
        },
        {
          index: 3,
          ind: 0,
        },
        {
          index: 4,
          ind: 0,
        },
        {
          index: 5,
          ind: 0,
        },
        {
          index: 6,
          ind: 0,
        },
        {
          index: 7,
          ind: 0,
        },
      ],
    };
  },
  computed: {},
  methods: {
    handle(index) {
      this.currentActive = index;
    },
    handleButton(ind, index) {
      this.activeButton[index].index = index;
      this.activeButton[index].ind = ind;
    },
    handleQuerm() {
      let list = []
      for (let i = 0; i < this.activeButton.length; i++) {
        if (i === 1) { 
          let d = this.value1[0];
          let c = this.value1[1];
          let startDatetime =
            d.getFullYear() +
            "-" +
            (d.getMonth() + 1) +
            "-" +
            d.getDate() +
            " " +
            d.getHours() +
            ":" +
            d.getMinutes() +
            ":" +
            d.getSeconds();
          let endDatetime =
            c.getFullYear() +
            "-" +
            (c.getMonth() + 1) +
            "-" +
            c.getDate() +
            " " +
            c.getHours() +
            ":" +
            c.getMinutes() +
            ":" +
            c.getSeconds();
          list.push(startDatetime)
          list.push(endDatetime)
        } else {
          list.push(this.dataList[i].b[this.activeButton[i].ind])
        }
      }
      let accessList = {
        smokingRoom:list[0],
        time: { startDatetime: list[1], endDatetime: list[2] },
        accessInfo: { sex: list[3], age: list[4] },
        isRelateWechat: list[5],
        activityType: list[6],
        choiceTimes:list[7],
        somkes: list[8],
      };
      console.log(JSON.stringify(accessList));
    },
  },
};
</script>



<style scoped>
.tableList {
  width: 97%;
  height: 473px;
}
table {
  width: 97%;
  height: 377px;
  margin: 14px 24px 0px 24px;
}
table,
tr,
td {
  border: 1px solid #ebebeb;
}
.name {
  width: 160px;
  height: 48px;
  font-size: 14px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
  line-height: 20px;
  padding-left: 24px;
}
.value {
  display: flex;
  height: 48px;
}
.activeButton {
  background-color: #5677fc !important;
  color: white !important;
}
.value button {
  width: 120px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid #d2d2d2;
  margin: 9px -8px 7px 24px;
  background-color: rgb(253, 253, 253);
  font-size: 14px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
  line-height: 20px;
  cursor: pointer;
}
.value input {
  width: 392px;
  height: 32px;
  background: #ffffff;
  border-radius: 3px;
  border: 1px solid #c4c6cf;
  margin: 8px 0px 6px 24px;
}
.search {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 20px;
  margin-left: 10px;
}
.searchButton {
  width: 160px;
  height: 40px;
  background: #5677fc;
  border-radius: 4px;
  color: white;
  border: 1px solid #5677fc;
  margin: 8px 650px 16px;
  cursor: pointer;
}
.active {
  background-color: rgba(86, 119, 252, 0.1);
}
.searchButton_click {
  width: 160px;
  height: 40px;
  background: skyblue;
  border-radius: 4px;
  color: white;
  border: 1px solid #5677fc;
  margin: 8px 650px 16px;
}
</style>
