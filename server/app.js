/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
//var mongoose = require('mongoose');
var config = require('./config/environment');
var cloudant = require('./components/cloudant');

cloudant.getCloudant().then(function(db){
    // Populate DB with sample data
    if(config.seedDB) { require('./config/seed'); }

    // Setup server
    var app = express();
    var server = require('http').createServer(app);
    require('./config/express')(app);
    require('./routes')(app);

// Start server
    server.listen(config.port, config.ip, function () {
        console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
    });

// Expose app
    exports = module.exports = app;
});
// Connect to database
//if (config.mongo.url && config.mongo.url !== '') {
//    config.mongo.uri = config.mongo.url;
//}
//mongoose.connect(config.mongo.uri, config.mongo.options);

//var nano = require('nano')(config.cloudant.url);
//var dbname ='migrationtestdb';
//var db = nano.db.use(dbname);

//cloudant(function(){
//    // Setup server
//    var app = express();
//    var server = require('http').createServer(app);
//    require('./config/express')(app);
//    require('./routes')(app);
//
//// Start server
//    server.listen(config.port, config.ip, function () {
//        console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
//    });
//
//// Expose app
//    exports = module.exports = app;
//})

// Populate DB with sample data
//if(config.seedDB) { require('./config/seed'); }
//
//    // Setup server
//    var app = express();
//    var server = require('http').createServer(app);
//    require('./config/express')(app);
//    require('./routes')(app);
//
//// Start server
//    server.listen(config.port, config.ip, function () {
//        console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
//    });
//
//// Expose app
//    exports = module.exports = app;