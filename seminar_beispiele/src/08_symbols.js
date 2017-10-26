"use strict";
let myNewKey = "d";
let mySymbolKey = Symbol();
console.log("mySymbolKey:", mySymbolKey);
let mySymbolKey2 = Symbol();
console.log("mySymbolKey2:", mySymbolKey2);
let mySymbolKey3 = Symbol('s3');
console.log("mySymbolKey3:", mySymbolKey3);
let mySymbolKey4 = Symbol('s3');
console.log("Gleich?", mySymbolKey3 === mySymbolKey4);
let mySymbolName = mySymbolKey4.toString().substr(7, 2);
console.log("mySymbolName:", mySymbolName);
let obj = {
    a: "A",
    b: "B",
    c: "Ein C"
};
obj[myNewKey] = "D";
console.log(obj);
obj[mySymbolKey] = "E";
console.log(obj);
obj[mySymbolKey2] = "F";
console.log(obj);
let mySymbolProp = obj[mySymbolKey];
console.log(mySymbolProp);
// for ... in
for (let key in obj) {
    console.log("key:", key, " val:", obj[key]);
}
// die Keys:
let myKeys = Object.keys(obj);
console.log(myKeys);
let mySymbols = Object.getOwnPropertySymbols(obj);
console.log(mySymbols);
