var keystone = require('keystone');
 

exports = module.exports = function (req, res) {
	var Menu = keystone.list('Menu');

	var item = new Menu.model(req.body||req.query);
	
	item.title = req.query.title

	Menu.updateItem(item, req.body||req.query, {
        title: "menu1",
    }, function (err) {
		res.json(Menu.getData(item));
    });





};

