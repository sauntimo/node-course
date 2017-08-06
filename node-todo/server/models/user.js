var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    required: true,
    type: String,
    trim: true,
    minLength: 1
  }
});

module.exports = {User};
