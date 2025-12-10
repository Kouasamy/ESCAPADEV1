document.addEventListener('DOMContentLoaded', () => {
  const baseImage = document.querySelector('.image-container img:not(.image-transition-layer)');
  const transitionLayer = document.querySelector('.image-transition-layer');
  const navItems = document.querySelectorAll('.nav-item');
  const closeButton = document.querySelector('.menu-close-button');
  const closeButtonIcon = closeButton ? closeButton.querySelector('img') : null;
  const menuContainer = document.querySelector('.menu-container');

  if (!baseImage || !transitionLayer || !navItems.length) return;

  const originalSrc = baseImage.getAttribute('src');
  
  // Précharger toutes les images du menu pour améliorer les performances
  const preloadedImages = new Map();
  navItems.forEach((item) => {
    const hoverSrc = item.getAttribute('data-image');
    if (!hoverSrc) return;
    
    // Précharger l'image en arrière-plan
    const img = new Image();
    img.src = hoverSrc;
    preloadedImages.set(hoverSrc, img);
  });

  navItems.forEach((item) => {
    const hoverSrc = item.getAttribute('data-image');
    if (!hoverSrc) return;

    item.addEventListener('mouseenter', () => {
      // L'image est déjà préchargée, on peut l'utiliser directement
      const preloadedImg = preloadedImages.get(hoverSrc);
      if (preloadedImg && preloadedImg.complete) {
        transitionLayer.setAttribute('src', hoverSrc);
        transitionLayer.classList.add('is-visible');
      } else {
        // Si pas encore chargée, on charge normalement
        transitionLayer.setAttribute('src', hoverSrc);
        transitionLayer.classList.add('is-visible');
      }
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
      
      // Réafficher le header et le footer quand le menu se ferme
      const header = document.querySelector('.hero-header') || document.querySelector('.site-header');
      const headerInner = document.querySelector('.site-header__inner');
      const footer = document.querySelector('.hero-footer');
      const contactBtn = document.querySelector('.hero-footer .contact-btn') || document.querySelector('.btn-wrapper.contact-btn');
      const reserveSpaceBtn = document.querySelector('.btn-wrapper.btn-reserve-space-mobile');
      
      if (header) header.classList.remove('scroll-hide');
      if (headerInner) headerInner.classList.remove('scroll-hide');
      if (footer) footer.classList.remove('scroll-hide');
      if (contactBtn) contactBtn.classList.remove('scroll-hide');
      if (reserveSpaceBtn) reserveSpaceBtn.classList.remove('scroll-hide');
      
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
  
  // Cacher le header et le footer quand le menu s'ouvre (si ouvert depuis un autre script)
  const menuButton = document.querySelector('.menu-button');
  if (menuButton && menuContainer) {
    menuButton.addEventListener('click', () => {
      const header = document.querySelector('.hero-header') || document.querySelector('.site-header');
      const headerInner = document.querySelector('.site-header__inner');
      const footer = document.querySelector('.hero-footer');
      const contactBtn = document.querySelector('.hero-footer .contact-btn') || document.querySelector('.btn-wrapper.contact-btn');
      const reserveSpaceBtn = document.querySelector('.btn-wrapper.btn-reserve-space-mobile');
      
      if (header) header.classList.add('scroll-hide');
      if (headerInner) headerInner.classList.add('scroll-hide');
      if (footer) footer.classList.add('scroll-hide');
      if (contactBtn) contactBtn.classList.add('scroll-hide');
      if (reserveSpaceBtn) reserveSpaceBtn.classList.add('scroll-hide');
    });
  }
});