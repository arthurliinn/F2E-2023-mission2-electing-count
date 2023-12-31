// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    // SCSS file in the project
    "~/assets/scss/main.scss", // you should add main.scss somewhere in your app
  ],
  buildModules: ['@nuxtjs/google-fonts'],

  googleFonts: {
    families: {
      Roboto: true,
    },
  },
  vite:{
    css:{
      preprocessorOptions:{
        scss:{
          additionalData:'@use "@/assets/scss/base/variables.scss" as *;',
        },
      },
    },
  },
});
