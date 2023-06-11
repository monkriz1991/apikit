<script lang="ts" setup>
const createShow = ref("create");
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
            <Transition appear name="slide-up">
              <div v-if="createShow === 'create'" class="c-absol">
                <div class="column">
                  <div class="creat-block" @click="createShow = 'createHand'">
                    <icon name="gridicons:create" />
                    <span>Собрать в ручную</span>
                  </div>
                </div>
                <div class="column">
                  <div class="creat-block" @click="createShow = 'createFile'">
                    <icon name="bi:filetype-xls" />
                    <span>Выгрузить из xls</span>
                  </div>
                </div>
                <div class="column">
                  <div class="creat-block" @click="createShow = 'createGoogle'">
                    <icon name="uiw:file-excel" />
                    <span>Получить из Google Exel</span>
                  </div>
                </div>
              </div>
              <div class="c-absol" v-else-if="createShow === 'createHand'">
                <CreateHand>
                  <template v-slot:link-back>
                    <button
                      class="button is-small is-primary is-light"
                      @click="createShow = 'create'"
                    >
                      <span class="icon">
                        <icon name="system-uicons:wrap-back" />
                      </span>
                      <span>назад</span>
                    </button>
                  </template>
                </CreateHand>
              </div>
              <div class="c-absol" v-else-if="createShow === 'createFile'">
                <CreateFile>
                  <template v-slot:link-back>
                    <button
                      class="button is-small is-primary is-light"
                      @click="createShow = 'create'"
                    >
                      <span class="icon">
                        <icon name="system-uicons:wrap-back" />
                      </span>
                      <span>назад</span>
                    </button>
                  </template>
                </CreateFile>
              </div>
              <div class="c-absol" v-else-if="createShow === 'createGoogle'">
                <CreateGoogle>
                  <template v-slot:link-back>
                    <button
                      class="button is-small is-primary is-light"
                      @click="createShow = 'create'"
                    >
                      <span class="icon">
                        <icon name="system-uicons:wrap-back" />
                      </span>
                      <span>назад</span>
                    </button>
                  </template>
                </CreateGoogle>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.columns {
  position: relative;
}
.column {
  width: 33.3333333%;
  float: left;
}
.c-absol {
  position: absolute;
  left: 0;
  right: 0;
}
.creat-block {
  padding: 40px;
  display: block;
  text-align: center;
  border-radius: 15px;
  background: #f8f8f8;
  cursor: pointer;
}
.creat-block .icon {
  width: 100%;
  display: block;
  height: 35px;
  opacity: 0.7;
}
.creat-block span {
  width: 100%;
  display: block;
  padding: 20px 0;
  font-size: 16px;
  font-weight: 500;
}
.creat-block:hover {
  transition: 0.2s;
  color: #000;
  background: #eeeeee;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
