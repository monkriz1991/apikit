<script setup>
const { $auth } = useNuxtApp();
const form = reactive({
  email: "",
  password: "",
});

async function onSubmit() {
  // let res = await $auth.login({ name: form.email, password: form.password });
  // console.log(res);
  // if (res) {
  //   navigateTo("/cabinet/");
  // }
  navigateTo("/cabinet/");
}
</script>
<template>
  <div class="container">
    <div class="login-form">
      <form :model="form">
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input
              v-model="form.email"
              class="input"
              type="email"
              placeholder="Email"
            />
            <span class="icon is-small is-left">
              <icon name="ic:baseline-email" />
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input
              v-model="form.password"
              class="input"
              type="password"
              placeholder="Password"
            />
            <span class="icon is-small is-left">
              <icon name="ic:baseline-lock" />
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button
              class="button is-success"
              type="submit"
              @click.stop.prevent="onSubmit"
            >
              Войти
            </button>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.login-form {
  padding: 15% 0;
  max-width: 400px;
  margin: 0 auto;
}
.field .icon {
  padding: 7px;
}
</style>
