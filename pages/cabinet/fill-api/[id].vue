<script setup>
const router = useRouter();
const { $openDell } = useNuxtApp();
const allRecords = ref([
  {
    id: 1,
    name: "Товар 1",
    path: "/myProject/catalog/",
    records: "42",
  },
  {
    id: 2,
    name: "Товар 2",
    path: "/myProject/img/",
    records: "12",
  },
  {
    id: 3,
    name: "Товар 3",
    path: "/myProject/info_cat/",
    records: "31",
  },
  {
    id: 4,
    name: "Товар 4",
    path: "/myProject/info_cat/",
    records: "31",
  },
]);
</script>
<template>
  <div class="container">
    <StatCabinet />
    <div class="columns">
      <div class="column is-one-quarter">
        <NavCabinet />
      </div>
      <div class="column is-three-quarters">
        <el-page-header @click="router.back()" title="Назад">
          <template #content>
            <span class="text-sm mr-3">Товары компании</span></template
          >
          <template #extra> </template>
        </el-page-header>
        <!-- <button class="button button-add-rec">
          <nuxt-link :to="`/cabinet/card/`">Добавить запись</nuxt-link>
        </button> -->
        <div class="fill-api-section">
          <div v-for="item in allRecords" :key="item" class="fill-api">
            <nuxt-link :to="`/cabinet/card/` + item.id">
              <strong>{{ item.name }}</strong>
              <div class="fill-api-button">
                <!-- <button class="button is-small button-edit">Изменить</button> -->
                <button
                  class="button is-small button-dell"
                  @click.prevent="$openDell"
                >
                  Удалить
                </button>
              </div>
            </nuxt-link>
          </div>
          <div class="fill-pagination">
            <el-pagination
              :page-size="14"
              :pager-count="11"
              layout="prev, pager, next"
              :total="1000"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.number {
  margin-right: 0px;
}
.fill-api-section {
  margin: 40px 0 0;
}
.button-add-rec {
  width: 100%;
  margin: 15px 0 15px;
  border-radius: 6px;
  padding: 0px 0 !important;
  height: auto;
  border: 2px dashed #3b3b3b;
}
.button-add-rec a {
  color: #333;
  padding: 10px 0 !important;
}
.button-add-rec a {
  width: 100%;
  float: left;
}
.button-add-rec:hover {
}
.button-add-rec:hover a {
  color: #000;
}
.fill-api > a > strong {
  float: left;
  width: 60%;
}
.fill-api-button {
  float: right;

  text-align: right;
}
.fill-api-button button {
  font-weight: 400;
  transition: var(--el-transition-all);
}
.fill-api-button .button-edit {
  margin: 0 10px 0 0;
  background-color: #48c78e;
  color: #ffffff;
  border: none;
  border-radius: 3px !important;
}
.fill-api-button .button-edit:hover {
  background-color: #3ec487;
}
.fill-api-button .button-dell {
  margin: 0 10px 0 0;
  background-color: var(--el-color-info-light-9);
  color: var(--el-color-info);
  border: none;
  border-radius: 3px !important;
}
.fill-api-button .button-dell:hover {
  background-color: var(--el-color-info-light-7);
}
.fill-pagination {
  float: left;
  width: 100%;
  margin: 40px 0 0 0;
}
</style>
