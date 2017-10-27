"use strict";
// Class in TypeScript
class TsPerson {
    // so oder im Constructor möglich
    constructor(vorname, nachname, alter, wohnort) {
        this.nachname = nachname;
        this.alter = alter;
        this.wohnort = wohnort;
        // this.vorname = vorname;
        //this.nachname = nachname;
        // this.alter = alter;
    }
    hallo() {
        console.log("Hi");
    }
}
let hans = new TsPerson("Hans", "Huckebein", 42, "Nürnberg");
console.log(hans);
class Fahrer extends TsPerson {
    constructor(vorname, nachname, alter, wohnort) {
        super(vorname, nachname, alter, wohnort);
    }
    fahren() {
        console.log(this.vorname);
    }
}
let fritz = new Fahrer("Fitz", "Müller", 33, "nowhere");
fritz.fahren;
