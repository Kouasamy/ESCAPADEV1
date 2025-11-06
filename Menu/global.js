document.addEventListener('DOMContentLoaded', () => {
  const baseImage = document.querySelector('.image-container img:not(.image-transition-layer)');
  const transitionLayer = document.querySelector('.image-transition-layer');
  const navItems = document.querySelectorAll('.nav-item');
  const closeButton = document.querySelector('.menu-close-button');
  const closeButtonIcon = closeButton ? closeButton.querySelector('img') : null;
  const menuContainer = document.querySelector('.menu-container');

  if (!baseImage || !transitionLayer || !navItems.length) return;

  const originalSrc = baseImage.getAttribute('src');

  navItems.forEach((item) => {
    const hoverSrc = item.getAttribute('data-image');
    if (!hoverSrc) return;

    item.addEventListener('mouseenter', () => {
      // Prepare transition layer
      transitionLayer.setAttribute('src', hoverSrc);
      transitionLayer.classList.add('is-visible');
    });

    item.addEventListener('mouseleave', () => {
      // Crossfade back to original
      transitionLayer.addEventListener('transitionend', function handle() {
        transitionLayer.classList.remove('is-visible');
        transitionLayer.removeEventListener('transitionend', handle);
      });
      baseImage.setAttribute('src', originalSrc);
    });
  });

  if (closeButton && menuContainer) {
    const runClose = (e) => {
      e.preventDefault();
      if (closeButtonIcon) closeButtonIcon.classList.add('is-closing');
      menuContainer.classList.add('is-closing');
      // After animation, fully hide and disable interactions
      setTimeout(() => {
        menuContainer.classList.remove('is-closing');
        menuContainer.classList.add('is-hidden');
        if (closeButtonIcon) closeButtonIcon.classList.remove('is-closing');
      }, 300);
    };

    closeButton.addEventListener('click', runClose);
    if (closeButtonIcon) closeButtonIcon.addEventListener('click', runClose);
  }
});