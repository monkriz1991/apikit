<script lang="ts" setup>
import {
  Document,
  CirclePlus,
  Location,
  Setting,
} from "@element-plus/icons-vue";
const handleOpen = (key: string, keyPath: string[]) => {};
const handleClose = (key: string, keyPath: string[]) => {};
</script>
<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-cab"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1">
        <nuxt-link to="/cabinet/">
          <el-icon><document /></el-icon>
          <span>Мои Api</span>
        </nuxt-link>
      </el-menu-item>
      <el-menu-item index="2">
        <nuxt-link to="/cabinet/creat-api/">
          <el-icon><CirclePlus /></el-icon>
          <span>Добавить Api</span>
        </nuxt-link>
      </el-menu-item>
      <el-menu-item index="3">
        <nuxt-link to="/cabinet/setting/">
          <el-icon><setting /></el-icon>
          <span>Настройки</span>
        </nuxt-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style>
.el-menu-cab {
  border: none;
  padding: 0 20px 0 0;
}
.el-menu-cab li {
  width: 100%;
  padding: 0 !important;
}
.el-menu-cab li a {
  padding: 0 20px;
  color: #4e4e4e;
}
.el-menu-cab li:hover {
  background: transparent;
}
.el-menu-cab li a:hover {
  transition: 0.2s;
  color: #00d1b2;
}
.el-menu-cab .router-link-active {
  background: #ebfffc;
  border-radius: 6px;
}
.el-menu-cab .router-link-active:hover {
  color: #00947e;
}
.el-menu-cab .router-link-active {
  color: #00947e;
}
.el-menu-cab li a {
  width: 100%;
}
</style>
