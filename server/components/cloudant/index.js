
'use strict';

var Cloudant = require('Cloudant');
var config = require('../../config/environment');
var when = require('when');


var Connected = false;
var cloudantConn;
var i=1;

var d = when.defer();

var makeConnect = function () {

    var tempPromise = when.defer();

    console.log("entered makeConnect")
    // Create a promise that resolves when the DB connection is ready.
    Cloudant({account:config.cloudant.username, password:config.cloudant.password}, function(err, cloudant) {
        if (err) {
            Connected = false;
             d.reject(err);
        }
        else{
            console.log("Cloudant obj received =  "+ JSON.stringify(cloudant))
            Connected = true;
            cloudantConn = cloudant;
             d.resolve(cloudant);
        }
    });
    return tempPromise.promise;

};
var getCloudant = function () {
    console.info(i);
    i++;

    if(Connected){
        console.log("Connected true")
        return cloudantConn;
    }
    else {
        console.log("Connected FALSE")
        // Ensure the connection is ready by waiting for the promise to resolve.
        makeConnect()
            .then(function (cloudant) {
                return (cloudant);

            })
            .catch(function (err) {
                // generic erro catcher
                console.log(err);
            });
    };
    return d.promise;
};

exports.getCloudant = getCloudant;

//
//
//var Cloudant = require('Cloudant');
//var config = require('../../config/environment');
//var nano = require('nano')(config.cloudant.url);
//
//var cloudantLoggedIn;
//module.exports = function (callback) {
//    Cloudant({account:config.cloudant.username, password:config.cloudant.password}, function(err, cloudant) {
//    console.log('Connected to Cloudant')
//    //cloudant.db.list(function(err, all_dbs) {
//    //    console.log('All my databases: %s', all_dbs.join(', '))
//    //}
//     cloudantLoggedIn = cloudant;
//     callback();
//})}

