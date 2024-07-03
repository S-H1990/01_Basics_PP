// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
// const ageJohn = 30;
// const ageMark = 30;

// // Deklaration
// let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
// isJohnOlder = (ageJohn > ageMark);
// isJohnEqual = (ageJohn == ageMark);
// isMarkOlder = (ageJohn < ageMark);

// // Ausgabe
// //**Tina --> There is no Alternative!
//  * entweder ja oder nix
//  * Türsteher- Politik*/


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
//onsole.log((isJohnOlder) ? "John is older. " : "Mark is older. ")


/**if-Else if */

// if (isJohnOlder) {
//     console.log("John ist älter. ")
// }
//     else if (isJohnEqual) {
//     console.log("Die beiden sind gleich alt.")
// }
//     else{
//     console.log("Mark ist älter. ")
// }

/****** Fallunterscheidung / SWITCH|CASE 1 ******/

// 


/********  Fallunterscheidung / SWITCH|CASE 2 *******/

const cond = true;
const value = 10;

switch (cond) {
    case (value == 1):
        console.log("Value hat den Wert 1.");
        break;
    case (value == 2):
        console.log("Value hat den Wert 2.");
        break;
    default:
        console.log("Value hat einen anderen Wert.");
        break;
}

