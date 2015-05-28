'use strict';
//Modeling in Cloudant
//https://cloudant.com/blog/schemas-in-couchdb/#.VWXZtmTBzGc

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
// TODO - turn tag into an array of tags
var LinkmanagerSchema = new Schema({
	title: String, 
	link: String, 
	rank: {type: Number, default: 0}, 
	tag: String
});

module.exports = mongoose.model('Linkmanager', LinkmanagerSchema);