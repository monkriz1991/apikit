<script setup>
// import { UploadFilled } from "@element-plus/icons-vue";
const route = useRoute();
const form = reactive({ nameObject: {} });
let listApisSelect = ref(null);
let selectedStruct = ref([]);
const getListProjects = ref([]);
const listApis = reactive([]);
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

const { data: getProjects } = await BaseApiFetch("/apps/", {
  method: "get",
});
if (getProjects) {
  getListProjects.value = getProjects?.value?.results;
}

const { data: listApisValue } = await BaseApiFetch("/apis/", {
  method: "get",
  params: { limits: 50 },
});
if (listApisValue) {
  listApis.value = listApisValue?.value?.results;
}
const getStructApi = () => {
  apiTemplate.nameObject = {};
  form.nameObject = {};
  apiTemplate.nameObject = JSON.parse(
    listApis.value.find((x) => x.id === listApisSelect.value)?.entities
      .structure
  );
};
const saveItem = async () => {
  console.log(form);
  let payload = {
    apiId: listApisSelect,
    ...form.nameObject,
  };
  console.log(payload);
  const { data, pending } = await BaseApiFetch("/create/item/", {
    method: "post",
    body: payload,
  });
  console.log(data, "data");
};
const emitApiObjectParent = (item) => {
  form.nameObject = item;
};
</script>
<template>
  <div class="container">
    <StatCabinet />
    <div class="columns">
      <div class="column is-one-quarter">
        <NavCabinet />
      </div>
      <div class="column is-three-quarters">
        <div class="columns">
          <div class="column is-8">
            <div class="card-add-block">
              <div>
                <el-select
                  v-model="listApisSelect"
                  placeholder="Выберите коллекцию"
                  class="card-add-select"
                  @change="getStructApi"
                >
                  <el-option-group
                    v-for="group in getListProjects"
                    :key="group.id"
                    :label="group.name"
                  >
                    <el-option
                      v-for="item in group.apis"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id"
                    />
                  </el-option-group>
                </el-select>
              </div>
              <card-ItemTemplate
                v-model:apiObject="apiTemplate.nameObject"
                @emitApiObject="emitApiObjectParent"
              >
              </card-ItemTemplate>
            </div>
            <div class="card-add-next">
              <button class="button is-warning" @click="saveItem">
                Продолжить
              </button>
            </div>
          </div>
          <div class="column is-4">
            <pre v-highlightjs>
                <code class="javascript">{{ form.nameObject }}</code>
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
.card-add-next {
  float: left;
  width: 100%;
  margin: 40px 0px 0px 0px;
}
.card-add-next button {
  width: 100%;
  border-radius: 11px;
  padding: 23px 0;
}
.card-add-select {
  width: 100%;
}
.card-add-select .el-input__wrapper {
  border-radius: 10px;
  height: 45px;
  margin: 0 0 30px;
}
</style>
