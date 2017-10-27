console.log(Rx.Observable); //Konstruktor

let meinObs = new Rx.Observable(observer => {
    observer.next(34);     //Value ausgeben
    observer.complete();   //Stream beenden
    return () => console.log("Stream ends")
});

let mySubscription = meinObs.subscribe(
    val => console.log("onNext: ", val),
    err => console.log("onError: ", err),
    () => console.log("tschö ")
);
mySubscription.unsubscribe();

// anderer Weg
let myObserver = observer => {
    val => console.log("onNext: ", val),
    err => console.log("onError: ", err),
    () => console.log("tschö ")
};

let meinObs2 = Rx.Observable.create(myObserver);
console.log(meinObs2);


// RANGE
let myRange = Rx.Observable.range(1, 5); // Array 1,2,3,4,5
let mySubscription2 = myRange.subscribe(
    val => console.log("onNext: ", val),
    err => console.log("onError: ", err),
    () => console.log("tschö ")
);

//Timer                             start, intervall
let myTicker = Rx.Observable.timer(1000, 100);
let myTickerSubscr = myTicker.subscribe(
    val => console.log("onNext: ", val),
    err => console.log("onError: ", err),
    () => console.log("tschö ")
);
setTimeout(function(){
    myTickerSubscr.unsubscribe();
}, 10000)

