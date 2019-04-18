var keystone = require('keystone');
 

exports = module.exports = function (req, res) {
	var menu = keystone.list('Menu');
	
	var query = menu.model.find({})
	
	query.exec(function(err, data){

		console.log(data)

		res.json(data)
	})

};

