
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

const prompt = require('prompt-sync')({sigint: true});
ausgabeNamenParams(prompt("Vorname?: "),prompt("Name?: "));
// ausgabeNamenParams("Max", "Mütze");

function ausgabeNamenParams(firstName, surName) {
    console.log("Hallo, " + firstName + " " + surName + "! ");
    
}


