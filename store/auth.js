import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
    user: {},
  }),
  actions: {
    async authenticateUser({ username, password }) {
      const { data, pending } = await useFetch(
        "https://api.valenchits.com/login/oauth/",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: {
            username,
            password,
          },
        }
      );
      this.loading = pending;
      if (data.value) {
        const token = useCookie("token"); // useCookie new hook in nuxt 3
        token.value = data?.value?.token; // set token to cookie
        this.user = data.value;
        this.authenticated = true; // set authenticated  state value to true
      }
    },
    logUserOut() {
      this.authenticated = false;
      const token = useCookie("token");
      token.value = null;
      this.user = null;
    },
  },
  persist: true,
});
