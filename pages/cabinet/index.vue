<script setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "/store/auth";
import { BaseApiFetch } from "~/composables/BaseApiFetch";
import {ElMessage, ElMessageBox} from "element-plus";

const createShow = ref(false);
let ListOfApp = ref([]);
const apiArr = ref(["catalogCompany", "AboutCompany", "my_product"]);
const { $openDell } = useNuxtApp();
const visibleModal = ref(false);
const addProject = (item) => {
  if (item.value == undefined) {
    visibleModal.value = !visibleModal.value;
  } else {
    visibleModal.value = item.value;
  }
};
watch(visibleModal, (newVal, oldVal) => {
  if(!newVal && oldVal) getListProjects().then((response)=>{ListOfApp.value = response.data?.value?.results});
})
/**
 * функция получает список всех приложений пользователя
 * @returns {Promise<void>}
 */
const getListProjects = async () => await BaseApiFetch("/apps/", {method: "get"});
/**
 *
 */
const deleteProject = async (id)=>{return BaseApiFetch(`/apps/${id}`, {method: "delete"});}
const dellProject = async (id) => {
   ElMessageBox.confirm("Удаление записи безвозвратно!", "Внимание", {
      confirmButtonText: "Удалить",
      cancelButtonText: "Отмена",
      type: "warning",
    })
      .then(() => {
        deleteProject(id).then(()=>{
          getListProjects().then((response)=>{ListOfApp.value = response.data?.value?.results});
          ElMessage({
          type: "success",
          message: "Успешно удалена",
        });
        }).catch((err)=>{
          ElMessage({
          type: "info",
          message: "Удаление отменено",
        });
        })
      })
};

getListProjects().then((response)=>{
  ListOfApp.value = response.data?.value?.results;
  if (ListOfApp.value.length) {
    createShow.value = true;
  }

});

</script>
<template>
  <div>
    <ClientOnly>
      <div class="container">
        <StatCabinet />
        <div class="columns">
          <div class="column is-one-quarter">
            <NavCabinet />
          </div>
          <div class="column is-three-quarters">
            <div class="cab-project">
              <Transition appear name="fade" mode="out-in">
                <div v-if="createShow == true">
                  <el-collapse accordion>
                    <el-collapse-item v-for="app in ListOfApp" :key="app">
                      <template #title>
                        <div class="cab-project-db-name">{{ app.db_name }}</div>
                        <div class="cab-project-name">{{ app.name }}</div>
                        <!-- <el-tag
                          v-for="tag in app.tags"
                          :key="tag"
                          class="ml-2"
                          type="info"
                          >{{ tag.name }}</el-tag
                        > -->
                        <!-- <el-tag class="ml-2" type="info">записей: 23</el-tag> -->
                      </template>
                      <div v-for="api in app.apis" :key="api.id">
                        <div class="cab-project-api">
                          <span class="name-api">{{ api.name }}</span>
                          <!-- <el-tag
                            class="ml-2"
                            type="danger"
                            effect="plain"
                            size="small"
                            >Записей: 125</el-tag
                          > -->
                          <div class="cab-api-button fill-api-button">
                            <button class="button is-small button-edit">
                              Изменить
                            </button>
                            <button
                              class="button is-small button-dell"
                              @click.prevent="$openDell"
                            >
                              Удалить
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="cab-dell-project">
                        <button class="button" @click="dellProject(app.id)">
                          <span class="icon">
                            <icon
                              name="fluent:channel-dismiss-24-regular"
                            /> </span
                          ><span>Удалить проект</span>
                        </button>
                      </div>
                    </el-collapse-item>
                  </el-collapse>
                  <div class="cab-project-butt mt-4">
                    <button class="button is-warning" @click="addProject">
                      <span class="icon">
                        <icon name="fluent:channel-add-28-regular" />
                      </span>
                      <span>Создать проект</span>
                    </button>
                  </div>
                  <div class="i-beta-info">
                    <span class="icon">
                      <icon name="solar:info-square-broken" />
                    </span>
                    <strong
                      >В бета режиме возможно создание только одно
                      проекта</strong
                    >
                  </div>
                </div>
                <div v-else-if="createShow == false">
                  <div class="cab-none-project">
                    <div class="content">
                      <h4>Создайте ваш первый проект</h4>
                      <p>
                        Перед тем как создавать коллекции необходимо создать
                        проект содержащий так-же базу данных.
                      </p>
                      <div class="cab-project-butt">
                        <button class="button is-white" @click="addProject">
                          <span class="icon">
                            <icon name="fluent:channel-add-28-regular" />
                          </span>
                          <span>Создать проект</span>
                        </button>
                      </div>
                      <span class="icon i-create-block">
                        <icon name="carbon:object-storage" />
                      </span>
                    </div>
                  </div>
                  <div class="i-beta-info">
                    <span class="icon">
                      <icon name="solar:info-square-broken" />
                    </span>
                    <strong
                      >В бета режиме возможно создание только одного
                      проекта</strong
                    >
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
      <cabinet-addProject
        :modalAddProject="visibleModal"
        @emitVisibleModal="addProject"
      />
    </ClientOnly>
  </div>
</template>

<style>
html {
  background: #fafafa;
}
.columns {
}
.column {
}
.cab-project-db-name {
  /* background-color: #f8e081; */
  /* padding: 15px; */
  float: left;
  border-radius: 6px;
  height: auto;
  line-height: 1;
  margin: 0 15px 0 0;
  font-weight: 400;
  font-size: 14px;
  /* color: #f1cd3f; */
}
.cab-project-name {
}
.cab-project {
  position: relative;
}
.cab-project .el-collapse-item__header {
  padding: 25px;
  border: none;
  font-size: 16px;
  border-radius: 13px;
  height: auto;
  flex-flow: column;
  align-items: flex-start;
  position: relative;
}
.cab-project .el-collapse-item__header .el-collapse-item__arrow {
  font-size: 28px;
  position: absolute;
  right: 20px;
  height: 100%;
  justify-content: center;
  top: 0;
}
.cab-project .el-collapse {
  float: left;
  width: 100%;
  border: none;
}
.cab-project .el-collapse > .el-collapse-item {
  margin: 0 0 15px 0;
}
.cab-project .el-collapse .el-collapse-item__wrap {
  padding: 0;
  border: none;
  background: transparent;
}
.cab-project .el-collapse-item__content {
  padding: 0;
  margin: 0 0 15px;
  background: transparent;
}
.cab-project .el-collapse-item__content .cab-project-api {
  padding: 20px;
  background: #fff;
  margin: 15px 0 0;
  border-radius: 13px;
}
.cab-project-api {
  margin: 0 0 10px;
  border-radius: 6px;
  /* background: #f6f6f6; */
  padding: 10px;
}
.cab-project-api > .name-api {
  font-size: 15px;
}
.cab-api-button {
  float: right;
}
.cab-api-button > button.button {
  margin: 0 5px 0 0;
  border-radius: 6px !important;
}
.cab-none-project {
  float: left;
  width: 100%;
  border-radius: 12px;
  padding: 30px;
  background: #f8e081;
  position: relative;
}
.i-create-block {
  position: absolute;
  right: 20px;
  bottom: 11px;
  font-size: 0.3rem;
  /* height: 100%; */
  /* width: 100%; */
  height: 111px;
  width: 112px;
  color: #fff;
}
.i-create-block .icon {
  width: 100%;
  height: 100%;
}
.i-beta-info {
  float: left;
  width: 100%;
  margin: 40px 0;
  opacity: 0.5;
}
.i-beta-info > .icon {
  float: left;
  margin: 0 10px 0 0;
}
.i-beta-info > strong {
  line-height: 1.6;
  float: left;
  font-weight: 400;
}
.cab-dell-project {
  float: left;
  width: 100%;
  margin: 15px 0 0;
}
.cab-dell-project button {
  float: right;
  border-radius: 8px;
  font-size: 14px;
  padding: 8px 14px;
  height: auto;
  background: transparent;
  border: 1px solid #959595;
}
</style>
