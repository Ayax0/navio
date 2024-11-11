<script lang="ts" setup>
import { format } from "date-fns";
</script>

<template>
  <div>{{ format(new Date(), "dddd") }}</div>
</template>
