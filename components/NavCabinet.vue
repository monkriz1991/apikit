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
              <icon name="fluent:copy-select-24-regular" />
            </span>
            <span>Мои Проекты</span>
          </nuxt-link>
        </el-menu-item>
        <el-menu-item index="2">
          <nuxt-link to="/cabinet/creat-api/">
            <span class="icon">
              <icon name="fluent:contract-down-left-16-regular" />
            </span>
            <span>Добавить коллекцию</span>
          </nuxt-link>
        </el-menu-item>

        <el-menu-item index="3">
          <nuxt-link to="/cabinet/fill-api/">
            <span class="icon">
              <icon name="fluent:copy-24-regular" />
            </span>
            <span>Записи</span>
          </nuxt-link>
        </el-menu-item>
        <el-menu-item index="4">
          <nuxt-link to="/cabinet/card/">
            <span class="icon">
              <icon name="fluent:copy-add-20-regular" />
            </span>
            <span>Добавить запись</span>
          </nuxt-link>
        </el-menu-item>
        <!-- <el-sub-menu index="3">
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
        </el-sub-menu> -->

        <el-menu-item index="5">
          <nuxt-link to="/cabinet/setting/">
            <span class="icon">
              <icon name="fluent:person-settings-20-regular" />
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
/* .el-menu-cab > ul.el-menu:after {
  content: "";
  width: 5px;
  position: absolute;
  height: 100%;
  top: 0;
  right: 20px;
  bottom: 0;
  border-radius: 6px;
  background: rgba(182, 182, 182, 0.158);
} */
.el-menu-cab ul {
  border: none;
  padding: 0 20px 0 0;
  background: transparent;
}
.el-menu-cab li {
  width: 100%;
  padding: 0 !important;
  height: auto;
  margin: 0 0 10px;
}
.el-menu-cab li a > span {
  vertical-align: middle !important;
}
.el-menu-cab li a,
.el-sub-menu__title {
  padding: 0 20px 0 0;
  color: #4e4e4e;
  font-size: 14px;
  font-weight: 700;
}
.el-menu-cab li:hover {
  background: transparent;
}
.el-menu-cab li a:hover {
  transition: 0.2s;
  color: #000000;
}
.el-menu-cab .el-sub-menu__title:hover {
  background-color: transparent;
  transition: 0.2s;
  color: #000000;
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
/* .el-menu-cab > ul > li > a.router-link-active:after,
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
} */
.el-menu-cab .router-link-active:hover {
  color: #000000;
}
.el-menu-cab .router-link-active {
  color: #000000;
  background: #f1f1f1;
  border-radius: 14px;
}
.el-menu-cab li a {
  width: 100%;
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
.el-menu-cab .el-menu span.icon {
  margin: 0px 5px 0 5px;
  height: 50px;
  width: 50px;
  border-radius: 15px;
  padding: 13px;
  /* border: 2px solid #e2e2e2; */
  /* background: #ffffff; */
  /* color: #5e5e5e; */
  /* text-align: left; */
  /* justify-content: flex-start;*/
}
.el-menu-cab .router-link-active span.icon,
.el-menu-cab .el-sub-menu.is-active span.icon {
  /* color: #ffffff;
  background: #f5c324;
  box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.1); */
}
.el-menu-cab span.icon svg {
  height: 40px;
  width: 30px;
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
  padding: 0 0 0 65px !important;
  height: auto !important;
  line-height: 2.2 !important;
  margin: 0;
}
</style>
