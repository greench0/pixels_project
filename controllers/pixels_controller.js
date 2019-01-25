var express = require("express");
var app = express.Router();
var app = express();
var bcrypt = require('bcryptjs');

Handlebars = require('handlebars');
var exphbs = require("express-handlebars");

// var pixels = require("../models/pixels.js");
var connection = require ('../config/connection.js');

var bcrypt = require('bcryptjs');
var cookieParser = require('cookie-parser');
var session = require('express-session');
//allow sessions
app.use(session({ secret: 'app', cookie: { maxAge: 1*1000*60*60*24*365 }}));
app.use(cookieParser());



app.get('/currentuser', function(req, res){
	var currentUser = req.session.user_name;
	if(!currentUser){
		return res.send("You need to be logged in to do that");
	} else {
		res.json(currentUser);
	}
});

// Create all our routes and set up logic within those routes where required.
// ==============================================================================================================================
//Create GET / render Routes
app.get('/', function(req, res){
	var username = req.session.user_name;
	var userid = req.session.user_id;
	  res.render('pages/index', {
		username,
		userid
	  });
})

app.get('/create', function (req, res) {
	var username = req.session.user_name;
	var userid = req.session.user_id;
	res.render('pages/create', {
		username,
		userid
	});
})

app.get('/created', function (req, res) {
	var username = req.session.user_name;
	var userid = req.session.user_id;
	res.render('pages/created', {
		username,
		userid
	});
})

app.get('/welcome', function (req, res) {
	connection.query('SELECT * FROM user_posts LEFT OUTER JOIN users2 ON users2.user_id = user_posts.user_id ORDER BY post_id DESC;', function (error, results, fields) {
		if (error) throw error;

	var username = req.session.user_name;
	var userid = req.session.user_id;
	res.render('pages/welcome', {
		data: results,
		username,
		userid
	});
});
})

app.get('/signedup', function (req, res) {
	var username = req.session.user_name;
	var userid = req.session.user_id;
	res.render('pages/signedup', {
		username,
		userid
	});
})

app.get('/gallery', function (req, res) {
	connection.query('SELECT * FROM user_posts LEFT OUTER JOIN users2 ON users2.user_id = user_posts.user_id ORDER BY post_id DESC;', function (error, results, fields) {
		if (error) throw error;

		var username = req.session.user_name;
		var userid = req.session.user_id;

		res.render('pages/gallery', {
			data: results,
			username,
			userid
			
		});
	});
})

app.get('/login', function (req, res) {
	var username = req.session.user_name;

	res.render('pages/login', {
		username
	  });
	});

app.get('/signup', function (req, res) {
	var username = req.session.user_name;
	res.render('pages/signup', {
		username
	});
});

app.get('/user/:id', function (req, res) {
	connection.query('SELECT * FROM users2 LEFT OUTER JOIN user_posts ON users2.user_id = user_posts.user_id WHERE user_posts.user_id = ?', [req.params.id], function (error, results, fields) {
		if (error) throw error;
		var username = req.session.user_name;
		var userid = req.session.user_id;

		res.render('pages/user', {
			data: results,
			username,
			userid,
			
		});
	});
})

app.get('/post/:id', function (req, res) {
	connection.query('SELECT * FROM user_posts LEFT OUTER JOIN users2 ON users2.user_id = user_posts.user_id WHERE post_id = ?', [req.params.id], function (error, results, fields) {
	if (error) throw error;
	var username = req.session.user_name;
	var userid = req.session.user_id;
 
		res.render('pages/post', {
			data: results,
			username,
			userid
		});
	});
})


// =============================================================
// Create post Route - editing the database
app.get('/insert-post', function (req, res) {
	// res.json(req.query);
	connection.query('INSERT INTO user_posts (user_id, post_info, post_data0, post_data1, post_data2, post_data3, post_data4, post_data5, post_data6, post_data7, post_data8, post_data9, post_data10, post_data11, post_data12, post_data13, post_data14, post_data15, post_data16, post_data17, post_data18, post_data19, post_data20, post_data21, post_data22, post_data23, post_data24, post_data25, post_data26, post_data27, post_data28, post_data29, post_data30, post_data31, post_data32, post_data33, post_data34, post_data35, post_data36, post_data37, post_data38, post_data39, post_data40, post_data41, post_data42, post_data43, post_data44, post_data45, post_data46, post_data47, post_data48, post_data49, post_data50, post_data51, post_data52, post_data53, post_data54, post_data55, post_data56, post_data57, post_data58, post_data59, post_data60, post_data61, post_data62, post_data63, post_data64, post_data65, post_data66, post_data67, post_data68, post_data69, post_data70, post_data71, post_data72, post_data73, post_data74, post_data75, post_data76, post_data77, post_data78, post_data79, post_data80, post_data81, post_data82, post_data83, post_data84, post_data85, post_data86, post_data87, post_data88, post_data89, post_data90, post_data91, post_data92, post_data93, post_data94, post_data95, post_data96, post_data97, post_data98, post_data99, post_data100, post_data101, post_data102, post_data103, post_data104, post_data105, post_data106, post_data107, post_data108, post_data109, post_data110, post_data111, post_data112, post_data113, post_data114, post_data115, post_data116, post_data117, post_data118, post_data119, post_data120, post_data121, post_data122, post_data123, post_data124, post_data125, post_data126, post_data127, post_data128, post_data129, post_data130, post_data131, post_data132, post_data133, post_data134, post_data135, post_data136, post_data137, post_data138, post_data139, post_data140, post_data141, post_data142, post_data143) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [req.session.user_id, req.query.post_info, req.query.post_data0, req.query.post_data1, req.query.post_data2, req.query.post_data3, req.query.post_data4, req.query.post_data5, req.query.post_data6, req.query.post_data7, req.query.post_data8, req.query.post_data9, req.query.post_data10, req.query.post_data11, req.query.post_data12, req.query.post_data13, req.query.post_data14, req.query.post_data15, req.query.post_data16, req.query.post_data17, req.query.post_data18, req.query.post_data19, req.query.post_data20, req.query.post_data21, req.query.post_data22, req.query.post_data23, req.query.post_data24, req.query.post_data25, req.query.post_data26, req.query.post_data27, req.query.post_data28, req.query.post_data29, req.query.post_data30, req.query.post_data31, req.query.post_data32, req.query.post_data33, req.query.post_data34, req.query.post_data35, req.query.post_data36, req.query.post_data37, req.query.post_data38, req.query.post_data39, req.query.post_data40, req.query.post_data41, req.query.post_data42, req.query.post_data43, req.query.post_data44, req.query.post_data45, req.query.post_data46, req.query.post_data47, req.query.post_data48, req.query.post_data49, req.query.post_data50, req.query.post_data51, req.query.post_data52, req.query.post_data53, req.query.post_data54, req.query.post_data55, req.query.post_data56, req.query.post_data57, req.query.post_data58, req.query.post_data59, req.query.post_data60, req.query.post_data61, req.query.post_data62, req.query.post_data63, req.query.post_data64, req.query.post_data65, req.query.post_data66, req.query.post_data67, req.query.post_data68, req.query.post_data69, req.query.post_data70, req.query.post_data71, req.query.post_data72, req.query.post_data73, req.query.post_data74, req.query.post_data75, req.query.post_data76, req.query.post_data77, req.query.post_data78, req.query.post_data79, req.query.post_data80, req.query.post_data81, req.query.post_data82, req.query.post_data83, req.query.post_data84, req.query.post_data85, req.query.post_data86, req.query.post_data87, req.query.post_data88, req.query.post_data89, req.query.post_data90, req.query.post_data91, req.query.post_data92, req.query.post_data93, req.query.post_data94, req.query.post_data95, req.query.post_data96, req.query.post_data97, req.query.post_data98, req.query.post_data99, req.query.post_data100, req.query.post_data101, req.query.post_data102, req.query.post_data103, req.query.post_data104, req.query.post_data105, req.query.post_data106, req.query.post_data107, req.query.post_data108, req.query.post_data109, req.query.post_data110, req.query.post_data111, req.query.post_data112, req.query.post_data113, req.query.post_data114, req.query.post_data115, req.query.post_data116, req.query.post_data117, req.query.post_data118, req.query.post_data119, req.query.post_data120, req.query.post_data121, req.query.post_data122, req.query.post_data123, req.query.post_data124, req.query.post_data125, req.query.post_data126, req.query.post_data127, req.query.post_data128, req.query.post_data129, req.query.post_data130, req.query.post_data131, req.query.post_data132, req.query.post_data133, req.query.post_data134, req.query.post_data135, req.query.post_data136, req.query.post_data137, req.query.post_data138, req.query.post_data139, req.query.post_data140, req.query.post_data141, req.query.post_data142, req.query.post_data143], function (error, results, fields) {
		if (error) throw error;

		res.render('pages/created');
	});
});

app.get('/delete-post/:post_id', function (req, res) {
	connection.query('DELETE FROM user_posts WHERE post_id = ?', [req.params.post_id], function (error, results, fields) {
		if (error) throw error;
		return res.redirect('../gallery');
	});
});

app.get('/post-post/:post_id', function (req, res) {
	connection.query('DELETE FROM user_posts WHERE post_id = ?', [req.params.post_id], function (error, results, fields) {
		if (error) throw error;
		return res.redirect('../gallery');
	});
});


// =============================================================
// login routes
// http://localhost:3000/users/1
app.get('/users/:user_id', function (req, res) {
	connection.query('SELECT * FROM users2 WHERE user_id = ?', [req.params.user_id], function (error, results, fields) {
		if (error) throw error;

		res.json(results[0]);
	});
});

// localhost:3000/signup/pavan/pavan
// localhost:3000/signup/guest/guest
app.post('/signupform', function (req, res) {

	var username = req.body.username;
	var password = req.body.password;

	bcrypt.genSalt(10, function (err, salt) {
		// res.send(salt);
		bcrypt.hash(password, salt, function (err, p_hash) {

			// res.send(p_hash);

			connection.query('INSERT INTO users2 (user_name, password_hash) VALUES (?, ?)', [username, p_hash], function (error, results, fields) {

				var what_user_sees = "";
				if (error) {
					res.render('pages/signup');

				} else {
					res.render('pages/signedup');
				}
			});
		});
	});
});

// localhost:3000/login/user_name/password
// localhost:3000/login?user_name=name&password=name
app.post('/login', function (req, res) {
	var username = req.body.username;
	var password = req.body.password;
	connection.query('SELECT * FROM users2 WHERE user_name = ?', [username], function (error, results, fields) {

		if (error) throw error;

		if (results.length == 0) {
			// res.send('try again');
			res.redirect('/login');
		} else {
			bcrypt.compare(password, results[0].password_hash, function (err, result) {

				if (result == true) {

					req.session.user_id = results[0].user_id;
					req.session.user_name = results[0].user_name;

					//   res.send('you are logged in');
					res.render('pages/welcome');
					// res.redirect()
				} else {
					res.redirect('/login');
				}
			});
		}
	});
});


// app.locals.user = req.session.user_id;



app.get('/another-page', function (req, res) {
	var user_info = {
		user_id: req.session.user_id,
		user_name: req.session.user_name
	}

	res.json(user_info);
});


app.get('/logout', function (req, res) {
	req.session.destroy(function (err) {
		res.redirect('/');
	})
});



// ===============================================================
// Export routes for server.js to use.
module.exports = app;




