'use strict';

eventsApp.controller('EditEventController', function EditEventController($scope) {
	$scope.cancel = function(){
		window.location = '/EventDetails.html';
	}
});