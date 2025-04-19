/**
 * casoon-ui-components
 * 
 * Eine Bibliothek mit UI-Komponenten basierend auf Lit, mit Astro-Wrappern.
 * 
 * @module casoon-ui-components
 */

// Importiere Typdeklarationen
import './types/global';

// Importiere die Version aus der generierten Datei
import { version } from './version';

// Exportiere die Version
export { version };

// Re-exportiere Arten von Komponenten
export const componentTypes = {
  WEB_COMPONENT: 'web-component',
  ASTRO_COMPONENT: 'astro-component'
};

export const author = 'CASOON';

// Hilfsfunktion zur Erkennung der Umgebung
export function isAstroEnvironment(): boolean {
  return typeof window !== 'undefined' && 
         'Astro' in window;
} 