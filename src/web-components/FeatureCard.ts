import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseCard } from './BaseCard';
import 'casoon-ui-lib';

@customElement('feature-card')
export class FeatureCard extends BaseCard {
  static styles = [
    BaseCard.styles,
    css`
      .feature-card {
        display: flex;
        flex-direction: column;
        gap: var(--casoon-spacing);
      }
      
      .feature-icon {
        font-size: 2rem;
        color: var(--casoon-primary);
      }
      
      .feature-title {
        font-size: 1.25rem;
        font-weight: bold;
        color: var(--casoon-text);
      }
      
      .feature-description {
        color: var(--casoon-text-secondary);
      }
    `
  ];

  @property()
  icon = '';

  @property()
  title = '';

  @property()
  description = '';

  render() {
    return html`
      <div class="feature-card">
        <div class="feature-icon">${this.icon}</div>
        <h3 class="feature-title">${this.title}</h3>
        <p class="feature-description">${this.description}</p>
        <slot></slot>
      </div>
    `;
  }
} 