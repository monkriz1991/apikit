<script lang="ts" setup>
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
const dialogPjectadd = () => {
  alert("opk");
};
const formAccessibility = reactive({
  nameProject: "",
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

        <el-form label-position="left" label-width="150px">
          <el-space fill>
            <el-alert type="info" show-icon :closable="false">
              <p>"Пожалуйста, заполните название проекта:</p>
            </el-alert>
            <el-form-item label="Название проекта">
              <el-input
                v-model="formAccessibility.nameProject"
                placeholder="Название проекта"
              />
            </el-form-item>
          </el-space>
          <el-space fill>
            <el-alert type="info" show-icon :closable="false">
              <p>"Напишите краткое описание.</p>
            </el-alert>
            <el-form-item label="Описание проекта">
              <el-row :gutter="20">
                <el-col :span="24">
                  <el-input
                    v-model="formAccessibility.descriptionProject"
                    type="textarea"
                    placeholder="Дайте краткое описание Вашему проекту"
                  />
                </el-col>
              </el-row>
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
