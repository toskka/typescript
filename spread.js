"use strict";
//Rest ...
function add(a, b, c) {
    return a + b + c;
}
let ergebnis2 = add(1, 2, 3);
console.log(ergebnis2);
let zahlen;
zahlen = [1, 2, 4];
ergebnis2 = add(...zahlen);
console.log(ergebnis2);
