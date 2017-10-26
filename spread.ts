
//Rest ...

function add(a:number, b:number, c:number) {
    return a + b + c;
}

let ergebnis2 = add(1,2,3);
console.log(ergebnis2);

let zahlen: number[]; 
    zahlen = [1,2,4];

ergebnis2 = add(...zahlen);
console.log(ergebnis2);
