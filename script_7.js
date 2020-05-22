//Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
//Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
//Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
//Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
//Pour tout autre phrase que tu lui envoies, le bot répond "balek." ;
let phrase = "";
let answer = "";
console.log("Bonjour je suis le bot !");
while(phrase !== "stop!") {
  phrase = window.prompt("Je: "); //fenetre d'imput 
  if (phrase.endsWith("?")){answer = "Ouais Ouais...";}
  else if (phrase === ""){answer = "t'es en PLS ?";}
  else if (phrase === phrase.toUpperCase()){answer = "Pwa, calme-toi...";}
  else if (phrase.includes("fortnite")){answer = "on s' fait une partie soum-soum ?";}
  else {answer = "balek.";}
  console.log(answer)
} 