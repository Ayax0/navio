interface AudioPlayer {
    init: () => void | Promise<void>;
    destroy: () => void | Promise<void>;
    play: () => void | Promise<void>;
    pause: () => void | Promise<void>;
    next: () => void | Promise<void>;
    previous: () => void | Promise<void>;
    seek: () => void | Promise<void>;
    status: Ref<"idle" | "playing" | "paused">;
}

export default function(cb: () => AudioPlayer) {
    return cb();
}