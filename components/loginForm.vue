<template>
<div class="modal" id="modalLoginForm">
  <div class="modal-background"></div>
  <div class="modal-content" style="background-color: aliceblue">
   <div>
     <input type="email" v-model="login" placeholder="введите логин" />
     <input type="password" v-model="password" placeholder="ведите пароль" />
     <button @click="loginAction">Войти</button>
   </div>
  </div>
  <button class="modal-close is-large" @click="closeModal" aria-label="close"></button>
</div>
</template>

<script setup>
let login, password = ref(null)
const {$auth} = useNuxtApp()
function closeModal($el) {
  let ggg = document.getElementById("modalLoginForm")
    ggg.classList.remove('is-active');
  }
async function loginAction(){
let res = await $auth.login({username: login, password: password})
  console.log(res)
  if(res) {
    closeModal()
    navigateTo('/cabinet')
  }

}
</script>

<style scoped>

</style>