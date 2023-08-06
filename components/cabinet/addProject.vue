<script lang="ts" setup>
import {BaseApiFetch} from "~/composables/BaseApiFetch";
import {storeToRefs} from "pinia";
import {useAuthStore} from "~/store/auth";

const props = defineProps({
  modalAddProject: {
    type: Boolean,
    default: false,
  },
});
const visibleModal = ref(false);
watch(props, (value) => {
  visibleModal.value = value.modalAddProject;
});
const emit = defineEmits(["emitVisibleModal"]);
watch(visibleModal, (input) => {
  if (visibleModal.value == false) {
    emit("emitVisibleModal", visibleModal);
  }
});
const dialogPjectadd = async () => {
  const { user } = storeToRefs(useAuthStore());
  debugger
  const { data, pending } = await BaseApiFetch(
        '/apps/',
        {
          method: "post",
          body: {
            "name": formAccessibility.nameProject,
            "client": user.value?.client_id[0] // todo пока костыль потом, когда будет страница клиента нужно передеать получение его
          },
        }
      );
};


const formAccessibility = reactive({
  nameProject: "",
  nameBase: "",
  descriptionProject: "",
});
</script>
<template>
  <div>
    <el-dialog v-model="visibleModal" class="dialog-new">
      <template #header="{ titleId, titleClass }">
        <div class="my-header">
          <h3 :id="titleId" :class="titleClass">Новый проект</h3>
        </div>
      </template>
      <div class="content">
        <h4>Основная информация о проекте</h4>

        <el-form label-position="left">
          <el-space fill class="width-100">
            <el-alert type="info" show-icon :closable="false">
              <p>"Задайте название проекта и базы данных:</p>
            </el-alert>
            <el-form-item class="mb-0">
              <el-input
                v-model="formAccessibility.nameProject"
                placeholder="Название проекта"
                show-word-limit
                maxlength="75"
                size="large"
              />
            </el-form-item>
            <el-alert
              title="Допустимые имена"
              type="warning"
              description="Только на латинице, без пробелов, из разрешённых спецсимволов - ( _ ), можно использовать заглавные буквы и цифры: catalog, MyCompany, galery_product."
              show-icon
            />
            <el-form-item>
              <el-input
                v-model="formAccessibility.nameBase"
                placeholder="Имя базы данных"
                show-word-limit
                maxlength="50"
                size="large"
              />
            </el-form-item>
          </el-space>
          <el-space fill class="width-100">
            <el-alert type="info" show-icon :closable="false">
              <p>"Дайте краткое описание Вашего проекта:</p>
            </el-alert>
            <el-form-item>
              <el-input
                v-model="formAccessibility.descriptionProject"
                type="textarea"
                placeholder="Краткое описание"
                show-word-limit
                maxlength="150"
                :rows="3"
              />
            </el-form-item>
          </el-space>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <button class="button is-primary" @click="dialogPjectadd">
            Создать проект
          </button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
