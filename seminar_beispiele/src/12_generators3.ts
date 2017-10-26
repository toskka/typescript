// Was wollen wir?
// Pseudolinear schreiben

// Wir brauchen:
// a) Generator zur Steuerung des Ablaufes
// b) ein AjaxRunner, der den Call formuliert und
//                    das Ergebnis nimmt und weitergibt
// c) ein Ajaxer, der dem Call durchführt

// der Runner:
// nimmt den URL entgegen, bildet Callback
// ruft den Ajaxer (mit Url und Callback)
// kennt den Generator und ruft (im Callback!) next()
// gibt dabei Requestdaten weiter

// die GeneratorFunction
// steuert die Reihenfolge des Ablaufs
// ruft den AjaxRunner
// nimmt den Return entgegen (gibt ihn evtl. weiter)
// -> bildet den Generator

// der Ajaxer:
// formuliert den Request
// erhält dafür den URL und einen Callback

/*

    req1
    req1.cb -> req2
               req2.cb -> req3
                          req.cb -> req4

*/


function * ajaxGenerator() {

    // 1. Call
    let dataReq1 =  yield ajaxRunner('data/heinrich.json');
    console.log("1. Request sagt:", dataReq1);
    // warten 

    // 2. Call
    let dataReq2 =  yield ajaxRunner('data/josef.json');
    console.log("2. Request sagt:", dataReq2);
    // warten  

    // 3. Call
    let dataReq3 =  yield ajaxRunner('data/gerda.json');
    console.log("3. Request sagt:", dataReq3);
   // warten

}

function ajaxer(url, cb) {
    let request = new XMLHttpRequest();
    request.open('get', url, true);
    request.onreadystatechange = cb;
    request.send();
}

function ajaxRunner(url) {

        let cb = function(){
            if(this.readyState === 4) {
                ajaxAblauf.next(this.responseText);
            }
        };
      ajaxer(url, cb)  
}

let ajaxAblauf = ajaxGenerator();
ajaxAblauf.next() // los gehts!