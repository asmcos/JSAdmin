var keystone = require('keystone');
var Types = keystone.Field.Types;

var menu = new keystone.List('Menu');

menu.add({
  title: { type: String, required: true, initial: true },
  url: { type: String},
  level: { type: Number, default: 0},
  hiden: { type: Boolean },
});

menu.schema.virtual('canAccessKeystone').get(function () {
  return true;
});

menu.schema.pre('save', function (next) {
  return next();
});

menu.defaultColumns = 'title,url';
menu.register();


