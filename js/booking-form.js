/**
 * Script pour rendre fonctionnel le formulaire de réservation
 * - Sélecteurs de dates pour Arrivée et Départ
 * - Compteur d'invités avec boutons plus/minus
 */

(function() {
  'use strict';

  // Initialisation
  document.addEventListener('DOMContentLoaded', function() {
    initDateFields();
    initGuestCounter();
  });

  /**
   * Initialise les champs de date (Arrivée et Départ)
   */
  function initDateFields() {
    const arrivalInput = document.getElementById('arrival');
    const departureInput = document.getElementById('departure');
    
    if (!arrivalInput || !departureInput) return;
    
    // Définir la date minimale (aujourd'hui)
    const today = new Date().toISOString().split('T')[0];
    arrivalInput.setAttribute('min', today);
    departureInput.setAttribute('min', today);

    // Fonction pour ouvrir le calendrier
    function openDatePicker(input) {
      // Essayer showPicker() d'abord (API moderne)
      if (typeof input.showPicker === 'function') {
        try {
          input.showPicker();
          return;
        } catch (e) {
          // showPicker() peut échouer dans certains contextes
        }
      }
      
      // Fallback : focus et clic
      input.focus();
      // Simuler un clic pour ouvrir le calendrier natif
      input.click();
    }

    // Écouter les changements sur le champ Arrivée
    arrivalInput.addEventListener('change', function() {
      const arrivalDate = this.value;
      updateDateDisplay('arrival', arrivalDate);
      
      // Mettre à jour la date minimale du champ Départ
      if (arrivalDate) {
        const minDepartureDate = new Date(arrivalDate + 'T00:00:00');
        minDepartureDate.setDate(minDepartureDate.getDate() + 1);
        departureInput.setAttribute('min', minDepartureDate.toISOString().split('T')[0]);
        
        // Si la date de départ est antérieure à la nouvelle date minimale, la réinitialiser
        if (departureInput.value && departureInput.value <= arrivalDate) {
          departureInput.value = '';
          updateDateDisplay('departure', '');
        }
      }
    });

    // Écouter les changements sur le champ Départ
    departureInput.addEventListener('change', function() {
      const departureDate = this.value;
      updateDateDisplay('departure', departureDate);
    });

    // Rendre les labels cliquables pour ouvrir le calendrier
    const arrivalLabel = arrivalInput.nextElementSibling;
    const departureLabel = departureInput.nextElementSibling;
    
    if (arrivalLabel) {
      arrivalLabel.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        openDatePicker(arrivalInput);
      });
    }
    
    if (departureLabel) {
      departureLabel.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        openDatePicker(departureInput);
      });
    }

    // Rendre le wrapper entier cliquable
    const arrivalWrapper = arrivalInput.closest('.date-field');
    const departureWrapper = departureInput.closest('.date-field');
    
    if (arrivalWrapper) {
      arrivalWrapper.addEventListener('click', function(e) {
        // Ne pas déclencher si on clique sur la flèche
        if (e.target.classList.contains('field-arrow') || 
            e.target.closest('.field-arrow')) {
          return;
        }
        
        // Si on clique sur le label ou le wrapper, ouvrir le calendrier
        if (e.target !== arrivalInput && 
            !e.target.classList.contains('date-value') &&
            !e.target.classList.contains('field-bg')) {
          e.preventDefault();
          e.stopPropagation();
          openDatePicker(arrivalInput);
        }
      });
    }
    
    if (departureWrapper) {
      departureWrapper.addEventListener('click', function(e) {
        // Ne pas déclencher si on clique sur la flèche
        if (e.target.classList.contains('field-arrow') || 
            e.target.closest('.field-arrow')) {
          return;
        }
        
        // Si on clique sur le label ou le wrapper, ouvrir le calendrier
        if (e.target !== departureInput && 
            !e.target.classList.contains('date-value') &&
            !e.target.classList.contains('field-bg')) {
          e.preventDefault();
          e.stopPropagation();
          openDatePicker(departureInput);
        }
      });
    }

    // S'assurer que l'input lui-même peut être cliqué
    arrivalInput.addEventListener('click', function(e) {
      e.stopPropagation();
      openDatePicker(this);
    });

    departureInput.addEventListener('click', function(e) {
      e.stopPropagation();
      openDatePicker(this);
    });
  }

  /**
   * Met à jour l'affichage de la date dans le label
   */
  function updateDateDisplay(fieldType, dateValue) {
    const fieldWrapper = document.querySelector(`.date-field[data-field="${fieldType}"]`);
    if (!fieldWrapper) return;

    const dateValueSpan = fieldWrapper.querySelector('.date-value');
    const labelTextSpan = fieldWrapper.querySelector('.label-text');
    
    if (dateValueSpan && labelTextSpan) {
      if (dateValue) {
        // Formater la date en français (ex: "15 Jan 2025")
        const date = new Date(dateValue + 'T00:00:00'); // Ajouter l'heure pour éviter les problèmes de fuseau horaire
        const formattedDate = formatDate(date);
        dateValueSpan.textContent = formattedDate;
        
        // Masquer le texte "Arrivée" ou "Départ" et afficher la date
        labelTextSpan.style.display = 'none';
        dateValueSpan.style.display = 'inline';
        dateValueSpan.style.fontSize = '18px';
        dateValueSpan.style.opacity = '0.9';
      } else {
        // Réafficher le texte "Arrivée" ou "Départ" et masquer la date
        dateValueSpan.textContent = '';
        labelTextSpan.style.display = 'inline';
        dateValueSpan.style.display = 'none';
      }
    }
  }

  /**
   * Formate la date en français
   */
  function formatDate(date) {
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }

  /**
   * Initialise le compteur d'invités
   */
  function initGuestCounter() {
    const guestInput = document.getElementById('guests');
    const guestMinus = document.getElementById('guest-minus');
    const guestPlus = document.getElementById('guest-plus');
    const guestValueSpan = document.querySelector('.guest-value');
    
    if (!guestInput || !guestMinus || !guestPlus) return;

    let guestCount = parseInt(guestInput.value) || 1;
    const minGuests = parseInt(guestInput.getAttribute('min')) || 0;
    const maxGuests = parseInt(guestInput.getAttribute('max')) || 20;

    // Fonction pour mettre à jour l'affichage
    function updateGuestDisplay() {
      guestInput.value = guestCount;
      const labelTextSpan = document.querySelector('#guest-label .label-text');
      
      // Afficher "Invités" seulement quand la valeur est 0, sinon afficher le nombre
      if (guestCount === 0) {
        // Afficher "Invités" et masquer le nombre
        if (labelTextSpan) {
          labelTextSpan.style.display = 'inline';
        }
        if (guestValueSpan) {
          guestValueSpan.style.display = 'none';
        }
      } else {
        // Afficher le nombre et masquer "Invités"
        if (labelTextSpan) {
          labelTextSpan.style.display = 'none';
        }
        if (guestValueSpan) {
          guestValueSpan.textContent = guestCount;
          guestValueSpan.style.display = 'inline';
        }
      }
      
      // Mettre à jour l'état des boutons
      guestMinus.style.opacity = guestCount <= minGuests ? '0.5' : '1';
      guestMinus.style.cursor = guestCount <= minGuests ? 'not-allowed' : 'pointer';
      
      guestPlus.style.opacity = guestCount >= maxGuests ? '0.5' : '1';
      guestPlus.style.cursor = guestCount >= maxGuests ? 'not-allowed' : 'pointer';
    }

    // Bouton moins
    guestMinus.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (guestCount > minGuests) {
        guestCount--;
        updateGuestDisplay();
      }
    });

    // Bouton plus
    guestPlus.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (guestCount < maxGuests) {
        guestCount++;
        updateGuestDisplay();
      }
    });

    // Écouter les changements directs sur l'input
    guestInput.addEventListener('change', function() {
      const newValue = parseInt(this.value);
      if (!isNaN(newValue) && newValue >= minGuests && newValue <= maxGuests) {
        guestCount = newValue;
        updateGuestDisplay();
      } else {
        this.value = guestCount;
      }
    });

    // Initialiser l'affichage
    updateGuestDisplay();
  }
})();

