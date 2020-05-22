
//UCU ou UCC ou UCA ou UCG ou AGU ou AGC => Sérine
//CCU ou CCC ou CCA ou CCG => Proline
//UUA ou UUG => Leucine
//UUU ou UUC => Phénylalanine
//CGU ou CGC ou CGA ou CGG ou AGA ou AGG => Arginine
//UAU ou UAC => Tyrosine

function traduction(chaine) { //chaine ARN en entrée
//Couper par 3 et mettre des -
let codons = ""
let new_chaine = chaine;
for (var i = 0; i < chaine.length; i++) {
	if (i % 3 == 0 && i !== 0) {
		codons += "-";
	}
	codons += chaine[i] //string de la forme AAA-AAA...
}
	amino_acides = codons.split("-"); //Array avec les triplets

//Tester nos cas, switch ne marche pas! :(
for(var i = 0; i < amino_acides.length; i++) {
		if (amino_acides[i] === "UCU" ||amino_acides[i] === "UCC" ||amino_acides[i] === "UCA" ||amino_acides[i] === "UCG" ||amino_acides[i] === "AGU" ||amino_acides[i] === "AGC"){
		amino_acides[i] = "Sérine";
		}
		else if(amino_acides[i] === "CCU" || amino_acides[i] === "CCC" || amino_acides[i] === "CCA" || amino_acides[i] === "CCG"){
		amino_acides[i] = "Proline";
		}
		else if (amino_acides[i] === "UUA" || amino_acides[i] === "UUG"){
		amino_acides[i] = "Leucine";
		}
		else if (amino_acides[i] === "UUU" || amino_acides[i] === "UUC"){
		amino_acides[i] = "Phénylalanine";
		}
		else if (amino_acides[i] === "CGU" || amino_acides[i] === "CGC" || amino_acides[i] === "CGA" || amino_acides[i] === "CGG" || amino_acides[i] === "AGA" || amino_acides[i] === "AGG"){ 
		amino_acides[i] = "Arginine";
		}
		else if (amino_acides[i] === "UAU" || amino_acides[i] === "UAC"){
		amino_acides[i] = "Tyrosine";
		}
		else{amino_acides[i] = "aminoacide?"; } //s'il n'est pas dans les options
} 
proteine = amino_acides.join("-"); //Retourne un string de la forme Arginine-Phenylalanine-...
	return proteine //pour l'utiliser en console 
}


let chaine = "UUACGCAGUAGA"; //test => "Leucine-Arginine-Sérine-Arginine"
let chaine1 = "CCGUCGUUGCGCUACAGC";
let chaine2 = "CCUCGCCGGUACUUCUCG";

console.log(`la chaine ARN ${chaine}, traduit la protéine: ${traduction(chaine)}`);
console.log(`la chaine ARN ${chaine1}, traduit la protéine: ${traduction(chaine1)}`);
console.log(`la chaine ARN ${chaine2}, traduit la protéine: ${traduction(chaine2)}`);