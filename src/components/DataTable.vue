<template>
  <el-table :data="tableData" stripe fit header-row-class-name="ccc" cell-class-name="fff">
    <el-table-column prop="date" label="日期" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.el-table {
  tr.ccc {

    text-align: center;
    .is-leaf {
      background-color: #4993EC!important;
    }
    .cell {
      text-align: center;
      margin: 0 auto;
      border-right: 1px solid #fff;
      color:#fff;
    }
  }
  td.fff {
    text-align: center;
    .cell {
      text-align: center;
    }
  }
}
</style>
