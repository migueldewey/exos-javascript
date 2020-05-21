const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


//Est-ce que tous les livres ont été au moins empruntés une fois ?
for (let book in books ) {
  if (books[book].rented > 1){
    console.log("Tous les livres ont été empruntés au moins une fois");
  }
  else { console.log("Pas tous les livres ont été empruntés");}
}

//Quel est livre le plus emprunté ?
// Quel est le livre le moins emprunté ?
plusemprunte = {rented: 0}
moinsempurte = {rented: 200}
for (let book in books) {
  if (books[book].rented > plusemprunte.rented) {
    plusemprunte = books[book]
  }
  if (books[book].rented< moinsempurte.rented) {
    moinsempurte = books[book]
  }
}
console.log(`le livre le plus emprunte est ${plusemprunte.title} avec ${plusemprunte.rented} emprunts`);
console.log(`le livre le moins emprunté est ${moinsempurte.title} avec ${moinsempurte.rented} emprunts`);
//Trouve le livre avec l'ID: 873495 ;
books.forEach(book =>{if (book.id === 873495) {
  console.log(`le livre avec l'ID: 873495 est ${book.title}`);}})

// Supprime le livre avec l'ID: 133712 ;
books.forEach(book =>{if (book.id === 133712) {
  console.log(`le livre avec l'ID: 133712 ${book.title} a été supprimé`);
  books.splice(book,1);}})

//Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
books.sort(function(a, b){
  if(a.title < b.title) { return -1; }
  if(a.title > b.title) { return 1; }
  return 0;
});
console.log(books)