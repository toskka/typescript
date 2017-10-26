// mehr zu Strings

let einzeiligerString = 'Ich bin ein einzeiliger String...';

let einzeiligerString2 = "Ich bin ein einzeiliger String...";

// neue Syntax ... darf mehrzeilig sein (kein Normalizing!!)
let template = `
    <div id="content">
    <form action="">
        <label for="user">Username</label>
        <input type="text" id="user" name="user>
    </form>
    </div>
`;
            
console.log(template);

let vorname = "Peter";
let nachname = "Panter";

// Templatevariablen gehen nur in Backtickstrings:
let halloTpl = `Hallo, ich bin ${vorname} ${nachname}!`;

nachname = "Büffel";

console.log(halloTpl);

function makeHallo(vorname, nachname) {
    return `Hallo, ich bin ${vorname} ${nachname}!`;
}



