const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

const commands = {

    'add' : () => {
        var note = notes.addNote( argv.title, argv.body );
        if( note ){
            console.log( 'Added note.' );
            notes.logNote( note );
        } else {
            console.log( 'Failed to add note - duplicate title' );
        }
    },

    'remove' : () => {
        var noteRemoved = notes.removeNote( argv.title );
        var msg = noteRemoved
            ? 'Note was removed'
            : 'Note not found';
        console.log( msg );
    },

    'read' : () => {
        var note = notes.getNote( argv.title );
        if( note ){
            console.log( 'Note retrieved.' );
            notes.logNote( note );
        } else {
            console.log( `No note with title ${argv.title} was found` );
        }
    },

    'list' : () => {
        var allNotes = notes.getAll();
        console.log( `Printing ${allNotes.length} notes` );
        allNotes.forEach( (note) => notes.logNote( note ) );
    },

    'default' : () => {
        console.log( 'command not recognised' );
    }
}

var test = (commands[command] || commands['default'])() ;
