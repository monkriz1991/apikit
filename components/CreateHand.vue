<script setup>
import InputHand from "./cabinet/InputHand.vue";
const cod = shallowRef(InputHand);
const dynamicFormPre = ref({});
const nameObject = ref("nameApi");
const nameObjectFun = ref({ nameApi: {} });
const dynamicLevelSelect = ref({});
const dynamicLevelName = ref("");
const hidennameObject = ref(false);
const refInput = ref("");

const editableTabsValue = ref("1");
const editableTabs = ref([
  {
    title: "Уровень 1",
    name: "1",
    content: cod,
  },
]);
const project = ref("");
let projectArray = ref([]);
/**
 * функция получает список всех приложений пользователя
 * @returns {Promise<void>}
 */
const getListProjects = async () => {
  // todo задвоеная ф-ия ткакая же в cabinet/index.vue
  const { data, pending } = await BaseApiFetch("/apps/", {
    method: "get",
    params: { limits: 50 },
  });
  projectArray.value = data?.value?.results;
  return data.value;
};
onMounted(async () => {
  let response = await getListProjects();
  console.log(response.count, "count");
  console.log(response.results, "results");
});
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
const shownameObject = () => {
  hidennameObject.value = true;
  nextTick(() => {
    refInput.value.focus();
  });
};
const toggleInput = (el) => {
  hidennameObject.value = false;
};
async function sendObject(item) {
  // let res = await $auth.login({ item });
  console.log(item);
}
counterForm(nameObjectFun, nameObject.value);
</script>
<template>
  <div>
    <div class="cr-hand">
      <div class="link-back">
        <slot name="link-back"></slot>
      </div>
      <div class="columns">
        <div class="column is-8">
          <div class="cr-hand-section">
            <el-form-item>
              <el-input
                v-model="nameObject"
                v-show="hidennameObject"
                @blur="toggleInput($event)"
                ref="refInput"
                size="large"
                placeholder="Имя объекта"
              />
              <div class="name-cr-project" v-show="hidennameObject == false">
                <strong>Имя объекта</strong>
                <span>{{ nameObject }}</span>
                <button class="button is-white" @click="shownameObject">
                  <icon name="material-symbols:edit-outline-rounded" />
                </button>
              </div>
            </el-form-item>
            <el-select
              v-model="project"
              placeholder="Проект"
              size="large"
              class="select-api-path"
            >
              <el-option
                v-for="item in projectArray"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
            <div class="path-cr-project">
              <strong>Путь api</strong>
              <span> {{ project }} / {{ nameObject }}</span>
            </div>
            <div class="tab-level">
              <client-only>
                <button
                  v-if="editableTabs.length < 2"
                  class="button is-warning is-light ml-6 add-level-hand"
                  @click="addTab(editableTabsValue)"
                >
                  <span class="icon">
                    <icon name="material-symbols:forms-add-on-rounded" />
                  </span>
                  <span>Уровень</span>
                </button>
              </client-only>
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
              </el-tabs>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="cr-hand-cod mt-5">
            <div>
              <pre v-highlightjs>
                <code class="javascript">{{ dynamicFormPre }}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <div class="buttons butt-save-cr">
        <button class="button is-warning" @click="sendObject(dynamicFormPre)">
          Продолжить
        </button>
      </div>
    </div>
  </div>
</template>
<style>
.cr-hand-section {
  background: #fff;
  padding: 30px;
  border-radius: 12px;
}
.cr-hand-block .button {
  /* float: left; */
  border-radius: 7px;
}
.cr-hand-block .columns {
  margin-bottom: 0;
}
.cr-hand {
}
.cr-hand-block {
  display: block;
  width: 100%;
  margin: 0px 0 0 0 !important;
}
.cr-hand-block > div {
  /* display: flex;
  width: 100%;
  flex-wrap: wrap; */
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
.cr-hand-block .el-input__wrapper,
.asterisk-left .el-input__wrapper {
  padding: 2px 11px;
  border-radius: 7px;
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
.name-cr-project {
  width: 100%;
}
.name-cr-project > strong,
.path-cr-project > strong {
  width: 100%;
  margin: 0 0 5px;
  font-weight: 300;
  font-size: 14px;
  float: left;
  height: auto;
  line-height: 1;
}
.path-cr-project > span {
  width: 100%;
  float: left;
  margin: 5px 0 0 0;
}
.name-cr-project > span {
  font-size: 21px;
}
.name-cr-project button {
  float: right;
  font-size: 21px;
  opacity: 0.6;
  color: #423a25 !important;
  top: -4px;
  padding-top: 10px;
  height: 43px;
  padding: 0 10px;
}
.name-cr-project button:hover {
  background: transparent !important;
  opacity: 1;
  transition: 0.2s;
}
.path-cr-project {
}
.tab-level {
  position: relative;
  display: inline-block;
  margin: 40px 0 0;
  width: 100%;
}
.add-level-hand {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 12;
  border-radius: 6px;
  padding: 6px 18px;
  height: auto;
  font-size: 15px;
}
.tab-level .el-tabs--card > .el-tabs__header {
  border: none;
  margin: 0 0 15px;
}
.tab-level .el-tabs__nav-wrap {
  margin-bottom: 0px;
}
.tab-level .el-tabs--card > .el-tabs__header .el-tabs__nav {
  border: none;
}
.tab-level .el-tabs__item {
  border: 1px solid #e2e2e2 !important;
  border-radius: 7px;
  font-weight: 400;
  margin: 0px 5px 0 0;
  color: #a1a1a1;
}
.tab-level .el-tabs__item.is-active {
  color: #000000;
}
.tab-level .el-tabs__item:hover {
  color: #464646;
}
pre {
  background-color: transparent;
}
.select-api-path {
  margin: 0px 0 30px;
  width: 100%;
}
.select-api-path .el-input__wrapper {
  border-radius: 10px;
  height: 45px;
}
.butt-save-cr {
  margin: 30px 13px 0px 0px;
}
.butt-save-cr button {
  width: 67%;
  border-radius: 11px;
  padding: 23px 0;
  /* background: #48c78e !important; */
}
</style>
