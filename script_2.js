
n = Number(prompt("De quel nombre veux-tu calculer la factorielle ?"));
var f = 1;
if (n === 0 || n === 1) {
	//rien
} 
else {
	for (var i = n; i > 0 ; i--) {f *= i;} 
}
console.log(`Le résultat est : ${f}`);
