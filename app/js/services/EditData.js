'use strict';

eventsApp.factory('EventData', function(){
	return {
		event : {
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
				duration: 1,
				upVote: 0
			},
			{	
				course: 'Bootstrap 3',
				author: 'Shawn Wilderman',
				duration: 2,
				upVote: 0

			},
			{	
				course: 'Advanced JS',
				author: 'Scot allen',
				duration: 4,
				upVote: 0

			}]
			}
	}
})