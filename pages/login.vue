<template>
  <div class="container">
    <div class="login-form">
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input class="input" type="email" placeholder="Email" />
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
          <input class="input" type="password" placeholder="Password" />
          <span class="icon is-small is-left">
            <icon name="ic:baseline-lock" />
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control">
          <nuxt-link to="/cabinet/">
            <button class="button is-success">Login</button>
          </nuxt-link>
        </p>
      </div>
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
