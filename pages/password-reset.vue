<script setup>
import { User } from "@element-plus/icons-vue";
const { $auth } = useNuxtApp();
const form = reactive({
  email: "",
});

async function onSubmit() {}
</script>
<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3">
        <div class="login-prev">
          <nuxt-img src="/6146586.webp" />
        </div>
      </div>
      <div class="column is-9">
        <div class="content">
          <div class="login-form">
            <h1>Сброс пароля</h1>
            <p class="fz-14">Введите email, привязанный к вашему аккаунту</p>
            <el-form :model="form" @submit.prevent class="demo-form-inline">
              <el-form-item>
                <el-input
                  v-model="form.email"
                  size="large"
                  class="mb-2"
                  placeholder="Введите email"
                  :prefix-icon="User"
                  clearable
                />
              </el-form-item>

              <button class="button is-danger b-log mt-1" @click="onSubmit">
                Продолжить
              </button>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
