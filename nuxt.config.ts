// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/main.scss" as *;',
        },
      },
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxtjs/i18n"],
  i18n: {
    locales: [
      {
        code: "ru",
        file: "ru-RU.json",
      },
      {
        code: "en",
        file: "en-US.json",
      },
    ],
    lazy: true,
    langDir: "lang",
    defaultLocale: "ru",
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
  },
  app: {
    baseURL: '/service/' // baseURL: '/<repository>/'
  }
});
