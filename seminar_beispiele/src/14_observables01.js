// Observable

console.log(Rx.Observable); // der Konstruktor

let meinObs = new Rx.Observable(observer => {
    observer.next(42); // value ausgeben!
    observer.next(43);
    observer.complete(); // Stream beenden
    return () => console.log("Stream beendet") // als Abschluss
});
console.log(meinObs)

let mySubscription = meinObs.subscribe(
    val => console.log('onNext: ', val),
    err => console.log('onError', err),
    () => console.log("Tschüss!")
);

console.log(mySubscription); // ein "Disposable", kann Subscription beenden
mySubscription.unsubscribe(); // Abo beendet...

let egal;
let myObserver = myObserver => {
    egal = myObserver;
    myObserver.next(45); // value ausgeben!
  //  myObserver.complete(); // Stream beenden
    return () => console.log("Stream beendet") // als Abschluss
};

let meinObs2 = Rx.Observable.create(myObserver);
console.log(meinObs2);

let mySubscription2 = meinObs2.subscribe(
    val => console.log('onNext, Stream 2: ', val),
    err => console.log('onError', err),
    () => console.log("Tschüss!")
);
egal.next("Ist das ein Hack?");






