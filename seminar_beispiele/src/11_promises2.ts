// Promisechains...

// Master
let promiseLevel1 = new Promise(function(resolve, reject){
      resolve({"myArray":[1,2,3,4]});
      // reject("Ätsch");
});


let promiseLevel2 = promiseLevel1.then(function(data){
    console.log("Level 1, Erfolg:", data);
    if(data.myArray.length) {
        return data.myArray; // !!!
    } else {
        throw new Error("Keine Daten verfügbar");
    }

}, function(err) {
    console.log("Level 1, Error:", err);
    // return "Da ging was schief"; // triggert Success nächstes Level
    throw new Error("Da ging was schief...");
});

let promiseLevel3 = promiseLevel2.then(function(data){
    console.log("Level2, Erfolg!", data);
    return 42;
}, function(err) {
    console.log("Level 2, Error:", err);
});

promiseLevel3.then(function(data){
    console.log("Level3, Erfolg!", data);
}, function(err) {
    console.log("Level 3, Error:", err);
});

// weitere Callbacks...