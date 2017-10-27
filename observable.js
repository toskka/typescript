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


