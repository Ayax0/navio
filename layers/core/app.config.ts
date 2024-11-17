export default defineAppConfig({
  apps: [],
});

interface NavioAppConfig extends Record<string, unknown> {
  name: string;
  path: string;
  icon: string;
}

declare module "@nuxt/schema" {
  interface AppConfigInput {
    apps: NavioAppConfig[];
  }
}
