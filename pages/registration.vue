<script setup>
import { Lock, User } from "@element-plus/icons-vue";
const { $auth } = useNuxtApp();
const ruleFormRef = ref();

const validatePass = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("Пожалуйста введите пароль"));
  } else {
    if (form.checkPass !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("checkPass", () => null);
    }
    callback();
  }
};
const validatePass2 = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("Пожалуйста введите пароль повторно"));
  } else if (value !== form.password) {
    callback(new Error("Пароли не совпадают!"));
  } else {
    callback();
  }
};
const form = reactive({
  email: "",
  password: "",
  checkPass: "",
});

const rules = reactive({
  password: [{ validator: validatePass, trigger: "blur", trigger: "change" }],
  checkPass: [{ validator: validatePass2, trigger: "blur", trigger: "change" }],
});

const onSubmit = (formEl) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
      console.log(form);
      sendRegistrastionData({
        username: form.email,
        password: form.password,
        password2: form.checkPass,
      })
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const sendRegistrastionData = async (payload) =>{
  console.log(payload)
  let app = useNuxtApp();
  const { data, pending } = await useFetch(app.$config.public.authCustom.baseURL +'/registration/',
      {method: "post", body: payload});k
}
</script>
<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3">
        <div class="login-prev">
          <nuxt-img src="/3456426.webp" />
        </div>
      </div>
      <div class="column is-9">
        <div class="content">
          <div class="login-form">
            <h1>Регистрация</h1>
            <p class="fz-14">
              Уже есть аккаунт:
              <nuxt-link to="/login" class="a-login-info"
                >Войти
                <span class="icon">
                  <icon name="solar:map-arrow-right-bold-duotone" /> </span
              ></nuxt-link>
            </p>
            <el-form
              :model="form"
              @submit.prevent
              ref="ruleFormRef"
              :rules="rules"
              class="demo-form-inline"
            >
              <el-form-item
                :rules="[
                  {
                    required: true,
                    message: 'Пожалуйста введите email',
                  },
                  {
                    type: 'email',
                    message: 'Пожалуйста введите корректный email ',
                    trigger: ['blur', 'change'],
                  },
                ]"
                prop="email"
              >
                <el-input
                  v-model="form.email"
                  size="large"
                  class="mb-2"
                  placeholder="Введите email"
                  :prefix-icon="User"
                  clearable
                />
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  v-model="form.password"
                  size="large"
                  type="password"
                  class="mb-2"
                  autocomplete="off"
                  placeholder="Введите пароль"
                  :prefix-icon="Lock"
                  show-password
                />
              </el-form-item>
              <el-form-item prop="checkPass">
                <el-input
                  v-model="form.checkPass"
                  size="large"
                  type="password"
                  class="mb-2"
                  autocomplete="off"
                  placeholder="Введите пароль повторно"
                  :prefix-icon="Lock"
                  show-password
                />
              </el-form-item>
              <button
                class="button is-danger b-log mt-3"
                @click="onSubmit(ruleFormRef)"
              >
                Создать аккаунт
              </button>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
