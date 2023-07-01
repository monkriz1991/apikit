<script setup lang="ts">
const createShow = ref("create");
</script>
<template>
  <div>
    <ClientOnly>
      <div class="container">
        <StatCabinet />
        <div class="columns">
          <div class="column is-one-quarter">
            <NavCabinet />
          </div>
          <div class="column is-three-quarters">
            <div class="cab-project">
              <Transition appear name="fade" mode="out-in">
                <div v-if="createShow === 'create'" class="c-absol">
                  <el-collapse accordion>
                    <el-collapse-item name="1">
                      <template #title> Товары </template>
                      <div>
                        Consistent with real life: in line with the process and
                        logic of real life, and comply with languages and habits
                        that the users are used to;
                      </div>
                      <div>
                        Consistent within interface: all elements should be
                        consistent, such as: design style, icons and texts,
                        position of elements, etc.
                      </div>
                    </el-collapse-item>
                    <el-collapse-item title="Feedback" name="2">
                      <div>
                        Operation feedback: enable the users to clearly perceive
                        their operations by style updates and interactive
                        effects;
                      </div>
                      <div>
                        Visual feedback: reflect current state by updating or
                        rearranging elements of the page.
                      </div>
                    </el-collapse-item>
                  </el-collapse>
                </div>
                <div v-else-if="createShow === 'nocreate'">ok</div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<style>
.columns {
}
.column {
}
.cab-project {
  position: relative;
}
.cab-project .el-collapse-item__header {
  padding: 35px 0;
}
.cab-project .el-collapse-item__header {
  font-size: 15px;
}
.el-collapse {
  float: left;
  width: 100%;
}
</style>
