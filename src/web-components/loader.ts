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

// Komponentennamen aus Dateinamen generieren
function getComponentName(fileName: string): string {
  return fileName
    .replace('.ts', '')
    .split('/')
    .pop()!
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase();
}

// Dynamisches Laden von Komponenten
export async function loadComponent(componentPath: string): Promise<void> {
  try {
    const module = await import(componentPath);
    const componentClass = module.default;
    
    if (componentClass && typeof componentClass === 'function') {
      const componentName = getComponentName(componentPath);
      registerComponent(componentName, componentClass);
    }
  } catch (error) {
    console.warn(`Fehler beim Laden der Komponente ${componentPath}:`, error);
  }
}

// Basis-Komponenten registrieren
registerComponent('base-card', BaseCard);
registerComponent('feature-card', FeatureCard);

// Export für dynamisches Laden
export { componentRegistry }; 