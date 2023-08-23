<script setup>
const allApi = ref([
  {
    id: 1,
    name: "Товары компании",
    path: "/myProject/catalog/",
    records: "42",
  },
  {
    id: 2,
    name: "Галерея товаров",
    path: "/myProject/img/",
    records: "12",
  },
  {
    id: 3,
    name: "Описания категорий",
    path: "/myProject/info_cat/",
    records: "31",
  },
]);
</script>
<template>
  <div>
    <div class="container">
      <StatCabinet />
      <div class="columns">
        <div class="column is-one-quarter">
          <NavCabinet />
        </div>
        <div class="column is-three-quarters">
          <div v-for="item in allApi" :key="item" class="fill-api">
            <nuxt-link :to="`/cabinet/fill-api/` + item.id">
              <div class="columns">
                <div class="column is-9">
                  <strong class="fill-name">{{ item.name }}</strong>
                  <span class="fill-path">{{ item.path }}</span>
                </div>
                <div class="column is-3">
                  <div class="fill-record">
                    <span class="icon">
                      <icon name="carbon:document-multiple-02" />
                    </span>
                    <span class="fill-record-count">{{ item.records }}</span>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
