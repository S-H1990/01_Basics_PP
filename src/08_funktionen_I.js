
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken


// funtionsaufruf | call
// test();//wenn man funtion ausschalten will dann muss man nur call auskommentieren!



// funtionsrumpf | callee
// funtionsdeklaration
function test()
{
console.log("Hallo Marius! ");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen();//call
// funtion
function ausgabeNamen() {

    //interne Variable | what happens in Vegas...
    let firstName = "marius"//,just inside der funktion defined
    console.log("Hallo, " + firstName + "! ");
}

// console.log(firstName);//fehler scope

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN


// ausgabeNamen2("Arian");// Argumente(von Außen) -->Daten von Parameter/ Mikrowelle beispiel mit Tasten
// ausgabeNamen2("Saba");

function ausgabeNamen2(firstName) { //Parameter
    console.log("Hallo, " + firstName + "! ");
}


/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

// const prompt = require('prompt-sync')({sigint: true});
// ausgabeNamenParams(prompt("Vorname?: "),prompt("Name?: "));
// ausgabeNamenParams("Max", "Mütze");

function ausgabeNamenParams(firstName, surName) {
    console.log("Hallo, " + firstName + " " + surName + "! ");
    }

/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

// ausgabeNamenSRP("Max","Mütze");


// ausgabeNamenSRP("Max","Mütze");

function ausgabeNamenSRP(firstName, familyName) {

    // 1.Funktionalität: string composing
    const GAP = " ";
    let outputStr = "Hallo," + firstName + GAP + surName + "!";

    //2.funtion: string output
    console.log(outputStr);    
}


/***** Funktionen 03b *****/

 // 1. Funktionalität: string composing
output(getString("Max","m"));
 function getString(firstName, surName) {
    const GAP = " ";
    let outputStr = "Hallo," + firstName + GAP + surName + "!";
    return outputStr; //output der Funktion | schikt Daten an Call..
    console.log("hi");//nach return wird der Fkt. abgebrochen
 }


// 2. Funktionalität: string output
// output("hi");//String
// output(2);//zahl
// output(true)//Boolshe Variable
function output(outputData) {
    console.log(outputData);
}

