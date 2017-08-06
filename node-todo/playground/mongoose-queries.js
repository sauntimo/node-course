const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '598746b935d4951381d7bcfd';
// // var id = '698746b935d4951381d7bcfd';
//
// if(!ObjectId.isValid(id)){
//   console.log( 'Id not valid' );
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log( 'Todos', todos );
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log( 'Todo', todo );
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log( 'Id not found.' )
//   }
//   console.log( 'find by id', todo );
// }).catch((e) => {
//   console.log(e);
// });

var id = '59871797a46b5c0caa279a0f';

User.findById(id).then((user) => {
  if(!user){
    return console.log( 'Id not found.' )
  }
  console.log( 'find by id', user );
}).catch((e) => {
  console.log(e);
});
