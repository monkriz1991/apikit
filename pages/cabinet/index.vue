<script setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "/store/auth";
import {BaseApiFetch} from "~/composables/BaseApiFetch";

const createShow = ref("create");
let ListOfApp = ref([]);
const apiArr = ref(["catalogCompany", "AboutCompany", "my_product"]);
const { $openDell } = useNuxtApp();
const allProject = ref(0);
const visibleModal = ref(false);
const addProject = (item) => {
  if (item.value == undefined) {
    visibleModal.value = !visibleModal.value;
  } else {
    visibleModal.value = item.value;
  }
};
/**
 * функция получает список всех приложений пользователя
 * @returns {Promise<void>}
 */
const getListProjects = async () => {
  const { data, pending } = await BaseApiFetch('/apps/',{method: "get"});
  ListOfApp.value = data?.value?.results
  console.log(data.value)
};

watch(createShow, value => {
  if(value==='create') getListProjects()
}, {deep: true, immediate: true})

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
                <div v-if="createShow === 'create'">
                  <el-collapse accordion>
                    <el-collapse-item v-for="(app, index) in ListOfApp" :name="index">
                      <template #title
                        >{{app.name}}
                        <el-tag v-for="tag in app.tags" class="ml-2" type="info">{{tag.name}}</el-tag></template
                      >
                      <div v-for="api in app.apis" :key="api.id">
                        <div class="cab-project-api">
                          <span class="name-api">{{ api.name }}</span>
                          <el-tag
                            class="ml-2"
                            type="danger"
                            effect="plain"
                            size="small"
                            >Записей: 125</el-tag
                          >
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
                    </el-collapse-item>
                  </el-collapse>
                  <div class="cab-project-butt">
                    <button
                      class="button is-success is-outlined"
                      @click="addProject"
                    >
                      <span class="icon">
                        <icon name="fluent:add-square-multiple-20-filled" />
                      </span>
                      <span>Создать проект</span>
                    </button>
                  </div>
                </div>
                <div v-else-if="createShow === 'nocreate'">
                  <div class="cab-project-butt">
                    <button
                      class="button is-success is-outlined"
                      @click="addProject"
                    >
                      <span class="icon">
                        <icon name="fluent:add-square-multiple-20-filled" />
                      </span>
                      <span>Создать проект</span>
                    </button>
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
.columns {
}
.column {
}
.cab-project {
  position: relative;
}
.cab-project .el-collapse-item__header {
  padding: 35px 0;
}
.cab-project .el-collapse-item__header {
  font-size: 15px;
}
.el-collapse {
  float: left;
  width: 100%;
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
</style>
