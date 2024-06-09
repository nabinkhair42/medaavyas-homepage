declare module 'canvas-confetti' {
  interface Options {
    angle?: number;
    spread?: number;
    startVelocity?: number;
    particleCount?: number;
    origin?: { x?: number; y?: number };
    colors?: string[];
    shapes?: string[];
    zIndex?: number;
    disableForReducedMotion?: boolean;
    scalar?: number;
    drift?: number;
    ticks?: number;
    gravity?: number;
    decay?: number;
  }

  function confetti(options?: Options): void;

  export = confetti;
}
