"use strict";
// Demo Blockscope
//Hoisting
console.log(typeof test);
//kein Hoisting für let und const : console.log(test2, typeof test2);
var test = "Hello World!";
console.log(typeof test);
//neu
let test2 = "test 2";
console.log(test2, typeof test2);
const zahl = 42;
console.log(zahl, typeof zahl);
if (true) {
    //kein Blockscope
    var test = "Hello World Neu";
    console.log(test, typeof test);
    let test2 = "Neuer test 2";
    console.log(test2, typeof test2);
}
console.log(test, typeof test);
console.log(test2, typeof test2);
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//i ist weg: console.log("i:", i);
//nur die Variable wird gehoistet
let beispiel = function () {
    console.log("beispiel");
};
beispiel();
beispiel = function () {
    console.log("beispiel überschreiben");
};
