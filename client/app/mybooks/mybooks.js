'use strict';

/**
 * @ngdoc function
 * @name bookmarkAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bookmarkAppApp
 */
angular.module('bookmanagerApp')
  .controller('MyBooksCtrl', function ($scope, BookmarkService) {
    // var bookmarks = [
    //       {title: 'post 2', link: 'http://google.com', rank: 8, tag: 'blur'},
		  // {title: 'Thing', link: 'http://google.com', rank: 8, tag: "blah"},
		  // {title: 'postything', link: 'http://google.com', rank: 0, tag: "slug"},
		  // {title: 'other thing', link: 'http://google.com', rank: 23, tag: "blurg"},
		  // {title: 'post', link: 'http://google.com', rank: 5, tag: "blurg"}];

    console.log("BookmarkService request - " + BookmarkService.getAllBookmarks());

    $scope.upRank = function (bookmark){
        console.log("bookmarks to upRank is - "+bookmark);
        BookmarkService.upRank(bookmark);
        BookmarkService.getAllBookmarks();
    };

    var description = true;
    $scope.toggleDiv = function(){
        console.log("toggleDiv")
    	if ($scope.description = false){
    		$scope.description = true
    	} else {
    		$scope.description = false    		
    	}
    	$scope.getIcon();
    }

    var getIcon = function (){
    	if (description){
    		return ' glyphicon-chevron-down'
    	} else {
    		return ' glyphicon-chevron-up';
    	}
    }

    var getDescription = function(){
        console.log("getDescription" + description)        
        $scope.description= description;
    };

    $scope.getDescription = getDescription;
    $scope.description = description;
    $scope.getIcon = getIcon;
    // $scope.toggleDiv = toggleDiv;
    // bind scope's bookmarks to the 
    $scope.bookmarks = BookmarkService.bookmarks;

  });
