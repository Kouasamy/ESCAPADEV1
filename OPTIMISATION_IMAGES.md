# Guide d'Optimisation des Images

Ce document explique les optimisations d'images implémentées pour améliorer les performances du site.

## Optimisations Implémentées

### 1. Script d'Optimisation Automatique (`js/image-optimizer.js`)

Le script `image-optimizer.js` applique automatiquement les optimisations suivantes :

- **Lazy Loading** : Les images en dessous de la ligne de flottaison sont chargées en lazy loading
- **Fetch Priority** : Les images critiques (logo, menu, boutons) sont chargées en priorité
- **Decoding Async** : Le décodage des images est asynchrone pour améliorer les performances
- **Intersection Observer** : Utilise l'API moderne pour détecter quand charger les images

### 2. Images Critiques (chargement immédiat)

Les images suivantes sont considérées comme critiques et sont chargées en priorité :
- Logo (`images/568_819.svg`)
- Icône menu (`images/568_939.svg`)
- Séparateur de langue (`images/568_837.svg`)
- Boutons de navigation header
- Formulaires de réservation

### 3. Images Non-Critiques (lazy loading)

Les images suivantes utilisent le lazy loading :
- Images décoratives (`media/*.svg`)
- Images de contenu (`img/*.jpg`, `images/*.png`)
- Bordures de titre (`images/574_538.png`)
- Images de sections en bas de page

## Utilisation

### Ajouter le script à une nouvelle page

Ajoutez cette ligne dans le `<head>` de votre page HTML :

```html
<script src="js/image-optimizer.js" defer></script>
```

### Attributs Recommandés

Pour les images critiques (au-dessus de la ligne de flottaison) :
```html
<img src="images/logo.svg" fetchpriority="high" width="150" height="150" alt="Logo">
```

Pour les images non-critiques (en dessous de la ligne de flottaison) :
```html
<img src="images/content.jpg" loading="lazy" decoding="async" alt="Content">
```

## Bénéfices

- **Amélioration du temps de chargement initial** : Seules les images critiques sont chargées immédiatement
- **Réduction de la consommation de bande passante** : Les images sont chargées uniquement quand nécessaire
- **Meilleure expérience utilisateur** : Le site se charge plus rapidement
- **Score Lighthouse amélioré** : Meilleure performance et meilleur SEO

## Notes Techniques

- Le script utilise `IntersectionObserver` avec un `rootMargin` de 50px pour commencer à charger les images avant qu'elles soient visibles
- Les images déjà dans le viewport au chargement ne sont pas mises en lazy loading
- Le script surveille les nouveaux éléments ajoutés dynamiquement via `MutationObserver`

