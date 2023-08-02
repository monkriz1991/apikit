<script setup>
import { Unlock, User } from "@element-plus/icons-vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "/store/auth";

const { authenticateUser } = useAuthStore();
const { authenticated } = storeToRefs(useAuthStore());

const form = reactive({
  username: "",
  password: "",
});

const login = async () => {
  await authenticateUser({ username: form.username, password: form.password });
  console.log(authenticated.value);
  if (authenticated.value == true) {
    navigateTo("/cabinet/");
  }
};
</script>
<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3">
        <div class="login-prev">
          <nuxt-img src="/6213702.webp" />
        </div>
      </div>
      <div class="column is-9">
        <div class="content">
          <div class="login-form">
            <h1>Вход</h1>
            <p class="fz-14">
              Ели у Вас нет аккаунта:
              <nuxt-link to="/registration" class="a-login-info"
                >Зарегистрироваться
                <span class="icon">
                  <icon name="solar:map-arrow-right-bold-duotone" /> </span
              ></nuxt-link>
            </p>
            <el-form :model="form" @submit.prevent class="demo-form-inline">
              <el-form-item>
                <el-input
                  v-model="form.username"
                  size="large"
                  class="mb-2"
                  placeholder="Введите email"
                  :prefix-icon="User"
                  clearable
                />
              </el-form-item>
              <el-form-item>
                <el-input
                  v-model="form.password"
                  size="large"
                  type="password"
                  placeholder="Введите пароль"
                  :prefix-icon="Unlock"
                  show-password
                />
              </el-form-item>
              <p class="mb-5">
                <nuxt-link to="/password-reset">Забыли пароль?</nuxt-link>
              </p>
              <button class="button is-danger b-log mt-1" @click="login">
                Войти
              </button>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
button.b-log {
  border-radius: 10px;
  font-size: 16px;
  padding: 24px 30px;
  line-height: 1;
  box-shadow: 0 7px 40px rgba(196, 32, 54, 0.5);
  width: 100%;
}
.login-form {
  margin: 0 0 0 80px;
  height: calc(100vh - 294px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.login-form .el-form-item__error {
  line-height: 0.2;
}
.login-form .el-input--large .el-input__inner {
  --el-input-inner-height: calc(var(--el-input-height, 46px) - -6px);
  font-size: 15px;
  line-height: 1;
  font-weight: 300;
}
.login-form form {
  width: 100%;
  max-width: 350px;
  margin: 20px 0 0;
}
.login-form form .field:not(:last-child) {
  margin-bottom: 1.55rem;
}
.login-form form .is-medium {
  height: 2.3em;
}
.login-form .field .icon {
  padding: 10px;
}
.login-prev {
  height: calc(100vh - 294px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-prev img {
  max-width: 100%;
  max-height: 100%;
}
.a-login-info {
  margin: 0 0 0 5px;
}
.a-login-info > .icon {
  position: relative;
  top: 4px;
  height: 0px;
}
.a-login-info .icon > .icon {
  height: 18px;
}
</style>
