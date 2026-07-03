# CODING STANDARDS — BOD LIGHT SARL

## Vision

Écrire un code propre, moderne, réutilisable, maintenable et évolutif.

Chaque fichier doit être simple à comprendre et respecter les bonnes pratiques de Next.js et React.

---

# Technologies

Toujours utiliser :

- Next.js (App Router)
- React
- Tailwind CSS
- JavaScript ES6+

Ne jamais utiliser Bootstrap.

---

# Architecture

Respecter la structure du projet.

Ne jamais créer de dossiers inutiles.

Organiser le code de manière logique.

---

# Organisation des composants

Chaque composant doit avoir une seule responsabilité.

Exemple :

Navbar → Navigation

Hero → Présentation principale

ServiceCard → Carte de service

Footer → Pied de page

---

# Nommage

## Composants

Toujours utiliser le PascalCase.

Exemples :

Navbar.jsx

HeroSection.jsx

ServiceCard.jsx

PortfolioCard.jsx

Footer.jsx

---

## Dossiers

Toujours utiliser des noms simples.

Exemple :

components

sections

hooks

lib

data

assets

---

## Variables

Utiliser le camelCase.

Exemple :

userName

serviceList

projectData

currentPage

---

## Constantes

Toujours en MAJUSCULES.

Exemple :

MAX_FILE_SIZE

SITE_NAME

PRIMARY_COLOR

---

# React

Toujours utiliser :

- Functional Components
- React Hooks

Ne jamais utiliser les Class Components.

---

# Props

Les composants doivent recevoir uniquement les données nécessaires.

Éviter de transmettre des objets volumineux.

---

# Fonctions

Une fonction = une seule responsabilité.

Privilégier des fonctions courtes.

Éviter les fonctions de plus de 40 lignes lorsque c'est possible.

---

# Imports

Toujours regrouper les imports.

Ordre recommandé :

1. React / Next.js
2. Librairies externes
3. Composants
4. Hooks
5. Utilitaires
6. Styles

---

# Tailwind CSS

Utiliser uniquement Tailwind CSS.

Éviter les styles inline.

Créer des composants réutilisables avant de dupliquer du code.

---

# Responsive

Tous les composants doivent fonctionner sur :

- Desktop
- Laptop
- Tablette
- Mobile

Le responsive est obligatoire.

---

# Images

Utiliser le composant Image de Next.js.

Optimiser toutes les images.

Prévoir un texte alternatif (alt).

---

# Accessibilité

Toujours prévoir :

- alt sur les images
- aria-label si nécessaire
- navigation clavier
- contraste suffisant
- focus visible

---

# Performance

Toujours privilégier :

- Lazy Loading
- Code Splitting
- Optimisation des images
- Composants légers
- Réduction des re-rendus inutiles

---

# SEO

Chaque page doit contenir :

- Title
- Meta Description
- Open Graph
- URL propre

---

# Commentaires

Commenter uniquement les parties complexes.

Ne jamais commenter un code évident.

---

# Gestion des erreurs

Toujours prévoir :

- Validation des formulaires
- Messages d'erreur explicites
- États de chargement
- Gestion des erreurs réseau

---

# Qualité du code

Le code doit être :

- Simple
- Lisible
- Réutilisable
- Testable
- Maintenable
- Évolutif

---

# Règles de développement

Avant chaque développement :

1. Lire la documentation du projet.
2. Respecter le Design System.
3. Réutiliser les composants existants.
4. Ne jamais dupliquer le code.
5. Tester avant de terminer.

---

# Définition de terminé (Definition of Done)

Une tâche est considérée comme terminée si :

- Le code compile sans erreur.
- ESLint ne signale aucune erreur importante.
- Le responsive est fonctionnel.
- L'accessibilité est respectée.
- Les performances sont satisfaisantes.
- Le composant est réutilisable.
- Le code est propre et documenté si nécessaire.