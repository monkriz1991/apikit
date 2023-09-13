<template>
  <e-html lang="en">
    <e-text>test mail</e-text>

    <e-hr />
    <e-button href="https://example.com">Click me</e-button>
  </e-html>
</template>

<script setup>
import { EHtml, EText, EHr, EButton } from "vue-email";
defineProps({
  title: String,
});
</script>
