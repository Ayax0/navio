// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from "nuxt/kit";
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "shadcn-nuxt"],
  alias: { "@": resolve("./") },
  shadcn: {
    prefix: "",
    componentDir: resolve("./app/components/ui"),
  },
  colorMode: {
    classSuffix: "",
    preference: "dark",
  },
  tailwindcss: {
    cssPath: resolve("./app/assets/css/tailwind.css"),
  },
});
