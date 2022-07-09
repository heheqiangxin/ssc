<template>
  <div class="details">
    <table cellspacing="0" class="table">
      <td v-for="(tabtit, index) in tableTit" :key="index" class="tableTh">
        <div v-if="tabtit === '访客ID'" class="th1">{{ tabtit }}</div>
        <div v-else-if="tabtit === '访客信息'" class="th2">{{ tabtit }}</div>
        <div v-else class="th3">{{ tabtit }}</div>
      </td>
      <tr
        v-for="item in tableData.slice((this.newPage-1)*4, this.newPage*4)"
        :key="item.id"
      >
        <td v-for="(tem, key, ind) in item" :key="ind">
          <div v-if="key === 'accesssID'" class="accesssID">{{ tem }}</div>
          <div v-else-if="key === 'accessInfo'" class="accessInfo">
            <p>性别:{{ tem.sex }}</p>
            <p>年龄:{{ tem.age }}</p>
          </div>
          <div v-else-if="key === 'isRelateWechat'" class="isRelateWechat">
            <div v-if="tem === false">
              <div class="circle1"></div>
              <p class="isRelateWechat_p">未关联微信</p>
            </div>
            <div v-else>
              <div class="circle2"></div>
              <p class="isRelateWechat_p">已关联微信</p>
            </div>
          </div>
          <div v-else-if="key === 'recentTime'" class="recentTime">
            {{ getNowFormatDate }}
          </div>
          <div v-else class="tem">{{ tem }}</div>
        </td>
        <td class="a">
          <a href="javascript:void(0)">查看详情</a>
        </td>
      </tr>
    </table>

    <el-pagination
      background
      :page-size="4"
      :page-count="9"
      :pager-count="9"
      layout="prev, pager, next"
      :style="selfstyle"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableTit: [
        "访客ID",
        "访客信息",
        "是否关联微信",
        "选择时间段内访问次数",
        "选择时间段内吸烟总支数",
        "最近到访时间",
        "操作",
      ],
      tableData: [
        {
          accesssID: 135,
          accessInfo: { sex: "男", age: "26-30" },
          isRelateWechat: true,
          choiceTimes: "6次",
          somkes: "1支",
          recentTime: new Date().toLocaleString(),
        },
        {
          accesssID: 568,
          accessInfo: { sex: "男", age: "26-30" },
          isRelateWechat: true,
          choiceTimes: "6次",
          somkes: "1支",
          recentTime: new Date().toLocaleString(),
        },
        {
          accesssID: 4243,
          accessInfo: { sex: "女", age: "26-30" },
          isRelateWechat: false,
          choiceTimes: "10次",
          somkes: "5支",
          recentTime: new Date().toLocaleString(),
        },
        {
          accesssID: 654,
          accessInfo: { sex: "女", age: "26-30" },
          isRelateWechat: false,
          choiceTimes: "1次",
          somkes: "1支",
          recentTime: new Date().toLocaleString(),
        },
        {
          accesssID: 654,
          accessInfo: { sex: "女", age: "26-30" },
          isRelateWechat: false,
          choiceTimes: "1次",
          somkes: "1支",
          recentTime: new Date().toLocaleString(),
        },
        {
          accesssID: 654,
          accessInfo: { sex: "女", age: "26-30" },
          isRelateWechat: false,
          choiceTimes: "1次",
          somkes: "1支",
          recentTime: new Date().toLocaleString(),
        },
        {
          accesssID: 135,
          accessInfo: { sex: "男", age: "26-30" },
          isRelateWechat: true,
          choiceTimes: "6次",
          somkes: "1支",
          recentTime: new Date().toLocaleString(),
        },
        {
          accesssID: 568,
          accessInfo: { sex: "男", age: "26-30" },
          isRelateWechat: true,
          choiceTimes: "6次",
          somkes: "1支",
          recentTime: new Date().toLocaleString(),
        },
        {
          accesssID: 4243,
          accessInfo: { sex: "女", age: "26-30" },
          isRelateWechat: false,
          choiceTimes: "10次",
          somkes: "5支",
          recentTime: new Date().toLocaleString(),
        },
        {
          accesssID: 654,
          accessInfo: { sex: "女", age: "26-30" },
          isRelateWechat: false,
          choiceTimes: "1次",
          somkes: "1支",
          recentTime: new Date().toLocaleString(),
        },
        {
          accesssID: 654,
          accessInfo: { sex: "女", age: "26-30" },
          isRelateWechat: false,
          choiceTimes: "1次",
          somkes: "1支",
          recentTime: new Date().toLocaleString(),
        },
        {
          accesssID: 654,
          accessInfo: { sex: "女", age: "26-30" },
          isRelateWechat: false,
          choiceTimes: "1次",
          somkes: "1支",
          recentTime: new Date().toLocaleString(),
        },
      ],
      selfstyle: {
        width: "432px",
        position: "absolute",
        bottom: "5px",
        left: "500px",
      },
      newPage: 1,
    };
  },
  computed: {
    getNowFormatDate() {
      var date = new Date();
      var seperator1 = "-";
      var seperator2 = ":";
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate =
        date.getFullYear() +
        seperator1 +
        month +
        seperator1 +
        strDate +
        " " +
        date.getHours() +
        seperator2 +
        date.getMinutes() +
        seperator2 +
        date.getSeconds();
      return currentdate;
    },
  },
  methods: {
    handleCurrentChange(newPage) {
      this.newPage = newPage;
      console.log(this.newPage);
    },
  },
};
</script>

<style  scoped>
.details {
  width: 97%;
  height: 313px;
  background: #fafafa;
  margin: 10px 0px 0px 44px;
  background-color: #fff;
  position: relative;
  /* overflow: scroll; */
}
a {
  color: #5677fc;
  text-decoration: none;
}
.tableTh {
  height: 54px;
  background: #fafafa;
  border-radius: 4px 4px 0px 0px;
  line-height: 54px;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.85);
}
.table {
  width: 97%;
  flex: 1;
}
.table tr {
  height: 54px;
}
.table td {
  height: 100%;
  border-bottom: 1px solid #e8e8e8;
}
.tem {
  text-align: center;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.85);
  line-height: 20px;
}
.a {
  text-align: center;
}
.accesssID,
.accessInfo {
  padding-left: 20px;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.65);
  line-height: 22px;
}
.th3 {
  text-align: center;
}
.th1,
.th2 {
  padding-left: 20px;
}
.isRelateWechat {
  text-align: center;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.65);
  line-height: 22px;
}
.circle1 {
  width: 10px;
  height: 10px;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  display: inline-block;
  margin-right: 8px;
}
.isRelateWechat_p {
  display: inline-block;
}
.circle2 {
  width: 10px;
  height: 10px;
  background-color: #52c41a;
  border-radius: 50px;
  display: inline-block;
  margin-right: 8px;
}
.recentTime {
  text-align: center;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.65);
  line-height: 22px;
}
.table tr:hover {
  background-color: rgba(86, 119, 252, 0.1);
}
</style>