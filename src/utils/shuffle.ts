/*--------------------------------------------------
Function Shuffle Elements Function
---------------------------------------------------*/
function ShuffleElementsFunction() {
  function shuffle<T>(o: T[]): T[] {
    for (let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }

  function shuffleText(
    element: HTMLElement, 
    originalText: string, 
    settings: { velocity: number; shuffleIterations: number }
  ) {
    const elementTextArray = Array.from(originalText);
    const shuffleTimeouts: ReturnType<typeof setTimeout>[] = [];

    const repeatShuffle = function(times: number, index: number) {
      if (index === times) {
        element.innerText = originalText;
        return;
      }

      const timeout = setTimeout(function() {
        const randomTextArray = shuffle(elementTextArray.slice());
        element.innerText = randomTextArray.join('');
        index++;
        repeatShuffle(times, index);
      }, settings.velocity);
      shuffleTimeouts.push(timeout);
    }

    return {
      start: function() {
        shuffleTimeouts.forEach(function(timeout) {
          clearTimeout(timeout);
        });
        shuffleTimeouts.length = 0;
        repeatShuffle(settings.shuffleIterations, 1);
      },
      stop: function() {
        shuffleTimeouts.forEach(function(timeout) {
          clearTimeout(timeout);
        });
        shuffleTimeouts.length = 0;
        element.innerText = originalText;
      }
    };
  }

  function startShuffle(
    selector: string | Element, 
    options: { velocity: number; shuffleIterations: number }
  ) {
    const elements = typeof selector === 'string' 
      ? document.querySelectorAll(selector) 
      : [selector];
      
    elements.forEach(function(shuffleElement) {
      if (shuffleElement instanceof HTMLElement) {
        const originalText = shuffleElement.getAttribute('data-text') || shuffleElement.innerText;
        shuffleElement.setAttribute('data-text', originalText);
        const shuffleActions = shuffleText(shuffleElement, originalText, options);
        shuffleActions.start();
      }
    });
  }

  function stopShuffle(
    selector: string | Element, 
    options: { velocity: number; shuffleIterations: number }
  ) {
    const elements = typeof selector === 'string' 
      ? document.querySelectorAll(selector) 
      : [selector];
      
    elements.forEach(function(shuffleElement) {
      if (shuffleElement instanceof HTMLElement) {
        const originalText = shuffleElement.getAttribute('data-text') || '';
        const shuffleActions = shuffleText(shuffleElement, originalText, options);
        shuffleActions.stop();
      }
    });
  }

  function applyShuffleEffect(
    selector: string, 
    options: { velocity: number; shuffleIterations: number; childSelector: string }
  ) {
    const defaults = {
      velocity: 40,
      shuffleIterations: 6,
      childSelector: 'span'
    };

    const settings = Object.assign({}, defaults, options);

    const elements = document.querySelectorAll(selector);
    elements.forEach(function(parentHover) {
      const shuffleElements = parentHover.querySelectorAll(settings.childSelector);

      shuffleElements.forEach(function(shuffleElement) {
        if (shuffleElement instanceof HTMLElement) {
          shuffleElement.setAttribute('data-text', shuffleElement.innerText);
          const originalText = shuffleElement.getAttribute('data-text') || '';

          const shuffleActions = shuffleText(shuffleElement, originalText, {
            velocity: settings.velocity,
            shuffleIterations: settings.shuffleIterations
          });

          parentHover.addEventListener('mouseenter', function() {
            shuffleActions.start();
          });

          parentHover.addEventListener('mouseleave', function() {
            shuffleActions.stop();
          });
        }
      });
    });
  }

  return {
    startShuffle,
    stopShuffle,
    applyShuffleEffect
  };
}

export const shuffleFunctions = ShuffleElementsFunction(); 