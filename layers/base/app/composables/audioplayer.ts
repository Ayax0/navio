export interface AudioPlayerConfig {
  appId: string;
  init: () => void | Promise<void>;
  destroy: () => void | Promise<void>;
  play: () => void | Promise<void>;
  next: () => void | Promise<void>;
  previous: () => void | Promise<void>;
}

export interface AudioPlayer extends AudioPlayerConfig {
  status: Ref<"idle" | "playing" | "paused">;
}

let player: AudioPlayer | undefined;

export function defineAudioPlayer(config: AudioPlayerConfig) {
  if (player) {
    if (player.appId === config.appId) return player;
    if (player.status.value === "playing") player.play();
    player.destroy();
  }

  player = {
    ...config,
    status: ref("idle"),
  };

  return player;
}

export function useAudioPlayer() {
  return player;
}
