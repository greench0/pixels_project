// Import the ORM to create functions that will interact with the database.
var orm = require('../config/orm.js');


// create the code that will call the ORM functions
var pixels = {

  all: function(callback) {
    orm.all("user_posts", function(res) {
      callback(res);
    });
  },


  selectUsers: function(callback) {
    orm.selectUsers("users", function(res) {
      callback(res);
    });
  },

  singlePost: function(callback) {
    orm.singlePost("1", function(res) {
      callback(res);
    });
  },

  


 

};


// Export the database functions for the controller (pixels_Controller.js).

module.exports = pixels;