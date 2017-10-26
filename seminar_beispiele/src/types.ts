// Typisierung und Annotation in TypeScript

let bestimmtZahl = 42;
    bestimmtZahl = "Keine Zahl";

let vielleichtZahl;

    vielleichtZahl = 17;
    vielleichtZahl = "Geht das?";

let sollZahl:number;

    sollZahl = 99;
    sollZahl = "Peng";
    sollZahl = true;
    sollZahl = null;
    sollZahl = undefined;

    // Initalisierung mit null -> any-Typ !!
let eventuellZahl = null;
    eventuellZahl = 17;

let dochZahl:number = null;
    dochZahl = 17;