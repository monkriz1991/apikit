// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    // viewTransition: true,
  },
  modules: [
    "@element-plus/nuxt",
    "@nuxt/image",
    "nuxt-icon",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Montserrat: [100, 300, 400, 500, 600, 700, 800],
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
      baseURL: "https://new.arhiterm.by/",
      authCustom: {
        baseURL: "https://api.valenchits.com" || process.env.baseAuthURL,
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
