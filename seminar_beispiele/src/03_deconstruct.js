"use strict";
// Deconstruction
let arr;
arr = ["X", "Y", "Z"];
console.log(arr);
// let x = arr[0];
// let y = arr[1];
// let z = arr[2];
let [x, y] = arr;
console.log(x, y);
// konkret z.B.:
// let [meinBody] = document.getElementsByTagName('body');
let obj = {
    a: 1,
    b: 2,
    c: 3
};
let { c, a } = obj;
console.log(a, c);
let obj2 = {
    x: "Ein X",
    y: "Ein Y",
    bob: "Ich bin Bob"
};
let { x: meinX, y: meinY, bob: jim } = obj2;
console.log(meinX, meinY, jim);
console.log(jim);
obj2.bob = "Ich bin Jim";
console.log(jim);
