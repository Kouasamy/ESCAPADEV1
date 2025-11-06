/**
 * Configuration des URLs vidéo pour GitHub Pages
 * 
 * IMPORTANT: Les fichiers Git LFS ne sont pas directement accessibles via GitHub Pages.
 * Vous devez utiliser l'une des solutions suivantes :
 * 
 * SOLUTION 1 (Recommandée - Gratuite) : Cloudinary
 * 1. Créez un compte gratuit sur https://cloudinary.com (25GB gratuits)
 * 2. Uploadez vos vidéos sur Cloudinary
 * 3. Remplacez les URLs ci-dessous par les URLs Cloudinary
 * 
 * SOLUTION 2 : GitHub Raw URLs (nécessite authentification pour LFS)
 * Utilisez le format : https://github.com/Kouasamy/sam12/raw/main/video/NOM_VIDEO.mp4
 * 
 * SOLUTION 3 : Autre hébergement gratuit (YouTube non listé, Vimeo, etc.)
 */

// Configuration des URLs vidéo
const VIDEO_CONFIG = {
  // Format pour GitHub Pages (ne fonctionnera pas avec LFS)
  useGitHubUrls: false,
  
  // URLs GitHub (à utiliser si vous retirez LFS ou utilisez un autre dépôt)
  githubBaseUrl: 'https://github.com/Kouasamy/sam12/raw/main',
  
  // URLs Cloudinary (à remplir après upload sur Cloudinary)
  cloudinaryBaseUrl: '', // Exemple: 'https://res.cloudinary.com/votre-compte/video/upload'
  
  // Mappage des noms de fichiers vidéo
  videos: {
    'PAYSAGE.mp4': '',
    'ACCUEIL.mp4': '',
    'CHAMBRE 2.mp4': '',
    'CHEF.mp4': '',
    'COCKTAIL 1.mp4': '',
    'COCKTAIL 2.mp4': '',
    'COCKTAIL 3.mp4': '',
    'COCKTAIL 4.mp4': '',
    'LOUNGE.mp4': '',
    'PISCINE.mp4': ''
  }
};

/**
 * Obtient l'URL complète d'une vidéo
 * @param {string} videoName - Nom du fichier vidéo (ex: 'PAYSAGE.mp4')
 * @returns {string} URL complète de la vidéo
 */
function getVideoUrl(videoName) {
  // Si une URL personnalisée est définie, l'utiliser
  if (VIDEO_CONFIG.videos[videoName] && VIDEO_CONFIG.videos[videoName] !== '') {
    return VIDEO_CONFIG.videos[videoName];
  }
  
  // Si Cloudinary est configuré
  if (VIDEO_CONFIG.cloudinaryBaseUrl) {
    return `${VIDEO_CONFIG.cloudinaryBaseUrl}/${videoName}`;
  }
  
  // Sinon, utiliser GitHub (ne fonctionnera pas avec LFS)
  if (VIDEO_CONFIG.useGitHubUrls) {
    return `${VIDEO_CONFIG.githubBaseUrl}/video/${videoName}`;
  }
  
  // Par défaut, utiliser le chemin relatif (ne fonctionnera pas sur GitHub Pages avec LFS)
  return `video/${videoName}`;
}

// Exporter pour utilisation globale
window.getVideoUrl = getVideoUrl;
window.VIDEO_CONFIG = VIDEO_CONFIG;

