console.log( 'starting notes.js' );

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
    console.log( 'Getting all notes' );
}

var removeNote = (title) => {
    console.log( `Removing note ${title}` );
}

var getNote = (title) => {
    console.log( `Getting note ${title}` );
}

module.exports = {
    // equal to 'addNote: addNote'
    addNote,
    getAll,
    removeNote,
    getNote
}
