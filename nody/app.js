const yargs = require('yargs');
const notes = require('./notes');
const titleObj = {
    describe: 'Title of note', 
    demand: true,
    alias: 't'
};

const bodyObj = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

const argv = yargs
                .command('add', 'Add a new note', {
                    title: titleObj,
                    body: bodyObj
                })
                .command('list', 'List all notes')
                .command('read', 'Read a note', {
                    title: titleObj
                })
                .command('remove', 'Remove a note', {
                    title: titleObj
                })
                .help()
                .argv;

var command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log('Note created');
        notes.logNote(note);
    } else {
        console.log('Note already exists');
    }
} else if (command === 'list') {
    var notesList = notes.getAll();
    console.log(notesList);
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if(note){
        console.log('Note Found');
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}