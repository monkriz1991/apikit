<script setup>
import { BaseApiFetch } from "~/composables/BaseApiFetch";
import { storeToRefs } from "pinia";
import { useAuthStore } from "/store/auth";

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
const getClients = async () =>{
  const { data, pending } = await BaseApiFetch("/clients/", {method: "get"});
  return data
}
const dialogPjectadd = async () => {
  const { user } = storeToRefs(useAuthStore());
  const clients = await getClients()
  const { data, pending } = BaseApiFetch("/apps/", {
    method: "post",
    body: {
      name: formAccessibility.nameProject,
      db_name: formAccessibility.nameBase,
      comment: formAccessibility.descriptionProject,
      client: clients.value.results[0]?.id,
    },
  }).then((response)=>{
    console.log(response)
    if(response.data.value) visibleModal.value = false;
    if(response.error.value){
      alert(JSON.stringify(response.error.value.data))
    }

  });

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
              description="Только на латинице, без пробелов, и без спецсимволов, можно использовать заглавные буквы и цифры ( только не первым символом ): catalog, MyCompany, galery_product."
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
