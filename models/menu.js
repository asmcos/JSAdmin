var keystone = require('keystone');
var Types = keystone.Field.Types;

var Menu = new keystone.List('Menu');

Menu.add({
  title: { type: String, required: true, initial: true },
  url: { type: String},
  level: { type: Number, default: 0},
  hiden: { type: Boolean },
});

Menu.schema.pre('save', function (next) {
  return next();
});

Menu.defaultColumns = 'title,url,level';
Menu.register();


