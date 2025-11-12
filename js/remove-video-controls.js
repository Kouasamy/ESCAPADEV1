/**
 * Script pour supprimer complètement tous les contrôles vidéo
 * S'exécute immédiatement et surveille les nouvelles vidéos ajoutées
 */

(function() {
  'use strict';

  /**
   * Supprime les contrôles d'une vidéo spécifique
   */
  function removeVideoControls(video) {
    if (!video || video.tagName !== 'VIDEO') return;

    // Supprimer l'attribut controls
    video.removeAttribute('controls');
    video.setAttribute('controls', 'false');
    
    // Désactiver les contrôles via l'API
    if (video.controls !== undefined) {
      video.controls = false;
    }

    // Supprimer les contrôles natifs via CSS inline
    video.style.setProperty('-webkit-appearance', 'none', 'important');
    video.style.setProperty('-moz-appearance', 'none', 'important');
    video.style.setProperty('appearance', 'none', 'important');

    // Empêcher l'affichage des contrôles
    try {
      if (video.webkitSupportsFullscreen !== undefined) {
        video.webkitSupportsFullscreen = false;
      }
    } catch (e) {
      // Ignorer les erreurs
    }

    // Supprimer les event listeners liés aux contrôles
    video.addEventListener('loadedmetadata', function() {
      video.removeAttribute('controls');
      video.setAttribute('controls', 'false');
      if (video.controls !== undefined) {
        video.controls = false;
      }
    }, { once: true });

    // Empêcher l'affichage des contrôles au survol
    video.addEventListener('mouseenter', function() {
      video.removeAttribute('controls');
      video.setAttribute('controls', 'false');
      if (video.controls !== undefined) {
        video.controls = false;
      }
    }, { passive: true });

    video.addEventListener('mouseleave', function() {
      video.removeAttribute('controls');
      video.setAttribute('controls', 'false');
      if (video.controls !== undefined) {
        video.controls = false;
      }
    }, { passive: true });
  }

  /**
   * Supprime les contrôles de toutes les vidéos existantes
   */
  function removeAllVideoControls() {
    const videos = document.querySelectorAll('video');
    videos.forEach(removeVideoControls);
  }

  /**
   * Initialise la suppression des contrôles
   */
  function init() {
    // Supprimer les contrôles des vidéos existantes
    removeAllVideoControls();

    // Observer les nouvelles vidéos ajoutées au DOM
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        mutation.addedNodes.forEach(function(node) {
          if (node.nodeType === 1) { // Element node
            // Vérifier si c'est une vidéo
            if (node.tagName === 'VIDEO') {
              removeVideoControls(node);
            }
            // Vérifier les vidéos dans les enfants
            const videos = node.querySelectorAll && node.querySelectorAll('video');
            if (videos) {
              videos.forEach(removeVideoControls);
            }
          }
        });
      });
    });

    // Observer les changements dans le document
    if (document.body) {
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    } else {
      // Attendre que le body soit disponible
      document.addEventListener('DOMContentLoaded', function() {
        observer.observe(document.body, {
          childList: true,
          subtree: true
        });
        removeAllVideoControls();
      });
    }

    // Réappliquer périodiquement pour s'assurer que les contrôles restent cachés
    setInterval(function() {
      removeAllVideoControls();
    }, 1000);
  }

  // Démarrer immédiatement
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Réappliquer immédiatement
  removeAllVideoControls();
})();

