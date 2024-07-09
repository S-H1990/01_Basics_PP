

/*** Mini-Challenge  */
// Satzbau + variable Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:

const GAP = " ";
const S = ".";
const Q = "?";
const E ="!";
const NONVALID = "Keine richtige Eingabe.Bitte versuchen Sie es Nochmal.";





output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));

function getSentence(arr,op) {

    switch (op) {
        case "S":
            return arr.join(GAP) + S
        case "Q":
            return arr.join(GAP) + Q
        case "E":
            return arr.join(GAP) + E
    
        default:
          return NONVALID;
    }
   // ???
}


// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputData) {
    console.log(outputData);
}