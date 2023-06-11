<template>
  <div class="container">
    <div class="bd-snippet-preview">
      <nav class="level">
        <p class="level-left">
          <nuxt-link class="title" to="/"> UpApi </nuxt-link>
        </p>
        <div class="level-right">
          <nuxt-link to="/login">
            <button class="button is-primary">Login</button>
          </nuxt-link>

          <button
            v-if="!$auth.user?.value?.email"
            class="button is-primary"
            @click="openLoginForm"
          >
            Login
          </button>
          <div v-if="$auth.user?.value?.email">
            {{ $auth.user.value?.email }} <br />
            <button @click="$auth.logout()">выйти</button>
          </div>
        </div>
      </nav>
    </div>
    <login-form ref="loginModal"></login-form>
  </div>
</template>
<script setup>
const loginModal = ref(null);
function openLoginForm() {
  loginModal.value.$el.classList.add("is-active");
}
</script>
