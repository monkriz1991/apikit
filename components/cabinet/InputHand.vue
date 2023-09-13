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
  pointerTab: {
    type: Object,
    default: {},
  },
  colTab: {
    type: Array,
    default: {},
  },
});
const objectItem = ref("");
const objectCache = ref({ cache: {} });
const objectCacheLevelTwo = ref({ cache: {} });
const twoSelect = ref("");
const mySelect = ref("");
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
    value: "File",
    label: "Файл(ы)",
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
const oneLevelObject = reactive({ object: {} });
const pushObject = reactive({ objectItem: {} });
const dynamicForm = reactive({
  input: [
    {
      type: "",
      parent: "",
      lavel: "",
    },
  ],
});

const addInput = () => {
  dynamicForm.input.push({
    type: "",
    parent: "",
    lavel: "",
  });
};
const removeInput = (item) => {
  const index = dynamicForm.input.indexOf(item);
  if (index !== -1) {
    dynamicForm.input.splice(index, 1);
  }
  if (props.lavelValue == 2) {
    props.dynamicLevelObject[props.dynamicLevelName][item.type] = {};
  }
};
watch(
  () => props.nameObject,
  (item) => {
    objectItem.value = item;
    pushObject.objectItem = {};

    if (objectCache.cache == undefined) {
      objectCache.cache = props.dynamicLevelObject[item];
    }
    pushObject.objectItem[item] = Object.assign(
      {},
      props.dynamicLevelObject[item]
    );

    if (Object.keys(pushObject.objectItem[item]).length !== 0) {
      objectCache.cache = pushObject.objectItem[item];
    }

    pushObject.objectItem[item] = Object.assign({}, objectCache.cache);
  }
);

watch(dynamicForm.input, (input) => {
  if (props.nameObject) {
    objectItem.value = props.nameObject;
  }

  if (props.lavelValue == 1) {
    pushObject.objectItem[objectItem.value] = {};
    levelOneObject.select = [];
    oneLevelObject.object = {};

    for (let item in input) {
      input[item].lavel = 1;
      if (input[item].type == "Object" || input[item].type == "Array[Object]") {
        if (input[item].type == "Array[Object]") {
          pushObject.objectItem[objectItem.value][input[item].value] = [{}];
        } else {
          pushObject.objectItem[objectItem.value][input[item].value] = {};
        }

        levelOneObject.select.push({
          value: input[item].value,
          label: input[item].value,
        });
      } else {
        pushObject.objectItem[objectItem.value][input[item].value] =
          input[item].type;
      }
      oneLevelObject.object[input[item].value] = "";
    }

    objectCache.cache = compareObject(objectCache.cache, oneLevelObject.object);

    for (let itemDynamic in objectCache.cache) {
      if (
        Object.keys(objectCache.cache[itemDynamic]).length !== 0 &&
        objectCache.cache[itemDynamic].constructor == Object
      ) {
        pushObject.objectItem[objectItem.value][itemDynamic] =
          objectCache.cache[itemDynamic];
      }
    }

    cashReload(pushObject.objectItem[objectItem.value]);
    emit("dynamicSelect", levelOneObject, objectItem.value);
  }

  if (props.lavelValue == 2) {
    let selectValue = props.dynamicLevelSelect.select;
    let selectCheck = [];

    // props.dynamicLevelObject[props.dynamicLevelName][twoSelect.value] = [{}];

    for (let select in selectValue) {
      selectCheck.push(selectValue[select].value);
    }

    for (let item in input) {
      if (input[item].type != "" && input[item].lavel == "") {
        props.dynamicLevelObject[props.dynamicLevelName][input[item].type] = {};
        if (selectCheck[item] != undefined) {
          props.dynamicLevelObject[props.dynamicLevelName][selectCheck[item]] =
            {};
        }
      }
    }
    for (let item in input) {
      if (input[item].type != "" && input[item].lavel == "") {
        props.dynamicLevelObject[props.dynamicLevelName][input[item].type][
          input[item].value
        ] = "String";

        pushObject.objectItem[props.nameObject] =
          props.dynamicLevelObject[props.dynamicLevelName];
      }
    }

    cashReload(props.dynamicLevelObject[props.dynamicLevelName]);
  }
});
const levelItem = (item, index) => {
  twoSelect.value = item;
};
const emit = defineEmits(["dynamicFormChange", "dynamicSelect"]);

watch(pushObject, (input) => {
  emit("dynamicFormChange", input.objectItem, objectItem.value);
});
function compareObject(allrecord, newrecord) {
  let result = {};
  for (let prop in allrecord) {
    if (newrecord.hasOwnProperty(prop)) result[prop] = allrecord[prop];
  }

  return result;
}
watch(
  () => props.lavelValue,

  (level) => {
    if (level == 1) {
    }
    cashReload(props.dynamicLevelObject[props.dynamicLevelName]);

    if (
      level == 2 &&
      props.dynamicLevelObject[props.dynamicLevelName] != undefined
    ) {
      clearMySelect(mySelect.value, props.pointerTab);
    }
  }
);
watch(
  () => props.colTab,
  (item) => {
    for (let item in props.dynamicLevelObject[props.dynamicLevelName]) {
      if (
        typeof props.dynamicLevelObject[props.dynamicLevelName][item] ==
        "object"
      ) {
        props.dynamicLevelObject[props.dynamicLevelName][item] = {};
      }
    }
    cashReload(props.dynamicLevelObject[props.dynamicLevelName]);
  }
);
const clearMySelect = (elem, event) => {
  let arrCompare = Object.keys(
    props.dynamicLevelObject[props.dynamicLevelName]
  );
  let arrOption = [];
  for (let item in Object.values(options)) {
    arrOption.push(Object.values(options)[item].value);
  }

  nextTick(() => {
    for (let item in elem) {
      if (
        arrCompare.includes(elem[item].selected.value) == false &&
        arrOption.includes(elem[item].selected.value) == false &&
        elem[item].selected.value != "Object" &&
        elem[item].selected.value != "Array" &&
        elem[item].selected.value != ""
      ) {
        elem[item].deleteSelected(event);
      }
    }
  });
};
const cashReload = (objectItemCash, item) => {
  //console.log(objectItemCash);

  // objectCache.cache = {};
  objectCache.cache = objectItemCash;
};
</script>
<template>
  <div>
    <div
      class="columns"
      v-for="(input, index) in dynamicForm.input"
      :key="index"
    >
      <div class="control column is-6">
        <el-input
          v-model="input.value"
          size="large"
          placeholder="Введите ключ"
        />
      </div>
      <div v-if="lavelValue == 1" class="column is-narrow">
        <el-select v-model="input.type" placeholder="Тип данных" size="large">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>

      <div v-if="lavelValue == 2" class="column is-narrow">
        <el-select
          v-model="input.type"
          ref="mySelect"
          @change="levelItem"
          placeholder="Объект"
          size="large"
        >
          <el-option
            v-for="item in dynamicLevelSelect.select"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="column has-text-right is-narrow">
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

<style>
.cr-hand #tab-1 > .el-icon {
  display: none;
}
.cr-hand #tab-1:hover {
  padding-left: 20px;
  padding-right: 20px;
}
.has-text-right button {
  float: right;
  right: 1px;
}
.has-text-right button svg {
  height: 1.3em !important;
  opacity: 0.6;
}
</style>
