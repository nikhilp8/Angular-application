'use strict';

eventsApp.controller('EventController', function EventController($scope, EditData) {
	$scope.sortOrder= '-upVote';

	$scope.Event = EditData.event;
	$scope.upVote = function(x) {
		x.upVote++;
	}
	$scope.downVote = function(x) {
		x.upVote--;
	}

});