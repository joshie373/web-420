/*
============================================
; Title: user.js
; Author: Professor Krasso
; Date: 07 November 2019
; Modified By: joshua Hughes
; Description: Defines schema for user collection
;=============================================
*/

/**
 Fields username, password, and email
 */

var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

module.exports = mongoose.model('User', userSchema);

//user.save is used to add a new user in our database
module.exports.add = (user,callback) => {
  user.save(callback);
};


/**
 Database queries
 */

module.exports.getById = (id,callback) => {
  var query = {_id: id};
  User.findById(query,callback);
};
