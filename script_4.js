const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];
entrepreneurs70s = [];
names = [];
ages_today = [];
for (var i = 0; i < entrepreneurs.length - 1; i++) {
  names.push({first: entrepreneurs[i].first, last: entrepreneurs[i].last});
  ages_today.push({today: 2020 - entrepreneurs[i].year})
  if(entrepreneurs[i].year <= 1990 && entrepreneurs[i].year>= 1980){
  entrepreneurs70s.push(entrepreneurs[i]);
  }
}
console.log("Les entrepreneurs des années 70s sont: ");
console.log(entrepreneurs70s);
entrepreneurs70s.forEach(entrepreneur =>{console.log(entrepreneur.first + " " + entrepreneur.last)});

console.log("Les noms des entrepreneurs sont: ");
console.log(names);

console.log("Chaque inventeur aurait aujourd'hui : ");
for (var i = 0; i < entrepreneurs.length -1; i++) {
  console.log(names[i].first +" "+ names[i].last + " "+ages_today[i].today + " années");
}

//Trie les entrepreneurs par ordre alphabétique du nom de famille.
entrepreneurs.sort(function(a, b){
  if(a.last < b.last) { return -1; }
  if(a.last > b.last) { return 1; }
  return 0;
})

for( let entrepreneur in entrepreneurs) {
  console.log(entrepreneurs[entrepreneur].first + " " + entrepreneurs[entrepreneur].last);
}

