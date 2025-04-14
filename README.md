# Casoon UI Components

Eine UI-Komponenten-Bibliothek basierend auf Lit mit Astro-Wrappern, die das Casoon UI Design System verwendet.

> ⚠️ **Wichtiger Hinweis**: Diese Bibliothek befindet sich aktuell in der Alpha-Phase (Version 0.1.2-alpha.0). Die API und Funktionalitäten können sich noch ändern. Bitte beachten Sie dies bei der Verwendung in Produktionsumgebungen.

## Installation

```bash
npm install casoon-ui-components
```

## Verwendung

### Lit Komponenten (Kernkomponenten)

Die Bibliothek stellt Web Components basierend auf Lit zur Verfügung:

```typescript
import { FeatureCard } from 'casoon-ui-components';

// In Ihrer Lit-Komponente
render() {
  return html`
    <feature-card
      icon="🌟"
      title="Mein Feature"
      description="Eine tolle Beschreibung"
    >
      Zusätzlicher Inhalt
    </feature-card>
  `;
}
```

### Astro Wrapper

Für Astro-Projekte stehen zusätzlich Wrapper-Komponenten zur Verfügung:

```astro
---
import { FeatureCard } from 'casoon-ui-components/astro';
---

<FeatureCard
  icon="🌟"
  title="Mein Feature"
  description="Eine tolle Beschreibung"
>
  Zusätzlicher Inhalt
</FeatureCard>
```

## Komponenten

### BaseCard
Die Basis-Karten-Komponente mit grundlegendem Layout und Styling.

### FeatureCard
Eine spezialisierte Karten-Komponente für Features mit Icon, Titel und Beschreibung.

## Styling
Alle Komponenten verwenden das Casoon UI Design System über die `casoon-ui-lib`. Die Komponenten nutzen CSS-Variablen für das Styling:

- `--casoon-border-radius`
- `--casoon-shadow`
- `--casoon-spacing`
- `--casoon-background`
- `--casoon-primary`
- `--casoon-text`
- `--casoon-text-secondary`

## Entwicklung

```bash
# Installation der Abhängigkeiten
npm install

# Entwicklung
npm run dev

# Build
npm run build
``` 