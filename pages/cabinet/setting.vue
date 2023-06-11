<script setup lang="ts">
import { InfoFilled } from "@element-plus/icons-vue";
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
          <el-collapse accordion>
            <el-collapse-item name="1">
              <template #title>
                Consistency<el-icon class="header-icon">
                  <info-filled />
                </el-icon>
              </template>
              <div>
                Consistent with real life: in line with the process and logic of
                real life, and comply with languages and habits that the users
                are used to;
              </div>
              <div>
                Consistent within interface: all elements should be consistent,
                such as: design style, icons and texts, position of elements,
                etc.
              </div>
            </el-collapse-item>
            <el-collapse-item title="Feedback" name="2">
              <div>
                Operation feedback: enable the users to clearly perceive their
                operations by style updates and interactive effects;
              </div>
              <div>
                Visual feedback: reflect current state by updating or
                rearranging elements of the page.
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
  </div>
</template>
