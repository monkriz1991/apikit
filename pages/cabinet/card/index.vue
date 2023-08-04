<script setup>
import { UploadFilled } from "@element-plus/icons-vue";
const route = useRoute();
const form = reactive({});
const apiTemplate = reactive({
  nameObject: {
    id: 1,
    name: "String",
    price: "Number",
    currency: "String",
    description: "Text",
    activ: "Boolean",
    img: "File",
    img_all: "Array",
    filter: {
      id: 1,
      kirilica: "String",
      value: "String",
      position: "Number",
    },
    char: [
      {
        id: 4,
        kirilica: "Mufty",
        value: "Муфты",
        position: 10,
      },
      {
        id: 1,
        kirilica: "Zaglushka",
        value: "Заглушка",
        position: 0,
      },
    ],
  },
});
// console.log(typeof apiTemplate);
</script>
<template>
  <div class="container">
    <StatCabinet />
    <div class="columns">
      <div class="column is-one-quarter">
        <NavCabinet />
      </div>
      <div class="column is-three-quarters">
        <el-page-header @click="$router.back()" title="Назад">
          <template #content>name tema</template>
        </el-page-header>
        <div class="card-add-block">
          <el-form :model="form" label-width="120px">
            {{ form }}
            <div
              v-for="(item, index) in apiTemplate.nameObject"
              :key="item"
              class="card-add-el"
            >
              <div class="card-el-item" v-if="item == 'String'">
                <el-input
                  v-model="form[index]"
                  :placeholder="`Введите` + ' ' + index"
                />
              </div>
              <div class="card-el-item" v-if="item == 'Number'">
                <el-input
                  type="Number"
                  v-model.number="form[index]"
                  :placeholder="`Введите` + ' ' + index"
                />
              </div>
              <div class="card-el-item" v-if="item == 'Text'">
                <el-input
                  :autosize="{ minRows: 4, maxRows: 8 }"
                  type="textarea"
                  v-model.number="form[index]"
                  maxlength="10000"
                  show-word-limit
                  :placeholder="`Введите` + ' ' + index"
                />
              </div>
              <div class="card-el-item" v-if="item == 'Boolean'">
                <div class="mb-2 flex items-center text-sm">
                  <el-radio-group v-model="form[index]" class="ml-4">
                    <el-radio label="true" size="large"
                      >true ( истина )</el-radio
                    >
                    <el-radio label="false" size="large"
                      >false ( ложь )</el-radio
                    >
                  </el-radio-group>
                </div>
              </div>
              <div class="card-el-item" v-if="item == 'File'">
                <el-upload
                  v-model:file-list="form[index]"
                  class="upload-demo"
                  drag
                  action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                  multiple
                >
                  <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                  <div class="el-upload__text">
                    Перетащите файл (файлы) или <em>нажмите для загрузки</em>
                  </div>
                  <template #tip>
                    <div class="el-upload__tip">Размером не более 1 500kb</div>
                  </template>
                </el-upload>
              </div>
              <div class="card-el-item" v-if="item == 'Array'">Array</div>
              <!-- <div class="card-el-item" v-if="typeof item == 'object'">
                <div
                  v-for="input in apiTemplate.nameObject[index]"
                  :key="input"
                >
                  <div
                    class="card-el-item-object"
                    v-if="typeof input == 'object'"
                  >
                    <div v-for="itemArr in input" :key="itemArr">
                      {{ itemArr }}
                    </div>
                  </div>
                </div>
              </div> -->

              <!-- {{ index }}:{{ item }} -->
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.card-add-block {
  float: left;
  width: 100%;
  margin: 40px 0;
}
.card-add-el {
  float: left;
  width: 100%;
  padding: 10px 0;
}
</style>
