// load the things we need
var express = require('express');
var app = express();

var bcrypt = require('bcryptjs');


var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

var routes = require("./controllers/pixels_controller.js");
app.use(routes);
// =============================================================
	//making sure bodyparser is set up so that we can use req.body in app.post requests
var methodOverride = require('method-override');

app.use(methodOverride('_method'));

// =============================================================
//session stuff
	var bcrypt = require('bcryptjs');
	var cookieParser = require('cookie-parser');
	var session = require('express-session');

	//allow sessions
	app.use(session({ secret: 'app', cookie: { maxAge: 1*1000*60*60*24*365 }}));
	app.use(cookieParser());

// =============================================================
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

// Set Handlebars.
Handlebars = require('handlebars');
var exphbs = require("express-handlebars");

var hbs = exphbs.create({
	handlebars: Handlebars,
	defaultLayout: "main",
	// Specify helpers which are only registered on this instance.
	helpers: {
		foo: function (a) { return 'FOO!' + a; },
		bar: function (b) { return 'BAR!' + b; },
		
	}
});

app.engine("handlebars", hbs.engine); //setting up file extension
app.set("view engine", "handlebars"); 

	// =============================================================



app.listen(3000, function(){
	console.log('listening on 3000')
});