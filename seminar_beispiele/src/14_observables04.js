// Observable

console.log(Rx.Observable); // der Konstruktor

window.onload = function(){
    let myInput = document.getElementById('myInput');
    console.log(myInput);
    let ausgabe = document.getElementById('output');
    let myButton = document.getElementById('myButton');

    // .fromEvent(HTMLElement, strEventName)
    let myInputStream = Rx.Observable.fromEvent(myInput, 'keyup');


    myInputStream
        .debounceTime(300)
        .subscribe(
            evt =>  {
                console.log('onNext: ', evt.key);
                ausgabe.innerHTML = myInput.value;
            },
            err => console.log('onError', err),
            () => console.log("Tschüss!")
        );

    // .fromEvent(HTMLElement, strEventName)
    let myClickStream = Rx.Observable.fromEvent(myButton, 'click');
    myClickStream
    .filter(evt => evt.clientX > 140)
    .subscribe(
        evt =>  {
            console.log('onNext: ', evt.clientX);
            ausgabe.innerHTML = myInput.value;
        },
        err => console.log('onError', err),
        () => console.log("Tschüss!")
    );

}