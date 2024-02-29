function open(el) {
  el.setAttribute('aria-expanded', true);
}

function close(el) {
  el.setAttribute('aria-expanded', false);
}

function toggle(el) {
  const isExpanded = el.getAttribute('aria-expanded') === 'true';
  if (isExpanded) {
    close(el);
  } else {
    open(el);
  }
}

function addListeners(context = document) {
  const buttons = context.querySelectorAll(`
    .wp-block-genero-button-popup__button[aria-controls],
    .wp-block-genero-button-popup__popup__close-button[aria-controls]
  `);

  for (const button of buttons) {
    if (button.dataset.gbpInited) {
      continue;
    }
    button.dataset.gbpInited = true;
    button.addEventListener('click', () => {
      const target = document.getElementById(button.getAttribute('aria-controls'));
      toggle(target);
    });
  }

  const popups = context.querySelectorAll('.wp-block-genero-button-popup__popup');
  for (const popup of popups) {
    if (popup.dataset.gbpInited) {
      continue;
    }
    popup.dataset.gbpInited = true;
    document.body.appendChild(popup);
    popup.addEventListener('click', (e) => {
      if (e.target !== popup) {
        return;
      }
      popup
        .querySelector('.wp-block-genero-button-popup__popup__close-button[aria-controls]')
        .click();
    })
  }
}

// Expose global
window.gbpAddListeners = addListeners;

if (document.readyState === 'complete') {
  addListeners();
} else {
  document.addEventListener('DOMContentLoaded', () => addListeners());
}
