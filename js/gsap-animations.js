// GSAP Smooth Scroll and Scroll Animations
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// ============================================
// SMOOTH SCROLL
// ============================================
// Smooth scroll behavior using CSS and GSAP
const initSmoothScroll = () => {
  // Add smooth scroll CSS and prevent horizontal scroll
  if (!document.getElementById('smooth-scroll-style')) {
    const style = document.createElement('style');
    style.id = 'smooth-scroll-style';
    style.textContent = `
      html, body {
        overflow-x: hidden;
        width: 100%;
        max-width: 100%;
      }
      
      * {
        max-width: 100%;
      }
      
      html {
        scroll-behavior: smooth;
      }
      
      @media (prefers-reduced-motion: no-preference) {
        html {
          scroll-behavior: smooth;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  // Enhance anchor link scrolling with smooth behavior
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        // Use native smooth scroll with offset
        const offset = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
};

// ============================================
// SCROLL ANIMATIONS
// ============================================

// Animation for text elements (fade in + slide up) - Optimized
const animateTextElements = () => {
  // Limit to important text elements to reduce load
  const textElements = document.querySelectorAll(
    'h1, h2, .main-title, .subtitle, .hero-text, .suite-title'
  );
  
  // Batch animations for better performance
  const batch = [];
  
  textElements.forEach((el) => {
    if (el.hasAttribute('data-animated')) return;
    
    // Only animate if element is not too small (performance optimization)
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    
    gsap.set(el, {
      opacity: 0,
      y: 20,
      willChange: 'opacity, transform'
    });
    
    batch.push({
      element: el,
      animation: gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          end: 'bottom 10%',
          toggleActions: 'play none none none',
          once: true,
          markers: false
        },
        onComplete: () => {
          el.style.willChange = 'auto';
        }
      })
    });
    
    el.setAttribute('data-animated', 'true');
  });
  
  return batch;
};

// Animation for images (fade in + subtle scale) - Optimized
const animateImageElements = () => {
  // Only animate larger images to reduce load
  const imageElements = document.querySelectorAll(
    'img:not(.btn-bg):not(.field-bg):not(.nav-bg):not(.logo-part):not(.deco-element):not(.amenity-icon):not(.tv-icon):not([data-no-animate])'
  );
  
  const batch = [];
  
  imageElements.forEach((img) => {
    if (img.hasAttribute('data-animated')) return;
    
    // Skip small images (icons, etc.) for performance
    const rect = img.getBoundingClientRect();
    if (rect.width < 100 || rect.height < 100) return;
    
    gsap.set(img, {
      opacity: 0,
      scale: 0.97,
      willChange: 'opacity, transform'
    });
    
    batch.push({
      element: img,
      animation: gsap.to(img, {
        opacity: 1,
        scale: 1,
        duration: 1.6,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: img,
          start: 'top 90%',
          end: 'bottom 10%',
          toggleActions: 'play none none none',
          once: true,
          markers: false
        },
        onComplete: () => {
          img.style.willChange = 'auto';
        }
      })
    });
    
    img.setAttribute('data-animated', 'true');
  });
  
  return batch;
};

// Animation for video elements (fade in) - Optimized
const animateVideoElements = () => {
  const videoElements = document.querySelectorAll('video');
  
  videoElements.forEach((video) => {
    if (video.hasAttribute('data-animated')) return;
    
    gsap.set(video, {
      opacity: 0,
      willChange: 'opacity'
    });
    
    gsap.to(video, {
      opacity: 1,
      duration: 1.8,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: video,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'play none none none',
        once: true,
        markers: false
      },
      onComplete: () => {
        video.style.willChange = 'auto';
      }
    });
    
    video.setAttribute('data-animated', 'true');
  });
};

// Animation for cards and sections (fade in + slide up) - Optimized
const animateCardElements = () => {
  // Only animate main sections and cards, not all sections
  const cardElements = document.querySelectorAll(
    '.suite-card, .welcome-content, .hero-content, .experience-section'
  );
  
  cardElements.forEach((card) => {
    if (card.hasAttribute('data-animated')) return;
    
    const rect = card.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    
    gsap.set(card, {
      opacity: 0,
      y: 30,
      willChange: 'opacity, transform'
    });
    
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'play none none none',
        once: true,
        markers: false
      },
      onComplete: () => {
        card.style.willChange = 'auto';
      }
    });
    
    card.setAttribute('data-animated', 'true');
  });
};

// Stagger animation for grid items - Optimized
const animateGridItems = () => {
  const grids = document.querySelectorAll('.suite-grid, .grid');
  
  grids.forEach((grid) => {
    if (grid.hasAttribute('data-animated')) return;
    
    const items = Array.from(grid.children).filter(item => {
      const rect = item.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    });
    
    if (items.length === 0) return;
    
    gsap.set(items, {
      opacity: 0,
      y: 20,
      willChange: 'opacity, transform'
    });
    
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 1.3,
      ease: 'power1.out',
      stagger: {
        amount: 0.4,
        from: 'start'
      },
      scrollTrigger: {
        trigger: grid,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'play none none none',
        once: true,
        markers: false
      },
      onComplete: () => {
        items.forEach(item => item.style.willChange = 'auto');
      }
    });
    
    grid.setAttribute('data-animated', 'true');
  });
};

// Initialize all animations - Optimized with requestAnimationFrame
const initScrollAnimations = () => {
  // Use requestAnimationFrame for better performance
  requestAnimationFrame(() => {
    // Stagger initialization to reduce initial load
    setTimeout(() => {
      animateTextElements();
    }, 50);
    
    setTimeout(() => {
      animateImageElements();
    }, 100);
    
    setTimeout(() => {
      animateVideoElements();
      animateCardElements();
    }, 150);
    
    setTimeout(() => {
      animateGridItems();
    }, 200);
    
    // Refresh ScrollTrigger after all animations are set up
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);
  });
};

// Initialize everything when DOM is ready
const init = () => {
  initSmoothScroll();
  initScrollAnimations();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Refresh animations on window resize (for responsive adjustments) - Optimized
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    ScrollTrigger.refresh();
  }, 300);
});

// Optimize ScrollTrigger performance
ScrollTrigger.config({
  autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
  ignoreMobileResize: true
});
