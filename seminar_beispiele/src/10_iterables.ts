// Iterables
let blumenArray2 = ["Rosen","Tulpen","Nelken"];
let myString = "Hey";

// neue Schleife für Iterables: for ... of

for (let val of blumenArray2) {
    console.log("Blume:", val);
}

for (let val of myString) {
    console.log("Char:", val);
}

// ... ein IterableObject aus einem Iterable:
let iterableBlumenObject = blumenArray2.entries();
console.log("iterableBlumenObject:", iterableBlumenObject);

let myValueObject = iterableBlumenObject.next();
console.log("myValueObject:", myValueObject);
console.log("myValueObject.value:", myValueObject.value);
console.log("myValueObject.value[1]:", myValueObject.value[1]);

// später ...
let myValueObject2 = iterableBlumenObject.next();
console.log("myValueObject2:", myValueObject2);
console.log("myValueObject2.value:", myValueObject2.value);
console.log("myValueObject2.value[1]:", myValueObject2.value[1]);

// viel später ...
let myValueObject3 = iterableBlumenObject.next();
console.log("myValueObject3:", myValueObject3);
console.log("myValueObject3.value:", myValueObject3.value);
console.log("myValueObject3.value[1]:", myValueObject3.value[1]);

// sehr viel später ...
let myValueObject4 = iterableBlumenObject.next();
console.log("myValueObject4:", myValueObject4);
console.log("myValueObject4.value:", myValueObject4.value);
// console.log("myValueObject4.value[1]:", myValueObject4.value[1]);

let myValueObject5 = iterableBlumenObject.next(); // ?
console.log("myValueObject5:", myValueObject5);