
/* Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 1980;
const birthYearMark = 1990;

// Berechnung Alter
// let year = 2024;
// ageJohn = year - birthYearJohn;
// ageMark = year - birthYearMark;


let date = new Date();
let year = date.getFullYear();
console.log("Datum" + date);
console.log("Jahr " + date.getFullYear());
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);

// deklaration
let istJohnOlder;//true oder false
istJohnOlder =(ageJohn > ageMark);//test auf ungleicheit
istJohnEqual = (ageJohn == ageMark);//test auf gleichheit

console.log("istJohnOlder: " + istJohnOlder);
console.log("istJohnequal: " + istJohnEqual);
