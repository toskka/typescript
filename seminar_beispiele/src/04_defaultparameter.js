"use strict";
let addiere4 = function (a = 0, b = 0, c = 0) {
    return a + b + c;
};
let summe4 = addiere4(1, 2, 3);
console.log(summe4);
let addiere3 = function (a, b) {
    b = b || 0;
    return a + b;
};
let summe3 = addiere3(1, 2);
console.log(summe3);
summe3 = addiere3(6);
console.log(summe3);
