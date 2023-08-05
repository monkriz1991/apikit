<script setup>
import { UserFilled } from "@element-plus/icons-vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "/store/auth";
const { user } = storeToRefs(useAuthStore());
const userMeny = ref(user.value);
const route = useRoute();
const menuActive = ref(["1"]);
const menuOpen = ref("1");

function openMeny(route) {
  if (
    route == "cabinet-fill-api" ||
    route == "cabinet-fill-api-id" ||
    route == "cabinet-card-id"
  ) {
    menuActive.value = ["3"];
    menuOpen.value = "3-1";
  }
  if (route == "cabinet-card") {
    menuActive.value = ["3"];
    menuOpen.value = "3-2";
  }
}
openMeny(route.name);
</script>
<template>
  <div>
    <div class="el-menu-cab">
      <div class="menu-cab-avatar">
        <div>
          <el-avatar :icon="UserFilled" />
        </div>
      </div>
      <div class="menu-cab-name">
        <h4>{{ userMeny.first_name }}</h4>
      </div>
      <el-menu :default-openeds="menuActive" :default-active="menuOpen">
        <el-menu-item index="1">
          <nuxt-link to="/cabinet/">
            <span class="icon">
              <icon name="ooui:articles-ltr" />
            </span>
            <span>Мои Проекты</span>
          </nuxt-link>
        </el-menu-item>
        <el-menu-item index="2">
          <nuxt-link to="/cabinet/creat-api/">
            <span class="icon">
              <icon name="majesticons:applications-add" />
            </span>
            <span>Добавить коллекцию</span>
          </nuxt-link>
        </el-menu-item>

        <el-sub-menu index="3">
          <template #title>
            <span class="icon">
              <icon name="fluent:select-all-off-24-filled" />
            </span>
            <span>Контент</span>
          </template>
          <el-menu-item index="3-1">
            <nuxt-link to="/cabinet/fill-api/">
              <span>Все записи</span>
            </nuxt-link></el-menu-item
          >
          <el-menu-item index="3-2"
            ><nuxt-link to="/cabinet/card/">
              <span>Добавить запись</span>
            </nuxt-link></el-menu-item
          >
        </el-sub-menu>

        <el-menu-item index="4">
          <nuxt-link to="/cabinet/setting/">
            <span class="icon">
              <icon name="material-symbols:settings-account-box-rounded" />
            </span>
            <span>Настройки</span>
          </nuxt-link>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<style>
.el-menu-cab {
  padding: 0 30px 0 0px;
  position: relative;
}
.el-sub-menu__title {
  position: relative;
}
.el-menu-cab > ul.el-menu:after {
  content: "";
  width: 5px;
  position: absolute;
  height: 100%;
  top: 0;
  right: 20px;
  bottom: 0;
  border-radius: 6px;
  background: rgba(182, 182, 182, 0.158);
}
.el-menu-cab ul {
  border: none;
  padding: 0 20px 0 0;
}
.el-menu-cab li {
  width: 100%;
  padding: 0 !important;
  height: auto;
}
.el-menu-cab li a,
.el-sub-menu__title {
  padding: 0 20px 0 0;
  color: #4e4e4e;
  font-size: 15px;
  font-weight: 600;
}
.el-menu-cab li:hover {
  background: transparent;
}
.el-menu-cab li a:hover {
  transition: 0.2s;
  color: #0a791a;
}
.el-menu-cab .el-sub-menu__title:hover {
  background-color: transparent;
  transition: 0.2s;
  color: #0a791a;
}
.el-menu-cab li a .el-icon {
  font-size: 23px;
  top: -2px;
}
.el-menu-cab .router-link-active {
  background: transparent;
  /* border-radius: 0px;
  box-shadow: 6px 0 0 0 rgb(152 212 174); */
}
.el-menu-cab > ul > li > a.router-link-active:after,
.el-sub-menu .el-menu-item.is-active:after {
  content: "";
  width: 5px;
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: 6px;
  background: rgb(152 212 174);
}
.el-menu-cab .router-link-active:hover {
  color: #0a791a;
}
.el-menu-cab .router-link-active {
  color: #0a791a;
}
.el-menu-cab li a {
  width: 100%;
  font-weight: 500;
}
.menu-cab-avatar {
}
.menu-cab-avatar .el-avatar {
  height: 60px;
  width: 60px;
  font-size: 50px;
  border-radius: 12px;
  background: #a4a4a4;
}
.menu-cab-name {
  margin: 15px 0 25px;
}
.el-menu-cab .el-menu .icon {
  margin: 0px 7px 0 0;
  height: 60px;
  width: 40px;
}
.el-menu-cab .el-sub-menu.is-opened {
  /* height: auto !important; */
}
.el-menu-cab .el-sub-menu .el-menu {
  padding: 0;
}
.el-menu-cab .el-sub-menu__title {
  padding: 0 !important;
}
.el-sub-menu li {
  width: 100%;
  padding: 0 !important;
  height: auto !important;
  line-height: 2.5 !important;
}
</style>
