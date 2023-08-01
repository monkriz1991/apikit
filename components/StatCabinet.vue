<script setup>
const allProject = ref(0);
const visibleModal = ref(false);
const addProject = (item) => {
  if (item.value == undefined) {
    visibleModal.value = !visibleModal.value;
  } else {
    visibleModal.value = item.value;
  }
};
</script>
<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <!-- <p class="title">Statistic</p> -->
        <p class="subtitle">Primary subtitle</p>
        <div class="cab-project-butt">
          <button class="button is-success is-outlined" @click="addProject">
            <span class="icon">
              <icon name="material-symbols:add-to-photos-outline-rounded" />
            </span>
            <span>Создать проект</span>
          </button>
        </div>
      </div>
    </section>
    <ClientOnly>
      <cabinet-addProject
        :modalAddProject="visibleModal"
        @emitVisibleModal="addProject"
      />
    </ClientOnly>
  </div>
</template>

<style>
.hero-body {
  position: relative;
  padding: 1rem 0rem;
}
.cab-project-butt {
  margin: 0 0 0px;
  text-align: right;
  float: right;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  height: 100%;
  align-items: center;
}
</style>
