declare module "canvas-confetti" {
  export interface Options {
    particleCount?: number;
    angle?: number;
    spread?: number;
    startVelocity?: number;
    decay?: number;
    gravity?: number;
    drift?: number;
    flat?: boolean;
    ticks?: number;
    origin?: { x: number; y: number };
    colors?: string[];
    shapes?: string[];
    zIndex?: number;
    scalar?: number;
  }

  export interface CreateConfettiOptions {
    resize?: boolean;
    useWorker?: boolean;
  }

  export interface ConfettiInstance {
    (options?: Options): void;
    reset(): void;
  }

  interface Confetti {
    (options?: Options): void;
    create(canvas: HTMLCanvasElement, options?: CreateConfettiOptions): ConfettiInstance;
    shapeFromPath(options: { path: string; [key: string]: any }): any;
    shapeFromText(options: { text: string; [key: string]: any }): any;
  }

  const confetti: Confetti;
  export default confetti;
}
