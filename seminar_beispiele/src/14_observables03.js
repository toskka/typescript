// Observable

console.log(Rx.Observable); // der Konstruktor

let myArray = [3,6,2,9,12,6,3,84]

// ein Array als Observable
let myRange = Rx.Observable.from(myArray);

let myRangeSubscription = myRange.subscribe(
    val => console.log('onNext: ', val),
    err => console.log('onError', err),
    () => console.log("Tschüss!")
);

// aus einem Generator:
function * ganzeZahlen(){
    let n= 1;
    while(true) {
        console.log("Bilde Zahl: ", n)
        yield n;
        n = n + 1;
    }
}

let myGenerator = ganzeZahlen();

// ein Array als Observable
let myGenObs = Rx.Observable.from(myGenerator).take(10);

let myGenObsSubscription = myGenObs.subscribe(
    val => console.log('onNext: ', val),
    err => console.log('onError', err),
    () => console.log("Tschüss!")
);
