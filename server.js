// load the things we need
var routes = require("./controllers/pixels_controller.js");

var express = require('express');
var app = express();


// var bodyParser = require('body-parser');
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
// // parse application/json
// app.use(bodyParser.json());

app.use(routes);
// =============================================================

// =============================================================
// app.listen(3000, function(){
// 	console.log('listening on 3000')
// });

var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function() {
console.log("Listening on Port 3000");
});