// Typen konvertieren (primitiv)

let ziffer = "42";
console.log(ziffer)

let zahl = ziffer * 1;
console.log(zahl);

let zahl2 = parseInt(ziffer);
console.log(zahl2);

let zahl3 = Number(ziffer);
console.log(zahl3);



let arrayMitStrings: string[];
let auchArrayMitStrings: Array<string>;
let gemischtesArray: (number|boolean)[];

interface IPerson {
    vorname:string;
    alter:number;
    kinder: number | boolean;
}
interface IAuto {
    marke:string;
    besitzer:IPerson;
}



let meinePerson:IPerson = <IPerson>{}; // Typeinference !!!
meinePerson.vorname = "Peter";
meinePerson.alter = 42;

let anderePerson:any = {};
anderePerson.vorname = "Hans";
anderePerson.alter = 42;

let meinAuto:IAuto = <IAuto>{};
meinAuto.besitzer = <IPerson>{};
meinAuto.besitzer.kinder = false;

