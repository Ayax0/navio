<script lang="ts" setup>
import { ConfigProvider } from "radix-vue";
const useIdFunction = () => useId() || "";
</script>

<template>
  <NuxtPwaManifest />
  <ConfigProvider :use-id="useIdFunction">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </ConfigProvider>
</template>
