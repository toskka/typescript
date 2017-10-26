function * generatorMitInput(a) {
    
    let b = (yield a); 
    yield b;
}

let meinGeneratorMitInput = generatorMitInput(5);

let erg1 = meinGeneratorMitInput.next();
console.log(erg1);
let erg2 = meinGeneratorMitInput.next(7)
console.log(erg2);

function * partialMultiply(x) {
   yield x * (yield "Ich warte auf Wert 2...");
}

let myPartial1 = partialMultiply(5);
let start = myPartial1.next();
console.log(start.value)
let ergebnis = myPartial1.next(7);
console.log(ergebnis.value)