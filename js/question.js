// function pour calculer les résultats du questionnaire
function tabulateAnswers() {
  // initialisation des variables pour chaque scoreChoix
  // Si je veut ajouter d'autre score , avec d'autres choix c'est ici que ça se passe
  let r1score = 0;
  let r2score = 0;
  let r3score = 0;
  let r4score = 0;
  
  // Liste les boutons radio input choix de la page
  let choices = document.getElementsByTagName('input');
  // boucle autour de tout les choix input possible
  for (i=0; i<choices.length; i++) {
    // si le bouton radio est checké
    if (choices[i].checked) {
      // ajoute 1 au score du choix correspondant
      if (choices[i].value == 'r1') {
        r1score = r1score + 1;
      }
      if (choices[i].value == 'r2') {
        r2score = r2score + 1;
      }
      if (choices[i].value == 'r3') {
        r3score = r3score + 1;
      }
      if (choices[i].value == 'r4') {
        r4score = r4score + 1;
      }
      // Si je veux ajouter d'autres choix et d'autre scores, je dois y ajouter ici aussi.
    }
  }
  
  // Trouver quel choix à le plus gros score.
  // Si j'ajoute d'autres choixScore, les ajouter ici dans la parenthèse.
  let maxscore = Math.max(r1score,r2score,r3score,r4score);
  
  // Montre les réponses correspodant à la majorité de leurs choix
  var answerbox = document.getElementById('answer');
  if (r1score == maxscore) { // Si l'utilisateur à choisi le r1 en majorité, ceci seras publié.
    answerbox.innerHTML = " Bravo, tu as passé une jeunesse mémorable, bercée par l'univers des Pokémons !";
  }
  if (r2score == maxscore) { // Si l'utilisateur à choisi le r2 en majorité, ceci seras publié.
    answerbox.innerHTML = "Bien, dans l'ensemble tu as répondu comme il le fallait, quelques lacunes mais tu es un vrai Poké-Fan";
  }
  if (r3score == maxscore) { // Si l'utilisateur à choisi le r3 en majorité, ceci seras publié.
    answerbox.innerHTML = "C'est moyen tout ça ... il faudrais peut-être raviver tes souvenirs en rejouant aux versions.";
  }
  if (r4score == maxscore) { // Si l'utilisateur à choisi le r4 en majorité, ceci seras publié.
    answerbox.innerHTML = "Nul , tu es nul(le) !";
  }
  // Si je veux ajouter d'autres choixScore, y ajouter ici une nouvelle reponse correspondante.
}

// programme le bouton reset
function resetAnswer() {
  let answerbox = document.getElementById('answer');
  answerbox.innerHTML = "Tu as raison recommence !";
}

// Prévention du comportement par défault du bouton submit


document
        .getElementById("submit")
        .addEventListener("click",function(stop){
          stop.preventDefault();
        
})
