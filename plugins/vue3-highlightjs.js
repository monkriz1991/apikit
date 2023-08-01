import VueHighlightJS from "vue3-highlightjs";
import "highlight.js/styles/solarized-light.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueHighlightJS);
});
