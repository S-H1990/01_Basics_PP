
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

ausgabeNamen();//call
// funtion
function ausgabeNamen() {

    //interne Variable | what happens in Vegas...
    let firstName = "marius"//,just inside der funktion defined
    console.log("Hallo, " + firstName + "! ");
}

// console.log(firstName);//fehler scope
