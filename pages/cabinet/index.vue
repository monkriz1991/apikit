<script setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "/store/auth";

const createShow = ref("create");
const apiArr = ref(["catalogCompany", "AboutCompany", "my_product"]);
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
                    <el-collapse-item name="1">
                      <template #title
                        >Товары
                        <el-tag class="ml-2" type="info"
                          >catalog</el-tag
                        ></template
                      >
                      <div v-for="item in apiArr" :key="item">
                        <div class="cab-project-api">
                          <span class="name-api">{{ item }}</span>
                          <el-tag
                            class="ml-2"
                            type="danger"
                            effect="plain"
                            size="small"
                            >Записей: 125</el-tag
                          >
                          <div class="cab-api-button">
                            <button class="button is-small">Изменить</button>
                            <button class="button is-small">Удалить</button>
                          </div>
                        </div>
                      </div>
                    </el-collapse-item>
                    <el-collapse-item name="2">
                      <template #title
                        >Информация о копмании<el-tag class="ml-2" type="info"
                          >AboutCompany</el-tag
                        ></template
                      >
                      <div>
                        <div v-for="item in apiArr" :key="item">
                          <div class="cab-project-api">
                            <span>{{ item }}</span>
                            <el-tag class="ml-2" type="danger" effect="plain"
                              >Записей: 125</el-tag
                            >
                            <div class="cab-api-button">
                              <button class="button is-small">Изменить</button>
                              <button class="button is-small">Удалить</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </el-collapse-item>
                  </el-collapse>
                </div>
                <div v-else-if="createShow === 'nocreate'">ok</div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
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
