(() => {
  'use strict';
  
  // Fonction pour cacher le header et le footer pendant le chargement
  function hideHeaderAndFooter() {
    const header = document.querySelector('.hero-header') || document.querySelector('.site-header');
    const headerInner = document.querySelector('.site-header__inner');
    const footer = document.querySelector('.hero-footer');
    const contactBtn = document.querySelector('.hero-footer .contact-btn') || document.querySelector('.btn-wrapper.contact-btn');
    const reserveSpaceBtn = document.querySelector('.btn-wrapper.btn-reserve-space-mobile');
    
    if (header) {
      header.style.opacity = '0';
      header.style.visibility = 'hidden';
      header.style.pointerEvents = 'none';
    }
    if (headerInner) {
      headerInner.style.opacity = '0';
      headerInner.style.visibility = 'hidden';
      headerInner.style.pointerEvents = 'none';
    }
    if (footer) {
      footer.style.opacity = '0';
      footer.style.visibility = 'hidden';
      footer.style.pointerEvents = 'none';
    }
    if (contactBtn) {
      contactBtn.style.opacity = '0';
      contactBtn.style.visibility = 'hidden';
      contactBtn.style.pointerEvents = 'none';
    }
    if (reserveSpaceBtn) {
      reserveSpaceBtn.style.opacity = '0';
      reserveSpaceBtn.style.visibility = 'hidden';
      reserveSpaceBtn.style.pointerEvents = 'none';
    }
  }
  
  // Fonction pour afficher le header et le footer après le chargement
  function showHeaderAndFooter() {
    const header = document.querySelector('.hero-header') || document.querySelector('.site-header');
    const headerInner = document.querySelector('.site-header__inner');
    const footer = document.querySelector('.hero-footer');
    const contactBtn = document.querySelector('.hero-footer .contact-btn') || document.querySelector('.btn-wrapper.contact-btn');
    const reserveSpaceBtn = document.querySelector('.btn-wrapper.btn-reserve-space-mobile');
    
    if (header) {
      header.style.opacity = '';
      header.style.visibility = '';
      header.style.pointerEvents = '';
      header.style.transition = 'opacity 0.5s ease, visibility 0.5s ease';
    }
    if (headerInner) {
      headerInner.style.opacity = '';
      headerInner.style.visibility = '';
      headerInner.style.pointerEvents = '';
      headerInner.style.transition = 'opacity 0.5s ease, visibility 0.5s ease';
    }
    if (footer) {
      footer.style.opacity = '';
      footer.style.visibility = '';
      footer.style.pointerEvents = '';
      footer.style.transition = 'opacity 0.5s ease, visibility 0.5s ease';
    }
    if (contactBtn) {
      contactBtn.style.opacity = '';
      contactBtn.style.visibility = '';
      contactBtn.style.pointerEvents = '';
      contactBtn.style.transition = 'opacity 0.5s ease, visibility 0.5s ease';
    }
    if (reserveSpaceBtn) {
      reserveSpaceBtn.style.opacity = '';
      reserveSpaceBtn.style.visibility = '';
      reserveSpaceBtn.style.pointerEvents = '';
      reserveSpaceBtn.style.transition = 'opacity 0.5s ease, visibility 0.5s ease';
    }
    
    // Forcer le reflow pour déclencher la transition
    if (header) header.offsetHeight;
    if (headerInner) headerInner.offsetHeight;
    if (footer) footer.offsetHeight;
    if (contactBtn) contactBtn.offsetHeight;
    if (reserveSpaceBtn) reserveSpaceBtn.offsetHeight;
    
    // Afficher avec une transition douce
    setTimeout(() => {
      if (header) {
        header.style.opacity = '1';
        header.style.visibility = 'visible';
      }
      if (headerInner) {
        headerInner.style.opacity = '1';
        headerInner.style.visibility = 'visible';
      }
      if (footer) {
        footer.style.opacity = '1';
        footer.style.visibility = 'visible';
      }
      if (contactBtn) {
        contactBtn.style.opacity = '1';
        contactBtn.style.visibility = 'visible';
      }
      if (reserveSpaceBtn) {
        reserveSpaceBtn.style.opacity = '1';
        reserveSpaceBtn.style.visibility = 'visible';
      }
    }, 50);
  }
  
  const initLoader = () => {
    const loader = document.getElementById('page-loader');
    if (!loader) {
      // Si le loader n'existe pas, afficher quand même le header et footer
      showHeaderAndFooter();
      return;
    }

    // Cacher le header et footer au début
    hideHeaderAndFooter();

    const hideLoader = () => {
      if (loader.classList.contains('is-hidden')) return;
      loader.classList.add('is-hidden');
      
      // Ajouter la classe page-loaded au body et retirer data-loading
      document.body.classList.add('page-loaded');
      document.body.removeAttribute('data-loading');
      
      // Afficher le header et footer après un court délai pour une transition fluide
      setTimeout(() => {
        showHeaderAndFooter();
      }, 300);
      
      setTimeout(() => {
        loader.remove();
      }, 600);
    };

    if (document.readyState === 'complete') {
      hideLoader();
    } else {
      window.addEventListener('load', hideLoader, { once: true });
    }
  };

  // Cacher immédiatement au chargement du script
  if (document.readyState === 'loading') {
    // Cacher dès que le DOM est disponible
    document.addEventListener('DOMContentLoaded', () => {
      hideHeaderAndFooter();
      initLoader();
    }, { once: true });
  } else {
    // Si le DOM est déjà chargé, cacher immédiatement puis initialiser
    hideHeaderAndFooter();
    initLoader();
  }
})();

