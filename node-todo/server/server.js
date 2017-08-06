const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const {ObjectId} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 5000;

app.use( bodyParser.json() );

app.post( '/todos', ( req, res ) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then( (doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get( '/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/23423423
app.get( '/todos/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectId.isValid(id)){
    // console.log('invalid id');
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if(!todo){
      // console.log( 'valid id but not found' );
      return res.status(404).send();
    }
    res.send({todo});
  }).catch( (e) => {
    // console.log( 'error: bad request' );
    res.status(400).send();
  });
});

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectId.isValid(id)){
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch( (e) => {
    res.status(400).send();
  });
});

app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  // limit the properties a user can update
  var body = _.pick(req.body, ['text', 'completed']);
  if(!ObjectId.isValid(id)){
    return res.status(404).send();
  }

  if( _.isBoolean(body.completed) && body.completed ){
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, { $set: body }, {new: true}).then((todo) => {
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });

});

app.listen( port, () => {
  console.log( `Listening on port ${port}` );
});

module.exports = {app};
