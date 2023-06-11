// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/node_modules/bulma/css/bulma.css", "@/assets/main.css"],
  devtools: {enabled: true},
  modules: [
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
  plugins: [
      { src: '~/plugins/auth.js'},
  ],
  runtimeConfig: {
      public: {
          baseURL: 'https://new.arhiterm.by/',
          authCustom: {
              baseURL: 'https://api.valenchits.com' || process.env.baseAuthURL,
              login: '/login/oauth/',
              logout: '/test2',
              getUser: '/user/me/',
              token: '/oauth/token/',
              refresh: '/token/refresh',
              loginPage: '/',
              afterLogoutPage: '/',
              afterLoginPage: '/',
              clientId: 'qRhkcTKfYAHHj7HHqmJB5a1zyKYeiNiUVC6jdHfP',
              grandType: 'authorization_code',
          },
      }
  }
});
