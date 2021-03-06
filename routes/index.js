/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone');
var importRoutes = keystone.importer(__dirname);
var path = require('path');

// Import Route Controllers
var routes = {
    views: importRoutes('./views'),
    api: importRoutes('./api'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
    // Views

    app.get('/admin/api/index', routes.api.index);
    app.get('/admin/api/get/:list', routes.api.get);
    app.get('/admin/api/form/:list', routes.api.uiform);
    app.get('/admin/api/lists', routes.api.lists);
    app.get('/admin/api/listcolumns/:list', routes.api.listcolumns);

    app.get('/admin/api/unsplashlist', routes.api.unsplashapi);
    app.get('/admin/api/unsplashsearch', routes.api.unsplashapi.search);
 
    app.get('/admin/api/imagelist', routes.api.imageapi);
	// use static for admin	
	app.use('/admin', keystone.express.static(path.join(__dirname, '../admin')))

	//other static ,admin-lte,bootstrap,
	app.use('/static', keystone.express.static(path.join(__dirname, '../public')))


	//client app routers
	app.use('/', keystone.express.static(path.join(__dirname, '../app')))
    app.get('/views/index', routes.views.index);
    app.get('/views/blog', routes.views.blog);
};


