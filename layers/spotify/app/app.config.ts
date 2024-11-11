import type { MediaConfig } from "~/types/app";

export default defineAppConfig<MediaConfig>({
  apps: [
    {
      name: "Spotify",
      path: "/app/spotify",
      icon: "/spotify.svg",
    },
  ],
});
