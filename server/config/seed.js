/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

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

//   {"title": "Thing", "link": "http://google.com", "rank": 8, "tag": "blah"},
//    curl --data 'title=curltitle&link=ksadfj&rank=10000&tag=asdjfaksjdasd' http://localhost:9000/api/linkmanagers 