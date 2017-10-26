// Literal

let peter = {
    vorname:"Peter",
    hallo: function() {
        console.log(`Hallo, ich bin ${this.vorname}!`);
    }
}

let xTest = "Der X-Test";
let xTestMethod = function(){
    console.log("X-Test!");
}

let myKey = "aTest";

let xTestObject:any = {
    //  xTest: xTest,
    xTest, // concise property!
    // xTestMethod: xTestMethod,
     xTestMethod, // not the point!
     // computed key:
    [myKey]: "Jawohl!",
    // concise method declaration
    xSuperTestMethod(){
        console.log("Super X-Test!");
    }
};

let derXTest = xTestObject.xTest;
let derXTest2 = xTestObject['xTest'];

xTestObject['neu'] = "Das ist ein neues Property!";
console.log(xTestObject)
