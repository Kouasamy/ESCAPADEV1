/**
 * Fast Loader - Chargement ultra-rapide et fluide des images et vidéos
 * 
 * Optimisations :
 * - Préchargement intelligent des images proches du viewport
 * - Chargement progressif avec placeholders
 * - Optimisation du LCP (Largest Contentful Paint)
 * - Préchargement des vidéos avec posters
 */

(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    imageLoadMargin: '200px', // Charger les images 200px avant qu'elles soient visibles
    videoLoadMargin: '300px', // Charger les vidéos 300px avant
    preloadAdjacent: 2, // Précharger 2 images adjacentes dans les sliders
    criticalImageDelay: 0, // Délai pour les images critiques (0 = immédiat)
    lazyImageDelay: 50, // Délai pour les images lazy (ms)
    enableProgressiveLoading: true,
    enableImagePreloading: true,
    enableVideoPreloading: true
  };

  // Cache des images chargées
  const loadedImages = new Set();
  const loadingImages = new Set();

  /**
   * Précharge une image de manière intelligente
   */
  function preloadImage(src, priority = 'auto') {
    if (loadedImages.has(src) || loadingImages.has(src)) {
      return Promise.resolve();
    }

    loadingImages.add(src);

    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      if (priority === 'high') {
        link.setAttribute('fetchpriority', 'high');
      }
      
      link.onload = () => {
        loadedImages.add(src);
        loadingImages.delete(src);
        resolve();
      };
      
      link.onerror = () => {
        loadingImages.delete(src);
        reject(new Error(`Failed to preload image: ${src}`));
      };

      document.head.appendChild(link);
    });
  }

  /**
   * Précharge une vidéo
   */
  function preloadVideo(video) {
    if (video.dataset.preloaded === 'true') return;
    
    const poster = video.getAttribute('poster');
    if (poster && CONFIG.enableVideoPreloading) {
      preloadImage(poster, 'high').catch(() => {});
    }

    // Précharger les métadonnées de la vidéo
    if (video.readyState === 0) {
      video.load();
    }

    video.dataset.preloaded = 'true';
  }

  /**
   * Charge une image avec placeholder progressif
   */
  function loadImageWithPlaceholder(img) {
    if (img.dataset.loaded === 'true') return;
    
    const src = img.src || img.dataset.src;
    if (!src) return;

    // Afficher un placeholder si disponible
    const placeholder = img.dataset.placeholder;
    if (placeholder && !img.complete) {
      img.style.opacity = '0.5';
      img.style.transition = 'opacity 0.3s ease';
    }

    // Créer une nouvelle image pour préchargement
    const preloadImg = new Image();
    
    preloadImg.onload = () => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      }
      img.style.opacity = '1';
      img.classList.add('loaded');
      img.dataset.loaded = 'true';
      loadedImages.add(src);
    };

    preloadImg.onerror = () => {
      img.classList.add('error');
      img.style.opacity = '1';
    };

    preloadImg.src = src;
  }

  /**
   * Optimise une image pour le chargement rapide
   */
  function optimizeImageForFastLoad(img) {
    const src = img.getAttribute('src') || img.getAttribute('data-src');
    if (!src) return;

    // Images critiques : charger immédiatement
    if (img.hasAttribute('fetchpriority') && img.getAttribute('fetchpriority') === 'high') {
      if (!img.complete && img.naturalWidth === 0) {
        preloadImage(src, 'high').catch(() => {});
      }
      return;
    }

    // Ajouter decoding async si pas déjà présent
    if (!img.hasAttribute('decoding')) {
      img.setAttribute('decoding', 'async');
    }

    // Précharger les images dans le viewport
    if (isInViewport(img, 0)) {
      loadImageWithPlaceholder(img);
    }
  }

  /**
   * Vérifie si un élément est dans le viewport (avec marge)
   */
  function isInViewport(element, margin = 0) {
    const rect = element.getBoundingClientRect();
    const marginPx = typeof margin === 'string' ? parseInt(margin) : margin;
    
    return (
      rect.top >= -marginPx &&
      rect.left >= -marginPx &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + marginPx &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) + marginPx
    );
  }

  /**
   * Précharge les images adjacentes dans un slider
   */
  function preloadAdjacentImages(currentImg) {
    const slider = currentImg.closest('.plats-slider-track, .slider-track, [class*="slider"]');
    if (!slider) return;

    const allImages = Array.from(slider.querySelectorAll('img[loading="lazy"], img[data-src]'));
    const currentIndex = allImages.indexOf(currentImg);
    
    if (currentIndex === -1) return;

    // Précharger les images adjacentes
    for (let i = 1; i <= CONFIG.preloadAdjacent; i++) {
      [currentIndex - i, currentIndex + i].forEach(index => {
        if (index >= 0 && index < allImages.length) {
          const adjacentImg = allImages[index];
          const src = adjacentImg.src || adjacentImg.dataset.src;
          if (src && !loadedImages.has(src) && !loadingImages.has(src)) {
            preloadImage(src).catch(() => {});
          }
        }
      });
    }
  }

  /**
   * Setup Intersection Observer pour le chargement intelligent
   */
  function setupFastImageLoader() {
    if (!('IntersectionObserver' in window)) {
      // Fallback : charger toutes les images
      document.querySelectorAll('img[loading="lazy"], img[data-src]').forEach(loadImageWithPlaceholder);
      return;
    }

    // Observer pour les images
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          
          // Charger l'image
          loadImageWithPlaceholder(img);
          
          // Précharger les images adjacentes si c'est un slider
          if (img.closest('.plats-slider-track, .slider-track, [class*="slider"]')) {
            preloadAdjacentImages(img);
          }
          
          imageObserver.unobserve(img);
        }
      });
    }, {
      rootMargin: CONFIG.imageLoadMargin,
      threshold: 0.01
    });

    // Observer toutes les images lazy
    document.querySelectorAll('img[loading="lazy"], img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });

    // Observer pour les vidéos
    if (CONFIG.enableVideoPreloading) {
      const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const video = entry.target;
            preloadVideo(video);
            videoObserver.unobserve(video);
          }
        });
      }, {
        rootMargin: CONFIG.videoLoadMargin,
        threshold: 0.01
      });

      document.querySelectorAll('video[preload="metadata"], video[loading="lazy"]').forEach(video => {
        videoObserver.observe(video);
      });
    }
  }

  /**
   * Optimise le LCP (Largest Contentful Paint)
   */
  function optimizeLCP() {
    // Trouver l'élément LCP probable (première grande image ou vidéo)
    const lcpCandidates = [
      ...document.querySelectorAll('img[fetchpriority="high"], img:not([loading="lazy"])'),
      ...document.querySelectorAll('video[autoplay]')
    ];

    lcpCandidates.forEach(candidate => {
      if (isInViewport(candidate, window.innerHeight)) {
        if (candidate.tagName === 'IMG') {
          const src = candidate.src || candidate.dataset.src;
          if (src) {
            preloadImage(src, 'high').catch(() => {});
          }
        } else if (candidate.tagName === 'VIDEO') {
          preloadVideo(candidate);
        }
      }
    });
  }

  /**
   * Précharge les ressources critiques au démarrage
   */
  function preloadCriticalResources() {
    // Précharger les images critiques
    document.querySelectorAll('img[fetchpriority="high"]').forEach(img => {
      const src = img.src || img.dataset.src;
      if (src) {
        preloadImage(src, 'high').catch(() => {});
      }
    });

    // Précharger la première vidéo si elle est visible
    const firstVideo = document.querySelector('video[autoplay]');
    if (firstVideo && isInViewport(firstVideo, window.innerHeight)) {
      preloadVideo(firstVideo);
    }
  }

  /**
   * Initialisation
   */
  function init() {
    // Optimiser le LCP immédiatement
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        optimizeLCP();
        preloadCriticalResources();
        setupFastImageLoader();
        
        // Optimiser toutes les images existantes
        document.querySelectorAll('img').forEach(optimizeImageForFastLoad);
      });
    } else {
      optimizeLCP();
      preloadCriticalResources();
      setupFastImageLoader();
      document.querySelectorAll('img').forEach(optimizeImageForFastLoad);
    }

    // Observer les nouvelles images ajoutées dynamiquement
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === 1) { // Element node
            if (node.tagName === 'IMG') {
              optimizeImageForFastLoad(node);
            } else {
              node.querySelectorAll('img').forEach(optimizeImageForFastLoad);
            }
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  // Démarrer immédiatement
  init();

  // Exposer l'API publique
  window.FastLoader = {
    preloadImage,
    preloadVideo,
    loadImageWithPlaceholder,
    optimizeLCP
  };
})();

