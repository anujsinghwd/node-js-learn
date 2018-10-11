// var obj = {
//     name: 'anuj'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

const fs = require('fs');

var notes = {
    title: 'hey anuj',
    body: 'i am working good'
}

//fs.writeFileSync('notes.json', JSON.stringify(notes));

var noteString = fs.readFileSync('notes.json');
console.log(JSON.parse(noteString));