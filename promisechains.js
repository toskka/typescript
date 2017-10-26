"use strict";
let promiseLevel0 = new Promise(function (resolve, reject) {
    resolve({ "daten": [1, 2, 3, 4] });
});
promiseLevel0.then(function (data) {
});
