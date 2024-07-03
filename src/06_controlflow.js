// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
const ageJohn = 20;
const ageMark = 30;

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);
isMarkOlder = (ageJohn < ageMark);

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);
console.log("------------------");

/**Tina --> There is no Alternative!
 * entweder ja oder nix
 * Türsteher- Politik*/


// if(true)
    
// if(false)
// 

/**if-else */

// if (isJohnOlder) {
//     console.log("John ist älter. ");

// }
// else{
//     console.log("john ist jünger. ")
// }

/** Ternere (Ternary) Schreibweise */
console.log((isJohnOlder) ? "John is older. " : "Mark is older. ")