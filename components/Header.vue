<template>
  <div class="container">
    <div class="bd-snippet-preview">
      <nav class="level">
        <p class="level-left">
          <span class="title">OpenApi</span>
        </p>
        <p class="level-right">
          <button v-if="!$auth.user?.value?.email" class="button is-primary" @click="openLoginForm">Login</button>
          <div v-if="$auth.user?.value?.email">
        {{$auth.user.value?.email}} <br>
         <button @click="$auth.logout()">выйти</button>
      </div>
        </p>
      </nav>
    </div>
    <login-form ref="loginModal"></login-form>
  </div>
</template>
<script setup>
const loginModal = ref(null)
function openLoginForm(){
 loginModal.value.$el.classList.add('is-active');
}
</script>