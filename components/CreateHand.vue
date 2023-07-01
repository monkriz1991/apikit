<script setup>
import InputHand from "./cabinet/InputHand.vue";
const cod = shallowRef(InputHand);
const dynamicFormPre = ref({});
const nameObject = ref("");
const dynamicLevelSelect = ref({});
const dynamicLevelName = ref("");

const editableTabsValue = ref("1");
const editableTabs = ref([
  {
    title: "Уровень 1",
    name: "1",
    content: cod,
  },
]);
const project = ref("");
const projectArray = [
  {
    value: "product",
    label: "Товары",
  },
  {
    value: "slider",
    label: "Слайдер",
  },
];

const addTab = (targetName) => {
  const newTabName = `${editableTabs.value.length + 1}`;
  editableTabs.value.push({
    title: "Уровень" + " " + newTabName,
    name: newTabName,
    content: cod,
  });
  editableTabsValue.value = newTabName;
};

const removeTab = (targetName) => {
  const tabs = editableTabs.value;
  let activeName = editableTabsValue.value;
  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.name === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1];
        if (nextTab) {
          activeName = nextTab.name;
        }
      }
    });
  }
  editableTabsValue.value = activeName;
  editableTabs.value = tabs.filter((tab) => tab.name !== targetName);
};

function counterForm(item, name) {
  dynamicFormPre.value = item;
  dynamicLevelName.value = name;
}
function selectLevelTwo(item, name) {
  dynamicLevelSelect.value = item;
  dynamicLevelName.value = name;
}
async function sendObject(item) {
  // let res = await $auth.login({ item });
}
</script>
<template>
  <div>
    <div class="cr-hand">
      <div class="link-back">
        <slot name="link-back"></slot>
      </div>
      <div class="columns mb-5">
        <div class="column is-three-fifths">
          <el-form-item label="Имя объекта">
            <el-input
              v-model="nameObject"
              size="large"
              placeholder="Введите название"
              clearable
            />
          </el-form-item>
        </div>
        <div class="column is-three-fifths">
          <el-select v-model="project" placeholder="Проект" size="large">
            <el-option
              v-for="item in projectArray"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </div>
      <div class="columns">
        <div class="column is-three-fifths">
          <el-tabs
            v-model="editableTabsValue"
            type="card"
            class="demo-tabs"
            closable
            @tab-remove="removeTab"
          >
            <el-tab-pane
              v-for="item in editableTabs"
              :key="item.name"
              :label="item.title"
              :name="item.name"
            >
              <div class="cr-hand-block">
                <component
                  :is="item.content"
                  v-model:nameObject="nameObject"
                  v-model:lavelValue="editableTabsValue"
                  v-model:dynamicLevelSelect="dynamicLevelSelect"
                  v-model:dynamicLevelName="dynamicLevelName"
                  v-model:dynamicLevelObject="dynamicFormPre"
                  @dynamicFormChange="counterForm"
                  @dynamicSelect="selectLevelTwo"
                ></component>
              </div>
            </el-tab-pane>
            <client-only>
              <button
                v-if="editableTabs.length < 2"
                class="button is-outlined ml-5"
                @click="addTab(editableTabsValue)"
              >
                <span class="icon">
                  <icon name="material-symbols:forms-add-on-rounded" />
                </span>
                <span>Уровень</span>
              </button>
            </client-only>
          </el-tabs>
        </div>
        <div class="column is-two-fifths">
          <div class="cr-hand-cod mt-5">
            <div>
              <pre>{{ dynamicFormPre }}</pre>
            </div>
          </div>
        </div>
      </div>
      <div class="buttons">
        <button class="button is-primary" @click="sendObject(dynamicFormPre)">
          Сохранить
        </button>
      </div>
    </div>
  </div>
</template>
<style>
.cr-hand-block .button {
  float: left;
}
.cr-hand-block .columns {
  margin-bottom: 0;
}
.cr-hand {
}
.cr-hand-block {
  display: block;
  width: 100%;
  margin: 20px 0 0 0;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.cr-hand .el-tabs__content {
  padding: 0;
}
.cr-hand-block .el-select {
  display: block;
}
.cr-hand-block .el-input__wrapper {
  padding: 5px 11px;
}
.el-form-item {
  display: flex;
  vertical-align: middle;
}
.el-form-item__label {
  display: inline-flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex: 0 0 auto;
  height: 40px;
  line-height: 40px;
  padding: 0 12px 0 0;
  box-sizing: border-box;
}
.el-form-item__content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex: 1;
  line-height: 40px;
  position: relative;
  min-width: 0;
}
</style>
