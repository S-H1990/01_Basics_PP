
/* Die Satzbau-Maschine | Arrays */

/**
 *   THEORIE
 * 
 */

/*** 02. Theorie: Array */

let arr;
// arr = new Array();//Konstruktor
// arr =[];// Literal
arr = [2,11,7,8,10];//container[],innen Elemente


output(arr);
output(arr.length);// lengt =Anzahl der Elemmente
output(arr[0]);//Index 0 (1. Pos. im Array)(Zeiger)immer mit 0,1,2,...
output(arr[4]);
output(arr[arr.length-1]);// letze Pos. / allgemein



/**
 *   PRAXIS
 * 
 */


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
// output(getSentence("Ich","bin","die","coole","Maxine","Mützerich",));
// output(getSentence("Ich","bin","die","coole","Maxine","Mützerich"));
function getSentence(word1,word2,word3,word4,word5,word6) {
    const GAP = " ";
    const PUNCT = ".";
    let str =   word1 + GAP +
                word2 + GAP +
                word3 + GAP +
                word4 + GAP +
                word5 + GAP +
                word6 +
                PUNCT;

    return str;
}




// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


