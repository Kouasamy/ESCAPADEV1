(() => {
  const STORAGE_KEY = 'escapade-lang';
  const FALLBACK_LANG = 'fr';
  const SUPPORTED_LANGS = ['fr', 'en'];

  const translations = {
    fr: {
      common: {},
      home: {},
      restaurant: {},
      lounge: {},
      suites: {},
      events: {},
      about: {},
      reservationStep1: {},
      reservationStep3: {},
      reservationStep4: {},
      reservationStep5: {
        reservationInstructionsTitle: 'Prochaines étapes importantes',
        reservationStep1: '<strong>Appelez d\'abord le numéro de réservation</strong> pour confirmer votre réservation et finaliser les détails avec notre équipe.',
        reservationStep2: '<strong>Effectuez le dépôt</strong> en utilisant l\'un des numéros de paiement ci-dessous pour sécuriser votre réservation.',
        reservationNumberTitle: 'Numéro de réservation',
        paymentNumberTitle: 'Numéro de paiement',
        reservationConfirmationMessage1: 'Un mail de confirmation vous sera envoyé après validation de votre réservation.',
        reservationConfirmationMessage2: 'L\'équipe de <span style="color: #B78F62;">L\'Escapade</span> vous remercie pour votre confiance.',
      },
      genericReservation: {},
    },
    en: {
      common: {
        menu: 'MENU',
        close: 'CLOSE',
        roomsSuites: 'ROOMS & SUITES',
        restaurant: 'THE RESTAURANT',
        lounge: 'THE LOUNGE',
        event: 'EVENTS',
        about: 'ABOUT',
        contactUs: 'Contact Us',
        discover: 'Discover',
        reserveSuite: 'Book a suite',
        reserveSpace: 'Book a venue',
        arrival: '<span class="label-text">Arrival</span><span class="date-value"></span>',
        departure: '<span class="label-text">Departure</span><span class="date-value"></span>',
        guests: '<span class="label-text">Guests</span><span class="guest-value" style="display: none;">1</span>',
        findSuite: 'Find a suite',
        footerMenu: 'MENU',
        footerContact: 'CONTACT',
        footerMenuRooms: 'Rooms & Suites',
        footerMenuRestaurant: 'Restaurant',
        footerMenuLounge: 'Lounge',
        footerMenuEvents: 'Events',
        footerMenuAbout: 'About',
        footerSubmit: 'Send',
        footerTerms: 'Terms & Conditions',
        footerPrivacy: 'Privacy Policy',
        footerRights: '©2025 – All rights reserved by L’Escapade.',
        footerAddress: 'Assinie, Km 12, Côte d’Ivoire',
        footerPlaceholderName: 'Last name',
        footerPlaceholderFirstName: 'First name',
        footerPlaceholderEmail: 'Email address',
        footerPlaceholderPhone: 'Phone number',
        footerPlaceholderMessage: 'Write your message',
        footerReservationTitle: 'Reservation number',
        footerPaymentTitle: 'Payment number',
        contactAria: { 'aria-label': 'Contact us' },
      },
      home: {
        welcomeTo: 'Welcome to',
        escapade: 'L’Escapade',
        welcomeText:
          "Since <strong>May 2025</strong>, L’Escapade Hotel has offered an elegant sanctuary <strong>on the lagoonfront</strong> in <strong>Assinie</strong>. Step into a haven where refinement meets serenity.",
        experienceText:
          'Here, time stretches and the senses awaken. Between soothing nature and understated sophistication, your journey begins where luxury meets calm. Spread across 3.5 hectares, the estate houses 22 junior and senior suites with pure lines, designed for comfort, privacy, and serenity. At L’Escapade, every moment invites you to let go.',
        learnMore: 'Learn more',
        discoverSuitesTitle: 'Our Rooms<span class="highlight"> & Suites</span>',
        suiteJuniorTitle: 'Junior Suites',
        suiteSeniorVipTitle: 'Senior VIP Suites',
        suiteSeniorTitle: 'Senior Suites',
        suiteJuniorVipTitle: 'Junior VIP Suites',
        viewRoom: 'View the room',
        discoverRestaurantTitle: 'Our <span class="highlight">Restaurant</span>',
        restaurantText:
          'L’Escapade’s restaurant is a bistronomic destination where flavour, generosity, and elegance meet to create an unforgettable dining experience.',
        discoverRestaurant: 'Discover the restaurant',
        loungeDiscoverTitle: 'Our <span class="highlight">Lounge</span>',
        loungeParagraph1:
          'In an atmosphere where luxury meets serenity, the Lounge invites you to an exceptional moment. Between soft lighting, subtle notes, and attentive service, each instant becomes a unique experience—an art of living to be savoured fully.',
        loungeParagraph2:
          'An urban ambience in Assinie. L’Escapade’s lounge blends city elegance with coastal softness: a place designed to unwind, connect, and enjoy simple moments in a refined setting.',
        loungeParagraph3:
          'An urban spirit in Assinie.<br>The Lounge at L’Escapade combines urban elegance with coastal softness: a space created to unwind, reconnect, and enjoy simple moments in a refined setting.',
        loungeCta: 'Learn more',
        faqTitle: '<span>Frequently</span> <span class="highlight">Asked Questions</span>',
        faqQuestion1: '1. Are you open every day?',
        faqAnswer1:
          'Yes, L’Escapade is open daily, including public holidays. Our team is always available to welcome you for a stay, lunch, or a relaxing break.',
        faqQuestion2: '2. What are the lounge opening hours?',
        faqAnswer2:
          'The lounge is open from Thursday to Sunday, 4 p.m. to 2 a.m. Enjoy our cocktails, musical ambiance, and the signature atmosphere of L’Escapade late into the evening.',
        faqQuestion3: '3. How many guests can the family villa accommodate?',
        faqAnswer3:
          'The family villa comfortably accommodates up to 8 guests, including 4 adults and 4 children—ideal for group or family stays.',
        faqQuestion4: '4. Can we use the pool if we simply come for lunch?',
        faqAnswer4:
          'Pool access is prioritized for our residents. Non-resident guests may use it subject to availability with a minimum spend of 20,000 FCFA per person. Our team can inform you about the conditions and schedule.',
      },
      restaurant: {
        restaurantHeroTitle: 'RESTAURANT',
        restaurantSectionTitle: 'RESTAURANT <span class="highlight">L’ESCAPADE</span>',
        restaurantIntroHours:
          'Open from <strong>7:30 a.m. to 10:30 p.m.</strong>, L’Escapade’s restaurant welcomes guests throughout the day. The menu invites you on a savoury journey between the <strong>Mediterranean</strong> and <strong>Côte d’Ivoire</strong>. Each dish reflects a refined cultural blend, marrying ancestral Ivorian recipes with contemporary techniques.',
        restaurantIntroFresh:
          'Fresh fish, seafood, shellfish, and local specialties are crafted with creativity and authenticity for an unforgettable culinary experience.',
        restaurantBistronomic:
          'L’Escapade’s restaurant is a bistronomic destination where flavour, generosity, and elegance meet to deliver an unforgettable culinary experience.',
        restaurantDecor:
          'In a setting that combines local charm with contemporary refinement, every meal feels like a true sensory escape.',
        restaurantChefTitle: 'OUR CHEF & <span class="highlight">SPECIALTIES</span>',
        restaurantChefIntro:
          'From field to plate, our chef transforms each ingredient with precision, drawing inspiration from Côte d’Ivoire and far beyond.',
        restaurantChefCraft:
          'Local produce is elevated with exceptional savoir-faire, blending Ivorian tradition with international gastronomy.',
        restaurantChefName: 'The Chef’s Name…',
        restaurantChefPassion:
          'Every creation reflects passion and precision, turning each plate into a work of art where creativity honours the ingredient.<br>Each tasting celebrates balance, texture, and emotion.',
        restaurantViewMenu: 'View our menu',
        restaurantDishesTitle: 'OUR <span class="highlight">DISHES</span>',
        restaurantDish1: 'Dish 1',
        restaurantDish2: 'Dish 2',
        restaurantDish3: 'Dish 3',
        restaurantDish4: 'Dish 4',
        restaurantDish5: 'Dish 5',
        restaurantDish6: 'Dish 6',
      },
      reservationStep4: {
        reservationStepDate: 'Date',
        reservationStepCategory: 'Category',
        reservationStepDetails: 'Details & confirmation',
        reservationStepPayment: 'Payment',
        reservationContactTitle: 'Contact',
        reservationFirstName: { placeholder: 'First name*' },
        reservationEmail: { placeholder: 'Email*' },
        reservationNationality: { placeholder: 'Nationality' },
        reservationLastName: { placeholder: 'Last name*' },
        reservationPhone: { placeholder: 'Phone*' },
        reservationMessage: { placeholder: 'Message or special requests' },
        reservationPaymentTitle: 'Payment',
        reservationCardNumber: { placeholder: 'Card number*' },
        reservationCardName: { placeholder: 'Name on card*' },
        reservationCardExpiry: { placeholder: 'Expiry (MM/YY)*' },
        reservationCardCVV: { placeholder: 'CVV*' },
        reservationPayingLabel: 'You will pay:',
        reservationConfirmPayment: 'Confirm payment',
      },
      reservationStep5: {
        reservationInstructionsTitle: 'Important next steps',
        reservationStep1: '<strong>First call the reservation number</strong> to confirm your reservation and finalize details with our team.',
        reservationStep2: '<strong>Make the deposit</strong> using one of the payment numbers below to secure your reservation.',
        reservationNumberTitle: 'Reservation number',
        paymentNumberTitle: 'Payment number',
        reservationConfirmationMessage1: 'A confirmation email will be sent after validation of your reservation.',
        reservationConfirmationMessage2: 'The <span style="color: #B78F62;">L\'Escapade</span> team thanks you for your trust.',
      },
      lounge: {
        loungeHeroTitle: 'LOUNGE',
        loungeSectionTitle: 'LOUNGE <span class="highlight">L\'ESCAPADE</span>',
        loungeParagraph1: 'An urban ambience in Assinie. L\'Escapade\'s lounge blends city elegance with coastal softness: a place designed to unwind, connect, and enjoy simple moments in a refined setting. An Abidjan-style lounge. Here, the convivial energy of the capital meets the serenity of the lagoon to offer a unique experience.',
        loungeDrinksTitle: 'Drinks<span class="highlight"> & Refined Cocktails</span>',
        loungeDrinksDescription: 'The taste of vacation, to be savored without moderation. Exotic cocktails, fresh fruit juices, selected wines, and refined spirits make up our menu, served with discreet and warm attention.',
        loungeEveningDescription: 'When evening comes, the lanterns light up, the music softens, and the lounge transforms into a peaceful and welcoming place, conducive to exchanges and shared moments.',
      },
      suites: {
        roomsSuitesHeroTitle: 'ROOMS & SUITES',
        suiteJuniorSalonTitle: 'JUNIOR SUITE + LIVING ROOM',
        suiteJuniorSalonSubtitle: 'The <span class="highlight text-[#B78F62]">junior + living room</span> suite',
        suiteJuniorSalonDescription: 'With its 70 m², the Junior + Living Room Suite combines contemporary design, natural materials and local inspiration. Bright and refined, it reveals authentic luxury in its greatest simplicity. This suite features a spacious living room for added comfort.',
        suiteCapacity: 'Capacity: 2 adults + 2 children',
        suiteWeekRate: 'Weekly rate: 240,000 FCFA',
        suiteWeekendRate: 'Weekend rate: 300,000 FCFA',
        pool: 'Pool',
        bookNow: 'Book now',
        viewSuite: 'View the suite',
        suiteJuniorTitle: 'JUNIOR SUITE',
        suiteSeniorTitle: 'SENIOR SUITE',
        suiteJuniorVipTitle: 'JUNIOR SUITE <span class="text-gold">VIP</span>',
        suiteSeniorVipTitle: 'SENIOR SUITE <span class="text-gold">VIP</span>',
        suiteVillaFamilialeTitle: 'FAMILY VILLA WITH <span class="highlight text-[#BB996B]">PRIVATE POOL</span>',
        suiteWeekend: 'Weekend',
        suiteWeek: 'Week',
        suiteIntroText: 'The comfort of a private apartment blending openness and harmony, <br> Our suites ranging from <b>70 m² to 85 m²</b> combine contemporary design,<br> natural materials and local inspiration. Bright and refined <br>, they reveal authentic luxury in its greatest simplicity.',
        suiteComfortText: 'The comfort of a private apartment blending openness and harmony, creating a restful and elegant setting. Here, every detail celebrates the art of living: wood, light, the softness of fabrics, the serenity of volumes. A perfect balance between nature and elegance.',
        suiteJuniorSubtitle: 'The <span class="highlight text-[#B78F62]">junior</span> suite',
        suiteJuniorDescription: 'With its 70 m², the Junior Suite combines contemporary design, natural materials and local inspiration. Bright and refined, it reveals authentic luxury in its greatest simplicity.',
        suiteJuniorWeekRate: 'Weekly rate: 200,000 FCFA',
        suiteJuniorWeekendRate: 'Weekend rate: 250,000 FCFA',
        suiteSeniorSubtitle: 'The <span class="highlight text-[#B78F62]">senior</span> suite',
        suiteSeniorDescription: 'With an area of 85.91 m², the Senior Suite offers spacious volumes reminiscent of the comfort of a private apartment. Its distinct interiors, blending openness and harmony, create a restful and elegant setting.',
        suiteSeniorCapacity: 'Total capacity (2 Junior VIP Suites): 4 adults + 4 children',
        suiteSeniorWeekRate: 'Weekly rate: 280,000 FCFA',
        suiteSeniorWeekendRate: 'Weekend rate: 350,000 FCFA',
        suiteJuniorVipSubtitle: 'The <span class="highlight text-[#B78F62]">junior VIP</span> suite',
        suiteJuniorVipDescription: 'With its 70 m², the Junior VIP Suite combines contemporary design, natural materials and local inspiration. Bright and refined, it reveals authentic luxury in its greatest simplicity. This VIP suite offers exceptional comfort with two connecting suites.',
        suiteJuniorVipCapacity: 'Capacity: 2 Connecting suites',
        suiteJuniorVipWeekRate: 'Weekly rate: 520,000 FCFA (2 Suites)',
        suiteJuniorVipWeekendRate: 'Weekend rate: 650,000 FCFA (2 Suites)',
        suiteSeniorVipSubtitle: 'The <span class="highlight text-[#B78F62]">senior VIP</span> suite',
        suiteSeniorVipDescription: 'With an area of 85.91 m², the Senior VIP Suite offers spacious volumes reminiscent of the comfort of a private apartment. Its distinct interiors, blending openness and harmony, create a restful and elegant setting. This VIP suite offers exceptional comfort for an unforgettable stay.',
        suiteSeniorVipCapacity: 'Total capacity (2 Junior VIP Suites): 4 adults + 4 children',
        suiteSeniorVipWeekRate: 'Weekly rate: 320,000 FCFA',
        suiteSeniorVipWeekendRate: 'Weekend rate: 400,000 FCFA',
        suiteVillaFamilialeSubtitle: 'The <span class="highlight text-[#B78F62]">Family Villa</span>',
        suiteVillaFamilialeDescription: 'Open onto L\'Escapade\'s lush garden, the Family Villa is a true haven of exception. With its private pool and large terrace bordered by coconut trees, it offers a soothing view of the hotel\'s green spaces. With its two bedrooms, elegant living room and generous volumes, this suite is designed to welcome families and loved ones in absolute comfort. Every detail reflects Ivorian hospitality.',
        suiteVillaFamilialeCapacity: 'Capacity: Family',
        suiteVillaFamilialeRate: 'Rate: On request',
        privatePool: 'Private pool',
      },
      events: {
        eventsHeroTitle: 'EVENTS',
        eventsSectionTitle: 'EVENTS <span class="highlight">L\'ESCAPADE</span>',
        eventsParagraph1: 'L\'Escapade is the ideal setting to celebrate life\'s great moments. Waterfront weddings, birthdays, small-group retreats, or large celebrations bringing together up to 2,000 guests: every event finds its perfect setting here.',
        eventsParagraph2: 'At L\'Escapade, elegance and nature come together to offer a setting where the most precious memories are created and the most beautiful inspirations are born.',
        eventsParagraph3: 'Enjoy your event to the fullest, we take care of the rest. From setup to decoration, through catering, entertainment, and even guest accommodation, our team coordinates every detail with care and flexibility.',
        eventsParagraph4: 'You can choose your own service providers, or entrust everything to our organization for a turnkey service, always adapted to your wishes.',
        eventsSpacesTitle: 'Our spaces adapt to all your wishes:',
        eventsSpace1: '● a natural beach facing the lagoon for unforgettable ceremonies,',
        eventsSpace2: '● an outdoor pool for lively evenings,',
        eventsSpace3: '● a refined lounge and restaurant for elegant receptions,',
        eventsSpace4: '● a dedicated room for seminars, team building and professional meetings.',
      },
      about: {
        aboutHeroTitle: 'About',
        aboutSectionTitle: 'ABOUT',
        aboutParagraph1: 'Located at kilometer 12, L\'Escapade opens its doors to you in Assinie, an emblematic seaside resort in Côte d\'Ivoire. Just 90km from Abidjan, this peaceful village stretches between the Aby Lagoon and the Atlantic Ocean, offering an exceptional natural setting. Once fishing grounds, Assinie has transformed into an international destination, welcoming a growing number of visitors each year in search of calm and authenticity. With its 30-kilometer-long fine sand beach, its coconut trees, its peaceful lagoons, and its gentle way of life, Assinie is an invitation to escape.',
      },
    },
  };

  const attributeTargets = new Map();

  function getStoredLanguage() {
    const stored = window.localStorage?.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_LANGS.includes(stored)) {
      return stored;
    }
    return FALLBACK_LANG;
  }

  function persistLanguage(lang) {
    try {
      window.localStorage?.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore storage errors (e.g., private browsing)
    }
  }

  function getPageScope() {
    const page = document.body?.dataset?.page || 'common';
    // Mapper les pages de suites individuelles au scope "suites"
    if (page && (page.startsWith('suite-') || page === 'suite-list')) {
      return 'suites';
    }
    // Mapper les pages d'événements
    if (page === 'events' || page === 'evenementiel') {
      return 'events';
    }
    // Mapper les pages à propos
    if (page === 'about' || page === 'apropos') {
      return 'about';
    }
    return page;
  }

  function buildLookup(lang) {
    const page = getPageScope();
    const dict = translations[lang] || {};
    return {
      ...dict.common,
      ...(dict[page] || {}),
    };
  }

  function ensureFrenchBaseline() {
    const frDict = translations.fr;
    const page = getPageScope();

    if (!frDict.common) {
      frDict.common = {};
    }
    if (!frDict[page]) {
      frDict[page] = {};
    }

    document.querySelectorAll('[data-translate]').forEach((el) => {
      const key = el.dataset.translate;
      if (!key) return;

      const attr = el.dataset.translateAttr;

      if (attr) {
        const targets = attr.split(',').map((a) => a.trim()).filter(Boolean);
        targets.forEach((targetAttr) => {
          const value = el.getAttribute(targetAttr);
          if (value != null && !attributeTargets.has(`${key}:${targetAttr}`)) {
            attributeTargets.set(`${key}:${targetAttr}`, targetAttr);
          }
          if (value != null && !frDict.common[key] && !frDict[page][key]) {
            frDict[page][key] = frDict[page][key] || {};
          }
          if (value != null) {
            frDict[page][key] = frDict[page][key] || {};
            frDict[page][key][targetAttr] = value;
            frDict.common[key] = frDict.common[key] || {};
            if (typeof frDict.common[key] !== 'object') {
              frDict.common[key] = {};
            }
            frDict.common[key][targetAttr] = frDict.common[key][targetAttr] ?? value;
          }
        });
      } else {
        const content = el.innerHTML;
        if (!frDict.common[key] && !frDict[page][key]) {
          frDict[page][key] = content;
        }
        if (!frDict.common[key]) {
          frDict.common[key] = content;
        }
      }
    });
  }

  function getFrenchValue(key, attr) {
    const page = getPageScope();
    const frDict = translations.fr;
    const candidate =
      (frDict[page] && frDict[page][key]) ||
      (frDict.common && frDict.common[key]);

    if (!candidate) return null;
    if (attr) {
      if (typeof candidate === 'object') {
        return candidate[attr] ?? null;
      }
      return null;
    }
    if (typeof candidate === 'object') {
      return null;
    }
    return candidate;
  }

  function applyTranslations(lang) {
    const lookup = buildLookup(lang);
    const isFrench = lang === 'fr';

    // Définir la langue sur l'élément html immédiatement
    if (document.documentElement) {
      document.documentElement.lang = lang;
    }

    // Appliquer les traductions de manière optimisée
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach((el) => {
      const key = el.dataset.translate;
      if (!key) return;

      const attrDescriptor = el.dataset.translateAttr;

      if (attrDescriptor) {
        const targets = attrDescriptor.split(',').map((a) => a.trim()).filter(Boolean);
        targets.forEach((attr) => {
          const value = lookup[key];
          if (value && typeof value === 'object' && value[attr] != null) {
            el.setAttribute(attr, value[attr]);
          } else if (isFrench) {
            const fallback = getFrenchValue(key, attr);
            if (fallback != null) {
              el.setAttribute(attr, fallback);
            }
          }
        });
        return;
      }

      const translation = lookup[key];

      if (translation != null) {
        el.innerHTML = translation;
      } else if (isFrench) {
        const fallback = getFrenchValue(key);
        if (fallback != null) {
          el.innerHTML = fallback;
        }
      }
    });

    // Synchroniser les lang-switcher
    syncActiveLanguage(lang);
    
    // Déclencher un événement personnalisé pour notifier le changement de langue
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  function syncActiveLanguage(lang) {
    const langControls = document.querySelectorAll('[data-lang]');
    langControls.forEach((control) => {
      const controlLang = control.dataset.lang;
      if (!controlLang) return;
      
      // Vérifier si le contrôle est dans un menu-lang-switcher
      const isMenuLangSwitcher = control.closest('.menu-lang-switcher');
      const isLangSwitcher = control.closest('.lang-switcher');
      
      if (controlLang === lang) {
        // Activer la langue
        control.classList.add('lang-active');
        control.setAttribute('aria-current', 'true');
        
        // Pour menu-lang-switcher, ajouter aussi la classe "active"
        if (isMenuLangSwitcher) {
          control.classList.add('active');
        }
        
        // Pour lang-switcher, ajouter font-medium pour le style visuel
        if (isLangSwitcher) {
          control.classList.add('font-medium');
        }
      } else {
        // Désactiver la langue
        control.classList.remove('lang-active', 'active', 'font-medium');
        control.removeAttribute('aria-current');
      }
    });
  }

  function handleSwitcherClicks() {
    // Utiliser la délégation d'événements sur document pour capturer tous les clics
    // Utiliser la phase de capture pour intercepter tôt et éviter les conflits
    document.addEventListener('click', (event) => {
      const target = event.target.closest('[data-lang]');
      if (!target) return;

      const lang = target.dataset.lang;
      if (!lang || !SUPPORTED_LANGS.includes(lang)) return;

      // Empêcher la navigation mais ne pas interférer avec le menu overlay
      event.preventDefault();
      event.stopPropagation();
      
      // Sauvegarder et appliquer la langue instantanément
      persistLanguage(lang);
      applyTranslations(lang);
      
      // Forcer une nouvelle application pour s'assurer que tout est traduit
      requestAnimationFrame(() => {
        applyTranslations(lang);
      });
    }, true); // Utiliser la phase de capture pour intercepter tôt
  }

  // Observer pour détecter les nouveaux éléments ajoutés dynamiquement
  let translationObserver = null;
  
  function setupTranslationObserver() {
    if (!window.MutationObserver) return;
    
    translationObserver = new MutationObserver((mutations) => {
      let shouldReapply = false;
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) { // Element node
              if (node.hasAttribute && node.hasAttribute('data-translate')) {
                shouldReapply = true;
              } else if (node.querySelectorAll) {
                const hasTranslations = node.querySelectorAll('[data-translate]').length > 0;
                if (hasTranslations) shouldReapply = true;
              }
            }
          });
        }
      });
      
      if (shouldReapply) {
        const currentLang = getStoredLanguage();
        applyTranslations(currentLang);
      }
    });
    
    // Observer les changements dans le body
    if (document.body) {
      translationObserver.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
  }

  // Appliquer la langue immédiatement, même avant DOMContentLoaded pour éviter le flash
  function initTranslations() {
    // Charger la langue sauvegardée immédiatement
    const lang = getStoredLanguage();
    
    // Définir la langue sur l'élément html immédiatement
    if (document.documentElement) {
      document.documentElement.lang = lang;
    }
    
    // Fonction pour appliquer les traductions de manière agressive
    const applyNow = () => {
      ensureFrenchBaseline();
      handleSwitcherClicks();
      
      // Appliquer immédiatement
      applyTranslations(lang);
      
      // Réappliquer plusieurs fois pour s'assurer que tout est traduit
      // (certains éléments peuvent être ajoutés dynamiquement)
      setTimeout(() => {
        applyTranslations(lang);
      }, 10);
      
      setTimeout(() => {
        applyTranslations(lang);
      }, 100);
      
      setTimeout(() => {
        applyTranslations(lang);
      }, 300);
      
      setupTranslationObserver();
    };
    
    // Appliquer la langue dès que possible
    if (document.readyState === 'loading') {
      // Si le DOM est encore en cours de chargement, attendre DOMContentLoaded
      document.addEventListener('DOMContentLoaded', applyNow);
      
      // Mais aussi essayer d'appliquer dès que le body est disponible
      if (document.body) {
        applyNow();
      } else {
        // Observer l'apparition du body
        const bodyObserver = new MutationObserver((mutations, obs) => {
          if (document.body) {
            applyNow();
            obs.disconnect();
          }
        });
        bodyObserver.observe(document.documentElement, {
          childList: true,
          subtree: true
        });
      }
    } else {
      // DOM déjà chargé
      applyNow();
    }
  }

  // Démarrer immédiatement
  initTranslations();
})();

