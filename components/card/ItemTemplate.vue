<script setup>
const props = defineProps({
  apiObject: {
    type: Object,
    default: {},
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
const arrApiObject = computed(() => props.apiObject);
const checkArray = reactive([]);
const contItem = ref(1);
const foremObject = reactive({});
const emit = defineEmits(["emitApiObject"]);

watch(foremObject, (value) => {
  emit("emitApiObject", value);
});
const plus = () => {};

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
</script>

<template>
  <div>
    <div v-for="(item, index) in arrApiObject" :key="index">
      <div class="card-el-item" v-if="item === 'String'">
        <span class="card-el-label">{{ index }}</span>
        <el-input
          v-model="foremObject[index]"
          size="large"
          :placeholder="`Введите` + ' ' + index"
        />
      </div>
      <div class="card-el-item" v-if="item === 'Number'">
        <span class="card-el-label">{{ index }}</span>
        <el-input
          type="Number"
          size="large"
          v-model.number="foremObject[index]"
          :placeholder="`Введите` + ' ' + index"
        />
      </div>
      <div class="card-el-item" v-if="item === 'Date'">
        <span class="card-el-label">{{ index }}</span>
        <el-date-picker
          type="date"
          v-model="foremObject[index]"
          :placeholder="`Введите` + ' ' + index"
        ></el-date-picker>
      </div>
      <div class="card-el-item" v-if="item === 'Text'">
        <span class="card-el-label">{{ index }}</span>
        <el-input
          :autosize="{ minRows: 4, maxRows: 8 }"
          type="textarea"
          v-model.number="foremObject[index]"
          maxlength="10000"
          show-word-limit
          :placeholder="`Введите` + ' ' + index"
        />
      </div>
      <div class="card-el-item" v-if="item === 'Boolean'">
        <div class="mb-2 flex items-center text-sm">
          <span class="card-el-label">{{ index }}</span>
          <el-radio-group v-model="foremObject[index]" class="ml-4">
            <el-radio label="true" size="large">true ( истина )</el-radio>
            <el-radio label="false" size="large">false ( ложь )</el-radio>
          </el-radio-group>
        </div>
      </div>

      <div class="card-el-item" v-if="typeof item == 'object'">
        <div class="card-el-item-arr">
          <div class="card-el-item-arr-el">
            <div class="">
              <div v-for="(iTemN, iNdexV) in contItem" :key="iTemN">
                <div v-if="checkArray[item + iNdexV] == 'String'">
                  <el-input
                    v-model="foremObject[index][item + iNdexV]"
                    :placeholder="`Введите` + ' ' + index"
                  />
                </div>
                <div v-if="checkArray[item + iNdexV] === 'Number'">
                  <el-input
                    type="Number"
                    v-model.number="foremObject[index][iNdexV]"
                    :placeholder="`Введите` + ' ' + index"
                  />
                </div>

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
    <!-- <button @click="plus">okoko</button> -->
  </div>
</template>
