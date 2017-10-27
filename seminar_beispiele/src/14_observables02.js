// Observable

console.log(Rx.Observable); // der Konstruktor

// ein Range
let myRange = Rx.Observable.range(1, 5); // [1,2,3,4,5]

let myRangeSubscription = myRange.subscribe(
    val => console.log('onNext: ', val),
    err => console.log('onError', err),
    () => console.log("Tschüss!")
);

// ein Timer mit .timer(start, intervall)
let myTicker =  Rx.Observable.timer(2000, 1000);

let myTickerSubscription = myTicker.subscribe(
    val => console.log('onNext: ', val),
    err => console.log('onError', err),
    () => console.log("Tschüss!")
);

setTimeout(function(){
    myTickerSubscription.unsubscribe();
}, 25000)


