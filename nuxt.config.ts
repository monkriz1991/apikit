// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    viewTransition: true,
  },
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@element-plus/nuxt",
    "@nuxt/image",
    "vue-email/nuxt",
    "nuxt-icon",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Rubik: [100, 300, 400, 500, 600, 700, 800],
          download: true,
          inject: true,
        },
      },
    ],
  ],
  elementPlus: {
    importStyle: "css",
  },
  devtools: { enabled: true },
  css: ["@/node_modules/bulma/css/bulma.css", "@/assets/main.css"],
  vite: {},
  runtimeConfig: {
    public: {
      baseURL: process.env.baseURL || "https://api.valenchits.com",
      authCustom: {
        baseURL: process.env.baseAuthURL || "https://api.valenchits.com",
        login: "/login/oauth/",
        logout: "/test2",
        getUser: "/user/me/",
        token: "/oauth/token/",
        refresh: "/token/refresh",
        loginPage: "/",
        afterLogoutPage: "/",
        afterLoginPage: "/",
        clientId: "qRhkcTKfYAHHj7HHqmJB5a1zyKYeiNiUVC6jdHfP",
        grandType: "authorization_code",
      },
    },
  },
});
