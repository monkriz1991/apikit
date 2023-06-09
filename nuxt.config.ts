// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  devtools: { enabled: true },
  css: ["@/node_modules/bulma/css/bulma.css", "@/assets/main.css"],
});
