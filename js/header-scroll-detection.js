// Script pour détecter quand le header est sur un fond blanc et changer sa couleur
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  // Fonction pour vérifier si un élément a un fond blanc ou clair
  function isOnWhiteBackground(element) {
    if (!element) return false;
    
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Obtenir l'élément à la position du header
    const elementBelow = document.elementFromPoint(centerX, centerY);
    if (!elementBelow) return false;
    
    // Vérifier les parents jusqu'à trouver un élément avec un fond défini
    let current = elementBelow;
    let parent = current;
    
    // Remonter jusqu'au body
    while (parent && parent !== document.body) {
      const styles = window.getComputedStyle(parent);
      const bgColor = styles.backgroundColor;
      const bgImage = styles.backgroundImage;
      
      // Si background-image n'est pas "none", considérer comme non-blanc
      if (bgImage && bgImage !== 'none' && !bgImage.includes('rgba(0, 0, 0')) {
        return false;
      }
      
      // Extraire les valeurs RGB du background-color
      const rgbMatch = bgColor.match(/\d+/g);
      if (rgbMatch && rgbMatch.length >= 3) {
        const r = parseInt(rgbMatch[0]);
        const g = parseInt(rgbMatch[1]);
        const b = parseInt(rgbMatch[2]);
        const alpha = rgbMatch[3] ? parseFloat(rgbMatch[3]) : 1;
        
        // Si le fond est blanc ou très clair (RGB > 240) et opaque
        if (alpha > 0.5 && r > 240 && g > 240 && b > 240) {
          return true;
        }
        
        // Si le fond est opaque et clair
        if (alpha > 0.8 && (r + g + b) / 3 > 200) {
          return true;
        }
      }
      
      parent = parent.parentElement;
    }
    
    return false;
  }

  // Fonction pour vérifier si le header est sur une section avec fond blanc
  function checkHeaderBackground() {
    const headerRect = header.getBoundingClientRect();
    const headerBottom = headerRect.bottom;
    const headerCenterX = headerRect.left + headerRect.width / 2;
    
    // Vérifier le point juste en dessous du header
    const pointBelow = document.elementFromPoint(headerCenterX, headerBottom + 10);
    
    if (!pointBelow) {
      header.classList.remove('header-on-white');
      return;
    }
    
    // Vérifier si c'est sur une section avec classe bg-white ou style background blanc
    let element = pointBelow;
    let isOnWhite = false;
    
    while (element && element !== document.body) {
      const styles = window.getComputedStyle(element);
      const bgColor = styles.backgroundColor;
      const classes = element.className;
      
      // Vérifier les classes Tailwind ou CSS qui indiquent un fond blanc
      if (typeof classes === 'string' && (
        classes.includes('bg-white') || 
        classes.includes('details-section') ||
        classes.includes('welcome-section') ||
        classes.includes('bg-[#fff]') ||
        classes.includes('bg-[#ffffff]')
      )) {
        isOnWhite = true;
        break;
      }
      
      // Vérifier le background-color calculé
      const rgbMatch = bgColor.match(/\d+/g);
      if (rgbMatch && rgbMatch.length >= 3) {
        const r = parseInt(rgbMatch[0]);
        const g = parseInt(rgbMatch[1]);
        const b = parseInt(rgbMatch[2]);
        const alpha = rgbMatch[3] ? parseFloat(rgbMatch[3]) : 1;
        
        if (alpha > 0.5 && r > 240 && g > 240 && b > 240) {
          isOnWhite = true;
          break;
        }
      }
      
      element = element.parentElement;
    }
    
    if (isOnWhite) {
      header.classList.add('header-on-white');
    } else {
      header.classList.remove('header-on-white');
    }
  }

  // Vérifier au chargement
  checkHeaderBackground();

  // Vérifier au scroll avec throttling
  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        checkHeaderBackground();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Vérifier lors du redimensionnement
  window.addEventListener('resize', function() {
    checkHeaderBackground();
  });
});

