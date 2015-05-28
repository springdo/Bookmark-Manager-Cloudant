'use strict';

angular
  .module('bookmanagerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
        // ,
        // resolve: {
        //   postPromise: ['BookmarkService', function(posts){
        //     return BookmarkService.getAllBookmarks();
        //   }]
        // }
      })
      .when('/mybooks', {
        templateUrl: 'app/mybooks/mybooks.html',
        controller: 'MyBooksCtrl'
      })
      .when('/about', {
        templateUrl: 'app/about/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });