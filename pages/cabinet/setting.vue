<script setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "/store/auth";
import { UserFilled } from "@element-plus/icons-vue";
const { user } = storeToRefs(useAuthStore());
const userMeny = ref(user.value);
</script>
<template>
  <div>
    <div class="container">
      <StatCabinet />
      <div class="columns">
        <div class="column is-one-quarter">
          <NavCabinet />
        </div>
        <div class="column is-three-quarters">
          <div class="setting-cab">
            <h1>Приветствуем {{ userMeny.first_name }}</h1>
            <div class="setting-avatar">
              <h2>Аватар профиля</h2>
              <div>
                <el-avatar :icon="UserFilled" />
              </div>
            </div>
            <cabinet-generalInfo />
            <cabinet-editPassword />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.setting-cab .el-input--large .el-input__inner {
  --el-input-inner-height: calc(var(--el-input-height, 46px) - -6px);
  font-size: 15px;
  line-height: 1;
  font-weight: 300;
}
.setting-cab h1 {
  font-size: 31px;
  font-weight: 700;
  margin: 0 0 30px;
}
.setting-avatar {
  margin: 0 0 30px;
}
.setting-avatar h2 {
  font-size: 22px;
  font-weight: 600;
  margin: 0 0 30px;
  color: #828282;
}
.setting-avatar .el-avatar {
  height: 100px;
  width: 100px;
  font-size: 60px;
  border-radius: 22px;
  background: #a4a4a4;
}
</style>
