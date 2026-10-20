# voiture

MINUIT — Les heures silencieuses : un roman interactif de mystère contemporain, en français, jouable hors ligne.

## Jouer

Téléchargez `MINUIT.html` et ouvrez-le dans votre navigateur. Tout le jeu est inclus dans ce fichier, sans installation ni connexion.

Les choix influencent le temps, les relations, les objets et les engagements. La progression est enregistrée dans votre navigateur. Le menu Sauvegardes permet aussi d’exporter et d’importer une partie.

## Développement

Les sources sont `index.html`, `style.css`, `story.js` et `app.js`.

Avec Node.js :

```sh
node build.cjs
node verify-full.cjs
```

Le premier programme génère la version autonome `MINUIT.html`. Le second vérifie les embranchements et les règles du jeu.

Attention : le fichier `story.js` et les tests contiennent l’histoire et ses révélations.
