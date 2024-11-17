<script lang="ts" setup>
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
