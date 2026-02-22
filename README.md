# Site de mariage — Wedding Website

Site de mariage bilingue **Français / Persan** avec Next.js et Tailwind CSS.

## Fonctionnalités

- **Bilingue** : français (LTR) et persan (RTL)
- **Traductions** : fichiers JSON dans `src/locales/` (`fr.json`, `fa.json`)
- **RTL** : prise en charge du sens droite-à-gauche pour le persan (attribut `dir="rtl"` sur le document)
- **Sections** : Accueil, Programme, RSVP, Transport et logement, Liste de mariage

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000). Utiliser les boutons **FR** / **FA** dans la barre de navigation pour changer de langue.

## Structure

- `src/app/` — layout et page d’accueil
- `src/components/` — en-tête, pied de page
- `src/components/sections/` — sections du site (Accueil, Programme, RSVP, etc.)
- `src/context/LocaleContext.tsx` — contexte de langue et hook `useT()` pour les traductions
- `src/locales/fr.json` et `src/locales/fa.json` — textes par langue

## Personnalisation

- Modifier les textes dans `src/locales/fr.json` et `src/locales/fa.json`
- Adapter les couleurs dans `tailwind.config.ts` (champagne, blush, sage, gold, rose, ivory)
- Pour des polices Google (ex. Playfair Display, Vazirmatn), ajouter `next/font/google` dans `src/app/layout.tsx` et étendre `fontFamily` dans `tailwind.config.ts`

## Build

```bash
npm run build
npm start
```
