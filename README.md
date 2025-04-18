# Casoon UI Components

Eine Bibliothek mit UI-Komponenten basierend auf Lit, mit Astro-Wrappern.

## Installation

```bash
npm install casoon-ui-components
```

## Verwendung

### 1. In Bundler-basierten Projekten (Vite, Webpack, Rollup)

Komponenten können direkt über ihre Paketnamen importiert werden:

```js
// Web-Komponente in einer JS/TS-Datei importieren
import { BaseCard } from 'casoon-ui-components/web-components';

// Nur eine einzelne Komponente importieren
import { FeatureCard } from 'casoon-ui-components/web-components/FeatureCard';
```

### 2. In Astro-Projekten

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

### 3. Direkt im Browser (ESM)

Für die direkte Verwendung im Browser müssen Sie den genauen relativen Pfad zur Komponente angeben oder einen Import-Map verwenden:

```html
<script type="importmap">
{
  "imports": {
    "casoon-ui-components/": "/node_modules/casoon-ui-components/dist/",
    "lit": "/node_modules/lit/index.js",
    "lit/": "/node_modules/lit/"
  }
}
</script>

<script type="module">
  // Mit Import Map
  import { BaseCard } from 'casoon-ui-components/web-components/index.js';
  
  // Alternativ mit relativem Pfad
  // import { BaseCard } from './node_modules/casoon-ui-components/dist/web-components/index.js';
</script>
```

## Verfügbare Komponenten

### Web-Komponenten

| Name | Beschreibung | Import (Bundler) | Import (Browser) |
|------|-------------|--------|--------|
| `BaseCard` | Basis-Kartenelement | `import { BaseCard } from 'casoon-ui-components/web-components';` | `import { BaseCard } from 'casoon-ui-components/web-components/index.js';` |
| `FeatureCard` | Erweiterte Karte für Features | `import { FeatureCard } from 'casoon-ui-components/web-components';` | `import { FeatureCard } from 'casoon-ui-components/web-components/index.js';` |
| `Preloader` | Animierter Preloader | `import { Preloader } from 'casoon-ui-components/web-components';` | `import { Preloader } from 'casoon-ui-components/web-components/index.js';` |

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