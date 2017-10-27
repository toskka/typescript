// Classes
"use strict";

let Person = (function() {
    function Person(vorname) {
        "use strict";
        this.vorname = vorname;
    }
    Person.prototype.hallo = function(){
        console.log("Hallo, ich bin ", this.vorname);
    }
    Person.prototype.lieblingsessen = "Pizza";
    return Person;
})();

let peter = new Person("Peter");
peter.hallo();
peter.lieblingsessen = "Pasta";
console.log(peter);

let Fahrer = function(vorname){
    function Fahrer(){
        this.auto = "BMW"
    }
    Fahrer.prototype = new Person(vorname);

    return new Fahrer();
}

let gustav = new Fahrer("Gustav");
gustav.hallo();
console.log(gustav);

// ECMA6:

let Es6Person = (function(){
    
    let mySymbolKey = Symbol();

    return class Es6Person  {
        // hier ist MEIN Constructor!
        constructor(vorname) {
            let meinBeispiel = "Beispiel für was Privates";
            this.vorname = vorname;
            this._lieblingsessen = "Pizza"
            // Closure, daher: MUSS im Constructor geschehen
            Object.defineProperty(this,'beispiel',{
                get: function(){
                    return meinBeispiel;
                },
                set:function(neuesBeispiel){
                    meinBeispiel = neuesBeispiel;
                }
            });
        }
        hallo() {
            console.log("Hi! Ich bin ", this.vorname);
        }
        get lieblingsessen() {
            // Event emitten?
            return this._lieblingsessen;
        }
        set lieblingsessen(newEssen) {
            console.log("Neues Essen: ", newEssen);
            this._lieblingsessen = newEssen;
        }
    }
})();

// vielleicht ein Hack, aber...
// Es6Person.prototype.lieblingsessen = "Pizza";


console.log(typeof Es6Person);

// Es6Person(); // kann ich's aufrufen? // Nope!

let heinz = new Es6Person("Heinz");
console.log(heinz);
heinz.hallo();
console.log(heinz.lieblingsessen);
heinz.lieblingsessen = "Pasta";
heinz._lieblingsessen = "Döner";
console.log(heinz.lieblingsessen);

class Es6Fahrer extends Es6Person {
    constructor(vorname){
        // ZUERST!
        super(vorname);
        this.auto = "BMW";
    }
    fahren() {
        console.log("Brumm brumm...");
    }
}

let fritz = new Es6Fahrer("Fritz");
console.log(fritz);

