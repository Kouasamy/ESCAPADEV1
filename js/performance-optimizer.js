/**
 * Performance Optimizer
 * Optimisations supplémentaires pour améliorer les performances globales du site
 */

(function() {
  'use strict';

  /**
   * Optimise les images avec des placeholders pour éviter le layout shift
   */
  function optimizeImagePlaceholders() {
    const images = document.querySelectorAll('img[loading="lazy"]:not([data-placeholder-set])');
    
    images.forEach(img => {
      // Ajouter un placeholder si l'image n'a pas de dimensions explicites
      if (!img.hasAttribute('width') || !img.hasAttribute('height')) {
        // Créer un placeholder SVG minimal pour éviter le layout shift
        const placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1" height="1"%3E%3C/svg%3E';
        
        if (!img.src || img.src === placeholder) {
          img.src = placeholder;
          img.setAttribute('data-placeholder-set', 'true');
        }
      }
    });
  }

  /**
   * Optimise les requêtes réseau en utilisant le cache du navigateur
   */
  function optimizeNetworkRequests() {
    // Précharger les ressources critiques qui seront probablement nécessaires
    const criticalResources = [
      'images/574_538.png', // Title border utilisé fréquemment
      'Menu/images/542_446.svg', // Close icon
    ];

    // Utiliser requestIdleCallback si disponible, sinon setTimeout
    const schedulePreload = window.requestIdleCallback || ((fn) => setTimeout(fn, 2000));

    schedulePreload(() => {
      criticalResources.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link);
      });
    });
  }

  /**
   * Optimise le scroll en utilisant passive event listeners
   */
  function optimizeScrollPerformance() {
    // Remplacer les event listeners de scroll par des versions passives si possible
    const scrollElements = document.querySelectorAll('[data-scroll]');
    
    scrollElements.forEach(element => {
      const handler = () => {
        // Handler vide, juste pour activer le mode passif
      };
      
      element.addEventListener('scroll', handler, { passive: true });
    });
  }

  /**
   * Délaye le chargement des ressources non critiques
   */
  function deferNonCriticalResources() {
    // Délayer le chargement des scripts non critiques après l'interaction utilisateur
    const deferredScripts = document.querySelectorAll('script[data-defer-on-interaction]');
    
    const loadDeferredScripts = () => {
      deferredScripts.forEach(script => {
        const newScript = document.createElement('script');
        newScript.src = script.getAttribute('data-src');
        newScript.defer = true;
        script.parentNode.replaceChild(newScript, script);
      });
    };

    // Charger après la première interaction utilisateur
    ['mousedown', 'touchstart', 'keydown'].forEach(event => {
      document.addEventListener(event, loadDeferredScripts, { once: true, passive: true });
    });

    // Ou charger après 3 secondes si pas d'interaction
    setTimeout(loadDeferredScripts, 3000);
  }

  /**
   * Optimise les animations pour de meilleures performances
   */
  function optimizeAnimations() {
    // Utiliser will-change uniquement pour les éléments animés actifs
    const animatedElements = document.querySelectorAll('.animate-fadeIn, .reveal, [data-animate]');
    
    animatedElements.forEach(element => {
      // Ajouter will-change seulement quand l'élément est proche du viewport
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.willChange = 'transform, opacity';
              observer.unobserve(entry.target);
              
              // Retirer will-change après l'animation
              setTimeout(() => {
                entry.target.style.willChange = 'auto';
              }, 1000);
            }
          });
        }, { rootMargin: '100px' });
        
        observer.observe(element);
      }
    });
  }

  /**
   * Initialisation
   */
  function init() {
    // Attendre que le DOM soit prêt
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        optimizeImagePlaceholders();
        optimizeScrollPerformance();
        optimizeAnimations();
      });
    } else {
      optimizeImagePlaceholders();
      optimizeScrollPerformance();
      optimizeAnimations();
    }

    // Optimisations qui peuvent attendre
    if (document.readyState === 'complete') {
      optimizeNetworkRequests();
      deferNonCriticalResources();
    } else {
      window.addEventListener('load', () => {
        optimizeNetworkRequests();
        deferNonCriticalResources();
      });
    }
  }

  // Démarrer
  init();
})();

