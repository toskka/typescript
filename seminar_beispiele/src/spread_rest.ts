// Array

// Functions: Parameter typisieren! Dto. return-Wert!
function addiere(a:number, b:number, c:number) :number {
    return a + b + c;
}

let ergebnis = addiere(1,2,3);
console.log(ergebnis);

// let dreiZahlen: number[]; // oder: Array<number>
let dreiZahlen = [4,5,6];


// Spreadbeispiel 1:
ergebnis = addiere(...dreiZahlen);
console.log(ergebnis);

// Spreadbeispiel 2:
let mehrZahlen = [5,7, ...dreiZahlen, 9,10];
console.log("mehrZahlen",mehrZahlen);

// Restbeispiel 1:
function restTest(...args) {
    console.log(arguments);
    console.log(args);
    /*
    arguments.forEach(function(val, ind){
        console.log(i,":", val);
    });
    */
    args.forEach(function(val, ind){
        console.log(ind,":", val);
    });
}

restTest(1,2,3,4);

