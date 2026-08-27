# Kadoya — Apprentissage des langues

Plateforme d'apprentissage des langues pour les francophones (le japonais est la première langue proposée) : alphabets, vocabulaire, examens et entraînement à l'entretien, connectée à Supabase.

## Démarrage rapide

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

Le fichier `.env.local` est déjà rempli avec les clés de votre projet Supabase
(`japanese-interview-trainer`, ref `prtweegmygxfckmybyfa`). Rien à configurer.

## Ce qui est déjà en place

- **Base de données Supabase** : schéma complet (profils, thèmes, questions,
  options QCM, réponses modèles, sessions, réponses, favoris), RLS activé sur
  toutes les tables, 95 questions + 380 options QCM + 95 réponses modèles déjà
  insérées.
- **Authentification** : inscription / connexion par e-mail + mot de passe via
  Supabase Auth, session gérée par cookies (middleware Next.js), routes protégées.
- **3 modes d'entraînement** :
  - Facile : QCM à 4 choix, correction stricte.
  - Moyen : réponse libre, comparaison floue (distance de Levenshtein) tolérante
    aux petites variations, avec liste de réponses acceptables par question.
  - Difficile : réponse structurée, évaluation multi-critères (longueur,
    mots-clés attendus, présence d'une justification grammaticale), retour
    détaillé.
- **Audio** : lecture des questions via la Web Speech API du navigateur
  (gratuite, aucune clé requise). Voir la section ci-dessous pour brancher un
  moteur de meilleure qualité.
- **Suivi de progression** : tableau de bord (taux de réussite, nombre de
  questions répondues), historique des sessions, questions marquées « à revoir ».
- **Sécurité** : validation des entrées avec Zod sur toutes les routes API,
  RLS Supabase (chacun ne voit que ses propres données), vérification d'auth
  systématique côté serveur, aucune clé secrète exposée côté client.

## Correction intelligente par IA (recommandé)

Les modes Moyen et Difficile utilisent l'API Anthropic (Claude) pour juger le **sens réel**
de la réponse de l'étudiant plutôt que sa ressemblance à un texte de référence figé — une
question ouverte a un nombre quasi infini de bonnes réponses possibles, une comparaison
mécanique ne peut pas toutes les accepter. C'est aussi cette IA qui convertit les réponses
orales (micro) en hiragana pur, puisque la reconnaissance vocale du navigateur transcrit
toujours en kanji standard.

**Pour l'activer** : créez une clé sur https://console.anthropic.com/settings/keys et
mettez-la dans `ANTHROPIC_API_KEY` de votre `.env.local`. Sans cette clé, l'application
fonctionne quand même (elle se rabat automatiquement sur une correction algorithmique
locale, plus rigide) mais la qualité de la correction en modes Moyen/Difficile sera
nettement inférieure, et les réponses orales resteront en kanji plutôt qu'en hiragana.

## Brancher un vrai moteur de synthèse vocale (optionnel)

Par défaut, l'app utilise `window.speechSynthesis` (Web Speech API), qui
fonctionne immédiatement mais dépend des voix installées sur l'appareil de
l'utilisateur (qualité variable selon le navigateur/OS).

Pour un rendu plus naturel et cohérent, remplacez le corps de
`src/lib/tts.ts` par un appel à une route API (`/api/tts`) qui interroge
Google Cloud Text-to-Speech, Amazon Polly ou ElevenLabs et retourne un flux
audio à jouer avec un `<audio>`. Ajoutez alors la clé correspondante dans
`.env.local` (voir `.env.example` pour les variables suggérées).

## Déploiement

Le plus simple : [Vercel](https://vercel.com), qui détecte Next.js
automatiquement. Ajoutez les deux variables d'environnement du fichier
`.env.local` dans les réglages du projet Vercel avant de déployer.

## Régénérer les types Supabase (optionnel)

Le fichier `src/types/database.ts` est écrit à la main pour correspondre au
schéma actuel. Si vous modifiez le schéma en base, vous pouvez le régénérer
avec la CLI Supabase :

```bash
npx supabase gen types typescript --project-id prtweegmygxfckmybyfa > src/types/database-generated.ts
```

puis fusionner manuellement les types générés dans `database.ts` (le format
généré nécessite une petite adaptation à cause d'une contrainte de typage
de `@supabase/supabase-js`, voir les commentaires dans le fichier).
