'use strict';

/**
 * @ngdoc function
 * @name bookmarkAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bookmarkAppApp
 */
angular.module('bookmanagerApp')
  .controller('MainCtrl', function ($scope, BookmarkService) {

  		BookmarkService.getAllBookmarks();

	    $scope.addBookmark = function (title){
			if(!$scope.title || $scope.title === '' || !$scope.link || $scope.link === ''){
			 return; 
			}
	    	BookmarkService.addNewBookmark({
	    			title: $scope.title,
	    			link: $scope.link,
	    			rank: 0,
	    			tag: $scope.tag});

	    	//reset the title to empty
	    	$scope.title = '';
	    	$scope.link = '';
	    	$scope.tag = '';
	    };


	    $scope.upRank = function (bookmark){
	    	console.log("bookmarks to upRank is - "+bookmark);
	    	BookmarkService.upRank(bookmark);
	    	BookmarkService.getAllBookmarks();
	    };


  		//wont load the bookmarks until BookmarkService loads
  		$scope.bookmarks = BookmarkService.bookmarks;
  });
