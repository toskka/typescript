// Class in TypeScript

class TsPerson {
    // TS: Liste der Properties hier!
    vorname:string;
    // public alter:number;

    constructor(vorname:string, 
                public nachname:string,
                protected alter:number    ) {
        this.vorname = vorname;
    }
    hallo(){
        console.log("Hi, ich bin ", this.alter, "Jahre alt."); // Okay!
    }
}

let hans = new TsPerson("Hans", "Huckebein", 30);
console.log(hans);
console.log(hans.alter); // nicht okay, "protected"!

// eine Funktion:
// (a:number,b:number) => number;
let addiereX = function(a:number, b:number) :number  {
    return a + b;
};

addiereX = function(blabla, blublu) {
    // Ätsch!
    return 42;
}

// ein Fahrzeug beschreiben:
class Fahrzeug {
    marke:string;
    ps:number;
}
interface IFahrzeug {
    marke:string;
    ps:number;
    felgenhoehe?:number;
    addiere: (a:number, b:number) => number;
}

class Auto implements IFahrzeug {
   // marke:string;
   // ps:number;

    constructor(public marke:string, public ps:number) {
        this.ps = ps
    }
    addiere(d:number, b:number){
        return d + b + c;
    }
}


class TsFahrer extends TsPerson {

    constructor(  vorname:string, 
                  nachname:string, 
                  alter:number, 
                  private fuehrerschein:string,
                  private fahrzeug: IFahrzeug ){
        super(vorname, nachname, alter);
    }
    fahren() :void {
        console.log("Fahre.... Ich bin ", this.vorname, " und ", this.alter);
    }
    get punkteStand() :number {
        return 11;
    }
}

let fritz = new TsFahrer("Fritz","Fahrer", 19, "Klasse 1", { 
    marke:"Herkules", 
    ps:0, 
    addiere:function(a,b){return 10;}, 
    felgenhoehe:28
});
fritz.fahren();
console.log(fritz.alter); // nicht okay, "protected"!
console.log(fritz.punkteStand);