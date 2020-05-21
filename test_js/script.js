console.log("coucou depuis la console");
//commentaire sur une ligne
console.log("Ceci n'est pas un commentaire");
/* commentaire écrit sur 
plusieurs lignes*/

//Declaration des variables
let myVariable = 5;
typeof myVariable; //pour savoir le type de la variable
console.log(myVariable);
console.log(typeof myVariable);

let data1 = "variable en let définie dans le bloc principal";

{ //début du sous-bloc

  data1 = "variable en let modifiée dans le sous-bloc";
  var data2 = "variable en var définie dans le sous-bloc";
  let data3 = "variable en let définie dans le sous-bloc";

} //fin du sous-bloc

console.log(data1); // "variable let modifiée dans le sous-bloc"
console.log(data2); // "variable var définie dans le sous-bloc"
//console.log(data3); // On aura une erreur : data3 n'est pas visible dans le bloc principal


//Operation entre variables
let a = 1, b = 1;
a++
console.log(a);
console.log(b += 2);

let c = "Bonjour", d = "Monde";
console.log(c + " " + d);

console.log(Number("5")); //transformer en nombre
console.log(String(36)); //transformer en string

//Arrays
let statusDeTHP = ["Moussaillon", "Corsaire", "Renégat"];
console.log(statusDeTHP);
console.log(statusDeTHP.length); //connaitre la taille
statusDeTHP[0] = "La mousaille"; //modifier
statusDeTHP.push("Flibustier"); //ajouter à la fin
statusDeTHP.unshift("Pirate");  //ajouter au debut
statusDeTHP.pop(); //supprimer le dernier élément
statusDeTHP.shift(); //supprimer le prémier élément
statusDeTHP.splice(0,2); //enleve 2 éléments à partir de 0
statusDeTHP.slice(2,4); //retourne un sous-array de 2 à 3

//Strings
let e = 3;
  console.log("Bonjour à tous les "+ e); //ajoute 3 a la chaine
  console.log(e + "3"); 
let numStudent = 4;
let statement = `Dans mon groupe on est ${numStudent} moussaillons`;
console.log(statement); //équivalent au #{} de Ruby
"The Hacking Project"[0]; // = T
"The Hacking Project".indexOf("Hack") ; // = 4 car "Hack" comence en 4
//toLowerCase(); //passer en minuscules
//toUpperCase(); //passer en mayuscules

const contentOfTHP = "Git-Ruby-Rails-HTML-CSS-JS";
const lesson = contentOfTHP.split("-"); //séparer par les -
console.log(lesson[0]); // "Git"
console.log(lesson[5]); // "JS"
//contentOfTHP.join(",")//unir avec une ,

//Objcts Litéraux
let THPSessionNum2 = {
  numOfMouss: 80,
  cities: ["Paris", "Lyon", "Montpellier"],
  successRate: 0.80,
  sessionMoto: "keep pushing to the top"
};
console.log(THPSessionNum2.numOfMouss); //= 80
console.log(THPSessionNum2.sessionMoto); // = "keep pushing to the top"
THPSessionNum2.numOfMouss = 79; // je modifie un attribut existant
console.log(THPSessionNum2.numOfMouss);
THPSessionNum2.favoriteLesson = "Présentation de Sinatra" //je rajoute un attribut
console.log(THPSessionNum2); //j'imprime tout l'objet pour voir
let attributName = "successRate";
console.log(THPSessionNum2[attributName]);//acceder par l'attribut

//Conditions
if (true) {}
if (true) {} else {}
else if
console.log("36" == 36); // va retourner TRUE car le contenu est identique
console.log("36" === 36); // va retourner FALSE car d'un côté on a un string et de l'autre un number
// != non égal contenu, !== non égal contenu et type
if (true && true) {
  console.log("ce message s'affiche car avec un ET, si les deux conditions sont à TRUE, le résultat est TRUE");
}
if (true || false) {
  console.log("ce message s'affiche car avec un OU, si l'une des conditions est à TRUE, le résultat est TRUE");
} 
if (!false) {
  console.log("ce message s'affiche car un NON sur FALSE donne TRUE");
}

switch (objet) {
	case 1:
	//instruction ;
	break;
	default:
	//instruction ;
	break;
}
//les valeurs 0, "" et undefined sont FALSE 
let myVariable // ici, myVariable sera undefined. Fais aussi le test en lui donnant une valeur: number, string, array ou autre.
if (myVariable) {
  console.log("ce message ne s'affiche que si myVariable contient une valeur ");
}

//Boucles
for (var i = 0; i < Things.length; i++) { //initialisation, comparation, inclrement
	Tings[i] //instructions
}
 
let answer = "";
while(answer !== "oui") {
  console.log("alors ?")
  answer = prompt("Tu kiffes THP ?"); //fenetre d'imput 
} 

console.log("haaa, tu nous fais plaisir !") // Qui se lassera le premier entre toi et ton ordi ? :D

for (index in varname ){}; //for in
myArray.forEach(content => {instructions}); //.forEach fonction

//Fonctions 
function nomDeMaFonction(){ le code}; //declaration des fonctions
nomDeMaFonction() //appel à la fonction 

function multiply(inputNumber1, inputNumber2) {
  let outputNumber = inputNumber1 * inputNumber2;
  return outputNumber;
}
myVariable = function(entrée1, ...){ } //declaration des fonctions anonymes

const multiply = function(inputNumber1, inputNumber2) {
  let outputNumber = inputNumber1 * inputNumber2;
  return outputNumber;
}
const multiply = (inputNumber1, inputNumber2) => { //declaration avec =>
  let outputNumber = inputNumber1 * inputNumber2;
  return outputNumber;
}
