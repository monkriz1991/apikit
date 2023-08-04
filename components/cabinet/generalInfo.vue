<script setup>
import { User, Message } from "@element-plus/icons-vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "/store/auth";
const { user } = storeToRefs(useAuthStore());
const userMeny = ref(user.value);

const ruleFormRef = ref();
const showForm = ref(false);

const form = reactive({
  email: "",
  name: "",
});

const onSubmit = (formEl) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
      showForm.value = false;
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
</script>
<template>
  <div>
    <div class="g-info">
      <h3>Информация профиля</h3>
      <button
        class="button mt-3 edit-s-button is-success is-outlined"
        @click="showForm = true"
        v-show="showForm == false"
      >
        Изменить
      </button>
      <div class="g-info-prev" v-show="showForm == false">
        <p>
          <span>Имя</span>
          <strong>{{ userMeny.first_name }}</strong>
        </p>
        <p>
          <span>Email</span>
          <strong>{{ userMeny.email }}</strong>
        </p>
      </div>
      <el-form
        :model="form"
        @submit.prevent
        ref="ruleFormRef"
        v-show="showForm"
      >
        <el-form-item>
          <el-input
            v-model="form.name"
            size="large"
            class="mb-2"
            placeholder="Введите Имя"
            :prefix-icon="User"
            clearable
          />
        </el-form-item>
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
            :prefix-icon="Message"
            clearable
          />
        </el-form-item>
        <button class="button is-success" @click="onSubmit(ruleFormRef)">
          Сохранить
        </button>
        <button
          class="button ml-3 is-success is-outlined"
          @click="showForm = false"
        >
          Отмена
        </button>
      </el-form>
    </div>
  </div>
</template>
<style>
.g-info {
  float: left;
  width: 100%;
  margin: 0 0 30px;
  border-bottom: 1px solid #ededed;
}
.g-info h3,
.g-pass h3 {
  font-size: 22px;
  font-weight: 600;
  color: #828282;
  float: left;
}
.edit-s-button {
  margin: 0 !important;
  float: right;
  border-radius: 6px;
  padding: 8px 20px;
  height: auto;
  font-size: 15px;
}
.g-info-prev {
  margin: 30px 0 30px;
  float: left;
  width: 100%;
}
.g-info-prev p {
  margin: 0 0 15px;
}
.g-info-prev p span {
  width: 100%;
  float: left;
  font-weight: 300;
}
.g-info-prev p strong {
  font-weight: 600;
  font-size: 19px;
}
.g-info .el-form,
.g-pass .el-form {
  width: 100%;
  float: left;
  margin: 30px 0;
}
.g-info .el-input--large .el-input__wrapper,
.g-pass .el-input--large .el-input__wrapper {
  padding: 3px 15px;
  border-radius: 10px;
  font-size: 18px;
}
.g-info .el-form .button,
.g-pass .el-form .button {
  border-radius: 6px;
  padding: 8px 20px;
  height: auto;
  font-size: 15px;
}
</style>
