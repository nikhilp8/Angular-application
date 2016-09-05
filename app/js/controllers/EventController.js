'use strict';

eventsApp.controller('EventController', function EventController($scope) {
	$scope.Event = {
			name: 'AngularJS',
			date: 'Sept-4-2016',
			description: 'Welcome to AngularJS Event',
			src: 'img/angularjs-logo.png',
			location: {
				address: '4724 N 100th st',
				city: 'wauwatosa',
				state: 'WI'
			},
			Sessions: [
			{
				course: 'Angular 1.5',
				author: 'Joe Eames',
				duration: '5 hr'
			},
			{	
				course: 'Bootstrap 3',
				author: 'Shawn Wilderman',
				duration: '2 hr'

			},
			{	
				course: 'Advanced JS',
				author: 'Scot allen',
				duration: '4 hr'

			}]
			}
	});