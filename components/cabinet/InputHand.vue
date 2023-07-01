<script setup>
const props = defineProps({
  nameObject: {
    type: String,
    default: "UpName",
  },
  lavelValue: {
    type: String,
    default: "1",
  },
  dynamicLevelSelect: {
    type: Object,
    default: {},
  },
  dynamicLevelObject: {
    type: Object,
    default: {},
  },
  dynamicLevelName: {
    type: String,
    default: "",
  },
});
const objectItem = ref("");
const objectCache = ref({ cache: {} });
const twoSelect = ref("");
const options = [
  {
    value: "String",
    label: "Строка",
  },
  {
    value: "Number",
    label: "Число",
  },
  {
    value: "Boolean",
    label: "Логический",
  },
  {
    value: "Date",
    label: "Дата",
  },
  {
    value: "Array",
    label: "Массив",
  },
  {
    value: "Object",
    label: "Объект",
  },
];
const levelOneObject = reactive({ select: [] });
const pushObject = reactive({ objectItem: {} });
const dynamicForm = reactive({
  input: [
    {
      name: "",
      type: "",
      parent: "",
    },
  ],
});

const addInput = () => {
  dynamicForm.input.push({
    name: "",
    type: "",
    parent: "",
  });
};
const removeInput = (item) => {
  const index = dynamicForm.input.indexOf(item);
  if (index !== -1) {
    dynamicForm.input.splice(index, 1);
  }
};
watch(
  () => props.nameObject,
  (item) => {
    objectItem.value = item;
    pushObject.objectItem = {};
    pushObject.objectItem[item] = Object.assign({}, objectCache.cache);
  }
);
const emit = defineEmits(["dynamicFormChange", "dynamicSelect"]);

watch(pushObject, (input) => {
  emit("dynamicFormChange", input.objectItem, objectItem.value);
});
watch(dynamicForm.input, (input) => {
  if (props.lavelValue == 1) {
    pushObject.objectItem[objectItem.value] = {};
    levelOneObject.select = [];
    objectCache.cache = {};
    for (let item in input) {
      if (input[item].type == "Object") {
        pushObject.objectItem[objectItem.value][input[item].value] = {};
        levelOneObject.select.push({
          value: input[item].value,
          label: input[item].value,
        });
      } else {
        pushObject.objectItem[objectItem.value][input[item].value] =
          input[item].type;
      }
    }
    objectCache.cache = pushObject.objectItem[objectItem.value];
    emit("dynamicSelect", levelOneObject, objectItem.value);
  }
  if (props.lavelValue == 2) {
    props.dynamicLevelObject[props.dynamicLevelName][twoSelect.value] = {};
    for (let item in input) {
      if (input[item].type != "") {
        for (let itemarr in props.dynamicLevelObject[props.dynamicLevelName]) {
          if (input[item].type == twoSelect.value) {
            delete props.dynamicLevelObject[props.dynamicLevelName][itemarr][
              input[item].value
            ];
          } else {
          }
        }
        if (input[item].type == twoSelect.value) {
          props.dynamicLevelObject[props.dynamicLevelName][twoSelect.value][
            input[item].value
          ] = "";
        }
      }
    }
  }
});
const levelItem = (item) => {
  twoSelect.value = item;
};
</script>
<template>
  <div>
    <div
      class="field columns"
      v-for="(input, index) in dynamicForm.input"
      :key="index"
    >
      <div class="control column is-6">
        <el-input v-model="input.value" placeholder="Введите ключ" />
      </div>
      <div v-if="lavelValue == 1" class="column is-4">
        <el-select v-model="input.type" clearable placeholder="Тип данных">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>

      <div v-if="lavelValue == 2" class="column is-4">
        <el-select
          v-model="input.type"
          @change="levelItem"
          clearable
          placeholder="Объект"
        >
          <el-option
            v-for="item in dynamicLevelSelect.select"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="column is-2 has-text-right">
        <button class="button" @click="removeInput(input)">
          <span class="icon is-large">
            <icon name="line-md:remove" />
          </span>
        </button>
      </div>
    </div>
    <div class="">
      <button class="button" @click="addInput">
        <span class="is-large">
          <icon name="line-md:plus" />
        </span>
      </button>
    </div>
  </div>
</template>
