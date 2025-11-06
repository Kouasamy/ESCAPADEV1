/**
 * Script de chargement automatique des vidéos pour GitHub Pages
 * 
 * Ce script détecte automatiquement si le site est hébergé sur GitHub Pages
 * et utilise les URLs appropriées pour les vidéos.
 * 
 * Pour utiliser Cloudinary (recommandé) :
 * 1. Créez un compte sur https://cloudinary.com (gratuit)
 * 2. Uploadez vos vidéos
 * 3. Modifiez la variable CLOUDINARY_BASE_URL ci-dessous
 */

(function() {
  'use strict';
  
  // ============================================
  // CONFIGURATION - MODIFIEZ ICI
  // ============================================
  
  // Option 1 : Utiliser Cloudinary (RECOMMANDÉ)
  const USE_CLOUDINARY = false; // Mettez à true après avoir configuré Cloudinary
  const CLOUDINARY_BASE_URL = ''; // Exemple: 'https://res.cloudinary.com/votre-compte/video/upload'
  
  // Option 2 : Utiliser les URLs GitHub directes (ne fonctionne pas avec LFS)
  const USE_GITHUB_URLS = false;
  const GITHUB_REPO = 'Kouasamy/sam12'; // Votre dépôt GitHub
  const GITHUB_BRANCH = 'main'; // Votre branche
  
  // Option 3 : Utiliser les chemins relatifs (fonctionne en local, pas sur GitHub Pages avec LFS)
  const USE_RELATIVE_PATHS = true; // Par défaut
  
  // ============================================
  // LOGIQUE AUTOMATIQUE
  // ============================================
  
  /**
   * Détecte si on est sur GitHub Pages
   */
  function isGitHubPages() {
    return window.location.hostname.includes('github.io') || 
           window.location.hostname.includes('github.com');
  }
  
  /**
   * Obtient l'URL d'une vidéo selon la configuration
   */
  function getVideoUrl(videoPath) {
    const videoName = videoPath.split('/').pop();
    
    // Priorité 1 : Cloudinary
    if (USE_CLOUDINARY && CLOUDINARY_BASE_URL) {
      return `${CLOUDINARY_BASE_URL}/${videoName}`;
    }
    
    // Priorité 2 : GitHub URLs (si on est sur GitHub Pages)
    if (USE_GITHUB_URLS && isGitHubPages()) {
      return `https://github.com/${GITHUB_REPO}/raw/${GITHUB_BRANCH}/${videoPath}`;
    }
    
    // Priorité 3 : Chemins relatifs (par défaut)
    return videoPath;
  }
  
  /**
   * Remplace toutes les sources vidéo dans la page
   */
  function updateVideoSources() {
    // Trouver tous les éléments <source> avec des vidéos
    const videoSources = document.querySelectorAll('source[src*="video/"]');
    
    videoSources.forEach(source => {
      const originalSrc = source.getAttribute('src');
      if (originalSrc && originalSrc.includes('video/')) {
        const newSrc = getVideoUrl(originalSrc);
        source.setAttribute('src', newSrc);
        
        // Recharger la vidéo parente
        const video = source.closest('video');
        if (video) {
          video.load();
        }
      }
    });
    
    // Trouver tous les éléments <video> avec src direct
    const videos = document.querySelectorAll('video[src*="video/"]');
    videos.forEach(video => {
      const originalSrc = video.getAttribute('src');
      if (originalSrc && originalSrc.includes('video/')) {
        const newSrc = getVideoUrl(originalSrc);
        video.setAttribute('src', newSrc);
        video.load();
      }
    });
  }
  
  /**
   * Affiche un message d'aide dans la console
   */
  function showHelpMessage() {
    if (isGitHubPages() && USE_RELATIVE_PATHS && !USE_CLOUDINARY) {
      console.warn('%c⚠️ VIDÉOS NON VISIBLES SUR GITHUB PAGES', 'color: orange; font-weight: bold; font-size: 14px;');
      console.log('%cLes vidéos ne s\'affichent pas car Git LFS n\'est pas supporté par GitHub Pages.', 'color: #666;');
      console.log('%cSolution recommandée : Utilisez Cloudinary (gratuit jusqu\'à 25GB)', 'color: #0066cc;');
      console.log('1. Créez un compte sur https://cloudinary.com');
      console.log('2. Uploadez vos vidéos');
      console.log('3. Modifiez js/video-loader.js : mettez USE_CLOUDINARY à true et ajoutez votre CLOUDINARY_BASE_URL');
      console.log('Voir GUIDE_VIDEOS_GITHUB.md pour plus de détails');
    }
  }
  
  // Initialisation
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      updateVideoSources();
      showHelpMessage();
    });
  } else {
    updateVideoSources();
    showHelpMessage();
  }
  
  // Réexécuter si de nouvelles vidéos sont ajoutées dynamiquement
  const observer = new MutationObserver(function(mutations) {
    updateVideoSources();
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
})();

