/**
 * Globale Typdeklarationen für casoon-ui-components
 */

// Astro-Umgebung
interface Window {
  Astro?: {
    [key: string]: any;
  };
}

// Shuffle-Funktionen
declare module '../utils/shuffle' {
  export const shuffleFunctions: {
    startShuffle: (
      selector: string | Element, 
      options: { velocity: number; shuffleIterations: number }
    ) => void;
    stopShuffle: (
      selector: string | Element, 
      options: { velocity: number; shuffleIterations: number }
    ) => void;
    applyShuffleEffect: (
      selector: string, 
      options: { velocity: number; shuffleIterations: number; childSelector: string }
    ) => void;
  };
}

// Erweiterung für casoon-ui-lib CSS-Variablen
declare module 'casoon-ui-lib' {
  export interface CasoonUITheme {
    '--animation-duration-fastest': string;
    '--animation-duration-fast': string;
    '--animation-duration-normal': string;
    '--animation-duration-slow': string;
    '--animation-duration-slower': string;
    '--animation-duration-slowest': string;
    '--ease-linear': string;
    '--ease-in': string;
    '--ease-out': string;
    '--ease-in-out': string;
    '--ease-in-cubic': string;
    '--ease-out-cubic': string;
    '--ease-in-out-cubic': string;
    '--ease-bounce': string;
    '--color-text': string;
    '--color-primary': string;
    '--font-heading': string;
  }
} 