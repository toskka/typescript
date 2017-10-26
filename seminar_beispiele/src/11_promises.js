"use strict";
// Demonstriert Promises
let xhr = new XMLHttpRequest();
// Konfiguration:
xhr.open('get', 'data/frida.json', true);
// Callback binden
xhr.onreadystatechange = function () {
    console.log(this.readyState);
    if (this.readyState == 4) {
        console.log(this.responseText);
    }
};
// Abschicken:
xhr.send();
// was ist ein Promise? Eine Vorrichtung zum Binden von Callbacks ...
let myPromise = new Promise(function (resolve, reject) {
    console.log(resolve);
    console.log(reject);
    // resolve(42);
    reject('Ging schief!');
});
// nicht möglich ist Resolve oder Reject von AUSSEN!
// myPromise.resolve(42)
myPromise.then(function (data) {
    console.log("Erfolg: ", data);
}, function (data) {
    console.log("Fehler:", data);
});
myPromise.then(null, function (err) {
    console.log("Fehler:", err);
});
myPromise.catch(function (err) {
    console.log("Fehler:", err);
});
setTimeout(function () {
    myPromise.then(function (data) {
        console.log("Data, später: ", data);
    }, function (data) {
        console.log("Fehler, später:", data);
    });
}, 3000);
let myHttpPromise = new Promise(function (resolve, reject) {
    // hier Async-Prozess definieren:
    let xhr = new XMLHttpRequest();
    // Konfiguration:
    xhr.open('get', 'data/josef.json', true);
    // Callback binden
    xhr.onreadystatechange = function () {
        console.log(this.readyState);
        if (this.readyState == 4) {
            console.log("Im Request:", this.responseText);
            // jetzt Promise auflösen mit Ajax-Daten:
            resolve(this.responseText);
        }
    };
    // Abschicken:
    xhr.send();
});
myHttpPromise.then(function (data) {
    console.log("Ajaxdaten, schnellstmöglich: ", data);
}, function (data) {
    console.log("Fehler, später:", data);
});
setTimeout(function () {
    myHttpPromise.then(function (data) {
        console.log("Ajaxdaten, 4s später: ", data);
    }, function (data) {
        console.log("Fehler, später:", data);
    });
}, 4000);
setTimeout(function () {
    myHttpPromise.then(function (data) {
        console.log("Ajaxdaten, 2s später: ", data);
    }, function (data) {
        console.log("Fehler, später:", data);
    });
}, 2000);
