"use strict";
function* meineGeneratorFunktion() {
    // tut was...
    yield 42; // wartet
    // tut was
    yield 17; // wartet
    // etc...
}
let meineZweiteGeneratorFunktion = function* () {
    // tut auch was
};
let meinGenerator = meineGeneratorFunktion();
let nochEinGenerator = meineZweiteGeneratorFunktion();
console.log(meinGenerator); // suspended
let erg = meinGenerator.next();
console.log("erg: ", erg);
let erg2 = meinGenerator.next();
console.log("erg2: ", erg2);
let erg3 = meinGenerator.next();
console.log("erg3: ", erg3);
console.log(meinGenerator); // closed
let erg4 = meinGenerator.next();
console.log("erg4: ", erg4);
function* ganzeZahlen() {
    let n = 1;
    while (true) {
        console.log("Bilde Zahl: ", n);
        yield n;
        n = n + 1;
    }
}
let reihe1 = ganzeZahlen();
let ersteZahl = reihe1.next();
function* ganzeZahlenBisFuenf() {
    let n = 1;
    while (n < 6) {
        // console.log("Bilde Zahl: ", n)
        yield n;
        n = n + 1;
    }
}
let reihe2 = ganzeZahlenBisFuenf();
for (let val of reihe2) {
    // mach ich hier was??
    console.log(val);
}
