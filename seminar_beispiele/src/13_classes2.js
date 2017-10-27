"use strict";
// Class in TypeScript
class TsPerson {
    // public alter:number;
    constructor(vorname, nachname, alter) {
        this.nachname = nachname;
        this.alter = alter;
        this.vorname = vorname;
    }
    hallo() {
        console.log("Hi, ich bin ", this.alter, "Jahre alt."); // Okay!
    }
}
let hans = new TsPerson("Hans", "Huckebein", 30);
console.log(hans);
console.log(hans.alter); // nicht okay, "protected"!
// eine Funktion:
// (a:number,b:number) => number;
let addiereX = function (a, b) {
    return a + b;
};
addiereX = function (blabla, blublu) {
    // Ätsch!
    return 42;
};
// ein Fahrzeug beschreiben:
class Fahrzeug {
}
class Auto {
    // marke:string;
    // ps:number;
    constructor(marke, ps) {
        this.marke = marke;
        this.ps = ps;
        this.ps = ps;
    }
    addiere(d, b) {
        return d + b + c;
    }
}
class TsFahrer extends TsPerson {
    constructor(vorname, nachname, alter, fuehrerschein, fahrzeug) {
        super(vorname, nachname, alter);
        this.fuehrerschein = fuehrerschein;
        this.fahrzeug = fahrzeug;
    }
    fahren() {
        console.log("Fahre.... Ich bin ", this.vorname, " und ", this.alter);
    }
    get punkteStand() {
        return 11;
    }
}
let fritz = new TsFahrer("Fritz", "Fahrer", 19, "Klasse 1", {
    marke: "Herkules",
    ps: 0,
    addiere: function (a, b) { return 10; },
    felgenhoehe: 28
});
fritz.fahren();
console.log(fritz.alter); // nicht okay, "protected"!
console.log(fritz.punkteStand);
