var routes = require("./controllers/pixels_controller.js");
// load the things we need
var express = require('express');
var app = express();

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