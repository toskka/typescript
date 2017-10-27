"use strict";
// Typen konvertieren (primitiv)
let ziffer = "42";
console.log(ziffer);
let zahl = ziffer * 1;
console.log(zahl);
let zahl2 = parseInt(ziffer);
console.log(zahl2);
let zahl3 = Number(ziffer);
console.log(zahl3);
let arrayMitStrings;
let auchArrayMitStrings;
let gemischtesArray;
let meinePerson = {}; // Typeinference !!!
meinePerson.vorname = "Peter";
meinePerson.alter = 42;
let anderePerson = {};
anderePerson.vorname = "Hans";
anderePerson.alter = 42;
let meinAuto = {};
meinAuto.besitzer = {};
meinAuto.besitzer.kinder = false;
