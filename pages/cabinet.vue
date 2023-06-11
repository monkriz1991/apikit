<template>
<div>
  cabinet {{$auth.user}}
</div>
</template>

<script setup>
definePageMeta({
  middleware: [
    'auth',
  ],
});
</script>

<style scoped>

</style>