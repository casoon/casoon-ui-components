/**
 * casoon-ui-components
 * 
 * Eine Bibliothek mit UI-Komponenten basierend auf Lit, mit Astro-Wrappern.
 * Version: 0.1.2-alpha.0
 * 
 * @module casoon-ui-components
 */

// Importiere Typdeklarationen
import './types/global';

// Exportiere alle Web-Komponenten
export * from './web-components';

// Re-exportiere Arten von Komponenten
export const componentTypes = {
  WEB_COMPONENT: 'web-component',
  ASTRO_COMPONENT: 'astro-component'
};

// Informationen zur Bibliothek
export const version = '0.1.2-alpha.0';
export const author = 'CASOON';

// Hilfsfunktion zur Erkennung der Umgebung
export function isAstroEnvironment(): boolean {
  return typeof window !== 'undefined' && 
         'Astro' in window;
}

// Automatische Registrierung aller Web-Komponenten
import './web-components'; 