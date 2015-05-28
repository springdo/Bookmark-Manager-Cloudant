'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var jwt = require('jsonwebtoken');
var crypto = require('crypto');



var UserSchema = new Schema({
  username: {type: String, lowercase: true, unique: true},
  hash: String,
  salt: String
});
/*
from - https://thinkster.io/mean-stack-tutorial/
The pbkdf2Sync() function takes four parameters: password, salt, iterations, and key length.
We'll need to make sure the iterations and key length in our setPassword() method match the 
ones in our validPassword() method
*/

UserSchema.methods = {
	
	setPassword : function(password){
		// helper methods used to ensure password not stored as plain text
		this.salt = crypto.randomBytes(16).toString('hex');
		this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
	},
	
	validPassword : function(password) {
		var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
		return this.hash === hash;
	},

	generateJWT : function(){

	}

}



module.exports = mongoose.model('User', UserSchema);