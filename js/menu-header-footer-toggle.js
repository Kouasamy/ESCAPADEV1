// Script pour gérer le menu avec hide/show du header et footer
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('openMenu') || document.querySelector('.menu-button');
  const menuContainer = document.querySelector('.menu-container');
  const closeButton = document.querySelector('.menu-close-button');
  
  // Éléments à cacher quand le menu est ouvert
  const header = document.querySelector('.hero-header') || document.querySelector('.site-header');
  const headerInner = document.querySelector('.site-header__inner');
  const footer = document.querySelector('.hero-footer');
  const contactBtn = document.querySelector('.hero-footer .contact-btn') || document.querySelector('.btn-wrapper.contact-btn') || document.getElementById('contactFab');
  const reserveSpaceBtn = document.querySelector('.btn-wrapper.btn-reserve-space-mobile');

  function hideHeaderAndFooter() {
    if (header) header.classList.add('scroll-hide');
    if (headerInner) headerInner.classList.add('scroll-hide');
    if (footer) footer.classList.add('scroll-hide');
    if (contactBtn) contactBtn.classList.add('scroll-hide');
    if (reserveSpaceBtn) reserveSpaceBtn.classList.add('scroll-hide');
  }

  function showHeaderAndFooter() {
    if (header) header.classList.remove('scroll-hide');
    if (headerInner) headerInner.classList.remove('scroll-hide');
    if (footer) footer.classList.remove('scroll-hide');
    if (contactBtn) contactBtn.classList.remove('scroll-hide');
    if (reserveSpaceBtn) reserveSpaceBtn.classList.remove('scroll-hide');
  }

  if (menuButton && menuContainer) {
    menuButton.addEventListener('click', () => {
      menuContainer.classList.remove('is-hidden');
      menuContainer.style.pointerEvents = 'auto';
      // Cacher le header et le footer quand le menu s'ouvre
      hideHeaderAndFooter();
    });
  }

  if (closeButton && menuContainer) {
    closeButton.addEventListener('click', (e) => {
      e.preventDefault();
      menuContainer.classList.add('is-closing');
      // Réafficher le header et le footer quand le menu se ferme
      showHeaderAndFooter();
      setTimeout(() => {
        menuContainer.classList.remove('is-closing');
        menuContainer.classList.add('is-hidden');
        menuContainer.style.pointerEvents = 'none';
      }, 300);
    });
  }
  
  // Écouter aussi les clics sur l'icône de fermeture dans Menu/global.js
  // Pour être sûr que ça fonctionne même si global.js se charge après
  const closeButtonIcon = closeButton ? closeButton.querySelector('img') : null;
  if (closeButtonIcon) {
    closeButtonIcon.addEventListener('click', (e) => {
      showHeaderAndFooter();
    });
  }
});








