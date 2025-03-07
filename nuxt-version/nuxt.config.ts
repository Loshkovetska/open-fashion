// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Open Fashion",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => {
        return tag.startsWith("swiper-");
      },
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@primevue/nuxt-module", "@pinia/nuxt"],
  css: ["~/assets/main.css"],
  tailwindcss: {
    viewer: true,
    configPath: ["~/tailwind.config.js"],
  },
});
