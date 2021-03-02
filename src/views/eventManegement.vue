<template>
<div>
<div class="title" style="background-color: white;height:30px;text-align: left;margin-bottom: 20px;padding-top:10px;">
   <span style="margin-left:20px;">事件管理</span>
   </div>
<div class="eventManagement">
       <el-table
         :data="tableData"
         style="width: 100%">
         <el-table-column
           label="事件类型"
           width="200">
           <template slot-scope="scope">
             <!-- <i class="el-icon-time"></i> -->
             <span style="margin-left: 10px">{{ scope.row.name }}</span>
           </template>
         </el-table-column>
         <el-table-column
           label="操作"
           width="270">
           <template slot-scope="scope">
             <el-button
               size="mini"
               icon="el-icon-edit"
               @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
             <el-button
               size="mini"
               type="danger"
               icon="el-icon-delete"
               @click="handleDelete(scope.$index, scope.row)">删除</el-button>
           </template>

         </el-table-column>
         <el-table-column label="是否启用">
           <template slot-scope="scope">
             <el-button
               size="mini"
               @click="handleEdit(scope.$index, scope.row)">启用</el-button>
             <el-button
               size="mini"
               type="primary"
               @click="handleDelete(scope.$index, scope.row)">禁用</el-button>
           </template>
         </el-table-column>
       </el-table>

</div>
</div>
</template>

<script>
  import title from '@/components/title.vue'
  export default {
    name:'eventManagement',
    data() {

      return {

        tableData: [{
          id: 1,
          name: '洪水',
          content: '',
          status:1//1启用 0未启用
        }, {
         id: 2,
         name: '火灾',
         content: '',
         status:1//1启用 0未启用
        }, {
          id: 3,
          name: '地震',
          content: '',
          status:1//1启用 0未启用
        }, {
          id: 4,
          name: '泥石流',
          content: '',
          status:1//1启用 0未启用
        },
        {
          id: 5,
          name: '塌方',
          content: '',
          status:1//1启用 0未启用
        },
        {
          id: 6,
          name: '踩踏',
          content: '',
          status:1//1启用 0未启用
        },
        {
          id: 4,
          name: '矿难',
          content: '',
          status:1//1启用 0未启用
        },
        ]
      }
    },
    components:{
      title
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
        //console.log(row);

      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>

<style>
  .eventManagement{
    width:80%;
    margin-left:40px;
  }
  .el-header {
      background-color: #B3C0D1;
      color: #333;
      line-height: 60px;
    }

    .el-aside {
      color: #333;
      text-align: left;

    }
</style>
