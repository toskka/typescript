"use strict";
// meine erste TypeScript-Datei
function addiere(a = 0, b = 0) {
    return a + b;
}
var ergebnis = addiere(5, 7);
console.log(ergebnis);
ergebnis = addiere(17);
console.log(ergebnis);
ergebnis = addiere();
console.log(ergebnis);
