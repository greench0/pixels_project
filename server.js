// load the things we need
var express = require('express');
var app = express();


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
// =============================================================
app.listen(3000, function(){
	console.log('listening on 3000')
});