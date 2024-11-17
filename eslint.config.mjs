// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import tailwind from "eslint-plugin-tailwindcss";
import prettierRecommended from "eslint-plugin-prettier/recommended";

export default withNuxt([
  {
    ignores: ["app/components/ui/*"],
  },
  {
    rules: {
      "new-cap": "off",
      "no-console": "off",
      "vue/no-multiple-template-root": "off",
    },
  },
  {
    files: ["**/layouts/*.vue", "**/pages/**/*.vue"],
    rules: { "vue/multi-word-component-names": "off" },
  },
  ...tailwind.configs["flat/recommended"],
  prettierRecommended,
]);
