<script setup>
import { Lock } from "@element-plus/icons-vue";
const ruleFormRef = ref();
const showForm = ref(false);

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
      showForm.value = false;
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
</script>
<template>
  <div>
    <div class="g-pass">
      <h3>Безопасность</h3>
      <button
        class="button mt-3 edit-s-button"
        @click="showForm = true"
        v-show="showForm == false"
      >
        Изменить пароль
      </button>
      <el-form
        :model="form"
        @submit.prevent
        ref="ruleFormRef"
        :rules="rules"
        v-show="showForm"
      >
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
        <button class="button is-warning" @click="onSubmit(ruleFormRef)">
          Сохранить
        </button>
        <button class="button ml-3 is-outlined" @click="showForm = false">
          Отмена
        </button>
      </el-form>
    </div>
  </div>
</template>
<style>
.g-pass {
  float: left;
  width: 100%;
  margin: 0 0 30px;
}
</style>
