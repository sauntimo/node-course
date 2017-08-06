const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// remove all matching. don't get doc back
// Todo.remove({}).then((res) => {
//   console.log(res);
// });

// Todo.findOneAndRemove - does return doc
Todo.findOneAndRemove({_id:'59878ae3717773bb5be1e653'}).then((todo) => {
  console.log(todo);
});


// Todo.findByIdAndRemove - does return doc

Todo.findByIdAndRemove('59878ae3717773bb5be1e653').then((todo) => {
  console.log(todo);
});
