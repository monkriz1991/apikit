<script lang="ts" setup>
import { UserFilled } from "@element-plus/icons-vue";
const createShow = ref("createHand");
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
            <Transition appear name="fade" mode="out-in">
              <div v-if="createShow === 'create'" class="columns">
                <div class="column">
                  <button
                    class="creat-block"
                    @click="createShow = 'createHand'"
                  >
                    <icon name="material-symbols:touch-app-outline-rounded" />
                    <span>Собрать коллекцию</span>
                  </button>
                </div>
                <div class="column">
                  <button
                    class="creat-block"
                    @click="createShow = 'createFile'"
                    disabled
                  >
                    <icon name="bi:filetype-xls" />
                    <span>Выгрузить из xls</span>
                  </button>
                </div>
                <div class="column">
                  <button
                    class="creat-block"
                    @click="createShow = 'createGoogle'"
                    disabled
                  >
                    <icon name="uiw:file-excel" />
                    <span>Получить из Google Exel</span>
                  </button>
                </div>
              </div>
              <div v-else-if="createShow === 'createHand'">
                <CreateHand>
                  <!-- <template v-slot:link-back>
                    <el-page-header @back="createShow = 'create'" title="Назад">
                      <template #content>
                        <div class="flex items-center">
                          <span class="text-sm mr-3">
                            Создание api коллекции
                          </span>
                        </div>
                      </template>
                    </el-page-header>
                  </template> -->
                </CreateHand>
              </div>
              <div v-else-if="createShow === 'createFile'">
                <CreateFile>
                  <template v-slot:link-back>
                    <el-page-header @back="createShow = 'create'" title="Назад">
                      <template #content>
                        <div class="flex items-center">
                          <span class="text-sm mr-3">
                            Создание api через файл Xls
                          </span>
                        </div>
                      </template>
                    </el-page-header>
                  </template>
                </CreateFile>
              </div>
              <div v-else-if="createShow === 'createGoogle'">
                <CreateGoogle>
                  <template v-slot:link-back>
                    <el-page-header @back="createShow = 'create'" title="Назад">
                      <template #content>
                        <div class="flex items-center">
                          <span class="text-sm mr-3">
                            Создание api через таблицу Gogle exel
                          </span>
                        </div>
                      </template>
                    </el-page-header>
                  </template>
                </CreateGoogle>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<style>
.columns {
  position: relative;
}
.column {
  width: 33.3333333%;
  float: left;
}

.creat-block {
  padding: 40px;
  display: block;
  text-align: left;
  width: 100%;
  border-radius: 15px;
  background: white;
  cursor: pointer;
  border: 0px solid #e5e7eb;
}
.creat-block .icon {
  display: block;
  height: 40px;
  width: 40px;
  opacity: 0.7;
}
.creat-block span {
  width: 100%;
  display: block;
  padding: 20px 0;
  font-size: 17px;
  font-weight: 700;
}
.creat-block:hover {
  transition: 0.4s;
  color: #000;
  /* background: #eeeeee; */
  /* border-color: #00dc82; */
  border-color: #787878;
}
.creat-block:disabled:hover {
  border: 2px solid #e5e7eb;
  color: #c6c6c6;
}
</style>
