export interface MediaConfig extends Record<string, unknown> {
  apps: MediaAppConfig[];
}

interface MediaAppConfig extends Record<string, unknown> {
  name: string;
  path: string;
  icon: string;
}
