// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  future: { compatibilityVersion: 4 },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "shadcn-nuxt"],
  shadcn: {
    prefix: "",
    componentDir: join(currentDir, "./app/components/ui"),
  },
  colorMode: {
    classSuffix: "",
    preference: "dark",
  },
  tailwindcss: {
    cssPath: join(currentDir, "./app/assets/css/tailwind.css"),
  },
});
