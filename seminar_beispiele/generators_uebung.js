"use strict";
// Was wollen wir?
// Pseudolinear schreiben
function* ajaxGenerator() {
    // 1. Call
    // warten
    // 2. Call
    // warten  
    // 3. Call
    // warten
}
function ajaxer(url, callback) {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = callback;
    request.send;
    console.log(request);
}
function ajaxRunner(url) {
    ajaxer(url, function () {
        if (this.status == 200) {
            iterator.next(this.responseText);
        }
        else {
            iterator.throw(new Error(this.statusText));
        }
    });
}
function* main() {
    var response = yield ajaxRunner("data/heiner.json");
    console.log(response);
}
//let iterator: IterableIterator<void>;
var iterator = main();
iterator.next(this.responseText);
