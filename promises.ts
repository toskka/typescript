let xhr = new XMLHttpRequest();

// Konfig
xhr.open('get', 'data/frida.json', true);
console.log(xhr);

//Callback binden 1
xhr.onreadystatechange = function(){
    console.log(this.readyState);
    if (this.readyState == 4){
        console.log(this.responseText);
    }
}
// 2, same
xhr.onload = function(){
    console.log(xhr.responseText);

}
//Abschicken
xhr.send();

//Promise, Vorrichtung zum Binden von Callbacks
let myPromise = new Promise(function(resolve, reject){
    console.log(resolve);
    console.log(reject);
    resolve(22);
    reject('Hoppla');
});

myPromise.then(function(data){          //onfullfilled
    console.log("Success:", data);
},  function(data){                     //onrejected
    console.log("Fehler:", data);
});


setTimeout(function(){
    myPromise.then(function(data){
        console.log("Data später: ", data);
    });
}, 1500)

let myHttpPromise = new Promise(function(resolve, reject){
    let xhr = new XMLHttpRequest();   
    
    xhr.open('get', 'data/fritz.json', true);
    console.log(xhr);    
   
    xhr.onreadystatechange = function(){        
        if (this.readyState == 4){
            console.log(this.responseText);
            //promise auflösen
            resolve(this.responseText)   
        }
    }
    xhr.send();
});

setTimeout(function(){
    myHttpPromise.then(function(data){
        console.log("Ajaxdaten später: ", data);
    });
}, 1500)