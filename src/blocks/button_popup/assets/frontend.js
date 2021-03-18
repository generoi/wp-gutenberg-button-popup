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

const buttons = document.querySelectorAll(`
  .wp-block-genero-button-popup__button[aria-controls],
  .wp-block-genero-button-popup__popup__close-button[aria-controls]
`);
for (const button of buttons) {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.getAttribute('aria-controls'));
    toggle(target);
  });
}

const popups = document.querySelectorAll('.wp-block-genero-button-popup__popup');
for (const popup of popups) {
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
