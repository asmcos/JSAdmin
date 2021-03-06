var keystone = require('keystone');


keystone.init({
  'cookie secret': 'JSAdmin is start again!',
  'name': 'JSAdmin', // This will also be the name of your database in MongoDB.
  'auth': true,
  'user model': 'User',
});


// Load your project's Models
// load ./models/*.js
keystone.import('models');

var User = keystone.list('User');




new User.model({
    name: { first: 'Admin', last: 'User' },
    password: 'admin',
    email: 'asmcos@gmail.com',
    isAdmin: true
}).save();
