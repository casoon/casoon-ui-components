import { LitElement, html, css } from 'lit';
import { customElement, property, eventOptions } from 'lit/decorators.js';
import 'casoon-ui-lib';

interface CardEventDetail {
  cardId: string;
  timestamp: number;
}

@customElement('base-card')
export class BaseCard extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    
    .card {
      border-radius: var(--casoon-border-radius);
      box-shadow: var(--casoon-shadow);
      padding: var(--casoon-spacing);
      background: var(--casoon-background);
    }
  `;

  @property({ type: String })
  title = '';

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Number })
  elevation = 1;

  @property({ type: String, attribute: 'card-id' })
  cardId = '';

  createRenderRoot() {
    return this; // kein Shadow DOM
  }

  @eventOptions({ passive: true })
  private handleClick(_event: MouseEvent) {
    if (this.disabled) return;
    
    const detail: CardEventDetail = {
      cardId: this.cardId,
      timestamp: Date.now()
    };
    
    this.dispatchEvent(new CustomEvent<CardEventDetail>('card-click', {
      detail,
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div 
        class="card"
        @click=${this.handleClick}
        part="card"
      >
        <slot></slot>
      </div>
    `;
  }
} 