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

const firstName = "Jane";
let job;

job = "driver";  // .. fährt TAXI! / UBER
// job = "diver"; // .. taucht im Rhein! 
// job = "artist"; // .. malt ein Bild!
// job = "pilot"; // .. macht etwas anderes! --> default
// job = "teacher"; // .. unterrichtet!
// job = "instructor"; // .. unterrichtet!

switch (job) {
    case "driver"://Job == Driver
        console.log(firstName + "..fährt TAXI! ")
        break;
    case "diver"://Job == Diver
        console.log(firstName + "..taucht im Rhein! ")
        break;
    case "artist"://Job == artist
        console.log(firstName + "..malt ein Bild! ")
   

    default:
        console.log(firstName + "..macht etwas anderes! ")
        break;



    }
