'use strict';

angular.module('bookmanagerApp')
  .factory('BookmarkService', ['$http', function($http){
    // Service logic
    // ...

    // var bookmarks = [];
    // Public API here
    var service = {
      
      bookmarks : [],

      addNewBookmark : function(newBookmark){
        return $http.post('/api/linkmanagers/', newBookmark).
          success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            service.bookmarks.push(data);

          }).
          error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.

          });
      },

      upRank: function(bookmark) {
        return $http.get('/api/linkmanagers/'+bookmark._id+'/upRank').
          success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            console.log("BookmarkService upRank is - "+angular.fromJson(data));
          }).
          error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.

          });
      },

      getAllBookmarks : function (){
        return $http.get('/api/linkmanagers').
          success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            angular.copy(data.rows, service.bookmarks)

          }).
          error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.

          });
      }
    };


    return service;
  }]);
