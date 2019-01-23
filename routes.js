var HomeController = require('./controllers/HomeController');
var LoginController = require('./controllers/LoginController');
module.exports = function(app){
	// Main Routes
	app.route('/').get(HomeController.Home);
	app.route('/login').get(LoginController.Login);
	app.route('/registration').post(LoginController.Registration);
	app.route('/forgotpassword').post(LoginController.Forgotpassword);
	app.route('/home').post(HomeController.Sports);
	app.route('/localradio').get(HomeController.localRadio);
	app.route('/recents').get(HomeController.Recents);
	app.route('/trending').get(HomeController.Trending);
	app.route('/music').get(HomeController.Music);
	app.route('/sports').get(HomeController.Sports);
	app.route('/news').get(HomeController.News);
	app.route('/talk').get(HomeController.Talk);
	app.route('/podcasts').get(HomeController.Podcasts);
	app.route('/bylocation').get(HomeController.byLocation);
	app.route('/bylanguage').get(HomeController.byLanguage);
	
	
	app.route('/contactus').get(HomeController.contactUs);
	app.route('/aboutus').get(HomeController.aboutUs);
	app.route('/terms').get(HomeController.Terms);
	app.route('/privacy').get(HomeController.Privacy);

}
