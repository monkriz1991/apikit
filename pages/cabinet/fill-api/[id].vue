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

<style></style>
