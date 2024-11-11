<script lang="ts" setup>
import type { MediaConfig } from "~/types/app";

const { apps } = useAppConfig() as MediaConfig;
</script>

<template>
  <div class="flex gap-3 p-3">
    <NuxtLink
      v-for="app of apps"
      :key="app.name"
      v-slot="{ navigate }"
      :to="app.path"
      custom
    >
      <div class="size-20 rounded-lg bg-accent p-3" @click="navigate">
        <img :src="app.icon" alt="Logo" class="size-full" />
      </div>
    </NuxtLink>
  </div>
</template>
