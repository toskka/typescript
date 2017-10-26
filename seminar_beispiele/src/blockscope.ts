// Demonstriert Blockscope


beispiel();
// beispiel2(); // Referenzfehler

// Hoisting!
console.log(typeof test);

// KEIN Hoisting für let-Variablen
// console.log(test2, typeof test2); // GEFAHR!

// KEIN Hoisting für const-Konstanten
// console.log(sinndeslebens, typeof sinndeslebens);

var test = "Hallo!";
console.log(test, typeof test);

let test2 = "Test 2";
console.log(test2, typeof test2);

const sinndeslebens = 42;
console.log(sinndeslebens, typeof sinndeslebens);
// sinndeslebens = 43; // TypeError


if (true) {
    // kein Blockscope, selbe Variable...
    var test = "Wow...";
    console.log(test, typeof test);

    let test2 = "Anderer Test 2";
    console.log(test2, typeof test2);
}

console.log(test, typeof test);
console.log(test2, typeof test2);


for(let i = 0; i<5; i++) {
    let lokal = i * i;
    console.log("Cool", i);
    console.log("lokal:",lokal);
}
// console.log("Nicht cool:", i);
// console.log("Später ... lokal:",lokal);

function beispiel(){
    console.log("Ich bin eine Function-Declaration");
}

// besser EBEN WEIL nicht gehoistet!
let beispiel2 = function() {
    console.log("Ich bin eine Function-Expression");
}

beispiel2();

beispiel2 = function() {
    console.log("Ich bin eine NEUE Function-Expression");
}

beispiel2();

const beispiel3 = function() {
    console.log("Ich bin eine nicht überschreibbare Function-Expression");
}