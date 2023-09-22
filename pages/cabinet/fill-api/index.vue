<script setup>
const allApi = ref([]);
const getListProjects = ref([]);
const isActiveApi = ref(0);

const { data: getProjects } = await BaseApiFetch("/apps/", {
  method: "get",
});
getListProjects.value = getProjects?.value?.results;
console.log(getProjects);
const apiLList = (item, index) => {
  allApi.value = item.apis;
  isActiveApi.value = index;
  console.log(allApi);
};
apiLList(getListProjects.value[0], 0);
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
          <div class="columns">
            <div class="column is-9">
              <Transition appear name="fade" mode="out-in">
                <div v-if="allApi.length != 0">
                  <div v-for="item in allApi" :key="item" class="fill-api">
                    <nuxt-link :to="`/cabinet/fill-api/` + item.id">
                      <div class="columns">
                        <div class="column is-9">
                          <strong class="fill-name">{{ item.name }}</strong>
                          <span class="fill-path">id::{{ item.id }}</span>
                        </div>
                        <div class="column is-3">
                          <div class="fill-record">
                            <span class="icon">
                              <icon name="carbon:document-multiple-02" />
                            </span>
                            <span class="fill-record-count">{{
                              item.records
                            }}</span>
                          </div>
                        </div>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
                <div v-else>
                  <span>Нет доступных коллекций</span>
                </div>
              </Transition>
            </div>
            <div class="column is-3">
              <div
                v-for="(item, index) in getListProjects"
                :key="item"
                class="fill-base"
                @click="apiLList(item, index)"
                :class="{ activeApiButt: isActiveApi == index }"
              >
                <strong class="fill-base-name">{{ item.name }}</strong>
                <span class="fill-base-coll">{{ item.apis.length }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.fill-base {
  float: left;
  width: 100%;
  border-radius: 12px;
  border: 2px solid #f1f1f1;
  margin: 0 0 20px;
  /* background: #fff; */
  padding: 15px;
  cursor: pointer;
  position: relative;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.fill-base-name {
  float: left;
  width: 100%;
  font-size: 14px;
  margin: 0 0 0px;
  word-wrap: break-word;
  padding: 0 10px 0 0;
  max-width: 90%;
}
.fill-base-coll {
  font-size: 14px;
}
.fill-base:hover {
  transition: 0.2s;
  background-color: #fff6de;
  color: #946c00;
  border: 2px solid #fff6de;
}
.fill-base.activeApiButt:hover {
  background-color: #ffe08a;
}
.activeApiButt {
  background-color: #ffe08a;
  /* top: -2px;
    left: -2px; */
  border: 2px solid #ffe08a;
}
</style>
