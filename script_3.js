n = Number(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"));


for (var i = 0; i < n; i++) {
	space = "";
	dyes = "";
	etage = "";
	for (var j = n; j > i + 1; j--) {
		space += " ";
	}
	for (var k = 0; k < i + 1; k++) {
		dyes += "#";
		} 
 etage = space + dyes + "\n";
 console.log(etage);
}
