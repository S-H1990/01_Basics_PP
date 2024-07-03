// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
const ageJohn = 30;
const ageMark = 40;

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
if(isJohnOlder)
    {
    console.log("John ist Älter.");

}
if(isJohnEqual)
    {
        console.log("John ist gleich Alt wie Mark. ")
    }
    if(isMarkOlder)
        {
            console.log("Mark ist Älter .")
        }