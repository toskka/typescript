// Class in TypeScript

class TsPerson {
    // TS: Liste der Properties hier!
    public vorname:string;
    // so oder im Constructor möglich

    constructor(vorname:string, 
                public nachname:string, 
                public alter:number,
                public wohnort: string) {
        // this.vorname = vorname;
        //this.nachname = nachname;
        // this.alter = alter;
    }
    hallo(){
        console.log("Hi");
    }
}

let hans = new TsPerson("Hans", "Huckebein", 42, "Nürnberg");
console.log(hans);

class Fahrer extends TsPerson {
    constructor(vorname:string, 
        nachname:string, 
        alter:number,
        wohnort: string) {
            super(vorname,nachname,alter,wohnort);

    }
    fahren() {
        console.log(this.vorname);
    }
}

let fritz = new Fahrer("Fitz","Müller", 33, "nowhere");
fritz.fahren;