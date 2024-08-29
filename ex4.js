const guests = [
  "Madrid",
  "Lisbonne",
  "Paris",
  "Lisbonne",
  "Lisbonne",
  "Paris",
  "Lisbonne",
  "Paris",
  "Rome",
];
let stats = new Map();
guests.forEach((ville) => {
  // if(stats.has(ville) == false)
  if (!stats.has(ville)) {
    stats.set(ville, 1);
  } else {
    let nb = stats.get(ville);
    // nb++;
    // stats.set(ville, nb);
    stats.set(ville, ++nb);
  }
});

console.log(stats);

for (const [cle, valeur] of stats) {
  console.log(`${cle} : ${valeur} visiteurs`);
}

// for (let i = 0; i < guests.length; i++) {
//   console.log(guests[i]);
// }

// for (const x of guests) {
//   console.log(x);
// }

// Madrid == 1;
//Lisbonne == 5;
// Paris == 2;

let x = 10;
y = ++x;
console.log("y = ", y);
console.log("x =", x);

const users = [
  { id: 1, revenus: [10, 30, 20, 11] },
  { id: 2, revenus: [10, 40, 50] },
  { id: 3, revenus: [40, 40] },
];
// for (const user of users) {
//   //console.log(user);
//   let somme = 0;
//   for (const rev of user["revenus"]) {
//     somme = somme + rev;
//   }
//   console.log("User d'id : " + user.id + " a des revenus de " + somme);
// }

let newTab = users.map((element) => {
  let somme = 0;
  for (const rev of element["revenus"]) {
    somme = somme + rev;
  }
  return { id: element.id, sommeRevenus: somme };
});

console.log(newTab);
