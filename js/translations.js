/**
 * Système de traduction FR/EN pour tout le site
 */

const translations = {
  fr: {
    // Navigation
    menu: "MENU",
    close: "FERMER",
    reserveSuite: "Réserver une suite",
    reserveSpace: "Réserver un espace",
    contactUs: "Nous Contactez",
    
    // Menu navigation
    roomsSuites: "CHAMBRES & SUITE",
    restaurant: "LE RESTAURANT",
    lounge: "LE LOUNGE",
    event: "ÉVÉNEMENTIEL",
    about: "A PROPOS",
    
    // Formulaire de réservation
    arrival: "Arrivée",
    departure: "Départ",
    guests: "Invités",
    findSuite: "Trouver une suite",
    
    // Page d'accueil
    welcomeTo: "Bienvenue à",
    escapade: "l'Escapade",
    welcomeText: "L'Escapade Hôtel, <strong>depuis mai 2025</strong>. Venez découvrir un refuge élégant posé <strong>en bordure de lagune</strong> à <strong>Assinie</strong>.",
    experienceText: "Ici, le temps s'étire et les sens s'éveillent. Entre nature apaisante et raffinement discret, votre voyage commence là où le luxe rencontre la quiétude. Érigé sur 3,5 hectares, le domaine abrite 22 suites juniors et seniors au design épuré, pensées pour offrir confort, intimité et sérénité à chaque hôte. À L'Escapade, chaque instant devient une invitation au lâcher-prise",
    learnMore: "En savoir plus",
    discover: "Découvrez",
    
    // Sections communes
    nosChambres: "Nos Chambres",
    suites: "Suites",
    voirChambre: "Voir la chambre",
    voirSuite: "Voir la suite",
    
    // Restaurant
    restaurantTitle: "RESTAURANT",
    restaurantSubtitle: "L' ESCAPADE",
    notreChef: "NOTRE CHEF",
    specialites: "SES SPÉCIALITÉS",
    nosPlats: "NOS PLATS",
    voirMenu: "Voir notre menu",
    
    // Lounge
    loungeTitle: "LOUNGE",
    loungeSubtitle: "L'ESCAPADE",
    boissons: "Boissons",
    cocktailsRaffines: "& Cocktails Raffinés",
    
    // Événementiel
    evenementielTitle: "EVENEMENTIEL",
    evenementielSubtitle: "L'ESCAPADE",
    
    // À propos
    aPropos: "A PROPOS",
    
    // Suites
    suiteJunior: "SUITE JUNIOR",
    suiteSenior: "SUITE SÉNIOR",
    chambresSuites: "CHAMBRES & SUITES",
    
    // Textes communs
    voirSuite: "Voir la suite",
    reserver: "Réserver",
    reserverMaintenant: "Réserver maintenant",
    contact: "Contact",
    paiement: "Paiement",
    nom: "Nom",
    prenom: "Prénom",
    email: "E-mail",
    telephone: "Téléphone",
    message: "Message",
    envoyer: "Envoyer",
    
    // Restaurant - Textes détaillés
    restaurantText1: "Ouvert de <strong>7h30 à 22h30</strong>, le restaurant L'Escapade accueille ses hôtes tout au long de la journée. La carte invite à un voyage savoureux entre <strong>Méditerranée</strong> et <strong>Côte d'Ivoire</strong>. Chaque plat incarne un brassage culturel raffiné, mêlant recettes ancestrales ivoiriennes et techniques contemporaines du monde.",
    restaurantText2: "Poissons frais, fruits de mer, crustacés et spécialités locales se déclinent avec créativité et authenticité pour une expérience culinaire inoubliable.",
    restaurantText3: "Le restaurant de L'Escapade est une adresse bistronomique où se rencontrent goût, générosité et élégance pour offrir une expérience culinaire inoubliable.",
    restaurantText4: "Dans un décor alliant charme local et raffinement contemporain, chaque repas se vit comme une véritable escapade sensorielle.",
    chefText1: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
    chefText2: "Le chef sublime les produits locaux par un savoir-faire d'exception, entre tradition ivoirienne et gastronomie internationale.",
    chefNom: "Le nom du Chef...",
    chefText3: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiumdoloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis. Entre passion et précision, chaque plat devient une œuvre d'art, alliant créativité et respect du produit.",
    
    // Lounge - Textes détaillés
    loungeText1: "Une ambiance citadine à Assinie. Le lounge de L'Escapade marie l'élégance urbaine et la douceur balnéaire : un lieu pensé pour se détendre, se retrouver et profiter d'instants simples dans un cadre raffiné. Un lounge à l'abidjanaise. Ici, l'énergie conviviale de la capitale s'accorde à la sérénité de la lagune pour offrir une expérience unique.",
    loungeText2: "Le goût des vacances, à savourer sans modération. Cocktails exotiques, jus de fruits frais, vins choisis et spiritueux raffinés composent notre carte, servis avec une attention discrète et chaleureuse.",
    loungeText3: "Un voyage sensoriel à chaque gorgée. Cocktails signature, jus frais, vous attendent, servis avec élégance et sourire.",
    loungeText4: "Dans une atmosphère où le luxe rencontre la sérénité, le Lounge vous invite à un moment d'exception. Entre lumière tamisée, notes subtiles et service attentif, chaque instant devient une expérience unique — un art de vivre à savourer pleinement.",
    notreLounge: "Notre",
    
    // Événementiel - Textes détaillés
    evenementielText1: "L'Escapade est la scène idéale pour célébrer les grands moments de la vie. Mariages au bord de l'eau, anniversaires, retraites en petit comité ou grandes célébrations réunissant jusqu'à 2 000 invités : chaque événement trouve ici son écrin.",
    evenementielText2: "Un salon dédié aux séminaires, team building et rencontres professionnelles.",
    evenementielText3: "Situé au kilomètre 12, L'Escapade vous ouvre ses portes à Assinie, station balnéaire emblématique de la Côte d'Ivoire.",
    
    // À propos - Textes détaillés
    aproposText1: "<strong>L'Escapade Hôtel, depuis mai 2025.</strong> Venez découvrir un refuge élégant posé en bordure de lagune à Assinie. Ici, le temps s'étire et les sens s'éveillent. Entre nature apaisante et raffinement discret, votre voyage commence là où le luxe rencontre la quiétude.",
    aproposText2: "Érigé sur <strong>3,5 hectares</strong>, le domaine abrite 22 suites juniors et seniors au design épuré, pensées pour offrir confort, intimité et sérénité à chaque hôte.",
    aproposText3: "À L'Escapade, chaque instant devient une invitation au lâcher-prise.",
    aproposText4: "À seulement 90km d'Abidjan, ce village paisible s'étend entre la lagune Aby et l'Océan Atlantique, offrant un décor naturel d'exception. Autrefois terres de pêcheurs, Assinie s'est transformée en une destination internationale, accueillant chaque année un nombre croissant de visiteurs en quête de calme et d'authenticité. Avec sa plage de sable fin longue de 30 kilomètres, ses cocotiers, ses lagunes paisibles et sa douceur de vivre, Assinie est une invitation à l'évasion.",
    
    // Suites - Textes détaillés
    suitesText1: "Le confort d'un appartement privé mêlant ouverture et harmonie, Nos suites allant de <b>70 m² à 85 m²</b> allient design contemporain, matières naturelles et inspirations locales. Lumineuses et raffinées, elles révèlent un luxe authentique dans sa plus grande simplicité.",
    suitesText2: "Le confort d'un appartement privé mêlant ouverture et harmonie, créent un cadre reposant et élégant. Ici, chaque détail célèbre l'art de vivre : le bois, la lumière, la douceur des tissus, la sérénité des volumes. Un équilibre parfait entre nature et élégance.",
    suiteJuniorText: "Avec ses 70 m², la Suite Junior allie design contemporain, matières naturelles et inspirations locales. Lumineuse et raffinée, elle révèle un luxe authentique dans sa plus grande simplicité.",
    laSuite: "La suite",
    junior: "junior",
    capacite: "Capacité : 2 adultes + 2 enfants",
    tarifSemaine: "Tarif semaine : 200 000 FCFA",
    tarifWeekend: "Tarif week-end : 250 000 FCFA",
    
    // Index - Textes supplémentaires
    nosChambresSuites: "Nos Chambres",
    suitesJunior: "Suites Junior",
    suitesSeniorVIP: "Suites Sénior VIP",
    suitesSenior: "Suites Sénior",
    suitesJuniorVIP: "Suites Junior VIP",
    restaurantEscapade: "Restaurant L'Escapade",
    loungeEscapade: "Lounge L'Escapade",
    
    // Événementiel - Textes supplémentaires
    evenementielText4: "À L'Escapade, élégance et nature se rejoignent pour offrir un cadre où se créent les souvenirs les plus précieux et où naissent les plus belles inspirations.",
    evenementielText5: "Profitez pleinement de votre événement, nous nous occupons du reste. De la mise en place à la décoration, en passant par la restauration, l'animation et même l'hébergement des invités, notre équipe coordonne chaque détail avec soin et flexibilité.",
    evenementielText6: "Vous pouvez choisir vos propres prestataires, ou confier l'ensemble à notre organisation pour une prestation clé en main, toujours adaptée à vos envies.",
    
    // Suite - Textes supplémentaires
    piscine: "Piscine",
    tv: "TV"
  },
  
  en: {
    // Navigation
    menu: "MENU",
    close: "CLOSE",
    reserveSuite: "Book a suite",
    reserveSpace: "Book a space",
    contactUs: "Contact Us",
    
    // Menu navigation
    roomsSuites: "ROOMS & SUITES",
    restaurant: "THE RESTAURANT",
    lounge: "THE LOUNGE",
    event: "EVENTS",
    about: "ABOUT",
    
    // Formulaire de réservation
    arrival: "Arrival",
    departure: "Departure",
    guests: "Guests",
    findSuite: "Find a suite",
    
    // Page d'accueil
    welcomeTo: "Welcome to",
    escapade: "L'Escapade",
    welcomeText: "L'Escapade Hotel, <strong>since May 2025</strong>. Come discover an elegant refuge located <strong>on the lagoon shore</strong> in <strong>Assinie</strong>.",
    experienceText: "Here, time stretches and the senses awaken. Between soothing nature and discreet refinement, your journey begins where luxury meets tranquility. Built on 3.5 hectares, the estate houses 22 junior and senior suites with a refined design, designed to offer comfort, intimacy and serenity to each guest. At L'Escapade, every moment becomes an invitation to let go",
    learnMore: "Learn more",
    discover: "Discover",
    
    // Sections communes
    nosChambres: "Our Rooms",
    suites: "Suites",
    voirChambre: "View room",
    voirSuite: "View suite",
    
    // Restaurant
    restaurantTitle: "RESTAURANT",
    restaurantSubtitle: "L' ESCAPADE",
    notreChef: "OUR CHEF",
    specialites: "SPECIALTIES",
    nosPlats: "OUR DISHES",
    voirMenu: "View our menu",
    
    // Lounge
    loungeTitle: "LOUNGE",
    loungeSubtitle: "L'ESCAPADE",
    boissons: "Drinks",
    cocktailsRaffines: "& Refined Cocktails",
    
    // Événementiel
    evenementielTitle: "EVENTS",
    evenementielSubtitle: "L'ESCAPADE",
    
    // À propos
    aPropos: "ABOUT",
    
    // Suites
    suiteJunior: "JUNIOR SUITE",
    suiteSenior: "SENIOR SUITE",
    chambresSuites: "ROOMS & SUITES",
    
    // Textes communs
    voirSuite: "View suite",
    reserver: "Book",
    reserverMaintenant: "Book now",
    contact: "Contact",
    paiement: "Payment",
    nom: "Name",
    prenom: "First name",
    email: "E-mail",
    telephone: "Phone",
    message: "Message",
    envoyer: "Send",
    
    // Restaurant - Textes détaillés
    restaurantText1: "Open from <strong>7:30 AM to 10:30 PM</strong>, L'Escapade restaurant welcomes its guests throughout the day. The menu invites you on a flavorful journey between <strong>Mediterranean</strong> and <strong>Ivory Coast</strong>. Each dish embodies a refined cultural blend, combining ancestral Ivorian recipes and contemporary world techniques.",
    restaurantText2: "Fresh fish, seafood, shellfish and local specialties are presented with creativity and authenticity for an unforgettable culinary experience.",
    restaurantText3: "L'Escapade restaurant is a bistronomic address where taste, generosity and elegance meet to offer an unforgettable culinary experience.",
    restaurantText4: "In a setting combining local charm and contemporary refinement, each meal is lived as a true sensory escape.",
    chefText1: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
    chefText2: "The chef elevates local products through exceptional know-how, between Ivorian tradition and international gastronomy.",
    chefNom: "Chef's name...",
    chefText3: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiumdoloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis. Between passion and precision, each dish becomes a work of art, combining creativity and respect for the product.",
    
    // Lounge - Textes détaillés
    loungeText1: "An urban atmosphere in Assinie. L'Escapade lounge combines urban elegance and seaside softness: a place designed to relax, reconnect and enjoy simple moments in a refined setting. An Abidjan-style lounge. Here, the convivial energy of the capital harmonizes with the serenity of the lagoon to offer a unique experience.",
    loungeText2: "The taste of vacation, to be savored without moderation. Exotic cocktails, fresh fruit juices, selected wines and refined spirits compose our menu, served with discreet and warm attention.",
    loungeText3: "A sensory journey with every sip. Signature cocktails, fresh juices await you, served with elegance and a smile.",
    loungeText4: "In an atmosphere where luxury meets serenity, the Lounge invites you to an exceptional moment. Between soft lighting, subtle notes and attentive service, every moment becomes a unique experience — an art of living to be fully savored.",
    notreLounge: "Our",
    
    // Événementiel - Textes détaillés
    evenementielText1: "L'Escapade is the ideal stage to celebrate life's great moments. Waterfront weddings, birthdays, intimate retreats or large celebrations bringing together up to 2,000 guests: every event finds its setting here.",
    evenementielText2: "A room dedicated to seminars, team building and professional meetings.",
    evenementielText3: "Located at kilometer 12, L'Escapade opens its doors to you in Assinie, the emblematic seaside resort of Ivory Coast.",
    
    // À propos - Textes détaillés
    aproposText1: "<strong>L'Escapade Hotel, since May 2025.</strong> Come discover an elegant refuge located on the lagoon shore in Assinie. Here, time stretches and the senses awaken. Between soothing nature and discreet refinement, your journey begins where luxury meets tranquility.",
    aproposText2: "Built on <strong>3.5 hectares</strong>, the estate houses 22 junior and senior suites with a refined design, designed to offer comfort, intimacy and serenity to each guest.",
    aproposText3: "At L'Escapade, every moment becomes an invitation to let go.",
    aproposText4: "Just 90km from Abidjan, this peaceful village stretches between the Aby lagoon and the Atlantic Ocean, offering an exceptional natural setting. Once fishing lands, Assinie has transformed into an international destination, welcoming a growing number of visitors each year in search of calm and authenticity. With its 30-kilometer long fine sand beach, its coconut trees, its peaceful lagoons and its gentle way of life, Assinie is an invitation to escape.",
    
    // Suites - Textes détaillés
    suitesText1: "The comfort of a private apartment combining openness and harmony, Our suites ranging from <b>70 m² to 85 m²</b> combine contemporary design, natural materials and local inspirations. Bright and refined, they reveal authentic luxury in its greatest simplicity.",
    suitesText2: "The comfort of a private apartment combining openness and harmony, creates a restful and elegant setting. Here, every detail celebrates the art of living: wood, light, the softness of fabrics, the serenity of volumes. A perfect balance between nature and elegance.",
    suiteJuniorText: "With its 70 m², the Junior Suite combines contemporary design, natural materials and local inspirations. Bright and refined, it reveals authentic luxury in its greatest simplicity.",
    laSuite: "The",
    junior: "junior suite",
    capacite: "Capacity: 2 adults + 2 children",
    tarifSemaine: "Weekly rate: 200,000 FCFA",
    tarifWeekend: "Weekend rate: 250,000 FCFA",
    
    // Index - Textes supplémentaires
    nosChambresSuites: "Our Rooms",
    suitesJunior: "Junior Suites",
    suitesSeniorVIP: "Senior VIP Suites",
    suitesSenior: "Senior Suites",
    suitesJuniorVIP: "Junior VIP Suites",
    restaurantEscapade: "L'Escapade Restaurant",
    loungeEscapade: "L'Escapade Lounge",
    
    // Événementiel - Textes supplémentaires
    evenementielText4: "At L'Escapade, elegance and nature come together to offer a setting where the most precious memories are created and where the most beautiful inspirations are born.",
    evenementielText5: "Fully enjoy your event, we take care of the rest. From setup to decoration, through catering, entertainment and even guest accommodation, our team coordinates every detail with care and flexibility.",
    evenementielText6: "You can choose your own providers, or entrust everything to our organization for a turnkey service, always adapted to your wishes.",
    
    // Suite - Textes supplémentaires
    piscine: "Pool",
    tv: "TV"
  }
};

// Fonction pour obtenir la langue actuelle
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'fr';
}

// Fonction pour définir la langue
function setLanguage(lang) {
  if (translations[lang]) {
    localStorage.setItem('language', lang);
    applyTranslations(lang);
    updateLanguageSwitcher(lang);
  }
}

// Fonction pour appliquer les traductions
function applyTranslations(lang) {
  const langData = translations[lang];
  if (!langData) return;
  
  // Traduire tous les éléments avec data-translate
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (langData[key]) {
      // Si l'élément contient du HTML (comme <strong>), utiliser innerHTML
      if (langData[key].includes('<')) {
        element.innerHTML = langData[key];
      } else {
        element.textContent = langData[key];
      }
    }
  });
  
  // Traduire les labels de formulaire
  document.querySelectorAll('label[data-translate]').forEach(label => {
    const key = label.getAttribute('data-translate');
    const labelText = label.querySelector('.label-text');
    if (labelText && langData[key]) {
      labelText.textContent = langData[key];
    }
  });
}

// Fonction pour mettre à jour le sélecteur de langue
function updateLanguageSwitcher(lang) {
  // Mettre à jour les sélecteurs dans le header
  document.querySelectorAll('.lang-switcher a').forEach((link, index) => {
    if (lang === 'fr') {
      if (index === 0) {
        link.classList.add('lang-active');
        link.classList.add('font-medium');
      } else {
        link.classList.remove('lang-active');
        link.classList.remove('font-medium');
      }
    } else {
      if (index === 1) {
        link.classList.add('lang-active');
        link.classList.add('font-medium');
      } else {
        link.classList.remove('lang-active');
        link.classList.remove('font-medium');
      }
    }
  });
  
  // Mettre à jour les sélecteurs dans le menu burger
  document.querySelectorAll('.menu-lang-switcher a').forEach((link, index) => {
    if (lang === 'fr') {
      if (index === 0) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    } else {
      if (index === 1) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
}

// Initialisation au chargement de la page
function initTranslations() {
  const currentLang = getCurrentLanguage();
  applyTranslations(currentLang);
  updateLanguageSwitcher(currentLang);
  
  // Ajouter les event listeners pour les sélecteurs de langue
  document.querySelectorAll('.lang-switcher a').forEach((link, index) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = index === 0 ? 'fr' : 'en';
      setLanguage(lang);
    });
  });
  
  // Ajouter les event listeners pour le menu burger
  document.querySelectorAll('.menu-lang-switcher a').forEach((link, index) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = index === 0 ? 'fr' : 'en';
      setLanguage(lang);
    });
  });
}

// Initialiser quand le DOM est prêt
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTranslations);
} else {
  initTranslations();
}

// Exporter pour utilisation externe si nécessaire
window.translations = translations;
window.setLanguage = setLanguage;
window.getCurrentLanguage = getCurrentLanguage;
