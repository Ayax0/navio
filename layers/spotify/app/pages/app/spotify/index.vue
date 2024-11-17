<script lang="ts" setup>
defineAudioPlayer({
  appId: "app-spotify",
  async init() {
    const spotify = await load();
  },
  async destroy() {
    await remove();
  },
});

const { load, remove } = useScript("https://sdk.scdn.co/spotify-player.js", {
  use: () => window.Spotify,
  trigger: "manual",
  beforeInit() {
    if (!import.meta.client) return;
    window.onSpotifyWebPlaybackSDKReady = () => console.log("spotify ready");
  },
});

onLoaded(({ Player }) => {
  const player = new Player({
    name: "Web Playback SDK",
    getOAuthToken(cb) {
      cb("test");
    },
    volume: 0.5,
  });

  console.log(player);
});
</script>

<template>
  <h1>Spotify</h1>
  <Button @click="remove">Test</Button>
</template>
