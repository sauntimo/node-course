var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://tsvm.webpack-games:27017/TodoApp');

module.exports = { mongoose };
