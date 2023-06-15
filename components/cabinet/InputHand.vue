<script setup>
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
    value: "Array",
    label: "Массив",
  },
  {
    value: "Object",
    label: "Объект",
  },
  {
    value: "Boolean",
    label: "Логический",
  },
  {
    value: "Date",
    label: "Дата",
  },
];
const pushObject = reactive({
  inputValue: {},
});
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
const emit = defineEmits(["dynamicFormChange"]);

watch(pushObject, (input) => {
  emit("dynamicFormChange", input);
});
watch(dynamicForm.input, (input) => {
  pushObject.inputValue = {};
  for (let item in input) {
    pushObject.inputValue[input[item].value] = input[item].type;
  }
});
</script>
<template>
  <div>
    <div
      class="field columns"
      v-for="(input, index) in dynamicForm.input"
      :key="index"
    >
      <div class="control column is-two-fifths">
        <input
          class="input"
          type="text"
          placeholder="Text input"
          v-model="input.value"
        />
      </div>
      <div class="column is-two-fifths">
        <el-select v-model="input.type" clearable placeholder="Select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="column has-text-right">
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
