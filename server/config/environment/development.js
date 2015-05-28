'use strict';

// Development specific configuration
// ==================================

var config = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/bookmanager-dev'
  },

  seedDB: true
};

if (process.env.VCAP_SERVICES) {
  var env = JSON.parse(process.env.VCAP_SERVICES);
  config.cloudant = env['cloudantNoSQLDB'][0].credentials;
  //config.cloudant = {
  //    "username": "e2b9cf0e-2557-4a9d-b4d0-4e8f4b707074-bluemix",
  //    "password": "44fb8f71f35272ac5261999e98ed5346f50af2400bea3c10c231bf2ea31a8298",
  //    "host": "e2b9cf0e-2557-4a9d-b4d0-4e8f4b707074-bluemix.cloudant.com",
  //    "port": 443,
  //    "url": "https://e2b9cf0e-2557-4a9d-b4d0-4e8f4b707074-bluemix:44fb8f71f35272ac5261999e98ed5346f50af2400bea3c10c231bf2ea31a8298@e2b9cf0e-2557-4a9d-b4d0-4e8f4b707074-bluemix.cloudant.com"
  //}

}

module.exports =config;
