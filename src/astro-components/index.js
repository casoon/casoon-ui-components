// Dieser Index exportiert alle Astro-Komponenten für einfachere Imports
// Da Astro-Komponenten direkt importiert werden müssen, können wir hier nur
// einen Hinweis für die Dokumentation bereitstellen.

/**
 * Astro-Komponenten für casoon-ui-components
 * 
 * Um eine Komponente zu verwenden, importieren Sie sie direkt:
 * ```astro
 * ---
 * import { FeatureCard } from 'casoon-ui-components/astro/FeatureCard.astro';
 * ---
 * 
 * <FeatureCard icon="🌟" title="Mein Feature" description="Beschreibung" />
 * ```
 */

// Dieser Export ist nur für TypeScript-Unterstützung und wird zur Laufzeit nicht verwendet
export const components = [
  'FeatureCard.astro',
  // Weitere Komponenten hier auflisten
];

// Stellt sicher, dass die Web-Komponenten für die Astro-Komponenten geladen werden
import '../web-components'; 