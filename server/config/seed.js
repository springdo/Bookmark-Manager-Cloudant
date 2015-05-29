/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';


var Cloudant = require('../components/cloudant');

var cloudant = Cloudant.getCloudant();
var dbname ='migrationtestdb';
var db = cloudant.db.use(dbname);
var params   = {include_docs: true, limit: 10, descending: true};

var seedData = {"docs":[{"title":"Bookmark App","link":"http://bookmanager-app.mybluemix.net","tag":"Bluemix","rank":3},{"title":"Google","link":"http://google.co.uk","tag":"Search","rank":3},{"title":"KPN-SOAP","link":"http://kpndemo.custhelp.com/cgi-bin/kpndemo.cfg/services/soap?wsdl=typed","tag":"KPN","rank":1},{"title":"Mean Tutorial","link":"http://adrianmejia.com/blog/2014/10/03/mean-stack-tutorial-mongodb-expressjs-angularjs-nodejs/#start","tag":"MEAN","rank":0}]};


// WELCOME TO CALL BACK HELL.....
cloudant.db.destroy(dbname, function(err) {
  if (!err){
    console.log('Destroyed database '+dbname);
    cloudant.db.create(dbname, function(err) {
      if (!err){
        console.log('Created database '+dbname);
        db.bulk(seedData, function(err) {
          console.log(err)
          if (!err){
            console.log('Seed database success database');
          }
        });
      }
    });
  }
});
//
//cloudant.db.create(dbname, function(err) {
//  if (!err)
//    console.log('Created database '+dbname);
//});
//
//db.bulk(seedData, function(err) {
//  if (!err)
//    console.log('Seed database success database');
//});




/*
var Thing = require('../api/thing/thing.model');
var Linkmanager = require('../api/linkmanager/linkmanager.model');


Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});


Linkmanager.find({}).remove(function(){
  Linkmanager.create({title: 'post 2', link: 'http://google.com', rank: 8, tag: 'blur'},
      {title: 'Thing', link: 'http://google.com', rank: 8, tag: "blah"},
      {title: 'postything', link: 'http://google.com', rank: 0, tag: "slug"},
      {title: 'other thing', link: 'http://google.com', rank: 23, tag: "blurg"},
      {title: 'post', link: 'http://google.com', rank: 5, tag: "blurg"});
});
*/
//   {"title": "Thing", "link": "http://google.com", "rank": 8, "tag": "blah"},
//    curl --data 'title=curltitle&link=ksadfj&rank=10000&tag=asdjfaksjdasd' http://localhost:9000/api/linkmanagers 