document.addEventListener('DOMContentLoaded', async function() {
    const form = document.getElementById('reservation-contact-form');
    const csrfTokenInput = document.getElementById('csrf-token-reservation4');

    if (!form) return;

    // Récupérer le token CSRF (optionnel maintenant)
    if (csrfTokenInput) {
        try {
            const response = await fetch('/api/csrf-token');
            const data = await response.json();
            csrfTokenInput.value = data.token;
        } catch (error) {
            console.error('Erreur lors de la récupération du token CSRF:', error);
        }
    }

    // Gérer la soumission du formulaire - redirection directe sans validation
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Rediriger directement vers la page de confirmation sans validation
        window.location.href = 'reservation5.html';
    });
});

