"use strict";
// Arrow-Functions (2)
console.log(this);
let a = "Das A";
function aLesen() {
    console.log("a:", a);
}
let aLesenArrow = () => console.log("Arrow:", a);
aLesen();
aLesenArrow();
function aLesenVerwenden() {
    console.log("aLesenVerwenden", this);
    let a = "Anderes A";
    aLesen();
    aLesenArrow();
}
aLesenVerwenden();
let myObj = {
    x: "X",
    meth: function () {
        console.log(this);
        let innen = function () {
            console.log("x-Prop:", this.x);
        };
        innen();
    }
};
myObj.meth();
let peter = {
    vorname: "Peter",
    hallo: () => console.log("Hallo, ich bin", this.vorname)
};
