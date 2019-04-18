var keystone = require('keystone');
var Types = keystone.Field.Types;

var Menu = new keystone.List('Menu');

Menu.add({
  title: { type: String, required: true, initial: true },
  url: { type: String},
  level: { type: Number, default: 0},
  hiden: { type: Boolean },
});

Menu.schema.virtual('canAccessKeystone').get(function () {
  return true;
});

Menu.schema.pre('save', function (next) {
  return next();
});

Menu.defaultColumns = 'title,url';
Menu.register();


