"use strict";
let blumenArray = ["Rosen", "Tulpen", "Nelken"];
console.log(typeof blumenArray);
console.log("Ist blumenArray ein Array? ", blumenArray instanceof Array);
console.log("Ist blumenArray ein Array? ", Array.isArray(blumenArray));
console.log(blumenArray);
// neue statische Methoden!
let mehrBlumen = new Array("Rosen", "Tulpen", "Nelken");
console.log(mehrBlumen);
let eineBlume = new Array("Tulpe");
console.log(eineBlume);
let zahlenArray = new Array(1, 2, 3, 4, 5);
console.log(zahlenArray);
let eineZahl = new Array(5);
console.log(eineZahl);
// Rettung naht:
// Array.of() ... macht ein Array aus einer Liste
let auchBlumen = Array.of("Rosen", "Tulpen", "Nelken");
console.log(auchBlumen);
let wirklichEineZahl = Array.of(5);
console.log(wirklichEineZahl);
// Array.from() ... macht ein Array aus ???
let argumentsTest = function () {
    console.log("Ist arguments ein Array? ", arguments instanceof Array);
    let args = Array.from(arguments);
    console.log("Ist args ein Array? ", args instanceof Array);
};
argumentsTest(1, 2, 3, 4);
let garKeinArray = {
    '4': "Die Vier",
    egal: "Wirklich egal",
    'length': 7
};
console.log(garKeinArray);
let jetztEinArray = Array.from(garKeinArray);
console.log(jetztEinArray);
