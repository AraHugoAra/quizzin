<h1>QuizzIn</h1>

Fictive multiplayer online quiz app - Collaborative project

<h1>Concept, design et prototype</h1>

<h2>Expérience utilisateur</h2>

<h3>Page de première connexion:</h3>
Si aucun compte n'était créé pour ce mobile, demande un pseudo.

<h3>Home Page:</h3>

<ul>
 <li>Bouton entrainement:</li>
 Donne accès à l'écran de sélection des options d’entrainement (catégorie, difficulté, nombre de questions, timer).

  <li>Bouton challenge/partie classée:</li>
  Donne accès à l'écran de partie classée et lance directement le challenge.

  <li>Bouton classement:</li>
  Donne accès au classement hebdomadaire.
</ul>

<h3>Entrainement:</h3>
<ul>
  <li>Numéro de question (optionnel)</li>
  <li>Énoncé de la question</li>
  <li>Propositions de réponses</li>
  <li>Timer (si activé)</li>
</ul>
La bonne réponse est affichée après chaque question directement dans l’UI (boutons colorés)

<h3>Challenge/Partie classée:</h3>
<ul>
  <li>Numéro de question (optionnel)</li>
  <li>Énoncé de la question</li>
  <li>Propositions de réponses</li>
  <li>Timer</li>
</ul>
Les bonnes réponses sont récapitulées en fin de partie dans l'écran suivant

<h3>Récapitulatif de partie classée:</h3>

Un écran par question avec une interface telle que:
<ul>
  <li>La question</li>
  <li>Votre réponse</li>
  <li>La bonne réponse</li>
</ul>
On peut swipper à droite ou cliquer sur un bouton “suivant”
On peut cliquer sur un bouton “passer”

<h2>Charte graphique:</h2>
<ul>
  <li><a href="https://coolors.co/06c699-ffede1-fccc32-ed6931-fa003f">Palette de couleurs</a></li>
 <li><a href="https://triv-91051.bubbleapps.io/version-test/signup?debug_mode=true">Exemples d'écrans</a></li>
</ul>

<h1>Structure du backend:</h1>

<h2>Base de données:</h2>

<ul>
 <li>Base de données relationnelle: mySQL</li>
 <li>ORM: Sequelize</li>
 <li>UML:</li>
 <img src="https://github.com/AraHugoAra/quizzin/assets/98523545/fd0378ef-5b5b-4d6b-b033-5e811e28adad" />
</ul>
