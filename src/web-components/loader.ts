import { BaseCard } from './BaseCard';
import { FeatureCard } from './FeatureCard';

// Registry für alle Komponenten
const componentRegistry = new Map<string, CustomElementConstructor>();

// Komponenten registrieren
function registerComponent(name: string, constructor: CustomElementConstructor) {
  if (!customElements.get(name)) {
    customElements.define(name, constructor);
    componentRegistry.set(name, constructor);
  }
}

// Alle Komponenten automatisch registrieren
export function registerComponents() {
  // Basis-Komponenten
  registerComponent('base-card', BaseCard);
  registerComponent('feature-card', FeatureCard);

  // Dynamisches Laden zukünftiger Komponenten
  const context = import.meta.glob('./**/*.ts', { eager: true });
  
  Object.entries(context).forEach(([path, module]) => {
    if (path === './loader.ts' || path === './index.ts') return;
    
    const componentName = path
      .replace('./', '')
      .replace('.ts', '')
      .split('/')
      .map(part => part.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase())
      .join('-');
    
    const componentClass = (module as any).default;
    if (componentClass && typeof componentClass === 'function') {
      registerComponent(componentName, componentClass);
    }
  });
}

// Automatische Registrierung beim Import
registerComponents(); 