// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
    link: [
    { rel: "stylesheet", href:
    "https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" }
    ],
    }
    },

  devtools: { enabled: true },
  modules:["@nuxtjs/tailwindcss", "@vite-pwa/nuxt"],

  tailwindcss: {
  cssPath: "~/assets/css/tailwind.css",
  configPath: "~/tailwind.config.ts",
  },

pwa: {
  manifest: {
    name: "smkcoding",
    short_name: "smkcoding",
    theme_color: "#fff",
    background_color: "#fff",
    display: "standalone",
    orientation: "portrait",
    scope: "/",
    start_url: "/",
    icons: [
      {
        src: "images/icons/icon-96x96.png",
        sizes: "96x96",
        type: "image/png"
      },
      {
        src: "images/icons/icon-128x128.png",
        sizes: "128x128",
        type: "image/png"
      }
    ]
  }
}
})