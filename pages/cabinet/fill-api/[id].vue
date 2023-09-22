<script setup>
import { Search, More, InfoFilled, Delete } from "@element-plus/icons-vue";
const router = useRouter();
const allRecords = reactive({});
const currentPage = ref(1);
const pageSize = ref(20);
const small = ref(false);
const background = ref(false);
const disabled = ref(false);
const search = ref("");
const getListProjects = ref([]);
const route = useRoute();

const { data: getProjects } = await BaseApiFetch(
  `/get/item/?apiId=${route.params.id}`,
  {
    method: "get",
  }
);
allRecords.value = getProjects?.value;

console.log(allRecords);
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`);
};
const confirmEvent = (item) => {
  console.log(item);
};
const cancelEvent = () => {
  console.log("cancel!");
};
</script>
<template>
  <div class="container">
    <StatCabinet />
    <div class="columns">
      <div class="column is-one-quarter">
        <NavCabinet />
      </div>
      <div class="column is-three-quarters">
        <div class="columns">
          <div class="column is-9">
            <div class="fill-api-section">
              <div
                v-for="item in allRecords.value"
                :key="item"
                class="fill-api-all"
              >
                <nuxt-link :to="`/cabinet/card/` + item.id">
                  <div
                    class="fill-api-all-block"
                    v-for="(itemIn, name) in Object.entries(item)"
                    :key="itemIn"
                    v-show="name == 1 || name == 2 || name == 3"
                  >
                    <span> {{ itemIn[0] }} : {{ itemIn[1] }}</span>
                  </div>
                  <div class="fill-api-button">
                    <el-popconfirm
                      confirm-button-text="Удалить"
                      cancel-button-text="Отмена"
                      :icon="InfoFilled"
                      icon-color="#626AEF"
                      title="Удалить запись!"
                      width="200"
                      @confirm="confirmEvent(item)"
                      @cancel="cancelEvent"
                    >
                      <template #reference>
                        <button
                          @click.prevent
                          type="button"
                          class="button is-white fill-api-dell"
                        >
                          <icon name="ic:baseline-delete-forever" />
                        </button>
                      </template>
                    </el-popconfirm>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="column is-3">
            <el-page-header
              @click="router.back()"
              title="Назад"
              class="page-back-fill"
            >
              <template #content> <span>Товары компании</span></template>
              <template #extra> </template>
            </el-page-header>
            <div class="fill-search">
              <el-input
                v-model="search"
                size="large"
                placeholder="Please Input"
                :suffix-icon="Search"
              />
            </div>
            <div class="fill-pagination">
              <div class="demo-pagination-block">
                <el-pagination
                  v-model:current-page="currentPage"
                  v-model:page-size="pageSize"
                  :small="small"
                  :disabled="disabled"
                  :pager-count="5"
                  :background="background"
                  layout=" pager,  jumper"
                  :total="1000"
                  @current-change="handleCurrentChange"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.fill-pagination .el-pager li {
  background: transparent;
  width: auto;
}
.fill-pagination .btn-prev,
.fill-pagination .btn-next {
  background: transparent !important;
}
.fill-pagination .el-pager li.is-active {
  font-size: 23px;
  color: #f3c33d;
  font-weight: 600;
  /* height: auto; */
  /* width: auto; */
  height: 50px;
  width: 50px;
  border: 2px solid #f3c33d;
  border-radius: 50%;
}
.el-pager li:hover,
.el-pagination button:hover {
  color: #f3c33d;
}
.fill-pagination .el-pagination {
  display: flex;
  justify-content: center;
}
.fill-pagination .el-pager {
  display: block;
}
.page-back-fill {
  float: left;
  width: 100%;
  padding: 15px;
  border-radius: 12px;
  /* border: 2px solid #f1f1f1; */
  background: #efefef;
}
.page-back-fill .el-page-header__title {
  font-size: 13px;
  font-weight: 400;
}
.page-back-fill .el-page-header__icon {
  font-size: 15px;
  margin-right: 5px;
}
.page-back-fill .el-page-header__content span {
  font-size: 13px;
}
.page-back-fill .el-page-header__content {
  line-height: 0.9;
}
.fill-pagination .el-input__wrapper {
  background: transparent;
  border-radius: 10px;
}
.fill-search {
  float: left;
  width: 100%;
  margin: 30px 0;
}
.fill-search .el-input__wrapper {
  border-radius: 12px;
  background: transparent;
}
.fill-api-dell .icon {
  opacity: 0.4;
}
.fill-api-all a {
  color: #2a2a2a;
  padding: 20px 30px;
  float: left;
  width: 100%;
  display: flex;
  background: #fff;
  border-radius: 12px;
  /* border: 1px solid #e2e2e2; */
  margin: 0 0 20px;
  align-items: center;
}
.fill-api-all a :hover {
  transition: 0.2s;
  color: #000000;
}
.fill-api-all-block {
  float: left;
  /* display: block; */
  margin: 0 15px 0 0;
  font-size: 14px;
}
</style>
