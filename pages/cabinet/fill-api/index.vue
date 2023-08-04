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
<style>
.fill-api {
  float: left;
  width: 100%;

  border-radius: 6px;
  border: 1px solid #e2e2e2;
  margin: 0 0 20px;
}
.fill-api a {
  color: #2a2a2a;
  padding: 20px;
  float: left;
  width: 100%;
}
.fill-api:hover {
  transition: 0.2s;
  border: 1px solid #b1b1b1;
}
.fill-api:hover > a {
  transition: 0.2s;
  color: #000000;
}
.fill-api .fill-name {
  float: left;
  width: 100%;
  margin: 0 0 10px;
  font-size: 16px;
}
.fill-api .fill-path {
  float: left;
  width: 100%;
  font-size: 14px;
}
.fill-api a > div > span {
  float: left;
  width: 100%;
  font-size: 14px;
}
.fill-record {
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 0 0 30px;
}
.fill-record-count {
  font-weight: 400;
  color: #464646;
}
.fill-record .icon {
  margin: 0 3px 0 0;
  color: #464646;
}
</style>
