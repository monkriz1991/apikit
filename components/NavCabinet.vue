<script lang="ts" setup>
import {
  Document,
  CirclePlus,
  Location,
  Setting,
  DocumentCopy,
  Edit,
} from "@element-plus/icons-vue";
const handleOpen = (key: string, keyPath: string[]) => {};
const handleClose = (key: string, keyPath: string[]) => {};
</script>
<template>
  <div>
    <div class="el-menu-cab">
      <el-menu default-active="2" @open="handleOpen" @close="handleClose">
        <el-menu-item index="1">
          <nuxt-link to="/cabinet/">
            <el-icon><DocumentCopy /></el-icon>
            <span>Мои Проекты</span>
          </nuxt-link>
        </el-menu-item>
        <el-menu-item index="2">
          <nuxt-link to="/cabinet/creat-api/">
            <el-icon><CirclePlus /></el-icon>
            <span>Добавить Api</span>
          </nuxt-link>
        </el-menu-item>
        <el-menu-item index="3">
          <nuxt-link to="/cabinet/fill-api/">
            <el-icon><Edit /></el-icon>
            <span>Наполнить Api</span>
          </nuxt-link>
        </el-menu-item>
        <el-menu-item index="4">
          <nuxt-link to="/cabinet/setting/">
            <el-icon><setting /></el-icon>
            <span>Настройки профиля</span>
          </nuxt-link>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<style>
.el-menu-cab ul {
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
  font-size: 15px;
}
.el-menu-cab li:hover {
  background: transparent;
}
.el-menu-cab li a:hover {
  transition: 0.2s;
  color: #00d1b2;
}
.el-menu-cab li a .el-icon {
  font-size: 23px;
  top: -2px;
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
