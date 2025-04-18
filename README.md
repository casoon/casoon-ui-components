# Casoon UI Components

Eine Bibliothek mit UI-Komponenten basierend auf Lit, mit Astro-Wrappern.

## Installation

```bash
npm install casoon-ui-components
```

## Verwendung

### Einzelne Komponenten importieren

Für optimale Paketgrößen können Sie Komponenten einzeln importieren:

```js
// Web-Komponente direkt importieren
import { BaseCard } from 'casoon-ui-components/web-components';
```

### Astro-Komponenten

```astro
---
// Astro-Komponente importieren
import { FeatureCard } from 'casoon-ui-components/astro/FeatureCard.astro';
---

<FeatureCard 
  title="Mein Feature" 
  description="Beschreibung des Features"
  icon="🌟"
/>
```

## Verfügbare Komponenten

### Web-Komponenten

| Name | Beschreibung | Import |
|------|-------------|--------|
| `BaseCard` | Basis-Kartenelement | `import { BaseCard } from 'casoon-ui-components/web-components';` |
| `FeatureCard` | Erweiterte Karte für Features | `import { FeatureCard } from 'casoon-ui-components/web-components';` |
| `Preloader` | Animierter Preloader | `import { Preloader } from 'casoon-ui-components/web-components';` |

### Astro-Komponenten

| Name | Beschreibung | Import |
|------|-------------|--------|
| `FeatureCard.astro` | Astro-Version der Feature-Karte | `import { FeatureCard } from 'casoon-ui-components/astro/FeatureCard.astro';` |

## Hilfsfunktionen

```js
// Komponenten-Registry und dynamisches Laden
import { componentRegistry, loadComponent } from 'casoon-ui-components/web-components';

// Version der Bibliothek
import { version } from 'casoon-ui-components';
console.log(`Casoon UI Components Version: ${version}`);
```

## Lizenz

MIT 