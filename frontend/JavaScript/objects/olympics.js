var olympics = [
  { country: "us", gold: 30, silver: 35, bronze: 27, total: 92 },
  { country: "japan", gold: 22, silver: 10, bronze: 15, total: 47 },
  { country: "aus", gold: 17, silver: 6, bronze: 20, total: 43 },
  { country: "china", gold: 34, silver: 24, bronze: 16, total: 74 },
  { country: "india", gold: 0, silver: 2, bronze: 3, total: 5 },
  { country: "germany", gold: 9, silver: 10, bronze: 16, total: 25 },
];

// print countrynames partcipating 2021 olympics

// for(let keys of olympics){
//     console.log(keys.country);
// }

// var ol=olympics.map(keys=>keys.country)
// console.log(ol);

// which country got most goldmedals

// var ol= olympics.reduce((key1,key2)=>key1.gold>key2.gold?key1:key2);
// console.log(ol);

// which contry got most medals

// var ol= olympics.reduce((key1,key2)=>key1.total>key2.total?key1:key2);
// console.log(ol);

// sort countries based on gold medals

// console.log(olympics.sort((key1,key2)=>key1.gold-key2.gold))

// sort countries based on total medals

// console.log(olympics.sort((key1,key2)=>key1.total-key2.total))

// countries got silver > 10

// for(let keys in olympics){
//     if(olympics[keys].silver>10){
//         console.log(olympics[keys].country);
//     }

// }

var ol=olympics.filter(keys=>keys.silver>10).map(keys=>keys.country)
console.log(ol);

//list of countries whose goldmedal=0

// for(let keys in olympics){
//     if(olympics[keys].gold==0){
//         console.log(olympics[keys].country);
//     }

// }

// var ol=olympics.filter(keys=>keys.gold==0).map(keys=>keys.country)
// console.log(ol);


// list the country names whose gold medal >20

// for (let keys in olympics) {
//   if (olympics[keys].gold > 20) {
//     console.log(olympics[keys].country);
//   }
// }

// var ol=olympics.filter(keys=>keys.gold>20).map(keys=>keys.country)
// console.log(ol);

// is pakisthan participating in 2021 olympics

// var pak = 0;

// for (let keys in olympics) {
//   if (olympics[keys].country == "india") {
//     pak = +1;
//   }
// }
// console.log(pak == 1 ? "present" : "not present");

var ol=olympics.some(key=>key.country=="pak")
console.log(ol);
