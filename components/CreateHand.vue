<script setup>
import InputHand from "./cabinet/InputHand.vue";
const cod = shallowRef(InputHand);
const dynamicFormPre = ref("");

let tabIndex = 1;
const editableTabsValue = ref("1");
const editableTabs = ref([
  {
    title: "Уровень 1",
    name: "1",
    content: cod,
  },
]);

const addTab = (targetName) => {
  const newTabName = `${++tabIndex}`;
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

function counterForm(item) {
  dynamicFormPre.value = item;
}
async function sendObject(item) {
  // let res = await $auth.login({ item });
  console.log(item);
}
</script>
<template>
  <div>
    <ClientOnly>
      <div class="cr-hand">
        <div class="link-back">
          <slot name="link-back"></slot>
          <el-button class="button is-small" @click="addTab(editableTabsValue)">
            add tab
          </el-button>
        </div>
        <div class="columns">
          <div class="column">
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
                  <KeepAlive>
                    <component
                      :is="item.content"
                      @dynamicFormChange="counterForm"
                    ></component>
                  </KeepAlive>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
          <div class="column">
            <div class="cr-hand-cod mt-5">
              <div>
                <pre>{{ dynamicFormPre }}</pre>
              </div>
            </div>
          </div>
        </div>
        <div class="buttons">
          <button class="button is-primary" @click="sendObject(dynamicFormPre)">
            Отправить
          </button>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>
<style>
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
</style>
