
var keystone = require('keystone');


keystone.init({
  'cookie secret': 'JSAdmin is start again!',
  'name': 'JSAdmin', // This will also be the name of your database in MongoDB.
  'auth': true,
  'user model': 'User',
  'auto update': true,
});


keystone.set("signin logo","/static/img/logo.jpg")


// Load your project's Models
// load ./models/*.js
keystone.import('models');

// routes
keystone.set('routes', require('./routes'));

keystone.start();
