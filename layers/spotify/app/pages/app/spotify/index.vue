<script lang="ts" setup>
defineAudioPlayer({});

const { remove, onLoaded } = useScript(
  "https://sdk.scdn.co/spotify-player.js",
  {
    use: () => window.Spotify,
  }
);

if (import.meta.client)
  window.onSpotifyWebPlaybackSDKReady = () => {
    console.log("spotify ready");
  };

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
