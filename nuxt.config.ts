// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  future: { compatibilityVersion: 4 },
  modules: ["@nuxt/eslint", "@vite-pwa/nuxt"],
  pwa: {
    manifest: {
      name: "navio",
      short_name: "navio",
      theme_color: "#e9560c",
      background_color: "#0c0a09",
      display: "standalone",
      start_url: "/",
      icons: [
        {
          src: "pwa-64x64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "maskable-icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
  },
});
