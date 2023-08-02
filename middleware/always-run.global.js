import { storeToRefs } from "pinia";
import { useAuthStore } from "/store/auth";

export default defineNuxtRouteMiddleware((to, route) => {
  const router = useRouter();
  const { authenticated } = storeToRefs(useAuthStore());
  const { user } = storeToRefs(useAuthStore());
  const token = useCookie("token");

  if (token.value) {
    authenticated.value = true;
  }
  if (
    (token.value && to?.name === "login") ||
    (token.value && to?.name === "registration") ||
    (token.value && to?.name === "password-reset")
  ) {
    return navigateTo("/cabinet/");
  }
  console.log(to.name);
  if (
    (!token.value && to?.name === "cabinet") ||
    (!token.value && to?.name === "cabinet-fill-api") ||
    (!token.value && to?.name === "cabinet-creat-api") ||
    (!token.value && to?.name === "cabinet-setting")
  ) {
    return navigateTo("/");
  }
});
