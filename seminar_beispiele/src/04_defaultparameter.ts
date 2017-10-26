
let addiere4 = function (a:number = 0, b:number = 0, c:number = 0) :number {
    return a + b + c;
}

let summe4 = addiere4(1,2,3);
console.log(summe4);

let addiere3 = function (a:number, b?:number) :number {
    b = b || 0;
    return a + b;
}

let summe3 = addiere3(1,2);
console.log(summe3);

summe3 = addiere3(6);
console.log(summe3);

