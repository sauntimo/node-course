const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync( 'notes-data.json' );
        return JSON.parse( notesString );
    } catch (err) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync( 'notes-data.json', JSON.stringify( notes ) );
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter( (note) => note.title === title );

    if( duplicateNotes.length === 0 ){
        notes.push(note);
        saveNotes( notes );
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
}

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter( (note) => note.title !== title );
    saveNotes( filteredNotes );
    return notes.length !== filteredNotes.length;
}

var getNote = (title) => {
    return fetchNotes().filter( (note) => note.title === title )[0];
}

var logNote = (note) => {
  console.log( '-----' );
  console.log( `Title: ${note.title}` );
  console.log( `body: ${note.body}` );
}

module.exports = {
    // equal to 'addNote: addNote'
    addNote,
    getAll,
    removeNote,
    getNote,
    logNote
}
