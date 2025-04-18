import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { shuffleFunctions } from '../utils/shuffle';
import 'casoon-ui-lib';

@customElement('casoonpreloader')
export class Preloader extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    
    .preloader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      transition-property: transform;
      transition-duration: var(--animation-duration-slow, 500ms);
      transition-timing-function: var(--ease-in-out-cubic, cubic-bezier(0.645, 0.045, 0.355, 1));
    }

    .preloader-content {
      text-align: center;
    }
    
    .preloader-text {
      font-family: var(--font-heading, system-ui);
      font-size: clamp(2rem, 8vw, 4rem);
      font-weight: 600;
      color: var(--color-text, #111827);
      height: 1.2em;
      margin-bottom: 2rem;
      opacity: 0;
      transition-property: opacity;
      transition-duration: var(--animation-duration-normal, 300ms);
      transition-timing-function: var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
    }

    .progress-container {
      width: 300px;
      height: 2px;
      background: rgba(17, 24, 39, 0.1);
      border-radius: 1px;
      overflow: hidden;
      opacity: 0;
      margin: 0 auto;
      transition-property: opacity;
      transition-duration: var(--animation-duration-normal, 300ms);
      transition-timing-function: var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
    }

    .progress-bar {
      width: 0%;
      height: 100%;
      background: var(--color-primary, #111827);
      transition-property: width;
      transition-duration: var(--animation-duration-fast, 150ms);
      transition-timing-function: var(--ease-out, cubic-bezier(0, 0, 0.2, 1));
    }

    @media (max-width: 768px) {
      .preloader-text {
        font-size: clamp(1.5rem, 6vw, 2.5rem);
      }
    }
  `;

  @property({ type: Array })
  words = [
    'Innovation',
    'Kreativität',
    'Qualität',
    'Strategie',
    'Design',
    'Erfolg'
  ];

  @property({ type: Boolean })
  autoStart = true;

  @state()
  private currentIndex = 0;

  private preloader?: HTMLElement;
  private preloaderText?: HTMLElement;
  private progressBar?: HTMLElement;
  private progressContainer?: HTMLElement;

  firstUpdated() {
    this.preloader = this.shadowRoot?.querySelector('.preloader') as HTMLElement;
    this.preloaderText = this.shadowRoot?.querySelector('.preloader-text') as HTMLElement;
    this.progressBar = this.shadowRoot?.querySelector('.progress-bar') as HTMLElement;
    this.progressContainer = this.shadowRoot?.querySelector('.progress-container') as HTMLElement;

    // Initialize animations
    if (this.preloaderText) {
      this.preloaderText.style.opacity = '1';
    }

    if (this.progressContainer) {
      this.progressContainer.style.opacity = '1';
    }

    if (this.autoStart) {
      setTimeout(() => this.animateWords(), 500);
    }
  }

  animateWords() {
    if (this.currentIndex < this.words.length) {
      if (this.preloaderText) {
        this.preloaderText.setAttribute('data-text', this.words[this.currentIndex]);
      
        // Update progress bar
        if (this.progressBar) {
          this.progressBar.style.width = `${((this.currentIndex + 1) / this.words.length) * 100}%`;
        }
        
        shuffleFunctions.startShuffle(this.preloaderText, {
          velocity: 60,
          shuffleIterations: 8
        });

        setTimeout(() => {
          this.currentIndex++;
          if (this.currentIndex < this.words.length) {
            this.animateWords();
          } else {
            // Final animation
            setTimeout(() => {
              if (this.preloader) {
                this.preloader.style.transform = 'translateY(-100%)';
                
                setTimeout(() => {
                  this.dispatchEvent(new CustomEvent('preloader-complete', {
                    bubbles: true,
                    composed: true
                  }));
                }, 1000);
              }
            }, 400);
          }
        }, 800);
      }
    }
  }

  // Methode zum manuellen Starten der Animation
  startAnimation() {
    this.animateWords();
  }

  // Methode zum Überspringen der Animation
  skipAnimation() {
    this.currentIndex = this.words.length;
    if (this.progressBar) {
      this.progressBar.style.width = '100%';
    }
    
    if (this.preloader) {
      this.preloader.style.transform = 'translateY(-100%)';
      
      setTimeout(() => {
        this.dispatchEvent(new CustomEvent('preloader-complete', {
          bubbles: true,
          composed: true
        }));
      }, 1000);
    }
  }

  render() {
    return html`
      <div class="preloader">
        <div class="preloader-content">
          <div class="preloader-text" data-text=${this.words[0]}></div>
          <div class="progress-container">
            <div class="progress-bar"></div>
          </div>
        </div>
      </div>
    `;
  }
} 