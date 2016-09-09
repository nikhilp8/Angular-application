'use strict';

eventsApp.controller('EventController', function EventController($scope, EventData) {
	$scope.sortOrder= '-upVote';

	$scope.Event = EventData.event;
	$scope.upVote = function(x) {
		x.upVote++;
	}
	$scope.downVote = function(x) {
		x.upVote--;
	}
	
});