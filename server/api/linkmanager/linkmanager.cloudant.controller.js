'use strict';

var _ = require('lodash');
var cloudantdb = require('../../components/cloudant');

//var config = require('../../config/environment');
//
//var dbname ='migrationtestdb';
//var nano = require('nano')(config.cloudant.url),
//    migrationtestdb =  nano.use(dbname),


var cloudant = cloudantdb.getCloudant()
var dbname ='migrationtestdb';
var db = cloudant.db.use(dbname);
var params   = {include_docs: true, limit: 10, descending: true};




// Get list of linkmanagers
exports.index = function(req, res) {
  //console.log(JSON.stringify(db));
  //db.fetch({keys:["552d99bdc06b49125701b20a64ca3839"]}, params, function (err, linkmanagers) {
  db.list(params, function (err, linkmanagers) {
    if(err) { return handleError(res, err); }
    console.log("linkmanagers is "+JSON.stringify(linkmanagers));
    return res.json(200, linkmanagers);
  });
};

// Get a single linkmanager
exports.show = function(req, res) {
  Linkmanager.findById(req.params.id, function (err, linkmanager) {
    if(err) { return handleError(res, err); }
    if(!linkmanager) { return res.send(404); }
    return res.json(linkmanager);
  });
};

// Creates a new linkmanager in the DB.
exports.create = function(req, res) {
  Linkmanager.create(req.body, function(err, linkmanager) {
    if(err) { return handleError(res, err); }
    return res.json(201, linkmanager);
  });
};

// Updates an existing linkmanager in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Linkmanager.findById(req.params.id, function (err, linkmanager) {
    if (err) { return handleError(res, err); }
    if(!linkmanager) { return res.send(404); }
    var updated = _.merge(linkmanager, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, linkmanager);
    });
  });
};

// Updates the rank associated with a given bookmark
exports.upRank = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Linkmanager.findById(req.params.id, function (err, linkmanager) {
    if (err) { return handleError(res, err); }
    if(!linkmanager) { return res.send(404); }
    linkmanager.rank = linkmanager.rank + 1;
    // var updated = _.merge(linkmanager, req.body);
    linkmanager.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, linkmanager);
    });
  });
};

// Deletes a linkmanager from the DB.
exports.destroy = function(req, res) {
  Linkmanager.findById(req.params.id, function (err, linkmanager) {
    if(err) { return handleError(res, err); }
    if(!linkmanager) { return res.send(404); }
    linkmanager.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}