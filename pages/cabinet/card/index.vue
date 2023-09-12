<script setup>
// import { UploadFilled } from "@element-plus/icons-vue";
const route = useRoute();
const form = reactive({});
const contItem = ref(1);
let listApisSelect = ref(null);
let selectedStruct = ref([]);
const checkArray = reactive([]);
let listApis = reactive([]);
const apiTemplate = reactive({
  nameObject: {
    id: 1,
    name: "String",
    price: "Number",
    currency: "String",
    description: "Text",
    activ: "Boolean",
    date: "Date",
    img: "File",
    img_allIn: [],
    filter: {
      id: 1,
      kirilica: "String",
      value: "String",
      position: "Number",
    },
    char: [
      {
        id: 4,
        kirilica: "String",
        value: "String",
        position: "Number",
      },
    ],
  },
});
const optionsArray = [
  {
    value: "String",
    label: "Строка",
  },
  {
    value: "Number",
    label: "Число",
  },
  {
    value: "Data",
    label: "Дата",
  },
  {
    value: "Boolean",
    label: "Логический",
  },
];
const formArray = (item, name) => {
  console.log(checkArray);
  form[item] = [];
};
const addArrayInput = () => {
  contItem.value += 1;
};
const removeArrayInput = () => {
  checkArray.length = 0;
  contItem.value -= 1;
};
const getListApis = async () => {
  const { data, pending } = await BaseApiFetch("/apis/", {
    method: "get",
    params: { limits: 50 },
  });
  listApis.value = data?.value?.results;
  return data.value;
};
const getStructApi = async () => {
  apiTemplate.nameObject = JSON.parse(listApis.value.find(x=>x.id===listApisSelect.value)?.entities.structure)
  console.log(apiTemplate)
}
const saveItem = async () => {
  console.log(form)
  let payload = {
  apiId: listApisSelect,
    ...form
  }
  console.log(payload)
  const { data, pending } = await BaseApiFetch("/create/item/", {
    method: "post",
    body: payload,
  });
  console.log(data, 'data')
}
getListApis();

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
          <template #content>2name tema</template>
        </el-page-header>
        <div class="columns">
          <div class="column is-8">
            <div class="card-add-block">
              <el-form :model="form" @submit.prevent label-width="120px">
                <div>
                <el-select v-model="listApisSelect" @change="getStructApi">
                  <el-option
                    v-for="item in listApis.value"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  />
                </el-select>
              </div>
                <div
                  v-for="(item, index) in apiTemplate.nameObject"
                  :key="item"
                  class="card-add-el"
                >
                  <div class="card-el-item" v-if="item === 'String'">
                    <span class="card-el-label">{{ index }}</span>
                    <el-input
                      v-model="form[index]"
                      size="large"
                      :placeholder="`Введите` + ' ' + index"
                    />
                  </div>
                  <div class="card-el-item" v-if="item === 'Number'">
                    <span class="card-el-label">{{ index }}</span>
                    <el-input
                      type="Number"
                      size="large"
                      v-model.number="form[index]"
                      :placeholder="`Введите` + ' ' + index"
                    />
                  </div>
                   <div class="card-el-item" v-if="item === 'Date'">
                    <span class="card-el-label">{{ index }}</span>
                    <el-date-picker
                      type="date"
                      v-model="form[index]"
                      :placeholder="`Введите` + ' ' + index"
                    ></el-date-picker>
                  </div>
                  <div class="card-el-item" v-if="item === 'Text'">
                    <span class="card-el-label">{{ index }}</span>
                    <el-input
                      :autosize="{ minRows: 4, maxRows: 8 }"
                      type="textarea"
                      v-model.number="form[index]"
                      maxlength="10000"
                      show-word-limit
                      :placeholder="`Введите` + ' ' + index"
                    />
                  </div>
                  <div class="card-el-item" v-if="item === 'Boolean'">
                    <div class="mb-2 flex items-center text-sm">
                      <span class="card-el-label">{{ index }}</span>
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
                  <!-- <div class="card-el-item" v-if="item == 'File'">
                    <el-upload
                      v-model:file-list="form[index]"
                      class="upload-demo"
                      drag
                      action="#"
                      multiple
                    >
                      <el-icon class="el-icon--upload"
                        ><upload-filled
                      /></el-icon>
                      <div class="el-upload__text">
                        Перетащите файл (файлы) или
                        <em>нажмите для загрузки</em>
                      </div>
                      <template #tip>
                        <div class="el-upload__tip">
                          Размером не более 1 500kb
                        </div>
                      </template>
                    </el-upload> 
                  </div> -->

                  <div class="card-el-item" v-if="typeof item == 'object'">
                    <div class="card-el-item-arr">
                      <div class="card-el-item-arr-el">
                        <div class="">
                          <div v-for="(iTemN, iNdexV) in contItem" :key="iTemN">
                            <div v-if="checkArray[item + iNdexV] == 'String'">
                              <el-input
                                v-model="form[index][item + iNdexV]"
                                :placeholder="`Введите` + ' ' + index"
                              />
                            </div>
                            <div v-if="checkArray[item + iNdexV] === 'Number'">
                              <el-input
                                type="Number"
                                v-model.number="form[index][iNdexV]"
                                :placeholder="`Введите` + ' ' + index"
                              />
                            </div>
                            {{ form[item + iNdexV] }}
                            <el-select
                              v-model="checkArray[item + iNdexV]"
                              @change="formArray(index, item)"
                              class="m-2"
                              placeholder="Select"
                              size="large"
                            >
                              <el-option
                                v-for="item in optionsArray"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                              />
                            </el-select>
                          </div>
                        </div>
                      </div>
                      <div class="">
                        <button class="button" @click="addArrayInput">
                          <span class="is-large">
                            <icon name="line-md:plus" />
                          </span>
                        </button>
                        <button class="button" @click="removeArrayInput">
                          <span class="icon is-large">
                            <icon name="line-md:remove" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
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
                </div>
                <el-button @click="saveItem">добавить</el-button>
              </el-form>
            </div>
          </div>
          <div class="column is-4">
            <pre v-highlightjs>
                <code class="javascript">{{ form }}</code>
              </pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.el-page-header {
  float: left;
  width: 100%;
}
.card-el-item {
}
.card-el-label {
  float: left;
  width: 100%;
  font-size: 15px;
  margin: 0 0 5px;
}
.card-el-item .el-input__wrapper {
  padding: 2px 11px;
  border-radius: 7px;
}
</style>
