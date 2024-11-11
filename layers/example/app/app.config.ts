import type { MediaConfig } from "~/types/app";

export default defineAppConfig<MediaConfig>({
  apps: [
    {
      name: "example",
      path: "/app/example",
      icon: "/example-app.svg",
    },
  ],
});
