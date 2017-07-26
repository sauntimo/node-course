console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

const commands = {
    'add' : () => {
        notes.addNote( argv.title, argv.body );
    },
    'remove' : () => {
        notes.removeNote( argv.title );
    },
    'read' : () => {
        notes.getNote( argv.title );
    },
    'list' : () => {
        notes.getAll();
    },
    'default' : () => {
        console.log( 'command not recognised' );
    }
}

var test = (commands[command] || commands['default'])() ;

