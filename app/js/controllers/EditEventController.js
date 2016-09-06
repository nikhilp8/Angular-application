'use strict';

eventsApp.controller('EditEventController', function EditEventController($scope) {
	$scope.cancel = function(){
		window.location = '/EventDetails.html';
	}
	$scope.save = function(event, newEventForm){
		if(newEventform.$valid)
		{
			window.alert(event.name+' new event saved');
		}
	}
});