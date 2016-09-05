'use strict';

eventsApp.filter('durationFilter', function(){
	return function(duration){
		switch(duration) {
			case 1:
				return 'Half hour';
			case 2:
				return 'A day';
			case 3:
				return '2 days';
			case 4:
				return '3 days';
		}
	}
})