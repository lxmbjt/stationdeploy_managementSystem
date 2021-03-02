<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="300px" style="background-color: rgb(238, 241, 246);margin-left: 10px;">
      <el-menu :default-active="1" background-color="rgb(238, 241, 246)" router>
        <el-submenu index="1" >
          <template slot="title"><i class="el-icon-message"></i>事件/地点/任务管理</template>
          <el-menu-item-group>
            <el-menu-item index="/eventMangement">事件管理</el-menu-item>
            <el-menu-item index="/PositionTypeManagement">地点管理</el-menu-item>
            <el-menu-item index="/MissionManagement">任务管理</el-menu-item>
          </el-menu-item-group>

        </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-setting"></i><span slot="title">设备管理</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-s-custom"></i><span slot="title">用户管理</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main style="background-color: rgb(238, 241, 246);padding-top:0;padding-bottom: 30px;padding-left:0;padding-right:0;">

         <router-view></router-view>

      </el-main>
    </el-container>
  </el-container>
</template>

<script>

</script>

<style>
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
