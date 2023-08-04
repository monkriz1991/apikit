<script setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "/store/auth";

const router = useRouter();

const { logUserOut } = useAuthStore();
const { authenticated } = storeToRefs(useAuthStore());

const logout = () => {
  logUserOut();
  router.push("/");
};
</script>
<template>
  <div class="container">
    <div class="bd-snippet-preview">
      <nav class="level">
        <div class="level-left">
          <nuxt-link class="title-top" to="/">
            <icon name="icon-park-outline:nine-points-connected" />UpApi
          </nuxt-link>
          <nuxt-link class="link-dok" to="/documentation"
            >Документация</nuxt-link
          >
        </div>
        <div class="level-right">
          <nuxt-link v-if="!authenticated" to="/login" class="mr-3">
            <button class="button is-success is-outlined bt-c-suss-line">
              <span class="icon">
                <icon name="solar:login-3-broken" />
              </span>
              <span>Вход</span>
            </button>
          </nuxt-link>
          <nuxt-link v-if="!authenticated" to="/registration">
            <button class="button is-success bt-c-suss">
              <span class="icon">
                <icon name="solar:user-circle-broken" />
              </span>
              <span>Регистрация</span>
            </button>
          </nuxt-link>
          <nuxt-link v-if="authenticated" to="/cabinet" class="mr-3">
            <button class="button is-success is-outlined bt-c-suss-line">
              <span class="icon">
                <icon name="emojione-monotone:file-cabinet" />
              </span>
              <span>Кабинет</span>
            </button>
          </nuxt-link>
          <button
            v-if="authenticated"
            class="button is-success bt-c-suss"
            @click="logout"
          >
            Выйти
          </button>
        </div>
      </nav>
    </div>
  </div>
</template>

<style>
.title-top {
  color: #333;
  font-size: 29px;
  font-weight: 600;
  line-height: 1.125;
  /* background: #3a3131; */
  padding: 4px 3px;
  border-radius: 9px;
}
.title-top:hover {
  transition: 0.2s;
  color: #000;
}
.title-top .icon {
  margin: 0 5px 0 0;
  position: relative;
  top: -2px;
}
.link-dok {
  margin: 0 0 0 60px;
  color: #585858;
  font-weight: 600;
  font-size: 15px;
  background: #f4f4f5;
  padding: 9px 15px;
  border-radius: 5px;
}
.link-dok:hover {
  transition: 0.2s;
  color: #000;
  background: #f9f9f9;
}
</style>
